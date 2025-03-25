import { ComponentProps, memo } from "react";
import { buttonStyle } from "./button.css.ts";

interface ButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "outline";
}

const Button = memo(({ size = "md", color = "primary", className = "", ...props }: ButtonProps) => (
  <button className={`${buttonStyle({ size, color })} ${className}`} {...props} />
));

Button.displayName = "Button";

export default Button;
