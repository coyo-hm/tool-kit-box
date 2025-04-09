import { ChangeEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import StarRating from "@constants/starRating";
import { StarRatingOptions } from "@hooks/useStarRating.ts";
import { ColorInput, SliderInput } from "@components/common/Input";
import { containerStyle, titleStyle } from "./starOptions.css.ts";

interface Props {
  onChangeStarRatingOptions: (values: Partial<StarRatingOptions>) => void;
}

const StarOptions = ({ onChangeStarRatingOptions }: Props) => {
  const { t } = useTranslation();

  const [maxScore, setMaxScore] = useState(StarRating.MAX_SCORE.DEFAULT);
  const [currentScore, setCurrentScore] = useState(StarRating.CURRENT_SCORE.DEFAULT);
  const [filledColor, setFilledColor] = useState(StarRating.FILLED_COLOR.DEFAULT);
  const [unfilledColor, setUnfilledColor] = useState(StarRating.UNFILLED_COLOR.DEFAULT);
  const [starSize, setStarSize] = useState(StarRating.STAR_SIZE.DEFAULT);

  const onHandleMaxScoreChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setMaxScore(value);
      setCurrentScore(prev => Math.min(prev, value));
      onChangeStarRatingOptions({ maxScore: value, currentScore: Math.min(currentScore, value) });
    },
    [currentScore, onChangeStarRatingOptions],
  );

  const onHandleCurrentScoreChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setCurrentScore(value);
      onChangeStarRatingOptions({ currentScore: value });
    },
    [onChangeStarRatingOptions],
  );

  const onHandleStarSizeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setStarSize(value);
      onChangeStarRatingOptions({ starSize: value });
    },
    [onChangeStarRatingOptions],
  );

  const onHandleFilledColorChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFilledColor(value);
      onChangeStarRatingOptions({
        filledColor: value,
      });
    },
    [onChangeStarRatingOptions],
  );

  const onHandleUnfilledColorChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setUnfilledColor(value);
      onChangeStarRatingOptions({
        unfilledColor: value,
      });
    },
    [onChangeStarRatingOptions],
  );

  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>⚙️ {t("star-rating.options.title")} ⚙️</h2>
      <SliderInput
        id={"starRatingMaxScore"}
        label={t("star-rating.options.maxScore")}
        min={StarRating.MAX_SCORE.MIN}
        max={StarRating.MAX_SCORE.MAX}
        value={maxScore}
        onChange={onHandleMaxScoreChange}
      />
      <SliderInput
        id={"starRatingCurrentScore"}
        label={t("star-rating.options.currentScore")}
        min={StarRating.CURRENT_SCORE.MIN}
        max={maxScore}
        step={StarRating.CURRENT_SCORE.STEP}
        value={currentScore}
        onChange={onHandleCurrentScoreChange}
      />
      <SliderInput
        id={"starRatingStarSize"}
        label={t("star-rating.options.starSize")}
        min={StarRating.STAR_SIZE.MIN}
        max={StarRating.STAR_SIZE.MAX}
        value={starSize}
        onChange={onHandleStarSizeChange}
      />
      <ColorInput
        id={"starRatingFilledColor"}
        label={t("star-rating.options.filledColor")}
        value={filledColor}
        onChange={onHandleFilledColorChange}
      />
      <ColorInput
        id={"starRatingUnfilledColor"}
        label={t("star-rating.options.unfilledColor")}
        value={unfilledColor}
        onChange={onHandleUnfilledColorChange}
      />
    </div>
  );
};
export default StarOptions;
