"use client";

import { useTranslations } from "next-intl";
import { useQrStore } from "../_stores/qrStore";
import * as styles from "./qr.css";

const QrOptions = () => {
  const t = useTranslations();
  const options = useQrStore(state => state.options);
  const { updateOptions } = useQrStore(state => state.actions);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    updateOptions({ [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className={styles.optionsPanel}>
      <h3>{t("qr-generator.options.title")}</h3>

      <div>
        <label>{t("qr-generator.options.url")}</label>
        <input name="url" value={options.url} onChange={handleChange} placeholder="https://example.com" />
      </div>

      <div>
        <label>
          {t("qr-generator.options.size")} ({options.size}px)
        </label>
        <input
          type="range"
          name="size"
          min="128"
          max="512"
          value={options.size}
          onChange={e => updateOptions({ size: Number(e.target.value) })}
        />
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <label>{t("qr-generator.options.qr_color")}</label>
          <input type="color" name="fgColor" value={options.fgColor} onChange={handleChange} />
        </div>
        <div>
          <label>{t("qr-generator.options.bg_color")}</label>
          <input type="color" name="bgColor" value={options.bgColor} onChange={handleChange} />
        </div>
      </div>

      <div>
        <label>
          <input type="checkbox" name="includeMargin" checked={options.includeMargin} onChange={handleChange} />
          {t("qr-generator.options.is_included_margin")}
        </label>
      </div>
    </div>
  );
};

export default QrOptions;
