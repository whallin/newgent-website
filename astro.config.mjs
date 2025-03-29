// @ts-check
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://newgent.digital",
  trailingSlash: "ignore",

  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    icon(),
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "sv",
        locales: {
          en: "en-GB",
          sv: "sv-SE",
        },
      },
    }),
  ],

  compressHTML: true,
  scopedStyleStrategy: "attribute",

  security: {
    checkOrigin: true,
  },

  build: {
    inlineStylesheets: "auto",
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  image: {
    domains: ["newgent.digital", "picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newgent.digital",
      },
      {
        protocol: "https",
        hostname: "**.picsum.photos",
      },
    ],
  },

  markdown: {
    shikiConfig: {
      wrap: true,
    },
    gfm: true,
    smartypants: true,
  },

  i18n: {
    defaultLocale: "sv",
    locales: ["en", "sv"],
    fallback: {
      en: "sv",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
