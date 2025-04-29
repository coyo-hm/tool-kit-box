"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePasswordStore } from "@/stores/passwordGenerator";
import Input from "@/components/common/Input";
import { CopyButton } from "@/components/common/Button";
import {
  buttonPasswordStyle,
  inputContainerStyle,
  inputStyle,
  outputStyle,
} from "@/components/passwordGenerator/PasswordOutput/passwordOutput.css";
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

  return (
    <div className={outputStyle}>
      <div className={inputContainerStyle}>
        <Input
          value={password}
          readOnly={true}
          className={inputStyle}
          type={showPassword ? "text" : "password"}
          rightIcon={
            <button className={buttonPasswordStyle} onClick={() => setShowPassword(prev => !prev)}>
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
