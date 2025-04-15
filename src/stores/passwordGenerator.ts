import PasswordGenerator from "@/constants/passwordGenerator";
import { create } from "zustand";
import { ChangeEvent } from "react";

export interface PasswordOptions {
  length: number;
  isIncludeNumbers: boolean;
  isIncludeSymbols: boolean;
  isIncludeUppercase: boolean;
  isIncludeLowercase: boolean;
  includeSymbols?: string;
}

interface State {
  password: string;
  options: PasswordOptions;
}

interface Actions {
  actions: {
    generatePassword: () => void;
    updateOptions: (options: Partial<PasswordOptions>) => void;
    updateSymbols: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

export const usePasswordStore = create<State & Actions>((set, get) => ({
  password: "",
  options: {
    length: PasswordGenerator.NUMBER.DEFAULT,
    isIncludeNumbers: true,
    isIncludeSymbols: true,
    isIncludeUppercase: true,
    isIncludeLowercase: true,
    includeSymbols: PasswordGenerator.DEFAULT_CHARS.SYMBOL,
  },
  actions: {
    generatePassword: () => {
      const { length, isIncludeNumbers, isIncludeSymbols, isIncludeUppercase, isIncludeLowercase, includeSymbols } =
        get().options;
      let charPool = "";

      if (isIncludeNumbers) charPool += PasswordGenerator.DEFAULT_CHARS.NUMBER;
      if (isIncludeSymbols) charPool += includeSymbols;
      if (isIncludeUppercase) charPool += PasswordGenerator.DEFAULT_CHARS.UPPERCASE;
      if (isIncludeLowercase) charPool += PasswordGenerator.DEFAULT_CHARS.LOWERCASE;

      if (!charPool) return;

      const generatedPassword = Array.from(
        { length },
        () => charPool[Math.floor(Math.random() * charPool.length)],
      ).join("");

      set({ password: generatedPassword });
    },
    updateOptions: (options: Partial<PasswordOptions>) => {
      set({ options: { ...get().options, ...options } });
    },
    updateSymbols: (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const newIncludeSymbols = value
        .split("")
        .reduce((letters, l) => (PasswordGenerator.DEFAULT_CHARS.SYMBOL.includes(l) ? letters + l : letters), "");
      set({ options: { ...get().options, includeSymbols: newIncludeSymbols } });
    },
  },
}));
