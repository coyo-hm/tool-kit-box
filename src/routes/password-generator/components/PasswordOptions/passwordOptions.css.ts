import { style } from "@vanilla-extract/css";
import vars from "@styles/vars.css.ts";

export const containerStyle = style({
  padding: "2rem",
  borderRadius: vars.borderRadius,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  fontSize: "1.2rem",
  fontWeight: 700,
});

export const titleStyle = style({
  margin: "-3rem 0 0",
  fontSize: "2rem",
  fontWeight: 900,
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: 1,
});

export const lengthContainerStyle = style({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  fontSize: "1.5rem",
  margin: "2rem 0",
});

export const lengthInputStyle = style({
  width: "4rem",
  textAlign: "center",
});
export const checkContainerStyle = style({
  padding: "1rem 0",
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
});

export const symbolCheckStyle = style({
  width: "100%",
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
});

export const symbolInputStyle = style({
  width: "100%",
  flex: "1 1 0",
});
