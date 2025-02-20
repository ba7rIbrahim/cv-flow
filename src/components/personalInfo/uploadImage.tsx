import { ErrorMessage } from "@/components/common/errorMessage";
import { useImageHandler } from "@/hooks/useImageHandler";

interface UploadImageProps {
  error: string;
  onChange: () => void;
}

export const UploadImage = ({ error, onChange }: UploadImageProps) => {
  const { handleImageChange } = useImageHandler();
  return (
    <>
      <label className="flex items-center justify-center h-full border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors">
        <span className="text-primary font-semibold ">Upload Image</span>
        <input
          type="file"
          className="hidden"
          onChange={(e) => handleImageChange(e, onChange)}
        />
      </label>
      {error && <ErrorMessage error={error} />}
    </>
  );
};
