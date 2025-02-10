import { keyframes, style } from "@vanilla-extract/css";

export const mainStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
});

export const sectionStyle = style({
  width: "100%",
  overflow: "auto",
  flex: "1 1 0",
  zIndex: 1,
});

export const twinkle = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(1)",
  },
  "50%": {
    opacity: 1,
    transform: "scale(1.2)",
  },
  "100%": {
    opacity: 0,
    transform: "scale(1)",
  },
});

export const backgroundStyle = style({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  position: "absolute",
  background: "radial-gradient(circle at bottom, #001c42 10%, #000b1d 50%, #221e1e 90%)",
});

export const backgroundEffectStyle = style({
  width: 2,
  height: 2,
  zIndex: 0,
  position: "absolute",
  background: "white",
  borderRadius: "50%",
  opacity: 0,
  animation: `${twinkle} 3s infinite alternate`,
});

export const navStyle = style({
  flex: "0 0 1",
  zIndex: 1,
  padding: "20px",
  fontSize: "1.5rem",
  fontWeight: 700,
  display: "flex",
  gap: "0.5rem",
});
