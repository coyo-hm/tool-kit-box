import { pageContainer } from "@/styles/vars.css";
import QrOptions from "./_components/QrOptions";
import QrPreview from "./_components/QrPreview";


export default function QrGeneratorPage() {
  return (
    <div className={pageContainer}>
      <QrOptions />
      <QrPreview />
    </div>
  );
}
