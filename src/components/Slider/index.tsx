import { ComponentProps, useRef } from "react";
import { sliderContainerStyle, sliderStyle, sliderTickStyle, sliderTrackStyle } from "./slider.css.ts";

// interface SliderProps extends ComponentProps<"input"> {}

const Slider = ({ className = "", ...props }: ComponentProps<"input">) => {
  const min = +(props?.min || 0);
  const max = +(props?.max || 1);
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
    <div className={sliderContainerStyle}>
      <input {...props} className={`${sliderStyle} ${className}`} ref={sliderRef} />
      <ul role={"list"} className={sliderTrackStyle}>
        {Array.from({ length: max - min + 1 }, (_, i) => (
          <li key={i} className={sliderTickStyle} />
        ))}
      </ul>
    </div>
  );
};

export default Slider;
