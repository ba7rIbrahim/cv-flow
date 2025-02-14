import { Button } from "../ui/button";

interface FormNavigationProps {
  onPrev: () => void;
  isLastStep: boolean;
}

export const FormNavigation = ({ onPrev, isLastStep }: FormNavigationProps) => {
  return (
    <div className="flex gap-2 justify-end p-3">
      <Button type="button" size="lg" variant="outline" onClick={onPrev}>
        Prev
      </Button>
      <Button type="submit" size="lg">
        {isLastStep ? "Finish" : "Next"}
      </Button>
    </div>
  );
};
