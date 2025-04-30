import { style } from "@vanilla-extract/css";
import { boxStyle } from "@/styles/vars.css";

export const colorPickerNoticeStyle = style([
  boxStyle.yellow,
  {
    fontSize: "1.5rem",
    fontWeight: 700,
  },
]);
