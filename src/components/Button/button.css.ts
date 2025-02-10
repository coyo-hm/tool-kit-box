import colors from "@styles/colors.css.ts";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@styles/theme.css.ts";

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
        backgroundColor: "#FFFFFF",
        color: "#000000",
        selectors: {
          "&:hover": {
            backgroundColor: colors["primary-yellow"],
            color: "white",
          },
        },
      },
      outline: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        border: `2px solid ${themeContract.colors.text}`,
        selectors: {
          "&:hover": {
            borderColor: colors["primary-yellow"],
            color: colors["primary-yellow"],
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
