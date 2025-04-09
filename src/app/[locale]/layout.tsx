import { ReactNode } from "react";
import Providers from "@/providers";

export default function LocaleLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <Providers>{children}</Providers>;
}
