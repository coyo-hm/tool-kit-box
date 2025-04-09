import { StarRatingOptions } from "@hooks/useStarRating.ts";
import Star from "@components/starRating/Star";
import { starCanvasStyle } from "./starCanvas.css.ts";

const StarCanvas = ({ maxScore, currentScore, filledColor, unfilledColor, starSize }: StarRatingOptions) => {
  return (
    <div className={starCanvasStyle}>
      {Array.from({ length: maxScore }, (_, i) => {
        const percentage = Math.min(Math.max(currentScore - i, 0), 1);
        return (
          <Star key={i} fill={filledColor} unfilledColor={unfilledColor} percentage={percentage} size={starSize} />
        );
      })}
    </div>
  );
};

export default StarCanvas;
