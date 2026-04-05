"use client";

import { useTranslations } from "next-intl";
import { QRCodeSVG } from "qrcode.react";
import { isValidUrl } from "@/utils/validation";
import { useQrStore } from "../_stores/qrStore";
import { useQrActions } from "../_hooks/useQrActions";
import * as styles from "./qr.css";


const QrPreview = () => {const t = useTranslations();
  const options = useQrStore(state => state.options);
  const isUrlValid = isValidUrl(options.url);
  const { qrRef, downloadQr } = useQrActions();


  return (
    <div className={styles.previewPanel}>
      <div ref={qrRef} className={styles.qrWrapper}>
        <QRCodeSVG
          value={options.url || " "}
          size={options.size}
          fgColor={options.fgColor}
          bgColor={options.bgColor}
          marginSize={options.includeMargin ? 4 : 0}
          level="H"
        />
      </div>
      <button
        onClick={() => downloadQr(options.url)}
        disabled={!isUrlValid}
        // className={isUrlValid ? styles.activeButton : styles.disabledButton}
      >
        {t("qr-generator.buttons.save_as_png")}
      </button>
    </div>
  );
};

export default QrPreview;