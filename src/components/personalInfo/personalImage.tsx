import { useState } from "react";
import { Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { ImagePreview } from "./imagePreview";
import { UploadImage } from "./uploadImage";
import { ImageModal } from "./imageModal";

export const PersonalImage = () => {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);

  return (
    <Controller
      name="personalImage"
      render={({ field, fieldState }) => (
        <div className="space-y-2 mt-6">
          <Label htmlFor="personalImage">Personal Image</Label>
          <div className="relative w-32 h-32">
            {field.value ? (
              <ImagePreview
                src={field.value}
                onPreview={() => setPreviewOpen(true)}
                onRemove={() => field.onChange(null)}
              />
            ) : (
              <UploadImage
                onChange={field.onChange}
                error={fieldState.error?.message || ""}
              />
            )}
          </div>

          {previewOpen && (
            <ImageModal
              src={field.value}
              onClose={() => setPreviewOpen(false)}
            />
          )}
        </div>
      )}
    />
  );
};
