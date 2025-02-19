import React from "react";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  setInputColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ColorPicker = ({
  value,
  onChange,
  setInputColor,
}: ColorPickerProps) => {
  const handleColorChange = (color: string) => {
    onChange(color);
    setInputColor(color);
  };
  return (
    <HexColorPicker
      color={value}
      onChange={(color) => {
        handleColorChange(color);
      }}
    />
  );
};
