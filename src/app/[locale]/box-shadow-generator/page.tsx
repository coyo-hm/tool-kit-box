import { pageContainer } from "@/styles/vars.css";
import ShadowOptions from "@/components/boxShadowGenerator/ShadowOptions";
import ShadowPreview from "@/components/boxShadowGenerator/ShadowPreview";

export default function BoxShadowGeneratorPage() {
  return (
    <div className={pageContainer}>
      <ShadowPreview/>
      <ShadowOptions/>
    </div>
  );
}
