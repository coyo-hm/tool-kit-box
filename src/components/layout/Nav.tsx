import { navStyle } from "./layout.css";
import CONSTANT from "@/constants";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const Nav = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <nav className={navStyle}>
      <Link href="/">{CONSTANT.TITLE}</Link>
      {pathname !== "/" && (
        <>
          <span>/</span>
          <Link href={pathname}>{t(`${pathname.slice(1)}.title`)}</Link>
        </>
      )}
    </nav>
  );
};
export default Nav;
