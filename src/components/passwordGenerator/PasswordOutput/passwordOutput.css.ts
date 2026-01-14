import { style } from "@vanilla-extract/css";
import vars from "@/styles/vars.css";

export const outputStyle = style({
  width: "100%",
  display: "flex",
  gap: "0.5rem",
});

export const inputContainerStyle = style({
  flex: "1 1 auto",
  position: "relative",
});

export const inputStyle = style({
  width: "100%",
});

export const transparentInputStyle = style({
  color: "transparent !important",
  caretColor: "#333",
  backgroundColor: "transparent !important",
  position: "relative",
  zIndex: 2,
});

export const buttonPasswordStyle = style({
  zIndex:2,
  position: "absolute",
  right: 5,
  width: "3.125rem",
  height: "3.125rem",
  padding: "0.5rem",
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  color: vars.colors.primaryYellow,
  transition: "all 0.3s ease-in-out",
  selectors: {
    [`&:hover`]: {
      color: "black",
    },
  },
});

const commonTextStack = {
  fontSize: "1.5rem",
  padding: "5px 0.5rem",
};

export const backdropStyle = style({
  ...commonTextStack,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  whiteSpace: "pre-wrap",
  wordBreak: "break-all",
  color: "transparent",
  backgroundColor: "white",
  borderRadius: vars.borderRadius,
  border: "none",
});

export const charUpper = style({ color: "#ef4444", fontWeight: "bold" });
export const charLower = style({ color: "#3b82f6" });
export const charNumber = style({ color: "#10b981", fontWeight: "bold" });
export const charSymbol = style({ color: "#8b5cf6" });