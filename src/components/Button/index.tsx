import { ComponentProps } from "react";
import { buttonStyle } from "./button.css.ts";

interface ButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "outline";
}

const Button = ({ size = "md", color = "primary", ...props }: ButtonProps) => (
  <button className={buttonStyle({ size, color })} {...props} />
);
export default Button;
