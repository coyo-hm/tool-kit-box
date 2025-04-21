import { createGlobalTheme, style } from "@vanilla-extract/css";

const vars = createGlobalTheme(":root", {
  colors: {
    primaryYellow: "#FFC833",
    primaryGreen: "#2CAB0C",
  },
  borderRadius: "0.5rem",
});

export const whFull = style({
  width: "100%",
  height: "100%",
});

export const flexColCenter = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
});

export const pageContainer = style([
  flexColCenter,
  {
    padding: "2rem",
    gap: "2rem",
  },
]);

export default vars;
