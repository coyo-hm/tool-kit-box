import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import vars from "@/styles/vars.css";

const slideInFrames = keyframes({
  "0%": { transform: "translateY(-100%)", opacity: 0 },
  "100%": { transform: "translateY(0%)", opacity: 0.99 },
});

const baseStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.75rem",
  borderRadius: "10rem",
  padding: "0.5rem 0.5rem 0.5rem 1rem",
  animation: `${slideInFrames} 0.3s ease-out forwards`,
  color: "#ffffff",
  fontSize: "0.8rem",
});

export const toastMessageItemStyle = styleVariants({
  success: [
    baseStyle,
    {
      backgroundColor: vars.colors.primaryGreen,
    },
  ],
  error: [
    baseStyle,
    {
      backgroundColor: "#EF4444",
    },
  ],
  info: [
    baseStyle,
    {
      backgroundColor: vars.colors.primaryYellow,
    },
  ],
});

export const closeButtonStyle = style({
  height: "1.5rem",
  width: "1.5rem",
  color: "#fafafa",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  selectors: {
    [`&:hover`]: {
      color: "black",
    },
  },
});
