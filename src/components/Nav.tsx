import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import CONSTANT from "@src/constants";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav
      css={css`
        background-color: #00000080;
        flex: 0 0 1;
        z-index: 1;
        padding: 20px;
      `}
    >
      <Link
        to="/"
        css={{
          fontSize: "2rem",
          fontWeight: 900,
        }}
      >
        {CONSTANT.TITLE}
      </Link>
      {pathname !== "/" && ` / ${pathname.slice(1)}`}
    </nav>
  );
};
export default Nav;
