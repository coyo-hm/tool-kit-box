import { style } from "@vanilla-extract/css";
import { themeContract } from "@/styles/theme.css";
import vars from "@/styles/vars.css";

// export const slider = {
//   active: "#FFE283",
//   default: "#ececec",
// };

export const sliderContainerStyle = style({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  // fontSize: "1.5rem",
  // margin: "2rem 0",
});

export const inputStyle = style({
  position: "relative",
  width: "100%",
  // height: 16,
  flex: "1 1 0",
});

export const valueInputStyle = style({
  textAlign: "center",
  width: "5rem",
});

export const sliderStyle = style({
  width: "100%",
  cursor: "pointer",
  // background: `linear-gradient(to right, ${slider.active} 0%, ${slider.active} 50%, ${slider.default} 50%, ${slider.default} 100%)`,
  // appearance: "none",
  borderRadius: vars.borderRadius,
  accentColor: vars.colors.primaryYellow,
  transition: "all 0.3s ease-in-out",
  outline: "none",
});

export const sliderTrackStyle = style({
  height: "50%",
  width: "calc(100% - 12px)",
  position: "absolute",
  left: 6,
  top: "25%",
  zIndex: -1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const sliderTickStyle = style({
  height: "100%",
  width: "1px",
  background: themeContract.colors.text,
  flexShrink: 0,
  selectors: {
    "&:first-child, &:last-child": {
      width: 2,
    },
  },
});
