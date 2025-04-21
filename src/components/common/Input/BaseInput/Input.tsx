import { ComponentProps, memo, ReactNode } from "react";
import inputStyle, { containerStyle } from "./input.css";

interface InputProps extends ComponentProps<"input"> {
  styleSize?: "sm" | "md" | "lg" | "xl";
  label?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  width?: "wFull" | "wAuto";
  containerClassName?: string;
}

const Input = memo(
  ({
    className = "",
    styleSize = "md",
    label,
    id,
    leftIcon,
    rightIcon,
    width,
    containerClassName,
    ...props
  }: InputProps) => (
    <div className={`${containerStyle({ width })} ${containerClassName}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {leftIcon}
      <input {...props} className={`${inputStyle({ size: styleSize })} ${className}`} id={id} />
      {rightIcon}
    </div>
  ),
);

Input.displayName = "Input";

export default Input;
