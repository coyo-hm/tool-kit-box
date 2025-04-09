import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withNextIntl = createNextIntlPlugin();
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
};

export default withVanillaExtract(withNextIntl(nextConfig));
