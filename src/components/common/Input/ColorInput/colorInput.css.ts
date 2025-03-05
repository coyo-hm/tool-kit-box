import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  // flexDirection: "column",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});

export const colorPickerStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
});

export const hexInputStyle = style({
  width: "10rem",
  padding: "6px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  textAlign: "center",
});
