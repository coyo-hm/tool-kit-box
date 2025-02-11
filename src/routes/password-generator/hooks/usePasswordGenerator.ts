import { useState } from "react";
import PasswordGenerator from "@constants/passwordGenerator";

export interface PasswordOptions {
  length: number;
  isIncludeNumbers: boolean;
  isIncludeSymbols: boolean;
  isIncludeUppercase: boolean;
  isIncludeLowercase: boolean;
  includeSymbols?: string;
}

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const generatePassword = ({
    length,
    isIncludeLowercase,
    isIncludeSymbols,
    isIncludeUppercase,
    isIncludeNumbers,
    includeSymbols = PasswordGenerator.DEFAULT_CHARS.SYMBOL,
  }: PasswordOptions) => {
    let charPool = "";
    if (isIncludeNumbers) charPool += PasswordGenerator.DEFAULT_CHARS.NUMBER;
    if (isIncludeSymbols) charPool += includeSymbols;
    if (isIncludeUppercase) charPool += PasswordGenerator.DEFAULT_CHARS.UPPERCASE;
    if (isIncludeLowercase) charPool += PasswordGenerator.DEFAULT_CHARS.LOWERCASE;

    if (!charPool) return;

    const generatedPassword = Array.from({ length }, () => charPool[Math.floor(Math.random() * charPool.length)]).join(
      "",
    );
    setPassword(generatedPassword);
  };
  return { password, generatePassword };
};

export default usePasswordGenerator;
