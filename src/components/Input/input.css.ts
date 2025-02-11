import { recipe } from "@vanilla-extract/recipes";
import vars from "@styles/vars.css.ts";

const inputStyle = recipe({
  base: {
    borderRadius: vars.borderRadius,
    background: "white",
    color: "black",
    selectors: {
      "&:focus": {
        outlineColor: vars.colors.primaryYellow,
      },
    },
  },
  variants: {
    size: {
      sm: { fontSize: "1rem", padding: "3px 0.5rem" },
      md: { fontSize: "1.5rem", padding: "5px 0.5rem" },
      lg: {
        fontWeight: 700,
        fontSize: "2rem",
        padding: "5px 0.5rem",
      },
      xl: {
        fontWeight: 900,
        fontSize: "2.5rem",
        padding: "0.5rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export default inputStyle;
