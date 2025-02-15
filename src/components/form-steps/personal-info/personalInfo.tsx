import { FormWrapper } from "@/layouts/formWrapper";
import { FormSchema } from "@/schema/formValidationSchema";
import { FieldErrors, useFormContext, UseFormRegister } from "react-hook-form";
import { Field } from "../../common/field";
import { PersonalImage } from "./components/personalImage";
import { Skills } from "@/components/form-steps/personal-info/components/skills";

export const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormSchema>();
  return (
    <FormWrapper title="Personal Info">
      <div className="">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <PersonalFields register={register} errors={errors} />
        </div>
        <div className=" ">
          <Skills error={errors.skills?.message as string} />
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
      error={errors.name?.message as string}
    />
    <Field
      name="email"
      title="Email"
      placeholder="enter your email"
      register={register}
      error={errors.email?.message as string}
    />
    <Field
      name="mobile"
      title="Mobile"
      placeholder="enter your mobile"
      register={register}
      error={errors.mobile?.message as string}
    />
    <Field
      name="country"
      title="Country"
      placeholder="enter your country"
      register={register}
      error={errors.country?.message as string}
    />
    <Field
      name="city"
      title="City"
      placeholder="enter your city"
      register={register}
      error={errors.city?.message as string}
    />
    <Field
      name="street"
      title="Street"
      placeholder="enter your street"
      register={register}
      error={errors.street?.message as string}
    />
    <Field
      name="linkedin"
      title="Linkedin"
      placeholder="enter your linkedin"
      register={register}
      error={errors.linkedin?.message as string}
    />
    <Field
      name="github"
      title="Github"
      placeholder="enter your github"
      register={register}
      error={errors.github?.message as string}
    />
    <Field
      name="position"
      title="Position"
      placeholder="enter your position"
      register={register}
      error={errors.position?.message as string}
    />
  </>
);
