import { style, styleVariants } from "@vanilla-extract/css";

export const copyButtonStyle = styleVariants({
  sm: {},
  md: { height: "3.125rem", width: "3.125rem" },
  lg: {},
  xl: {},
});

export const copyButtonIconStyle = style({
  color: "white",
  selectors: {
    [`${copyButtonStyle["sm"]}:hover &`]: {
      color: "black",
    },
    [`${copyButtonStyle["md"]}:hover &`]: {
      color: "black",
    },
    [`${copyButtonStyle["lg"]}:hover &`]: {
      color: "black",
    },
    [`${copyButtonStyle["xl"]}:hover &`]: {
      color: "black",
    },
  },
});
