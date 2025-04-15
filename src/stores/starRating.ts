import { create } from "zustand";
import StarRating from "@/constants/starRating";
import { ChangeEvent } from "react";

export interface StarRatingOptions {
  maxScore: number;
  currentScore: number;
  filledColor: string;
  unfilledColor: string;
  starSize: number;
}

interface State extends StarRatingOptions {}

interface Actions {
  actions: {
    updateStarRating: (values: Partial<StarRatingOptions>) => void;
    updateMaxScore: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

const useStarRatingStore = create<State & Actions>((set, get) => ({
  maxScore: StarRating.MAX_SCORE.DEFAULT,
  currentScore: StarRating.CURRENT_SCORE.DEFAULT,
  filledColor: StarRating.FILLED_COLOR.DEFAULT,
  unfilledColor: StarRating.UNFILLED_COLOR.DEFAULT,
  starSize: StarRating.STAR_SIZE.DEFAULT,
  actions: {
    updateStarRating: (values: Partial<StarRatingOptions>) => set(prev => ({ ...prev, ...values })),
    updateMaxScore: (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      set({ maxScore: value, currentScore: Math.min(value, get().currentScore) });
    },
  },
}));

export default useStarRatingStore;
