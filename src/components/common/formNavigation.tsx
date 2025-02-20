import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "../ui/button";
import { PDFTemplate } from "./pdfTemplate";
import { FormSchema } from "@/schema/formValidationSchema";

interface FormNavigationProps {
  onPrev: () => void;
  isLastStep: boolean;
  formData: FormSchema;
}

export const FormNavigation = ({
  onPrev,
  isLastStep,
  formData,
}: FormNavigationProps) => {
  return (
    <div
      className={`${
        isLastStep ? "justify-center" : "justify-end"
      } flex gap-2 p-3`}
    >
      <Button
        type="button"
        className="min-w-20"
        variant="outline"
        onClick={onPrev}
      >
        {isLastStep ? "Edit More" : "Prev"}
      </Button>
      {isLastStep ? (
        <PDFDownloadLink
          document={<PDFTemplate data={formData} />}
          fileName={`${formData.name}.pdf`}
        >
          {({ loading }) => (
            <Button type="button">
              {loading ? "Generating..." : "Download CV"}
            </Button>
          )}
        </PDFDownloadLink>
      ) : (
        <Button type="submit" className="min-w-20">
          Next
        </Button>
      )}
    </div>
  );
};
