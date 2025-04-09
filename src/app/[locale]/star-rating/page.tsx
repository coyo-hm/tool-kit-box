
import { useRef } from "react";
import { useTranslations } from "next-intl";
import useStarRating from "@/hooks/useStarRating";

import { containerStyle } from "@/app/[locale]/star-rating/page.css";
import Button from "@/components/common/Button";
import StarOptions from "@/app/[locale]/star-rating/_components/StarOptions";
import StarCanvas from "@/app/[locale]/star-rating/_components/StarCanvas";
import { downloadImage } from "@/utils/download";

export default function StarRatingPage() {
  const t = useTranslations();
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
}