"use client";

import StarOutput from "@/components/starRating/StarOutput";
import StarOptions from "@/components/starRating/StarOptions";
import { containerStyle } from "@/app/[locale]/star-rating/page.css";

export default function StarRatingPage() {
  return (
    <div className={containerStyle}>
      <StarOptions />
      <StarOutput />
    </div>
  );
}
