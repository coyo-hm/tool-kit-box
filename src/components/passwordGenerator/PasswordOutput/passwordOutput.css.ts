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

export const buttonPasswordStyle = style({
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

export const buttonCopyStyle = style({
  height: "3.125rem",
  width: "3.125rem",
});

export const buttonCopyIconStyle = style({
  color: "white",
  selectors: {
    [`${buttonCopyStyle}:hover &`]: {
      color: "black",
    },
  },
});
