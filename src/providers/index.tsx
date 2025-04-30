import { PropsWithChildren } from "react";
import IntlProvider from "@/providers/IntlProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import ToastMessageProvider from "@/providers/ToastMessageProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <IntlProvider>
      <ThemeProvider>
        <ToastMessageProvider>{children}</ToastMessageProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}
