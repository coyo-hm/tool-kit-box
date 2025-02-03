import { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import useWindowSize from "@src/hooks/useWindowSize.ts";

const Twinkle = keyframes`
    0% {
        opacity: 0;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.2);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
`;

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
    <div
      css={css`
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: radial-gradient(circle at bottom, #001c42 10%, #000b1d 50%, #000000 90%);
      `}
    >
      {stars.map(star => (
        <div
          key={star.id}
          css={css`
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            opacity: 0;
            animation: ${Twinkle} 3s infinite alternate;
            z-index: 0;
          `}
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
