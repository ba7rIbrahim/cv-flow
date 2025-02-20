import { FormWrapper } from "@/layouts/formWrapper";
import { Button } from "../ui/button";
import { Field } from "./field";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormSchema } from "@/schema/formValidationSchema";
import { DatePickerWithRange } from "./datePickerWithRange";
import { MoreExperiencesBtn } from "./moreExperiencesBtn";
import { memo } from "react";

interface GenericFieldsProps {
  name: keyof FormSchema;
  title: string;
  fieldsConfig: { key: string; label: string; type?: "text" | "dateRange" }[];
}

export const GenericFields = memo(
  ({ name, title, fieldsConfig }: GenericFieldsProps) => {
    const { fields, append, remove } = useFieldArray({
      name,
    });
    const {
      register,
      formState: { errors },
    } = useFormContext<FormSchema>();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fieldErrors = errors[name] as unknown as Array<Record<string, any>> | undefined;


    return (
      <FormWrapper title={title}>
        <div className="">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="last-of-type:mb-0 border-b last-of-type:border-none mt-3 first-of-type:mt-0"
            >
              {fields.length > 1 && (
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
              <div
                className={`${
                  fieldsConfig.length <= 3 ? "md:grid-cols-4" : ""
                } w-full grid grid-cols-1 md:grid-cols-3 gap-x-4`}
              >
                {fieldsConfig.map(({ key, label, type }) =>
                  type === "dateRange" ? (
                    <DatePickerWithRange
                      key={key}
                      name={`${name}.${index}.${key}` as keyof FormSchema}
                      error={
                        (fieldErrors?.[index]?.[key]?.message as string) || ""
                      }
                    />
                  ) : (
                    <Field
                      key={key}
                      name={`${name}.${index}.${key}` as keyof FormSchema}
                      title={label}
                      placeholder={`enter your ${label.toLowerCase()}`}
                      register={register}
                      error={
                        (fieldErrors?.[index]?.[key]?.message as string) || ""
                      }
                      className={`${
                        fieldsConfig.length <= 3
                          ? "md:col-span-2 last-of-type:md:col-span-4"
                          : ""
                      } last-of-type:md:col-span-3`}
                    />
                  )
                )}
              </div>
            </div>
          ))}
          <MoreExperiencesBtn append={append} />
        </div>
      </FormWrapper>
    );
  }
);
