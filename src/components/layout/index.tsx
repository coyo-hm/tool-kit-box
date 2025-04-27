"use client";

import { PropsWithChildren, useState } from "react";
import { darkTheme } from "@/styles/theme.css";
import { contentStyle, layoutStyle, pageStyle } from "@/components/layout/layout.css";
import Background from "@/components/layout/Background";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

// interface Props extends PropsWithChildren{}

const Layout = ({ children }: PropsWithChildren) => {
  const [theme] = useState(darkTheme);

  return (
    <main className={`${theme} ${layoutStyle}`}>
      <Background />
      <div className={pageStyle}>
        <Nav />
        <section className={contentStyle}>{children}</section>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
