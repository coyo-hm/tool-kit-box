import { useRef } from "react";
import { saveElementAsPng } from "@/utils/saveElementAsPng";


export const useQrActions = () => {
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQr = async (url: string) => {
    if (!qrRef.current) return;
    const fileName = `qr-${new Date().getTime()}`;
    await saveElementAsPng(qrRef.current, fileName);
  };

  return { qrRef, downloadQr };
};
