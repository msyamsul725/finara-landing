# Deploy Finara ke Cloudflare Pages

**Domain produksi (canonical):** https://finara.co.id  
**Redirect www → apex:** atur di **Cloudflare Dashboard** (bukan `public/_redirects` — Workers/Pages hanya menerima URL relatif di file itu).  
**Repo:** https://github.com/msyamsul725/finara-landing.git  
**Branch produksi:** `main`

Proyek ini **static Astro** (output `dist/`), **npm** + `package-lock.json` (bukan pnpm).

---

## Build & preview lokal

| Langkah | Perintah |
|---------|----------|
| **Build** | `npm run build` |
| **Preview (Cloudflare / Wrangler)** | `npx wrangler preview` (setelah build; butuh `wrangler login` untuk preview di edge) |
| **Preview cepat (Astro)** | `npm run preview` — opsional, tanpa Wrangler |

Verifikasi penuh sebelum push:

```bash
npm ci
npm run check
npm run build
npx wrangler preview
```

Harus ada di `dist/`: `index.html`, `privacy/index.html`, `terms/index.html`, `sitemap-index.xml`.

---

## Cloudflare Pages — buat proyek

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. GitHub → akun **msyamsul725** → repo **finara-landing**.
3. **Production branch:** `main`
4. **Framework preset:** *tidak dipilih* — UI Cloudflare saat ini langsung ke pengaturan build (tanpa pilih Astro/React/dll.).
5. **Build settings** (repo memakai **npm**, bukan pnpm):

| Field | Value |
|-------|--------|
| Path / Root directory | **`/`** (default) |
| Build command | `npm run build` |
| Preview command | `npx wrangler preview` |

Field **build output** / **output directory**: jika **tidak ada** di form, biarkan saja. Jika nanti muncul (versi UI lain), isi **`dist`** — itu folder hasil `npm run build`.

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

3. **Redirect www → apex** (301, pertahankan path & query):

   Cloudflare → **Rules** → **Redirect Rules** (atau **Bulk Redirects**) → contoh:

   - If: hostname equals `www.finara.co.id`
   - Then: dynamic redirect to `concat("https://finara.co.id", http.request.uri.path)` (query string: preserve)

   Atau cukup pasang **hanya** custom domain `finara.co.id` di Pages dan arahkan DNS `www` ke redirect rule di atas.

---

## Checklist setelah live

- [ ] https://finara.co.id/ — hero, mockup, animasi, FAQ, tombol App Store / Play Store
- [ ] https://finara.co.id/privacy/ dan `/terms/` — konten final (bukan placeholder draf)
- [ ] View source: `rel=canonical`, `og:url`, `og:image` pakai `https://finara.co.id`
- [ ] https://finara.co.id/robots.txt → Sitemap `https://finara.co.id/sitemap-index.xml`
- [ ] https://www.finara.co.id/ → 301 ke apex (path + query)
- [ ] Tidak ada `<meta name="robots" content="noindex">` di halaman publik

---

## Patch sendiri (update production)

Setelah Pages + domain sudah terpasang sekali, **Anda tidak perlu VPS/Docker** — cukup repo + Cloudflare.

### Alur singkat

1. Edit di lokal (konten, style, legal, dll.).
2. Verifikasi:

```bash
npm run check
npm run build
npx wrangler preview
```

3. Commit & push ke **`main`**:

```bash
git add -A
git commit -m "deskripsi perubahan"
git push origin main
```

4. Cloudflare → proyek **finara-landing** → **Deployments** — tunggu build **Success** (±2–5 menit).
5. Cek https://finara.co.id/ (hard refresh atau incognito).

### Jika build Pages gagal

- Log deploy → biasanya `npm ci` / Node: pastikan env **`NODE_VERSION=22`**.
- Canonical salah → env **`SITE_URL=https://finara.co.id`** (Production).
- Retry: **Deployments** → **Retry deployment** atau push commit kosong:  
  `git commit --allow-empty -m "retrigger pages" && git push`

### Yang jarang perlu diubah lagi

- Build / preview command (kecuali migrasi framework).
- DNS (kecuali pindah host atau ganti subdomain).
- Redirect www → apex lewat **Redirect Rules** Cloudflare, bukan file `_redirects` di repo.

Repo: https://github.com/msyamsul725/finara-landing.git · branch produksi: **`main`**
