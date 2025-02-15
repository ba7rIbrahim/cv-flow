import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ErrorMessage } from "./errorMessage";

type FieldProps<TFieldValue extends FieldValues> = {
  name: Path<TFieldValue>;
  title: string;
  type?: "text" | "email" | "number";
  placeholder?: string;
  register: UseFormRegister<TFieldValue>;
  error: string;
  className?: string;
};

export const Field = <TFieldValue extends FieldValues>({
  name,
  title,
  type = "text",
  placeholder = "enter your info",
  register,
  error,
  className,
}: FieldProps<TFieldValue>) => {
  return (
    <div className={`grid w-full items-center gap-1 mb-2 ${className}`}>
      <Label htmlFor={name}>{title}</Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
        error={error}
      />
      <ErrorMessage error={error} />
    </div>
  );
};
