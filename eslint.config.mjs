/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import eslint from "@eslint/js";
// @ts-check
import * as tseslint from "typescript-eslint";
// @ts-expect-error invalid types
import tailwindPlugin from "eslint-plugin-tailwindcss";
import globals from "globals";
import { config_js } from "./eslint/config-js.mjs";
import { config_ts } from "./eslint/config-ts.mjs";
import { config_react } from "./eslint/config-react.mjs";
import { config_vitest } from "./eslint/config-vitest.mjs";
import { config_next } from "./eslint/config-next.mjs";
import { config_tailwind } from "./eslint/config-tailwind.mjs";

/** @type {any} */
const config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.serviceworker,
      },
      parserOptions: {
        project: ["./tsconfig.json", "./packages/*/tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["packages/**"],
    ...config_js,
  },
  {
    files: ["packages/**"],
    ...config_ts,
  },
  {
    files: ["packages/**"],
    ...config_vitest,
  },
  {
    files: ["packages/hooks/**"],
    ...config_react,
  },
  {
    files: ["apps/playground/**"],
    ...config_next,
  },
  {
    files: ["apps/playground/**"],
    ...config_tailwind,
  }
);

export default config;
