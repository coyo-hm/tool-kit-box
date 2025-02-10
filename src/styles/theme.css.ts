import { createTheme, createThemeContract, globalStyle } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
  colors: {
    text: null,
  },
});

export const lightTheme = createTheme(themeContract, {
  colors: {
    text: "#000000",
  },
});
export const darkTheme = createTheme(themeContract, {
  colors: {
    text: "#ffffff",
  },
});

globalStyle("*, *::after, *::before", {
  color: themeContract.colors.text,
});