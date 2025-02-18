import { Button } from "@/components/ui/button";

export const MoreExperiencesBtn = ({
  append,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  append: (value: any) => void;
}) => {
  const handleAddExperiences = () => {
    append({
      organization: "",
      role: "",
      date: { from: new Date(), to: new Date() },
      description: "",
    });
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className=""
      onClick={handleAddExperiences}
    >
      Add more experiences
    </Button>
  );
};
