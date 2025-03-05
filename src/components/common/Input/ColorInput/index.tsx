import { ComponentProps, ReactNode, useEffect, useState } from "react";
import { colorPickerStyle, containerStyle, hexInputStyle } from "./colorInput.css.ts";
import { Input } from "@components/common/Input";

interface ColorInputProps extends ComponentProps<"input"> {
  label?: ReactNode;
}

const ColorInput = ({ label, value, ...props }: ColorInputProps) => {
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setColor(String(value));
  }, [value]);

  return (
    <div className={containerStyle}>
      {label && <label>{label}</label>}
      <div className={colorPickerStyle}>
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
          className={colorPickerStyle}
          {...props}
        />
        <Input type="text" value={color} onChange={e => setColor(e.target.value)} className={hexInputStyle} />
      </div>
    </div>
  );
};

export default ColorInput;
