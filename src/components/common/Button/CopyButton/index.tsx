import Button from "@/components/common/Button";
import CopyIcon from "@icons/copy.svg";
import { copyButtonIconStyle, copyButtonStyle } from "./copyButton.css";
import { ButtonProps } from "@/components/common/Button/BaseButton";

interface CopyButtonProps extends ButtonProps{
  size?: "sm" | "md" | "lg" | "xl";
  onCopy: () => void;
}

const CopyButton = ({ onCopy, size = "md" ,className, ...rest}: CopyButtonProps) => {
  return (
    <Button onClick={onCopy} className={`${copyButtonStyle[size]} ${className}`} color={"secondary"} {...rest}>
      <CopyIcon className={copyButtonIconStyle} />
    </Button>
  );
};

export default CopyButton;
