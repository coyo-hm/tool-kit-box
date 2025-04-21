import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/styles/theme.css";
import vars from "@/styles/vars.css";

export const buttonStyle = recipe({
  base: {
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    borderRadius: "0.5rem",
    textTransform: "uppercase",
    textAlign: "center",
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {
        fontWeight: 700,
        fontSize: "2rem",
        padding: "0.5rem",
      },
      xl: {
        fontWeight: 900,
        fontSize: "2.5rem",
        padding: "0.5rem",
      },
    },
    color: {
      primary: {
        border: "none",
        backgroundColor: "#FFFFFF",
        color: "#000000",
        selectors: {
          "&:hover": {
            backgroundColor: vars.colors.primaryYellow,
            color: "white",
          },
        },
      },
      secondary: {
        border: "none",
        backgroundColor: vars.colors.primaryYellow,
        // color: "white",
        color: themeContract.colors.text,
        padding: 5,
        selectors: {
          "&:hover": {
            color: themeContract.colors.background,
          },
        },
      },
      outline: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        border: `2px solid ${themeContract.colors.text}`,
        selectors: {
          "&:hover": {
            borderColor: vars.colors.primaryYellow,
            color: vars.colors.primaryYellow,
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});
