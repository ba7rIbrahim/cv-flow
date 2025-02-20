import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Controller, Path } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@/components/common/errorMessage";
import { FormSchema } from "@/schema/formValidationSchema";

export function DatePickerWithRange({
  name,
  error,
  className,
}: {
  name: Path<FormSchema>;
  error?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Controller
      name={name}
      defaultValue={{ from: undefined, to: undefined }}
      render={({ field }) => (
        <div className={cn("grid gap-2 mb-2", className)}>
          <Label id="duration">Duration</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="duration"
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !field.value?.from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="tex-primary" />
                {field.value?.from ? (
                  field.value?.to ? (
                    <>
                      {format(field.value.from, "LLL y")} -{" "}
                      {format(field.value.to, "LLL y")}
                    </>
                  ) : (
                    format(field.value.from, "LLL y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={field.value?.from}
                selected={field.value}
                onSelect={field.onChange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <ErrorMessage error={error || ""} />
        </div>
      )}
    />
  );
}
