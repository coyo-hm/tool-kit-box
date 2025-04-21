import { create } from "zustand";
import COLOR_PICKER from "@/constants/colorPicker";

interface State {
  isPicking: boolean;
  color: string;
}

interface Action {
  actions: {
    startPicking: () => void;
    stopPicking: () => void;
    setColor: (pickedColor: string) => void;
  };
}

const useColorPickerStore = create<State & Action>(set => ({
  isPicking: false,
  color: COLOR_PICKER.DEFAULT_COLOR,
  actions: {
    startPicking: () => set({ isPicking: true }),
    stopPicking: () => set({ isPicking: false }),
    setColor: pickedColor => set({ color: pickedColor }),
  },
}));
export default useColorPickerStore;
