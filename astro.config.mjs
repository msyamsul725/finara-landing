import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://www.finara.co.id";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: (page) => page.startsWith(site.replace(/\/$/, "")),
    }),
  ],
});
