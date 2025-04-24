import { create } from "zustand";
import { calcDateDiff } from "@/utils/calcDateDiff";

interface State {
  startDate: Date;
  endDate: Date;
  diff: {
    date: number;
    month: number;
    year: number;
  };
}

interface Action {
  actions: {
    setStartDate: (startDate: Date) => void;
    setEndDate: (endDate: Date) => void;
    setDiff: () => void;
  };
}

const useDateCounterStore = create<State & Action>((set, get) => ({
  startDate: new Date(),
  endDate: new Date(),
  diff: {
    date: 0,
    month: 0,
    year: 0,
  },
  actions: {
    setStartDate: (startDate: Date) => set({ startDate }),
    setEndDate: (endDate: Date) => set({ endDate }),
    setDiff: () => set({ diff: calcDateDiff(get().startDate, get().endDate) }),
  },
}));

export default useDateCounterStore;
