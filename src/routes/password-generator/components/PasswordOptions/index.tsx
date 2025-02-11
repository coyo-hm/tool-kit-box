import { useTranslation } from "react-i18next";
import Slider from "@components/Slider";
import Input from "@components/Input";
import {
  checkContainerStyle,
  containerStyle,
  lengthContainerStyle,
  lengthInputStyle,
  symbolCheckStyle,
  symbolInputStyle,
  titleStyle,
} from "./passwordOptions.css.ts";
import PasswordGenerator from "@constants/passwordGenerator.ts";
import Checkbox from "@components/Checkbox";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  length: number;
  setLength: (value: number) => void;
  isIncludeNumbers: boolean;
  setIsIncludeNumbers: (value: boolean) => void;
  isIncludeSymbols: boolean;
  setIsIncludeSymbols: (value: boolean) => void;
  isIncludeUppercase: boolean;
  setIsIncludeUppercase: (value: boolean) => void;
  isIncludeLowercase: boolean;
  setIsIncludeLowercase: (value: boolean) => void;
  includeSymbols: string;
  setIncludeSymbols: (value: string) => void;
}

const PasswordOptions = ({
  length,
  setLength,
  isIncludeNumbers,
  setIsIncludeNumbers,
  isIncludeSymbols,
  setIsIncludeSymbols,
  isIncludeUppercase,
  setIsIncludeUppercase,
  isIncludeLowercase,
  setIsIncludeLowercase,
  includeSymbols,
  setIncludeSymbols,
}: Props) => {
  const { t } = useTranslation();
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    if (isIncludeNumbers && isIncludeUppercase && isIncludeLowercase && isIncludeSymbols) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [isIncludeNumbers, isIncludeUppercase, isIncludeLowercase, isIncludeSymbols]);

  // const onChangeLength = (e: ChangeEvent<HTMLInputElement>) => {
  //   const num = Number(e.target.value);
  //   if (num < PasswordGenerator.NUMBER.MIN) {
  //     return;
  //   }
  //   if (num > PasswordGenerator.NUMBER.MAX) {
  //     return;
  //   }
  //   setLength(num);
  // };

  const onToggleIsAllChecked = () => {
    const newState = !isAllChecked;
    setIsIncludeNumbers(newState);
    setIsIncludeUppercase(newState);
    setIsIncludeLowercase(newState);
    setIsIncludeSymbols(newState);
    setIsAllChecked(newState);
  };

  const onChangeSymbols = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIncludeSymbols(
      value
        .split("")
        .reduce((letters, l) => (PasswordGenerator.DEFAULT_CHARS.SYMBOL.includes(l) ? letters + l : letters), ""),
    );
  };

  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>⚙️ {t("password-generator.form.option")} ⚙️</h2>
      <div className={lengthContainerStyle}>
        <label>{t("password-generator.form.length")}</label>
        <Slider
          type="range"
          min={PasswordGenerator.NUMBER.MIN}
          max={PasswordGenerator.NUMBER.MAX}
          step={1}
          value={length}
          onChange={e => setLength(Number(e.target.value))}
        />
        <Input value={length} disabled className={lengthInputStyle} />
      </div>
      <Checkbox
        id={"all-check"}
        label={t("password-generator.form.included_char")}
        size={"lg"}
        checked={isAllChecked}
        onClick={onToggleIsAllChecked}
      />
      <div className={checkContainerStyle}>
        <Checkbox
          id={"include-numbers"}
          label={t("password-generator.form.is_included_num")}
          checked={isIncludeNumbers}
          onClick={() => setIsIncludeNumbers(!isIncludeNumbers)}
        />
        <Checkbox
          id={"include-upper"}
          label={t("password-generator.form.is_included_upper")}
          checked={isIncludeUppercase}
          onClick={() => setIsIncludeUppercase(!isIncludeUppercase)}
        />
        <Checkbox
          id={"include-lower"}
          label={t("password-generator.form.is_included_lower")}
          checked={isIncludeLowercase}
          onClick={() => setIsIncludeLowercase(!isIncludeLowercase)}
        />
        <div className={symbolCheckStyle}>
          <Checkbox
            id={"include-symbols"}
            label={t("password-generator.form.is_included_sym")}
            checked={isIncludeSymbols}
            onClick={() => setIsIncludeSymbols(!isIncludeSymbols)}
          />
          <Input value={includeSymbols} styleSize={"sm"} onChange={onChangeSymbols} className={symbolInputStyle} />
        </div>
      </div>
    </div>
  );
};
export default PasswordOptions;
