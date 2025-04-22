import LoadingSpinner from "@/components/common/LoadingSpinner/LoadingSpinner";
import Background from "@/components/layout/Background";
import { flex, whvFull } from "@/styles/vars.css";

export default function Loading() {
  return (
    <div className={`${whvFull} ${flex.rowCenter}`}>
      <Background />
      <LoadingSpinner />
    </div>
  );
}
