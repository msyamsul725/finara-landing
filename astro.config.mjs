import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  integrations: [
    sitemap({
      filter: (page) => {
        if (!site) return false;
        return page === `${site}/` || page === site;
      },
    }),
  ],
});
