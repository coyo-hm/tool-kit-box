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
      const guaranteedChars = [];

      if (isIncludeNumbers) {
        charPool += PasswordGenerator.DEFAULT_CHARS.NUMBER;
        guaranteedChars.push(
          PasswordGenerator.DEFAULT_CHARS.NUMBER[
            Math.floor(Math.random() * PasswordGenerator.DEFAULT_CHARS.NUMBER.length)
          ],
        );
      }
      if (isIncludeSymbols && includeSymbols) {
        charPool += includeSymbols;
        guaranteedChars.push(includeSymbols[Math.floor(Math.random() * includeSymbols.length)]);
      }
      if (isIncludeUppercase) {
        charPool += PasswordGenerator.DEFAULT_CHARS.UPPERCASE;
        guaranteedChars.push(
          PasswordGenerator.DEFAULT_CHARS.UPPERCASE[
            Math.floor(Math.random() * PasswordGenerator.DEFAULT_CHARS.UPPERCASE.length)
          ],
        );
      }
      if (isIncludeLowercase) {
        charPool += PasswordGenerator.DEFAULT_CHARS.LOWERCASE;
        guaranteedChars.push(
          PasswordGenerator.DEFAULT_CHARS.LOWERCASE[
            Math.floor(Math.random() * PasswordGenerator.DEFAULT_CHARS.LOWERCASE.length)
          ],
        );
      }

      if (!charPool) {
        set({ password: "" });
        return;
      }

      const remainingLength = length - guaranteedChars.length;
      const remainingChars = Array.from(
        { length: remainingLength },
        () => charPool[Math.floor(Math.random() * charPool.length)],
      );

      const passwordChars = [...guaranteedChars, ...remainingChars];
      for (let i = passwordChars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]]; // Swap
      }

      const generatedPassword = passwordChars.join("");
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
