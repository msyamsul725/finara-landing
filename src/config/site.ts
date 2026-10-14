/** Production URL — set when domain is available (e.g. https://finara.app). */
export const SITE_URL = import.meta.env.SITE_URL ?? undefined;

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
