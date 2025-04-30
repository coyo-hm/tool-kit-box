"use client";

import { useToastMessageContext } from "@/providers/ToastMessageProvider";
import ToastMessageItem from "@/components/common/ToastMessage/ToastMessageItem";
import { toastMessageListStyle } from "./toastMessageList.css";

const ToastMessageList = () => {
  const { toastMessages } = useToastMessageContext();
  return (
    <div role={"alertdialog"} aria-label={"alertdialog-to"} aria-live={"polite"} className={toastMessageListStyle}>
      {toastMessages.map(toastMessage => (
        <ToastMessageItem key={toastMessage.id} {...toastMessage} />
      ))}
    </div>
  );
};
export default ToastMessageList;
