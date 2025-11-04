"use client";

import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import BoxShadowGenerator from "@/constants/boxShadowGenerator";
import { useShadowStore } from "@/stores/boxShadowGenerator";
import { useToastMessageContext } from "@/providers/ToastMessageProvider";
import { ColorInput, SliderInput } from "@/components/common/Input";
import Checkbox from "@/components/common/Checkbox";
import { CopyButton } from "@/components/common/Button";
import { codeContainerStyle, codeTextStyle, containerStyle, copyButtonStyle, titleStyle } from "./shadowOptions.css";

const ShadowOptions = () => {
  const t = useTranslations();
  const {
    options,
    actions: { updateOptions },
  } = useShadowStore(state => state);
  const { showToastMessage } = useToastMessageContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    let processedValue: string | number | boolean;
    if (type === "checkbox") {
      processedValue = checked;
    } else if (type === "range" || type === "number") {
      processedValue = parseInt(value, 10);
    } else {
      processedValue = value;
    }
    updateOptions({ [name]: processedValue });
  };

  const cssString = useMemo(() => {
    const { offsetX, offsetY, blurRadius, spreadRadius, color, isInset } = options;
    return `${isInset ? "inset " : ""}${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
  }, [options]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(`box-shadow: ${cssString};`);
      showToastMessage({ type: "info", message: t("common.toast.copy_success") });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className={containerStyle}>
        <h2 className={titleStyle}>⚙️ {t("box-shadow-generator.options.title")} ⚙️</h2>
        <SliderInput
          id={"offsetX"}
          name={"offsetX"}
          label={t("box-shadow-generator.options.offsetX")}
          min={BoxShadowGenerator.OFF_SET.MIN}
          max={BoxShadowGenerator.OFF_SET.MAX}
          value={options.offsetX}
          onChange={handleChange}
        />
        <SliderInput
          id={"offsetY"}
          name={"offsetY"}
          label={t("box-shadow-generator.options.offsetY")}
          min={BoxShadowGenerator.OFF_SET.MIN}
          max={BoxShadowGenerator.OFF_SET.MAX}
          value={options.offsetY}
          onChange={handleChange}
        />
        <SliderInput
          id={"blurRadius"}
          name={"blurRadius"}
          label={t("box-shadow-generator.options.blurRadius")}
          min={BoxShadowGenerator.BLUR_RADIUS.MIN}
          max={BoxShadowGenerator.BLUR_RADIUS.MAX}
          value={options.blurRadius}
          onChange={handleChange}
        />
        <SliderInput
          id={"spreadRadius"}
          name={"spreadRadius"}
          label={t("box-shadow-generator.options.spreadRadius")}
          min={BoxShadowGenerator.BLUR_RADIUS.MIN}
          max={BoxShadowGenerator.BLUR_RADIUS.MAX}
          value={options.spreadRadius}
          onChange={handleChange}
        />
        <ColorInput
          id={"boxShadowColor"}
          name={"color"}
          label={t("box-shadow-generator.options.color")}
          value={options.color}
          onChange={handleChange}
        />
        <Checkbox
          id={"isInset"}
          name="isInset"
          label={t("box-shadow-generator.options.isInset")}
          checked={options.isInset}
          onChange={handleChange}
          // onClick={onClickCheckbox}
          size={"lg"}
        />
      </div>
      <div className={codeContainerStyle}>
        <pre className={codeTextStyle}>box-shadow: {cssString}</pre>
        <CopyButton onCopy={onCopy} className={copyButtonStyle}/>
      </div>

    </>
  );
};

export default ShadowOptions;
