"use client";

import { useMemo } from "react";
import Input from "@/components/common/Input";
import { CopyButton } from "@/components/common/Button";
import { hexToRgb, rgbToHsl } from "@/utils/colorFormat";
import useColorPickerStore from "@/stores/colorPicker";
import { containerStyle, infoItemStyle, infoListStyle, previewStyle } from "./colorPickerOutput.css";

const ColorPickerOutput = () => {
  const { color } = useColorPickerStore(state => state);
  const { r, g, b } = useMemo(() => hexToRgb(color), [color]);
  const { h, s, l } = useMemo(() => rgbToHsl(r, g, b), [r, g, b]);

  const colorInfo = [
    { label: "HEX", value: color },
    { label: "RGB", value: `rgb(${r}, ${g}, ${b})` },
    { label: "HSL", value: `hsl(${h}, ${s}%, ${l}%)` },
  ];

  const onCopy = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={containerStyle}>
      <div style={{ background: color }} className={previewStyle} />
      <div className={infoListStyle}>
        {colorInfo.map(({ label, value }) => (
          <div key={label} className={infoItemStyle}>
            <Input label={label} value={value} readOnly disabled />
            <CopyButton onCopy={() => onCopy(value)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPickerOutput;
