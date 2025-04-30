import { useEffect } from "react";
import useColorPickerStore from "@/stores/colorPicker";
import { useToastMessageContext } from "@/providers/ToastMessageProvider";
import { useTranslations } from "next-intl";

const useColorPicker = () => {
  const t = useTranslations();
  const { showToastMessage } = useToastMessageContext();
  const {
    isPicking,
    actions: { setColor, stopPicking },
  } = useColorPickerStore();

  useEffect(() => {
    if (!isPicking) return;

    const handleClick = async (e: MouseEvent) => {
      try {
        const eyeDropper = new (window as any).EyeDropper();
        const { sRGBHex } = await eyeDropper.open();
        setColor(sRGBHex);
      } catch (error) {
        console.warn("Color picking cancelled.");
        showToastMessage({ type: "error", message: t("color-picker.toast.pick_failed") });
      } finally {
        stopPicking();
      }
    };

    window.addEventListener("click", handleClick, { once: true });

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isPicking, setColor, stopPicking]);
};

export default useColorPicker;
