import { useCallback, useState } from "react";
import StarRating from "@constants/starRating";

export interface StarRatingOptions {
  maxScore: number;
  currentScore: number;
  filledColor: string;
  unfilledColor: string;
  starSize: number;
}

const useStarRating = () => {
  const [starRatingOptions, setStarRatingOptions] = useState<StarRatingOptions>({
    maxScore: StarRating.MAX_SCORE.DEFAULT,
    currentScore: StarRating.CURRENT_SCORE.DEFAULT,
    filledColor: StarRating.FILLED_COLOR.DEFAULT,
    unfilledColor: StarRating.UNFILLED_COLOR.DEFAULT,
    starSize: StarRating.STAR_SIZE.DEFAULT,
  });

  const onChangeStarRatingOptions = useCallback(
    (values: Partial<StarRatingOptions>) => setStarRatingOptions(prev => ({ ...prev, ...values })),
    [],
  );

  return { starRatingOptions, onChangeStarRatingOptions };
};

export default useStarRating;
