import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  padding: "2rem",
  // borderRadius: "0.5rem",
  // backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
});

export const canvasStyle = style({
  flex: "0 0 400",
});
