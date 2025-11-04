import { style } from "@vanilla-extract/css";
import { boxStyle, flex } from "@/styles/vars.css";

export const previewPanelStyle = style([boxStyle.white, flex.rowCenter, {
  padding: "150px"
}]);

export const previewBoxStyle = style({
  width: "40%",
  // height: "50%",
  paddingBottom: "40%",
  border: "1px solid black",
});
