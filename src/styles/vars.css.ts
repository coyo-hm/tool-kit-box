import { createGlobalTheme, style, styleVariants } from "@vanilla-extract/css";

const vars = createGlobalTheme(":root", {
  colors: {
    primaryYellow: "#FFC833",
    primaryGreen: "#2CAB0C",
  },
  borderRadius: "0.5rem",
});

export const w = styleVariants({
  full: {
    width: "100%",
  },
  half: {
    width: "50%",
  },
  quarter: {
    width: "25%",
  },
  auto: {
    width: "auto",
  },
});

export const whvFull = style({
  width: "100vw",
  height: "100vh",
});

export const whFull = style({
  width: "100%",
  height: "100%",
});

export const flex = styleVariants({
  row: {
    display: "flex",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  rowCenter: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const flexColCenterStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const pageContainer = style([
  flexColCenterStyle,
  {
    padding: "2rem",
    gap: "2rem",
  },
]);

export const boxStyle = style({
  padding: "2rem",
  borderRadius: vars.borderRadius,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
});

export default vars;
