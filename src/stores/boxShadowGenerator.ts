import { create } from "zustand";

export interface ShadowOptions {
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
  isInset: boolean;
}

interface State {
  options: ShadowOptions;
}

interface Action {
  actions: {
    updateOptions: (options: Partial<ShadowOptions>) => void;
  };
}

export const useShadowStore = create<State & Action>((set) => ({
  options: {
    offsetX: 10,
    offsetY: 10,
    blurRadius: 5,
    spreadRadius: 0,
    color: "#000000",
    isInset: false,
  },
  actions: {
    updateOptions: (newOptions) =>
      set((state) => ({
        options: { ...state.options, ...newOptions },
      })),
  },
}));
