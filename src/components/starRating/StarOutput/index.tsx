"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/common/Button";
import StarCanvas from "@/components/starRating/StarCanvas";
import { downloadImage } from "@/utils/download";

const StarOutput = () => {
  const t = useTranslations();
  const canvasRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div ref={canvasRef}>
        <StarCanvas />
      </div>
      <Button onClick={() => downloadImage(canvasRef.current)} size={"lg"}>
        {t("star-rating.button.download")}
      </Button>
    </>
  );
};
export default StarOutput;
