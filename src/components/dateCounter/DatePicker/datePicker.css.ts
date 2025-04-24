import { style } from "@vanilla-extract/css";
import { boxStyle } from "@/styles/vars.css";

export const formStyle = style([
  boxStyle,
  {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "2rem",
    fontSize: "1.5rem",
    fontWeight: 900,
  },
]);

export const inputStyle = style({
  width: "50%",
  flex: "1 1 0",
});

export const buttonStyle = style({
  width: "100%",
});
