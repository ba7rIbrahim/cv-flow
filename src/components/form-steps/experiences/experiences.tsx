import { memo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Field } from "@/components/common/field";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/layouts/formWrapper";
import { FormSchema } from "@/schema/formValidationSchema";
import { DatePickerWithRange } from "./components/datePickerWithRange";
import { MoreExperiencesBtn } from "./components/moreExperiencesBtn";

export const Experiences = () => {
  const { fields, append, remove } = useFieldArray({
    name: "experiences",
  });

  return (
    <FormWrapper title="Experiences">
      <div>
        {fields.map((field, index) => (
          <ExperiencesFields
            key={field.id}
            fieldsLength={fields.length}
            remove={remove}
            index={index}
          />
        ))}

        <MoreExperiencesBtn append={append} />
      </div>
    </FormWrapper>
  );
};

interface ExperiencesFieldsProps {
  fieldsLength: number;
  remove: (index: number | number[]) => void;
  index: number;
}

const ExperiencesFields = memo(
  ({ fieldsLength, remove, index }: ExperiencesFieldsProps) => {
    const {
      register,
      formState: { errors },
    } = useFormContext<FormSchema>();

    return (
      <div className="last-of-type:mb-0 border-b last-of-type:border-none mt-3 first-of-type:mt-0">
        {fieldsLength > 1 && (
          <Button
            variant="destructive"
            type="button"
            size="sm"
            className="flex justify-self-end text-xs"
            onClick={() => remove(index)}
          >
            close
          </Button>
        )}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <Field
            name={`experiences.${index}.organization`}
            title="Organization"
            placeholder="enter your organization"
            register={register}
            error={errors.experiences?.[index]?.organization?.message || ""}
          />
          <Field
            name={`experiences.${index}.role`}
            title="Role"
            placeholder="enter your role"
            register={register}
            error={errors.experiences?.[index]?.role?.message || ""}
          />
          <DatePickerWithRange
            name={`experiences.${index}.duration`}
            error={errors.experiences?.[index]?.duration?.message || ""}
          />
          <Field
            name={`experiences.${index}.description`}
            title="Description"
            placeholder="enter your description"
            register={register}
            error={errors.experiences?.[index]?.description?.message || ""}
            className="md:col-span-3"
          />
        </div>
      </div>
    );
  }
);
