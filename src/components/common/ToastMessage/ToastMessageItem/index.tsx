"use client";

import CrossIcon from "@icons/cross.svg";
import { ToastMessageProps, useToastMessageContext } from "@/providers/ToastMessageProvider";
import { closeButtonStyle, toastMessageItemStyle } from "./toastMessageItem.css";

const ToastMessageItem = ({ id, message, type }: ToastMessageProps) => {
  const { removeToastMessage } = useToastMessageContext();

  return (
    <div role={"toastMessage"} className={toastMessageItemStyle[type || "info"]}>
      {message}
      <button
        onClick={() => removeToastMessage(id)}
        id={"btn-toast-close"}
        aria-label={"btn-toast-close"}
        className={closeButtonStyle}
      >
        <CrossIcon />
      </button>
    </div>
  );
};

export default ToastMessageItem;
