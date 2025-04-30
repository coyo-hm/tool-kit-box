import ColorPickerOutput from "@/components/colorPicker/ColorPickerOutput";
import ColorPickerButton from "@/components/colorPicker/ColorPickerButton";
import ColorPickerNotice from "@/components/colorPicker/ColorPickerNotice";
import { pageContainer } from "@/styles/vars.css";

export default function ColorPickerPage() {
  return (
    <div className={pageContainer}>
      <ColorPickerNotice />
      <ColorPickerButton />
      <ColorPickerOutput />
    </div>
  );
}
