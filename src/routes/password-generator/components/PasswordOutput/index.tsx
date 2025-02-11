import { useState } from "react";
import Button from "@components/Button";
import Input from "@components/Input";
import CopyIcon from "../../../../../public/assets/copy.svg?react";
import EyeIcon from "../../../../../public/assets/eye.svg?react";
import EyeClosedIcon from "../../../../../public/assets/eye-closed.svg?react";
import {
  buttonCopyStyle,
  buttonPasswordStyle,
  inputContainerStyle,
  inputStyle,
  outputStyle,
} from "./passwordOutput.css.ts";

interface Props {
  password: string;
}

const PasswordOutput = ({ password }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={outputStyle}>
      <div className={inputContainerStyle}>
        <Input value={password} readOnly={true} className={inputStyle} type={showPassword ? "text" : "password"} />
        <button className={buttonPasswordStyle} onClick={() => setShowPassword(prev => !prev)}>
          {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
        </button>
      </div>
      <Button onClick={onCopy} className={buttonCopyStyle} color={"secondary"}>
        <CopyIcon />
      </Button>
    </div>
  );
};
export default PasswordOutput;
