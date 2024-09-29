// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import favicons from "astro-favicons";
import embeds from "astro-embed/integration";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import betterImageService from "astro-better-image-service";

// https://astro.build/config
export default defineConfig({
  site: "https://suzza.net",
  integrations: [favicons({
    masterPicture: "public/suzza-fav-icon.png",
    emitAssets: true,
    faviconsDarkMode: false,
    path: "public/suzza-fav-icon.png",
    appName: "Suzza.net",
    appShortName: "Suzza.net",
  }), embeds(), mdx(), tailwind(), sitemap(), betterImageService()],
});