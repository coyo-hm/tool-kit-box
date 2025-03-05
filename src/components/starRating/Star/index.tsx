import StarRating from "@constants/starRating";

interface Props {
  size?: number;
  fill?: string;
  unfilledColor?: string;
  percentage?: number;
}

const Star = ({
  size = StarRating.STAR_SIZE.DEFAULT,
  fill = StarRating.FILLED_COLOR.DEFAULT,
  unfilledColor = StarRating.UNFILLED_COLOR.DEFAULT,
  percentage = 1,
}: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    {/* 배경 별 (기본 색) */}
    <path d="M12 2L14.9 8.6L22 9.3L16.5 14.1L18 21L12 17.8L6 21L7.5 14.1L2 9.3L9.1 8.6L12 2Z" fill={unfilledColor} />
    {/* 앞쪽 별 (색칠된 부분) */}
    <path
      d="M12 2L14.9 8.6L22 9.3L16.5 14.1L18 21L12 17.8L6 21L7.5 14.1L2 9.3L9.1 8.6L12 2Z"
      fill={fill}
      style={{ clipPath: `inset(0 ${100 - percentage * 100}% 0 0)` }}
    />
  </svg>
);

export default Star;
