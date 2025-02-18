import { GenericFields } from "@/components/common/genericFields";

export const Educations = () => (
  <GenericFields
    name="educations"
    title="Educations"
    fieldsConfig={[
      { key: "college", label: "College" },
      { key: "year", label: "Year", type: "dateRange" },
      { key: "qualification", label: "Qualification" },
      { key: "description", label: "Description" },
    ]}
  />
);