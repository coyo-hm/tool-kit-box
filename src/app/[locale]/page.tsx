import { useTranslations } from "next-intl";
import { linkContainerStyle } from "@/app/[locale]/page.css";
import { Link } from "@/i18n/navigation";
import { buttonStyle } from "@/components/common/Button/button.css";
import CONSTANT from "@/constants";

const linkStyle = buttonStyle({
  size: "lg",
  color: "outline",
});

export default function Home() {
  const t = useTranslations();
  return (
    <div className={linkContainerStyle}>
      {CONSTANT.SERVICE_ID_LIST.map(serviceId => (
        <Link className={linkStyle} href={`/${serviceId}`} key={serviceId}>
          {t(`${serviceId}.title`)}
        </Link>
      ))}
    </div>
  );
}
