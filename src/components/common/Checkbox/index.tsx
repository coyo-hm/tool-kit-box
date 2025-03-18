import { ComponentProps, ReactNode } from "react";
import { containerStyle, iconStyle, inputStyle, labelStyle } from "./checkbox.css.ts";

interface CheckBoxProps extends Omit<ComponentProps<"input">, "size"> {
  id: string;
  label?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const Checkbox = ({ label, id, size = "md", className = "", ...props }: CheckBoxProps) => {
  return (
    <label htmlFor={id} className={`${containerStyle} ${className}`}>
      <input {...props} id={id} type="checkbox" readOnly className={inputStyle} />
      <span className={iconStyle({ size })} />
      {label && <span className={labelStyle({ size })}>{label}</span>}
    </label>
  );
};
export default Checkbox;
