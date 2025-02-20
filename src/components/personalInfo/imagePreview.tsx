import { memo } from "react";

interface ImagePreviewProps {
  src: string;
  onPreview: () => void;
  onRemove: () => void;
}

export const ImagePreview = memo(({ src, onPreview, onRemove }: ImagePreviewProps) => (
  <div className="group relative w-full h-full rounded-lg overflow-hidden">
    <img
      src={src}
      className="w-full h-full object-cover cursor-pointer"
      alt="Profile image preview"
    />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center gap-1">
      <button
        type="button"
        onClick={onPreview}
        className="text-white hover:text-primary hover:scale-110 duration-200"
      >
        👁️
      </button>
      <button
        type="button"
        onClick={onRemove}
        className="text-white hover:text-primary hover:scale-110 duration-200"
      >
        🗑️
      </button>
    </div>
  </div>
));