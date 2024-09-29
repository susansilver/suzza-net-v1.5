// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import favicons from "astro-favicons";
import embeds from "astro-embed/integration";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import betterImageService from "astro-better-image-service";

import playformCompress from "@playform/compress";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://suzza.net",
  integrations: [
    favicons({
      masterPicture: "public/suzza-fav-icon.png",
      emitAssets: true,
      faviconsDarkMode: false,
      path: "icons/",
      appName: "Suzza.net",
      appShortName: "Suzza.net",
    }),
    embeds(),
    mdx(),
    tailwind(),
    sitemap(),
    betterImageService(),
    (await import("@playform/compress")).default({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: false,
    }),
    compressor(),
  ],
});
