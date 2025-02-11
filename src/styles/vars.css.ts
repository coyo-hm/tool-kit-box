import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    primaryYellow: "#FFC833",
    primaryGreen: "#2CAB0C",
  },
  borderRadius: "0.5rem",
});

export default vars;
