import { useTranslations } from "next-intl";
import { colorPickerNoticeStyle } from "@/components/colorPicker/ColorPickerNotice/colorPickerNotice.css";

const ColorPickerNotice = () => {
  const t = useTranslations();
  return <div className={colorPickerNoticeStyle}>{t("color-picker.notice.chrome")}</div>;
};
export default ColorPickerNotice;
