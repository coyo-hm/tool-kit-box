import ColorPickerOutput from "@/components/colorPicker/ColorPickerOutput";
import ColorPickerButton from "@/components/colorPicker/ColorPickerButton";
import { pageContainer } from "@/styles/vars.css";

export default function ColorPickerPage() {
  return (
    <div className={pageContainer}>
      <ColorPickerButton />
      <ColorPickerOutput />
    </div>
  );
}
