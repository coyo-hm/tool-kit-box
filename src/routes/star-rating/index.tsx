import { useRef } from "react";
import { useTranslation } from "react-i18next";
import useStarRating from "@hooks/useStarRating.ts";
import { downloadImage } from "@utils/download.ts";
import Button from "@components/common/Button";
import StarOptions from "@components/starRating/StarOptions";
import StarCanvas from "@components/starRating/StarCanvas";
import { containerStyle } from "./index.css.ts";

const StarRatingPage = () => {
  const { t } = useTranslation();
  const { starRatingOptions, onChangeStarRatingOptions } = useStarRating();
  const canvasRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={containerStyle}>
      <StarOptions onChangeStarRatingOptions={onChangeStarRatingOptions} />
      <div ref={canvasRef}>
        <StarCanvas {...starRatingOptions} />
      </div>
      <Button onClick={() => downloadImage(canvasRef.current)} size={"lg"}>
        {t("star-rating.button.download")}
      </Button>
    </div>
  );
};

export default StarRatingPage;
