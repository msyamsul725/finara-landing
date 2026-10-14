/** Canonical production origin (no trailing slash). */
export const PRODUCTION_SITE_ORIGIN = "https://www.finara.co.id" as const;

/** Override at build with `SITE_URL` (Docker `.env`, CI, local). */
export const SITE_URL =
  (import.meta.env.SITE_URL as string | undefined) ?? PRODUCTION_SITE_ORIGIN;

export const site = {
  name: "Finara",
  tagline: "Atur Bersama, Tumbuh Bersama.",
  title: "Finara — Atur Bersama, Tumbuh Bersama",
  description:
    "Catat pemasukan dan pengeluaran, pahami laporan, dan kelola keuangan bersama orang terdekat dengan Finara.",
  locale: "id_ID",
  lang: "id",
} as const;

export const storeLinks = {
  appStore:
    "https://apps.apple.com/id/app/finara-catatan-keuangan/id6502823235",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.startnow.mobile&pcampaignid=web_share",
} as const;
