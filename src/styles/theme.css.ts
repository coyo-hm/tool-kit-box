import { createTheme, createThemeContract, globalStyle } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
  colors: {
    text: null,
    background: null,
  },
});

export const lightTheme = createTheme(themeContract, {
  colors: {
    text: "#000000",
    background: "#ffffff",
  },
});
export const darkTheme = createTheme(themeContract, {
  colors: {
    text: "#ffffff",
    background: "#000000",
  },
});

globalStyle("*, *::after, *::before", {
  fontFamily: "'Inter', sans-serif",
  color: themeContract.colors.text,
  // background: themeContract.colors.background,
});

globalStyle("svg *, svg", {
  color: "inherit",
  // background: themeContract.colors.background,
});
