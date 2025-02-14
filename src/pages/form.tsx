import { Button } from "@/components/ui/button";

export const Form = ({
  setIsFormPage,
}: {
  setIsFormPage: (bool: boolean) => void;
}) => {
  const handlePage = () => {
    setIsFormPage(false);
  };

  return (
    <div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={handlePage}>
          Prev
        </Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};
