import { globalFontFace } from "@vanilla-extract/css";

export const textFont = "Inter";

globalFontFace(textFont, {
  src: 'url("/assets/fonts/Inter/inter.css")',
});
