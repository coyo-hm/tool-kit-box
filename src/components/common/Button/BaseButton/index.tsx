import { ComponentProps, memo } from "react";
import { buttonStyle } from "./button.css";

interface ButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "outline";
}

const Button = memo(({ size = "md", color = "primary", className = "", type = "button", ...props }: ButtonProps) => (
  <button className={`${buttonStyle({ size, color })} ${className}`} type={type} {...props} />
));

Button.displayName = "Button";

export default Button;
