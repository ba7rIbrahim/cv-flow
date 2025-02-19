import { FormWrapper } from "@/layouts/formWrapper";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { ColorField } from "../colorsTemplate/colorField";
import { ColorPicker } from "../colorsTemplate/colorPicker";

export const Colors = () => {
  const [inputColor, setInputColor] = useState("#1890ff");

  return (
    <FormWrapper title="Color Template">
      <div className="flex flex-col justify-center items-center mt-4">
        <h3 className="text-xl mb-5">Choose CV Color</h3>
        <Controller
          name="color"
          defaultValue={inputColor}
          render={({ field }) => (
            <>
              <ColorPicker
                value={field.value}
                onChange={field.onChange}
                setInputColor={setInputColor}
              />
              <ColorField
                inputColor={inputColor}
                setInputColor={setInputColor}
              />
            </>
          )}
        />
        <div className="text-[#b1b0b1] text-sm font-semibold">HEX</div>
      </div>
    </FormWrapper>
  );
};
