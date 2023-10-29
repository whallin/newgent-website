import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en-US", sv: "sv-SE" } },
    }),
    partytown(),
  ],
  site: "https://newgent.digital",
});
