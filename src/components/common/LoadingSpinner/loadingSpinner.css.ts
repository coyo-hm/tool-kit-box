import { style } from "@vanilla-extract/css";
import { spin } from "@/styles/animation.css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
});

export const loadingSpinner = style({
  position: "relative",
  width: "4rem",
  height: "4rem",
});

export const outerCircle = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  border: "4px solid rgb(50, 59, 84)",
  borderRadius: "100%",
});

export const innerCircle = style([
  spin,
  {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    border: "4px solid rgb(90, 74, 244)",
    borderTopColor: "transparent",
    borderRadius: "100%",
  },
]);
