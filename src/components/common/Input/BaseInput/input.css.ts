import { recipe } from "@vanilla-extract/recipes";
import vars from "@/styles/vars.css";

export const containerStyle = recipe({
  base: {
    // flex: "1 1 0",
    // width: "100%",
    display: "flex",
    alignItems: "center",
  },
  variants: {
    width: {
      wFull: {
        width: "100%",
      },
      wAuto: { width: "fit-content" },
    },
  },
  defaultVariants: {
    width: "wFull",
  },
});

const inputStyle = recipe({
  base: {
    flex: "1 1 0",
    borderRadius: vars.borderRadius,
    background: "white",
    color: "black",
    selectors: {
      "&:focus": {
        outlineColor: vars.colors.primaryYellow,
      },
      "label + &": {
        marginLeft: "1rem",
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
