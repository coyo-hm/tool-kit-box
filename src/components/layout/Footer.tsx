import Link from "next/link";
import { footerLinkStyle, footerStyle } from "@/components/layout/layout.css";
import GithubIcon from "@icons/github.svg";

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <Link
        href="https://github.com/coyo-hm/tool-kit-box"
        target={"_blank"}
        rel="noreferrer"
        className={footerLinkStyle}
      >
        <GithubIcon />
      </Link>
      <div id={"main-footer-copyright"} className={""}>
        © 2025 COYO All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
