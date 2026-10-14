import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://finara.co.id";

// https://astro.build/config
export default defineConfig({
  site,
  base: "/",
  integrations: [
    sitemap({
      filter: (page) => page.startsWith(site.replace(/\/$/, "")),
    }),
  ],
});
