import { PropsWithChildren } from "react";
import ThemeProvider from "@src/providers/ThemeProvider.tsx";

const AppProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default AppProvider;
