import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormNavigation } from "@/components/common/formNavigation";
import { PersonalInfo } from "@/components/form-steps/personalInfo";
import { useMultiSteps } from "@/hooks/useMultiSteps";
import { formSchema, FormSchema } from "@/schema/formSchema";

export const Form = ({
  setIsFormPage,
}: {
  setIsFormPage: (bool: boolean) => void;
}) => {
  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit, control } = methods;

  const {
    nextStep,
    previousStep,
    isFirstStep,
    isLastStep,
    currentStep,
    steps,
  } = useMultiSteps([<PersonalInfo />]);

  const onSubmitForm: SubmitHandler<FormSchema> = (data) => {
    if (!isLastStep) {
      nextStep();
      console.log(data);
    } else {
      console.log("Final form data", data);
    }
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
          />
        </form>
      </FormProvider>
      <DevTool control={control} />
    </>
  );
};
