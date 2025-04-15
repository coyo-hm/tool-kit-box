import { PropsWithChildren } from "react";
import ThemeProvider from "@/providers/ThemeProvider";
import IntlProvider from "@/providers/IntlProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <IntlProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </IntlProvider>
  );
}
