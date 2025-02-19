import { useFormContext } from "react-hook-form";

interface ColorFieldProps {
  inputColor: string;
  setInputColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ColorField = ({ inputColor, setInputColor }: ColorFieldProps) => {
  const { setValue } = useFormContext();

  const handleInputChange = (e: React.FormEvent<HTMLSpanElement>) => {
    const newColor = e.currentTarget.innerText.trim();
    if (/^#([0-9A-F]{3}){1,2}$/i.test(newColor)) {
      setValue("color", newColor);
      setInputColor("");
    }
  };

  return (
    <span
      className="border rounded p-2 mt-4 mb-1 text-sm font-semibold min-w-40 text-center cursor-pointer"
      contentEditable
      suppressContentEditableWarning
      onInput={handleInputChange}
    >
      {inputColor}
    </span>
  );
};
