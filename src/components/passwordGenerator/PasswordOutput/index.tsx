"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import { usePasswordStore } from "@/stores/passwordGenerator";
import Input from "@/components/common/Input";
import { CopyButton } from "@/components/common/Button";
import * as styles from "./passwordOutput.css";
import EyeIcon from "@icons/eye.svg";
import EyeClosedIcon from "@icons/eye-closed.svg";
import { useToastMessageContext } from "@/providers/ToastMessageProvider";

const PasswordOutput = () => {
  const t = useTranslations();
  const { password } = usePasswordStore(state => state);
  const [showPassword, setShowPassword] = useState(false);
  const { showToastMessage } = useToastMessageContext();

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      showToastMessage({ type: "info", message: t("common.toast.copy_success") });
    } catch (e) {
      console.error(e);
    }
  };

  const coloredPassword = useMemo(() => {
    if (!showPassword) return null; // 비밀번호 숨김 상태일 때는 렌더링 안 함

    return password.split("").map((char, index) => {
      let charClass = "";
      if (/[A-Z]/.test(char)) charClass = styles.charUpper;
      else if (/[a-z]/.test(char)) charClass = styles.charLower;
      else if (/[0-9]/.test(char)) charClass = styles.charNumber;
      else if (/[^A-Za-z0-9\s]/.test(char)) charClass = styles.charSymbol;

      return (
        <span key={index} className={charClass}>
          {char}
        </span>
      );
    });
  }, [password, showPassword]);

  return (
    <div className={styles.outputStyle}>
      <div className={styles.inputContainerStyle}>
        {showPassword && (
          <div className={styles.backdropStyle} aria-hidden="true">
            {coloredPassword}
          </div>
        )}
        <Input
          value={password}
          readOnly={true}
          className={`${styles.inputStyle} ${showPassword ? styles.transparentInputStyle:""}`}
          type={showPassword ? "text" : "password"}
          rightIcon={
            <button className={styles.buttonPasswordStyle} onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
            </button>
          }
        />
      </div>
      <CopyButton onCopy={onCopy} />
    </div>
  );
};
export default PasswordOutput;
