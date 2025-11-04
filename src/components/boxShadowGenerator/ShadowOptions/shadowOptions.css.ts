import { style } from "@vanilla-extract/css";
import { boxStyle, flexColCenterStyle } from "@/styles/vars.css";

export const containerStyle = style([
  boxStyle.black,
  flexColCenterStyle,
  {
    fontWeight: 700,
    fontSize: "1.5rem",
    gap: "1rem",
  },
]);

export const titleStyle = style({
  margin: "-3rem 0 0",
  fontSize: "2rem",
  fontWeight: 900,
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: 1,
});

export const codeContainerStyle = style({
  position: "relative",
  fontFamily: "monospace",
  backgroundColor: "#ececec",
  padding: "1.5rem 4rem 1.5rem 1rem",
  borderRadius: "8px",
  marginTop: "24px",
  wordWrap: "break-word",
  lineHeight: 1.5,
});

export const codeTextStyle = style({
  color: "black",
});

export const copyButtonStyle = style({
  position: "absolute",
  right: "1rem",
  top: "0.68rem",
});
