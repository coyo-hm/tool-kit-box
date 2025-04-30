import { style } from "@vanilla-extract/css";
import { boxStyle, flexColCenterStyle } from "@/styles/vars.css";

export const containerStyle = style([
  boxStyle.black,
  flexColCenterStyle,
  {
    fontWeight: 700,
    fontSize: "1.5rem",
    gap: "1rem",
  },
]);

export const titleStyle = style({
  margin: "-3rem 0 0",
  fontSize: "2rem",
  fontWeight: 900,
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: 1,
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
  flex: "1 1 0",
});
