import { memo, useState } from "react";
import { useFieldArray } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ErrorMessage } from "./errorMessage";

interface GenericTagProps {
  name: string;
  label: string;
  error?: string;
}

interface TagField {
  value: string;
}

interface TagFormValues {
  [key: string]: TagField[];
}

export const GenericTag = ({ name, label, error }: GenericTagProps) => {
  const { fields, append, remove } = useFieldArray<TagFormValues>({ name });

  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = () => {
    if (inputValue.trim()) {
      append({ value: inputValue.trim() });
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex gap-2">
        <Input
          id={name}
          placeholder={`enter your ${label.toLowerCase()}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          error={error}
        />
        <Button
          type="button"
          variant="outline"
          className="h-[40px] text-lg"
          onClick={handleAddItem}
          disabled={inputValue === "" ? true : false}
        >
          +
        </Button>
      </div>

      {fields.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1 ml-2">
          {fields.map((field, index) => (
            <TagItem
              key={field.id}
              value={field.value}
              onRemove={() => remove(index)}
            />
          ))}
        </div>
      )}
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

interface TagItemProps {
  value: string;
  onRemove: () => void;
}

const TagItem = memo(({ value, onRemove }: TagItemProps) => (
  <div className="bg-primary/20 text-sm font-semibold border rounded-[2px] border-primary flex items-center justify-between gap-1 pl-1 pr-0.5">
    <span className="text-primary">{value}</span>
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={onRemove}
      className="text-red-500 hover:bg-transparent hover:scale-110 max-w-fit h-fit text-xs duration-300"
      aria-label="Remove Item"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2873b7"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-x"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </Button>
  </div>
));
