import { style } from "@vanilla-extract/css";
import { boxStyle, flexColCenterStyle, w } from "@/styles/vars.css";

export const containerStyle = style([
  boxStyle.black,
  w["full"],
  flexColCenterStyle,
  {
    fontSize: "1.5rem",
    fontWeight: 700,
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
