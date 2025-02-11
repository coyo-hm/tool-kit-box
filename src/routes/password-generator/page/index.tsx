import { useState } from "react";
import { useTranslation } from "react-i18next";
import PasswordGenerator from "@constants/passwordGenerator";
import { formStyle } from "./index.css.ts";
import Button from "@components/Button";
import usePasswordGenerator from "../hooks/usePasswordGenerator.ts";
import PasswordOptions from "../components/PasswordOptions";
import PasswordOutput from "../components/PasswordOutput";

const PasswordGeneratorPage = () => {
  const { t } = useTranslation();

  const { password, generatePassword } = usePasswordGenerator();

  const [length, setLength] = useState(PasswordGenerator.NUMBER.DEFAULT);
  const [isIncludeNumbers, setIsIncludeNumbers] = useState(true);
  const [isIncludeSymbols, setIsIncludeSymbols] = useState(true);
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(true);
  const [isIncludeLowercase, setIsIncludeLowercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(PasswordGenerator.DEFAULT_CHARS.SYMBOL);

  const _generatePassword = () =>
    generatePassword({
      length,
      isIncludeNumbers,
      isIncludeSymbols,
      isIncludeUppercase,
      isIncludeLowercase,
      includeSymbols,
    });

  return (
    <form className={formStyle} onSubmit={e => e.preventDefault()}>
      <PasswordOptions
        length={length}
        setLength={setLength}
        isIncludeNumbers={isIncludeNumbers}
        setIsIncludeNumbers={setIsIncludeNumbers}
        isIncludeSymbols={isIncludeSymbols}
        setIsIncludeSymbols={setIsIncludeSymbols}
        isIncludeUppercase={isIncludeUppercase}
        setIsIncludeUppercase={setIsIncludeUppercase}
        isIncludeLowercase={isIncludeLowercase}
        setIsIncludeLowercase={setIsIncludeLowercase}
        includeSymbols={includeSymbols}
        setIncludeSymbols={setIncludeSymbols}
      />
      <Button type="button" onClick={_generatePassword} size={"lg"}>
        {t("password-generator.button.generate")}
      </Button>
      <PasswordOutput password={password} />
    </form>
  );
};

export default PasswordGeneratorPage;
