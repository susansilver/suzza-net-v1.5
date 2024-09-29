// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import favicons from "astro-favicons";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://suzza.net",
  integrations: [
    favicons({
      masterPicture: "public/suzza-fav-icon.png",
      emitAssets: true,
      faviconsDarkMode: false,
      path: "public/suzza-fav-icon.png",
      appName: "Suzza.net",
      appShortName: "Suzza.net",
    }),
    mdx(),
    tailwind(),
  ],
});
