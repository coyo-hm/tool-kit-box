import { style } from "@vanilla-extract/css";
import vars from "@styles/vars.css.ts";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  display: "flex",
  gap: 10,
  cursor: "pointer",
  alignItems: "center",
});

export const inputStyle = style({
  display: "none",
});

export const iconStyle = recipe({
  base: {
    display: "inline-block",
    border: `2px solid white`,
    borderRadius: 4,
    backgroundColor: "transparent",
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    selectors: {
      [`input:checked + &`]: {
        borderWidth: 4,
        borderColor: vars.colors.primaryGreen,
        background: `${vars.colors.primaryGreen} url('src/assets/checkmark.svg') no-repeat`,
      },
    },
  },
  variants: {
    size: {
      sm: {},
      md: { width: "1.3rem", height: "1.3rem" },
      lg: { width: "1.7rem", height: "1.7rem" },
      xl: {},
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const labelStyle = recipe({
  base: {
    cursor: "pointer",
  },
  variants: {
    size: {
      sm: {},
      md: { fontSize: "1rem" },
      lg: { fontSize: "1.5rem" },
      xl: {},
    },
  },
  defaultVariants: {
    size: "md",
  },
});
