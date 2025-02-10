import { PropsWithChildren, useState } from "react";
import { darkTheme } from "@styles/theme.css.ts";
import { mainStyle, sectionStyle } from "./layout.css.ts";
import Background from "./Background.tsx";
import Nav from "./Nav.tsx";

// interface Props extends PropsWithChildren{}

const Layout = ({ children }: PropsWithChildren) => {
  const [theme] = useState(darkTheme);

  return (
    <main className={`${theme} ${mainStyle}`}>
      <Background />
      <Nav />
      <section className={sectionStyle}>{children}</section>
    </main>
  );
};

export default Layout;
