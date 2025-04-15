import { useTranslations } from "next-intl";
import StarRating from "@/constants/starRating";
import { ColorInput, SliderInput } from "@/components/common/Input";
import useStarRatingStore from "@/stores/starRating";
import { containerStyle, titleStyle } from "./starOptions.css";

const StarOptions = () => {
  const t = useTranslations();
  const { maxScore, currentScore, filledColor, unfilledColor, starSize } = useStarRatingStore(state => state);
  const { updateMaxScore, updateStarRating } = useStarRatingStore(state => state.actions);

  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>⚙️ {t("star-rating.options.title")} ⚙️</h2>
      <SliderInput
        id={"starRatingMaxScore"}
        label={t("star-rating.options.maxScore")}
        min={StarRating.MAX_SCORE.MIN}
        max={StarRating.MAX_SCORE.MAX}
        value={maxScore}
        onChange={updateMaxScore}
      />
      <SliderInput
        id={"starRatingCurrentScore"}
        label={t("star-rating.options.currentScore")}
        min={StarRating.CURRENT_SCORE.MIN}
        max={maxScore}
        step={StarRating.CURRENT_SCORE.STEP}
        value={currentScore}
        onChange={e => updateStarRating({ currentScore: Number(e.target.value) })}
      />
      <SliderInput
        id={"starRatingStarSize"}
        label={t("star-rating.options.starSize")}
        min={StarRating.STAR_SIZE.MIN}
        max={StarRating.STAR_SIZE.MAX}
        value={starSize}
        onChange={e => updateStarRating({ starSize: Number(e.target.value) })}
      />
      <ColorInput
        id={"starRatingFilledColor"}
        label={t("star-rating.options.filledColor")}
        value={filledColor}
        onChange={e =>
          updateStarRating({
            filledColor: e.target.value,
          })
        }
      />
      <ColorInput
        id={"starRatingUnfilledColor"}
        label={t("star-rating.options.unfilledColor")}
        value={unfilledColor}
        onChange={e =>
          updateStarRating({
            unfilledColor: e.target.value,
          })
        }
      />
    </div>
  );
};
export default StarOptions;
