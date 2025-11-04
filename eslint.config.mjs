import nextConfig from "eslint-config-next";
import importPlugin from "eslint-plugin-import";

export default [
  ...nextConfig,
  importPlugin.configs.recommended,
  importPlugin.configs.typescript,
  {
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
];
