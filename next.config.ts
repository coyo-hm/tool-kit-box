import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withNextIntl = createNextIntlPlugin();
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  webpack: config => {
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default withVanillaExtract(withNextIntl(nextConfig));
