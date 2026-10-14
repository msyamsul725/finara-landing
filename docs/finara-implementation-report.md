# Laporan implementasi landing page Finara (Astro)

**Tanggal:** 8 Oktober 2026  
**Status layout:** selesai (semua section sumber dipetakan ke komponen Astro)  
**Status rilis:** belum siap — domain produksi / `SITE_URL` belum dikonfigurasi  

## Sumber referensi

| Item | Nilai |
| --- | --- |
| File | `reference/finara-landing-page-update.html` |
| SHA-256 | `ec81e4a73629897470f5bc9489dc96d19ef88dd8c738cd01284978788a3ad2e5` (sesuai panduan) |
| Node (lingkungan uji) | v22.15.0 |
| Package manager | npm (`pnpm-lock.yaml` ada di repo; instalasi dijalankan dengan npm + `engine-strict=false`) |

## Ringkasan

Landing page Finara dari HTML referensi dimigrasikan ke proyek Astro (basis Astroship) sebagai **satu halaman static** (`/`). Seluruh section, copy Indonesia, SVG sprite, screenshot asli, store link, FAQ native, animasi, dan CSS cascade sumber (termasuk override storytelling & screenshot) dipertahankan. Route demo Astroship (blog, pricing, contact, about, 404) dihapus.

## Pemetaan section (12 kelompok)

| # | Komponen | Status |
| --- | --- | --- |
| 1 | `IconSprite.astro` | ✅ |
| 2 | `Header.astro` | ✅ sticky, anchor, menu mobile + Escape |
| 3 | `Hero.astro` | ✅ |
| 4 | `HeroMockups.astro` | ✅ screenshot Home/Laporan, desktop, orbit, floating cards |
| 5 | `BenefitsStrip.astro` | ✅ |
| 6 | `Features.astro` | ✅ |
| 7 | `ProductStory.astro` (+ wallet / line / budget) | ✅ |
| 8 | `Together.astro` | ✅ |
| 9 | `GettingStarted.astro` | ✅ |
| 10 | `Faq.astro` | ✅ 5 Q&A, pertama `open` |
| 11 | `DownloadCta.astro` + `StoreButtons.astro` | ✅ |
| 12 | `Footer.astro` | ✅ |

Urutan di `src/pages/index.astro` mengikuti tabel panduan.

## Perbedaan disengaja

1. **Hero copy tanpa entrance animation** — teks H1/CTA langsung terlihat; animasi mockup tetap (sesuai §6 panduan).
2. **Stagger fitur** — delay dihitung per index `.feature` lokal (0 / 130 / 260 ms), bukan index global NodeList.
3. **Fallback tanpa JS / reduced motion** — garis chart & progress bar tampil penuh; angka `data-count` tetap readable; reveal nonaktif saat `prefers-reduced-motion`.
4. **Domain produksi** — `SITE_URL` / `site` Astro tidak diisi; canonical absolut & sitemap produksi sengaja tidak di-generate.

## Aset

- Screenshot JPEG asli: `src/assets/images/finara-home.jpg`, `finara-report.jpg` (diekstrak dari base64 sumber; Laporan sebelum Home di markup).
- Build: gambar dioptimasi via `astro:assets` (webp responsif); **tidak ada base64** di `dist/index.html`.
- Favicon: `public/favicon.svg`
- OG: `public/og-finara.png` (1200×630, identitas Finara — bukan screenshot 720×1600)

## SEO & aksesibilitas

- `lang="id"`, satu H1, landmark header/main/footer, skip link.
- Metadata + OG/Twitter di `FinaraLayout.astro` (satu sumber).
- JSON-LD `MobileApplication` (nama, deskripsi, kategori, link store; tanpa rating/review).
- Font lokal: `@fontsource/sora`, `@fontsource/dm-sans` (bobot yang dipakai saja).

## Konfigurasi rilis (belum lengkap)

Setelah domain tersedia:

1. Set `SITE_URL=https://domain-anda` saat build **atau** isi `site` di `astro.config.mjs`.
2. Verifikasi canonical & OG URL absolut.
3. Uncomment / tambahkan `Sitemap:` di `public/robots.txt`.
4. Jalankan ulang `npm run build`.

## Perintah & hasil

| Perintah | Hasil |
| --- | --- |
| `npm install` | ✅ (dengan `.npmrc` `engine-strict=false` pada Node 22.15.0) |
| `npm run check` | ✅ 0 errors |
| `npm run build` | ✅ 1 halaman (`/index.html`) |
| `npm run preview` | ✅ http://localhost:4321/ |

### Lighthouse (lab, preview lokal)

Waktu: ~17:01–17:02 WIB, URL: `http://localhost:4321/`  
Artefak: `docs/lighthouse-mobile.json`, `docs/lighthouse-desktop.json`

| Mode | Performance | A11y | Best | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| Mobile (simulated) | **53** | **95** | **100** | **100** | 12.9 s | 0 |
| Desktop | **71** | **95** | **100** | **100** | 2.7 s | **0** |

**Catatan:** Target panduan (mobile Performance ≥90, LCP ≤2.5 s) **belum tercapai** pada pengukuran lab mobile ini (throttling Lighthouse + beban font/gambar hero). Desktop LCP mendekati target. INP tidak diukur (bukan field data).

### Pemeriksaan manual

- Snapshot a11y browser (preview): struktur heading, FAQ, store links, footer terbaca.
- Screenshot hero (viewport lebar ~1440): `docs/preview-hero-1440.png`
- Matriks full-page 360 / 390 / 768 / 1024 / 1440 **belum** difoto semua; disarankan review visual manual sebelum rilis.

## File utama yang ditambah/diubah

- `src/layouts/FinaraLayout.astro`
- `src/pages/index.astro`
- `src/components/finara/*` (13 komponen)
- `src/styles/finara.css` (CSS sumber + patch fallback animasi)
- `src/scripts/landing.ts`
- `src/config/site.ts`, `src/data/landing.ts`
- `src/assets/images/finara-*.jpg`
- `public/favicon.svg`, `public/og-finara.png`, `public/robots.txt`
- `astro.config.mjs` (sitemap kondisional, integrasi demo dihapus)
- `package.json` (nama `finara`, script `check`, font packages)
- Dihapus: halaman & komponen demo Astroship, konten blog

## Temuan terbuka

1. **Domain / sitemap produksi** — menunggu URL final dari pemilik produk.
2. **Performa mobile lab** — di bawah target; optimasi lanjutan (subset font, prioritas LCP image, audit bundle CSS) disarankan sebelum rilis.
3. **Parity visual 100%** — belum divalidasi dengan screenshot per viewport side-by-side; layout mengikuti CSS referensi penuh.
4. **Upgrade Node** — dependency `undici` merekomendasikan Node ≥22.19.0; saat ini install memakai `engine-strict=false`.

## Kesimpulan

**Implementasi layout Finara di Astro selesai** dan lulus `astro check` + build static. **Siap rilis** setelah domain dikonfigurasi, verifikasi visual multi-viewport, dan perbaikan performa mobile jika diperlukan untuk target Lighthouse.
