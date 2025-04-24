"use client";

import { useMemo } from "react";
import useDateCounterStore from "@/stores/dateCounter";
import { containerStyle, numberColorStyle, numberStyle, textStyle } from "./dateDiff.css";

const DateDiff = () => {
  const { date, month, year } = useDateCounterStore(state => state.diff);

  const numberColor = useMemo(() => {
    if (date == 0) {
      return "today";
    }
    if (date < 0) {
      return "upcoming";
    }
    return "past";
  }, [date]);

  return (
    <div className={containerStyle}>
      <div className={textStyle.date}>
        <span>DATE</span>
        <span className={`${numberStyle.date} ${numberColorStyle[numberColor]}`}>{numberColor === "past" ? "+" : ""}{date}</span>
      </div>
      <div className={textStyle.month}>
        <span>MONTH</span>
        <span className={`${numberStyle.month} ${numberColorStyle[numberColor]}`}>{month}</span>
      </div>
      <div className={textStyle.year}>
        <span>YEAR</span>
        <span className={`${numberStyle.year} ${numberColorStyle[numberColor]}`}>{year}</span>
      </div>
    </div>
  );
};
export default DateDiff;
