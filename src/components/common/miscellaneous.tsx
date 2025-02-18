import { FormWrapper } from "@/layouts/formWrapper";
import { GenericTag } from "./genericTag";

export const Miscellaneous = () => {
  return (
    <FormWrapper title="Miscellaneous">
      <div className="grid gird-cols-1 gap-6">
        <GenericTag name="languages" label="Languages" />
        <GenericTag name="achievements" label="Achievements" />
        <GenericTag name="certificates" label="Certificates" />
      </div>
    </FormWrapper>
  );
};
