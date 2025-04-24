import { pageContainer } from "@/styles/vars.css";
import DatePicker from "@/components/dateCounter/DatePicker";
import DateDiff from "@/components/dateCounter/DateDiff";

export default function DateCounterPage() {
  return (
    <div className={pageContainer}>
      <DatePicker />
      <DateDiff />
    </div>
  );
}
