import { ComponentProps } from "react";
import inputStyle from "./input.css.ts";

interface InputProps extends ComponentProps<"input"> {
  styleSize?: "sm" | "md" | "lg" | "xl";
}

const Input = ({ className = "", styleSize = "md", ...props }: InputProps) => (
  <input {...props} className={`${inputStyle({ size: styleSize })} ${className}`} />
);
export default Input;
