import { style } from "@vanilla-extract/css";
import vars from "@styles/vars.css.ts";

export const containerStyle = style({
  width: "100%",
  padding: "2rem",
  borderRadius: vars.borderRadius,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  fontSize: "1.5rem",
  fontWeight: 700,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const titleStyle = style({
  margin: "-3rem 0 0",
  fontSize: "2rem",
  fontWeight: 900,
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: 1,
});
