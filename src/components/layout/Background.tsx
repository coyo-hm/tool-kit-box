"use client";

import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { backgroundEffectStyle, backgroundStyle } from "@/components/layout/layout.css";

const Background = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; delay: number; duration: number }[]>([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    const numStars = 200;
    const generatedStars = Array.from({ length: numStars }, (_, id) => ({
      id,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 3, // 랜덤 딜레이
      duration: 1 + Math.random() * 2, // 반짝이는 속도
    }));
    setStars(generatedStars);
  }, [windowSize]);

  return (
    <div className={backgroundStyle}>
      {stars.map(star => (
        <div
          key={star.id}
          className={backgroundEffectStyle}
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
export default Background;
