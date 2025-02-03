import { PropsWithChildren } from "react";
import Background from "@components/Background.tsx";
import { css } from "@emotion/react";
import Nav from "@components/Nav.tsx";

// interface Props extends PropsWithChildren{}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main
      css={css`
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      `}
    >
      <Background />
      <Nav />
      <section
        css={css`
          width: 100%;
          overflow: auto;
          flex: 1 1 0;
          z-index: 1;
        `}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
