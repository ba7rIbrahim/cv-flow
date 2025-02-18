import { FieldErrors, useFormContext, UseFormRegister } from "react-hook-form";
import { FormWrapper } from "@/layouts/formWrapper";
import { FormSchema } from "@/schema/formValidationSchema";
import { Field } from "../../common/field";
import { PersonalImage } from "./components/personalImage";
import { GenericTag } from "@/components/common/genericTag";

export const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormSchema>();
  return (
    <FormWrapper title="Personal Info">
      <div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <PersonalFields register={register} errors={errors} />
        </div>
        <div>
          <GenericTag
            name="skills"
            label="Skills"
            error={errors.skills?.message || ""}
          />
          <PersonalImage />
        </div>
      </div>
    </FormWrapper>
  );
};

interface PersonalFieldsProps {
  register: UseFormRegister<FormSchema>;
  errors: FieldErrors<FormSchema>;
}

const PersonalFields = ({ register, errors }: PersonalFieldsProps) => (
  <>
    <Field
      name="name"
      title="Name"
      placeholder="enter your name"
      register={register}
      error={errors.name?.message || ""}
    />
    <Field
      name="email"
      title="Email"
      placeholder="enter your email"
      register={register}
      error={errors.email?.message || ""}
    />
    <Field
      name="mobile"
      title="Mobile"
      placeholder="enter your mobile"
      register={register}
      error={errors.mobile?.message || ""}
    />
    <Field
      name="country"
      title="Country"
      placeholder="enter your country"
      register={register}
      error={errors.country?.message || ""}
    />
    <Field
      name="city"
      title="City"
      placeholder="enter your city"
      register={register}
      error={errors.city?.message || ""}
    />
    <Field
      name="street"
      title="Street"
      placeholder="enter your street"
      register={register}
      error={errors.street?.message || ""}
    />
    <Field
      name="linkedin"
      title="Linkedin"
      placeholder="enter your linkedin"
      register={register}
      error={errors.linkedin?.message || ""}
    />
    <Field
      name="github"
      title="Github"
      placeholder="enter your github"
      register={register}
      error={errors.github?.message || ""}
    />
    <Field
      name="position"
      title="Position"
      placeholder="enter your position"
      register={register}
      error={errors.position?.message || ""}
    />
  </>
);
