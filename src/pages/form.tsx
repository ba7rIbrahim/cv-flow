import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormNavigation } from "@/components/common/formNavigation";
import { PersonalInfo } from "@/components/form-steps/personal-info/personalInfo";
import { useMultiSteps } from "@/hooks/useMultiSteps";
import { formSchema, FormSchema } from "@/schema/formValidationSchema";
import { Experiences } from "@/components/form-steps/experiences";
import { Projects } from "@/components/form-steps/projects";
import { Educations } from "@/components/form-steps/educations";
import { Miscellaneous } from "@/components/common/miscellaneous";
import { Colors } from "@/components/form-steps/colors";
import { Finish } from "@/components/form-steps/finish";

const INITIAL_VALUE = {
  experiences: [{}],
  projects: [{}],
  educations: [{}],
};

export const Form = ({
  setIsFormPage,
}: {
  setIsFormPage: (bool: boolean) => void;
}) => {
  const methods = useForm<FormSchema>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: INITIAL_VALUE,
  });

  const { handleSubmit, control, watch } = methods;

  const {
    nextStep,
    previousStep,
    isFirstStep,
    isLastStep,
    currentStep,
    steps,
  } = useMultiSteps([
    <PersonalInfo />,
    <Experiences />,
    <Projects />,
    <Educations />,
    <Miscellaneous />,
    <Colors />,
    <Finish />,
  ]);

  const onSubmitForm: SubmitHandler<FormSchema> = () => {
    if (!isLastStep) nextStep();
  };

  return (
    <>
      <h1 className="text-2xl mb-6">Enter Your Information</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="bg-white text-left rounded-md"
        >
          {steps[currentStep]}

          <FormNavigation
            isLastStep={isLastStep}
            onPrev={() => (isFirstStep ? setIsFormPage(false) : previousStep())}
            formData={watch()}
          />
        </form>
      </FormProvider>
      <DevTool control={control} />
    </>
  );
};
