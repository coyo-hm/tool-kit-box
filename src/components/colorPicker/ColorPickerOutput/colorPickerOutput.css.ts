import { style } from "@vanilla-extract/css";
import vars, { boxStyle, w } from "@/styles/vars.css";

export const containerStyle = style([
  boxStyle,
  w["full"],
  {
    fontSize: "1.5rem",
    fontWeight: 700,
    display: "flex",
    gap: "1.5rem",
  },
]);

export const previewStyle = style({
  width: "11.375rem",
  height: "fit-content",
  borderRadius: vars.borderRadius,
  border: "4px solid white",
  selectors: {
    [`&::after`]: {
      content: "",
      display: "block",
      paddingBottom: "100%",
    },
  },
});

export const infoListStyle = style({
  flex: "1 1 0",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  flexWrap: "wrap",
});

export const infoItemStyle = style({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});
