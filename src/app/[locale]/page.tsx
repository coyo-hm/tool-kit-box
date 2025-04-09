import { useTranslations } from "next-intl";
import { linkContainerStyle } from "@/app/[locale]/page.css";
import { Link } from "@/i18n/navigation";
import { buttonStyle } from "@/components/common/Button/button.css";

const linkStyle = buttonStyle({
  size: "lg",
  color: "outline",
});

export default function Home() {
  const t = useTranslations();
  return (
    <div className={linkContainerStyle}>
      <Link className={linkStyle} href={"/password-generator"}>
        {t("password-generator.title")}
      </Link>
      <Link className={linkStyle} href={"/star-rating"}>
        {t("star-rating.title")}
      </Link>
    </div>
  );
}
