import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PasswordGenerator from "@constants/passwordGenerator.ts";
import { type PasswordOptions } from "@routes/password-generator/hooks/usePasswordGenerator.ts";
import Slider from "@components/Slider";
import Input from "@components/Input";
import Checkbox from "@components/Checkbox";
import {
  checkContainerStyle,
  containerStyle,
  lengthContainerStyle,
  lengthInputStyle,
  symbolCheckStyle,
  symbolInputStyle,
  titleStyle,
} from "./passwordOptions.css.ts";

interface Props {
  passwordOptions: PasswordOptions;
  setPasswordOptions: Dispatch<SetStateAction<PasswordOptions>>;
}

const PasswordOptions = ({ passwordOptions, setPasswordOptions }: Props) => {
  const { t } = useTranslation();
  const { length, includeSymbols, isIncludeNumbers, isIncludeUppercase, isIncludeLowercase, isIncludeSymbols } =
    passwordOptions;
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
    setPasswordOptions(prev => ({
      ...prev,
      isIncludeNumbers: newState,
      isIncludeUppercase: newState,
      isIncludeLowercase: newState,
      isIncludeSymbols: newState,
    }));
    setIsAllChecked(newState);
  };

  const onChangeSymbols = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordOptions(prev => ({
      ...prev,
      includeSymbols: value
        .split("")
        .reduce((letters, l) => (PasswordGenerator.DEFAULT_CHARS.SYMBOL.includes(l) ? letters + l : letters), ""),
    }));
  };

  const onClickCheckbox = (event: MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (!target) {
      return;
    }

    setPasswordOptions(prev => ({
      ...prev,
      [target.id]: target.checked,
    }));
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
          onChange={e => setPasswordOptions(prev => ({ ...prev, length: Number(e.target.value) }))}
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
          id={"isIncludeNumbers"}
          label={t("password-generator.form.is_included_num")}
          checked={isIncludeNumbers}
          onClick={onClickCheckbox}
        />
        <Checkbox
          id={"isIncludeUppercase"}
          label={t("password-generator.form.is_included_upper")}
          checked={isIncludeUppercase}
          onClick={onClickCheckbox}
        />
        <Checkbox
          id={"isIncludeLowercase"}
          label={t("password-generator.form.is_included_lower")}
          checked={isIncludeLowercase}
          onClick={onClickCheckbox}
        />
        <div className={symbolCheckStyle}>
          <Checkbox
            id={"isIncludeSymbols"}
            label={t("password-generator.form.is_included_sym")}
            checked={isIncludeSymbols}
            onClick={onClickCheckbox}
          />
          <Input value={includeSymbols} styleSize={"sm"} onChange={onChangeSymbols} className={symbolInputStyle} />
        </div>
      </div>
    </div>
  );
};
export default PasswordOptions;
