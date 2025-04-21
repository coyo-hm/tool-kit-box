import Button from "@/components/common/Button";
import CopyIcon from "@icons/copy.svg";
import { copyButtonIconStyle, copyButtonStyle } from "./copyButton.css";

interface CopyButtonProps {
  size?: "sm" | "md" | "lg" | "xl";
  onCopy: () => void;
}

const CopyButton = ({ onCopy, size = "md" }: CopyButtonProps) => {
  return (
    <Button onClick={onCopy} className={copyButtonStyle[size]} color={"secondary"}>
      <CopyIcon className={copyButtonIconStyle} />
    </Button>
  );
};

export default CopyButton;
