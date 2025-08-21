// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export const locales = ["fr", "en"];
export const DEFAULT_LOCALE = "en";

// https://astro.build/config
export default defineConfig({
  site: "https://www.qasten.com",
  i18n: {
    locales,
    defaultLocale: DEFAULT_LOCALE,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
});
