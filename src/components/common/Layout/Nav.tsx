import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navStyle } from "./layout.css.ts";
import CONSTANT from "@src/constants";

const Nav = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <nav className={navStyle}>
      <Link to="/">{CONSTANT.TITLE}</Link>
      {pathname !== "/" && (
        <>
          <span>/</span>
          <Link to={pathname}>{t(`${pathname.slice(1)}.title`)}</Link>
        </>
      )}
    </nav>
  );
};
export default Nav;
