import { style, styleVariants } from "@vanilla-extract/css";
import vars, { boxStyle, flex } from "@/styles/vars.css";

export const containerStyle = style([
  boxStyle.black,
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
  },
]);

const baseStyle = style([
  flex.col,
  {
    justifyContent: "space-between",
  },
]);

export const textStyle = styleVariants({
  date: [
    baseStyle,
    {
      fontSize: "3rem",
      gridColumn: "1 / 2",
      gridRow: "1 / 3",
    },
  ],
  month: [
    baseStyle,
    {
      fontSize: "1.5rem",
    },
  ],
  year: [
    baseStyle,
    {
      fontSize: "1.5rem",
    },
  ],
});

export const numberStyle = styleVariants({
  date: {
    fontWeight: 900,
    fontSize: "6rem",
  },
  month: {
    fontWeight: 700,
    fontSize: "3rem",
  },
  year: {
    fontWeight: 700,
    fontSize: "3rem",
  },
});

export const numberColorStyle = styleVariants({
  upcoming: {
    // color: "#22C55E",
    color: vars.colors.primaryGreen,
  },
  today: {
    color: "#3B82F6",
    // color: "#007BFF",
  },
  past: {
    color: "#EF4444",
  },
});
