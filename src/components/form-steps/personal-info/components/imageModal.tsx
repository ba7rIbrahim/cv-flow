interface ImageModalProps {
  src: string;
  onClose: () => void;
}

export const ImageModal = ({ src, onClose }: ImageModalProps) => (
  <div
    className="fixed inset-0 flex justify-center items-center bg-black/80 z-50"
    onClick={onClose}
  >
    <div
      className="relative bg-white mx-4 p-4 rounded-lg shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={src}
        alt="Preview Image"
        className="max-w-full max-h-[80vh] object-contain"
      />
      <button
        type="button"
        className="absolute top-4 right-4 text-white bg-black/25 hover:bg-black/45 p-1 rounded-full duration-300"
        onClick={onClose}
      >
        ❌
      </button>
    </div>
  </div>
);
