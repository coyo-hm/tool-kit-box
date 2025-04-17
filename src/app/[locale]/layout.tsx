import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import Providers from "@/providers";
import Layout from "@/components/layout";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={"en"}>
      {/*<html lang={locale}>*/}
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
