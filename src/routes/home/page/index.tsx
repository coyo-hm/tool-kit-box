import { Link as ReactLink, LinkProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { linkContainerStyle } from "./index.css.ts";
import { buttonStyle } from "@components/Button/button.css.ts";

const Link = (props: LinkProps) => <ReactLink {...props} className={buttonStyle({ size: "lg", color: "outline" })} />;

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className={linkContainerStyle}>
      <Link to={"/password-generator"}>{t("password-generator.title")}</Link>
      {/*<Link to={"/star-rating"}>{t("star-rating.title")}</Link>*/}
    </div>
  );
};
export default HomePage;
