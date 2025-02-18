import { GenericFields } from "@/components/common/genericFields";

export const Projects = () => (
  <GenericFields
    name="projects"
    title="Projects"
    fieldsConfig={[
      { key: "title", label: "Title" },
      { key: "link", label: "Link" },
      { key: "description", label: "Description" },
    ]}
  />
);
