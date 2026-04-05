import { create } from "zustand";

interface QrOptions {
  url: string;
  size: number;
  fgColor: string;
  bgColor: string;
  includeMargin: boolean;
}

interface State {
  options: QrOptions;
}

interface Actions {
  actions: {
    updateOptions: (options: Partial<QrOptions>) => void;
    resetOptions: () => void;
  };
}

const DEFAULT_OPTIONS: QrOptions = {
  url: "https://",
  size: 256,
  fgColor: "#000000",
  bgColor: "#ffffff",
  includeMargin: true,
};

export const useQrStore = create<State & Actions>(set => ({
  options: DEFAULT_OPTIONS,
  actions: {
    updateOptions: newOptions => set(state => ({ options: { ...state.options, ...newOptions } })),
    resetOptions: () => set({ options: DEFAULT_OPTIONS }),
  },
}));
