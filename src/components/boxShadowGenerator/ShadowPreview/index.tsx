"use client";

import { useMemo } from "react";
import { useShadowStore } from "@/stores/boxShadowGenerator";
import { previewBoxStyle, previewPanelStyle } from "./shadowPreview.css";

const ShadowPreview = () => {
  const options = useShadowStore(state => state.options);
  const boxShadowStyle = useMemo(() => {
    const { offsetX, offsetY, blurRadius, spreadRadius, color, isInset } = options;
    return `${isInset ? "inset " : ""}${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
  }, [options]);

  return (
    <div className={previewPanelStyle}>
      <div className={previewBoxStyle} style={{ boxShadow: boxShadowStyle }} />
    </div>
  );
};

export default ShadowPreview;
