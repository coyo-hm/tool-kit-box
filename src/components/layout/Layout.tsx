import { PropsWithChildren, useState } from "react";
import { darkTheme } from "@styles/theme.css.ts";
import { contentStyle, layoutStyle, pageStyle } from "./layout.css.ts";
import Background from "./Background.tsx";
import Nav from "./Nav.tsx";

// interface Props extends PropsWithChildren{}

const Layout = ({ children }: PropsWithChildren) => {
  const [theme] = useState(darkTheme);

  return (
    <main className={`${theme} ${layoutStyle}`}>
      <Background />
      <div className={pageStyle}>
        <Nav />
        <section className={contentStyle}>{children}</section>
      </div>
    </main>
  );
};

export default Layout;
