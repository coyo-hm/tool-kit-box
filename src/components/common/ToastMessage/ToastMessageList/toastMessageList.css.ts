import { style } from "@vanilla-extract/css";

export const toastMessageListStyle = style({
  zIndex: 1000,
  position: "fixed",
  top: "1rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});
