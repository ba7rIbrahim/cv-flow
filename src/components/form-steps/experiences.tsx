import { GenericFields } from "@/components/common/genericFields";

export const Experiences = () => (
  <GenericFields
    name="experiences"
    title="experiences"
    fieldsConfig={[
      { key: "organization", label: "Organization" },
      { key: "role", label: "Role" },
      { key: "duration", label: "Duration", type: "dateRange" },
      { key: "description", label: "Description" },
    ]}
  />
);
