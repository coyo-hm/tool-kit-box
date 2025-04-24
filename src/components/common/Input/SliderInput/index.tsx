"use client";

import { ComponentProps, memo, ReactNode, useRef } from "react";
import {
  inputStyle,
  sliderContainerStyle,
  sliderStyle,
  sliderTickStyle,
  sliderTrackStyle,
  valueInputStyle,
} from "./sliderInput.css";
import Input from "@/components/common/Input";

interface SliderInputProps extends ComponentProps<"input"> {
  label?: ReactNode;
  isShowValue?: boolean;
}

const SliderInput = memo(({ className = "", label, id, isShowValue = true, step, ...props }: SliderInputProps) => {
  const min = Number(props.min ?? 0);
  const max = Number(props.max ?? 1);
  const sliderRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  // sliderRef?.current?.addEventListener("input", e => {
  //   if (!e.target) {
  //     return;
  //   }
  //   const value = +(sliderRef.current?.value || 0) - min;
  //   const gradientValue = 100 / (max - min);
  //   sliderRef?.current?.style?.setProperty(
  //     "background",
  //     `linear-gradient(to right, ${slider.active} 0%, ${slider.active} ${gradientValue * value}%, ${slider.default} ${gradientValue * value}%, ${slider.default} 100%)`,
  //   );
  // });
  // }, [min, max, props.value]);

  return (
    <div className={sliderContainerStyle} key={id}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={inputStyle}>
        <input {...props} className={`${sliderStyle} ${className}`} ref={sliderRef} type="range" step={step} />
        <ul role={"list"} className={sliderTrackStyle}>
          {Array.from({ length: (max - min + 1) / Number(step ?? 1) }, (_, i) => (
            <li key={i} className={sliderTickStyle} />
          ))}
        </ul>
      </div>
      {isShowValue && <Input value={props.value} disabled className={valueInputStyle} width={"wAuto"} />}
    </div>
  );
});

SliderInput.displayName = "SliderInput";

export default SliderInput;
