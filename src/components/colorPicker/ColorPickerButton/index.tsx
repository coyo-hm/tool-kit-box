"use client";

import { useTranslations } from "next-intl";
import useColorPicker from "@/hooks/useColorPicker";
import useColorPickerStore from "@/stores/colorPicker";
import Button from "@/components/common/Button";

const ColorPickerButton = () => {
  const t = useTranslations();
  const { startPicking } = useColorPickerStore(state => state.actions);

  useColorPicker();

  return (
    <Button onClick={startPicking} size={"lg"}>
      {t("color-picker.button.starPick")}
    </Button>
  );
};

export default ColorPickerButton;
