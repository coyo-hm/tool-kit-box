"use client";

import { PropsWithChildren } from "react";
import { RecoilProvider } from "@/providers/RecoilProvider";
import { QueryProvider } from "@/providers/QueryProvider";
import ThemeProvider from "@/providers/ThemeProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <RecoilProvider>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </RecoilProvider>
  );
}
