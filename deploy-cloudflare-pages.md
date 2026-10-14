# Deploy Finara ke Cloudflare Pages

**Domain produksi (canonical):** https://finara.co.id  
**Redirect:** `www.finara.co.id` → `https://finara.co.id` (301, path + query) via `public/_redirects`  
**Repo:** https://github.com/CloudnowDevelopment/finara-landing.git  
**Branch produksi:** `main`

Proyek ini **static Astro** (output `dist/`), **npm** + `package-lock.json` (bukan pnpm).

---

## Build lokal (verifikasi)

```bash
npm ci
npm run check
npm run build
```

Harus ada: `dist/index.html`, `dist/privacy/index.html`, `dist/terms/index.html`, `dist/sitemap-index.xml`, `dist/_redirects`.

---

## Cloudflare Pages — buat proyek

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. GitHub → org **CloudnowDevelopment** → repo **finara-landing**.
3. **Production branch:** `main`
4. **Framework preset:** Astro
5. **Build settings** (sesuaikan — repo memakai **npm**, bukan pnpm):

| Field | Value |
|-------|--------|
| Root directory | *(kosong)* |
| Build command | `npm run build` |
| Build output directory | `dist` |

6. **Environment variables** (Production + Preview):

| Name | Value |
|------|--------|
| `NODE_VERSION` | `22` |
| `SITE_URL` | `https://finara.co.id` |

7. **Save and Deploy** — tunggu build hijau; uji URL `*.pages.dev`.

---

## Custom domains & DNS

Setelah `*.pages.dev` OK:

1. Pages project → **Custom domains** → tambah **`finara.co.id`** dan **`www.finara.co.id`**.
2. Di **DNS** zona `finara.co.id` (Hostinger nameserver → Cloudflare, atau DNS di Cloudflare):

   - **Hapus / ganti** A record lama ke `2.57.91.91` untuk `@` dan `www` (hanya record **web**; jangan ubah **MX**, **TXT** email/SPF/DKIM).
   - Ikuti petunjuk Pages (biasanya **CNAME** `www` → `<project>.pages.dev` dan **CNAME/flatten** apex `@` → Pages).

3. Redirect **www → apex** sudah di **`public/_redirects`**; pastikan domain `www` tetap terpasang di Pages agar request sampai ke edge.

---

## Checklist setelah live

- [ ] https://finara.co.id/ — hero, mockup, animasi, FAQ, tombol App Store / Play Store
- [ ] https://finara.co.id/privacy/ dan `/terms/` — konten final (bukan placeholder draf)
- [ ] View source: `rel=canonical`, `og:url`, `og:image` pakai `https://finara.co.id`
- [ ] https://finara.co.id/robots.txt → Sitemap `https://finara.co.id/sitemap-index.xml`
- [ ] https://www.finara.co.id/ → 301 ke apex (path + query)
- [ ] Tidak ada `<meta name="robots" content="noindex">` di halaman publik

---

## Update konten

Push ke `main` → Pages rebuild otomatis.

```bash
git push origin main
```
