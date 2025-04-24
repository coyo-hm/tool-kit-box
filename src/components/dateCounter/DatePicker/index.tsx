"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { buttonStyle, formStyle, inputStyle } from "./datePicker.css";
import useDateCounterStore from "@/stores/dateCounter";

const DatePicker = () => {
  const {
    startDate,
    endDate,
    actions: { setStartDate, setEndDate, setDiff },
  } = useDateCounterStore(state => state);
  return (
    <form
      className={formStyle}
      onSubmit={e => {
        e.preventDefault();
        setDiff();
      }}
    >
      <Input
        label={"FROM"}
        type="date"
        lang={"en"}
        width={"wAuto"}
        containerClassName={inputStyle}
        value={startDate.toISOString().slice(0, 10)}
        onChange={e => setStartDate(new Date(e.target.value))}
      />
      <Input
        label={"TO"}
        type="date"
        width={"wAuto"}
        containerClassName={inputStyle}
        value={endDate.toISOString().slice(0, 10)}
        onChange={e => setEndDate(new Date(e.target.value))}
      />
      <Button type={"submit"} className={buttonStyle} size={"lg"}>
        Submit
      </Button>
    </form>
  );
};

export default DatePicker;
