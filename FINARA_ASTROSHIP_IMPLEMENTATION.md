# Implementasi lengkap landing page Finara ke Astroship

## Instruksi utama untuk agent IDE

Implementasikan seluruh landing page dari `finara-landing-page-update(2).html` ke proyek Astroship yang sudah di-clone dalam folder `finara`. Kerjakan implementasi nyata sampai build dan pemeriksaan selesai. Jangan berhenti pada rencana, scaffold, atau beberapa section saja.

Gunakan **Astro.js**, komponen `.astro`, TypeScript untuk konfigurasi/data/script, dan output static. Astroship menjadi dasar proyek; HTML Finara menjadi sumber desain, konten, screenshot, dan animasi. Jangan mengganti desain Finara dengan tampilan bawaan Astroship.

Target “100% terimplementasi” berarti semua elemen, section, aset, interaksi, dan animasi sumber sudah dipetakan dan diverifikasi. Jangan menyatakan kesamaan visual 100% atau skor performa tanpa bukti pemeriksaan. Perbedaan yang disengaja harus dicatat.

## 1. Bahan dan persiapan

Pengguna sudah menjalankan:

```sh
git clone https://github.com/surjithctly/astroship.git finara
```

Pengguna: letakkan file HTML terlampir di `finara/reference/finara-landing-page-update(2).html`, lalu letakkan panduan ini di root `finara`. Buka folder `finara` pada IDE dan minta agent mengikuti seluruh instruksi ini.

Agent: cari file sumber tersebut sebelum mengubah proyek. Jika tidak tersedia, laporkan file yang dibutuhkan; jangan membuat ulang tampilan berdasarkan tebakan. Jangan menggunakan path scratch ChatGPT pada komputer pengguna.

Identitas sumber yang diperiksa untuk panduan ini:

```text
Nama: finara-landing-page-update(2).html
SHA-256: ec81e4a73629897470f5bc9489dc96d19ef88dd8c738cd01284978788a3ad2e5
Screenshot tertanam: 2 gambar JPEG, masing-masing 720 × 1600
```

Jika checksum berbeda, baca ulang sumber aktual dan dokumentasikan versi yang digunakan. Jangan menimpa HTML referensi. File ini juga merupakan sumber dua screenshot, sehingga implementasi tidak bergantung pada file WhatsApp terpisah.

Sebelum edit, baca `AGENTS.md` jika ada, `package.json`, lockfile, `astro.config.mjs`, `tsconfig.json`, layout, global CSS, komponen, serta halaman bawaan. Periksa `git status`; pertahankan perubahan pengguna. Catat versi Node yang dibutuhkan berdasarkan dependency aktual, bukan angka versi dari README template.

Gunakan package manager sesuai lockfile proyek. Repo ini menyediakan `pnpm-lock.yaml`; prioritaskan pnpm jika tersedia. Jangan menambahkan lockfile kedua atau menjalankan upgrade massal. Jika menggunakan npm sebagai pengganti, rapikan pilihan package manager secara sengaja dan dokumentasikan perubahan.

## 2. Batas implementasi dan identitas Finara

- Pertahankan seluruh teks Indonesia dari HTML, urutan section, SVG logo, ikon, label data contoh, screenshot, CTA, dan footer.
- Tagline: **Atur Bersama, Tumbuh Bersama.**
- Heading memakai Sora; body memakai DM Sans. Pertahankan bobot dan metrik font agar layout tidak bergeser.
- Token warna: green `#0E6B50`, forest `#09432F`, sage `#2A9970`, gold `#F0A830`, background `#F3F7F5`, ink `#091A13`, muted `#547365`, line `#DCE7E1`.
- Semua konten harus tersedia sebagai HTML hasil build, bukan dimunculkan setelah fetch atau hydration.
- Gunakan JavaScript browser native untuk interaksi. Tidak perlu React, Vue, GSAP, AOS, slider, atau framework tambahan untuk layout ini.
- Tidak perlu backend, login web, API, atau dashboard fungsional. Mockup desktop adalah ilustrasi yang sudah ada pada sumber.
- Pertahankan file lisensi dan pemberitahuan yang relevan dari template.
- Bersihkan identitas Astroship pada halaman publik: logo, metadata, favicon, gambar, link demo, dan konten placeholder. Hapus route demo yang tidak dipakai setelah memastikan tidak berisi pekerjaan pengguna; jangan biarkan blog/pricing/contact contoh ikut sitemap.

## 3. Pemetaan wajib seluruh layout

| Urutan | Sumber | Komponen yang disarankan | Elemen yang wajib ada |
| --- | --- | --- | --- |
| 1 | Sprite SVG sebelum header | `IconSprite.astro` | Logo dan semua symbol SVG yang dipakai; ID hanya sekali |
| 2 | `.nav-shell`, `#navigation` | `Header.astro` | Sticky header, logo Finara, Fitur, Keuangan bersama, Cara mulai, FAQ, Download Finara, menu mobile |
| 3 | `.hero` | `Hero.astro` | Eyebrow, heading dua baris, paragraf, dua store badge, catatan tersedia iOS/Android |
| 4 | `.visual` dalam hero | `HeroMockups.astro` | Screenshot Home depan, Laporan belakang miring, desktop di belakang, orbit hijau, titik emas, dua floating card, label ilustrasi |
| 5 | `.benefit-strip` | `BenefitsStrip.astro` | Pencatatan yang praktis, Ringkasan yang jelas, Personal & bersama |
| 6 | `#fitur` | `Features.astro` | Heading dan tiga kartu: Catat tanpa ribet, Lihat gambaran utuh, Rapikan setiap dompet |
| 7 | `.story` | `ProductStory.astro` | Judul, tiga baris storytelling, watermark 1/2/3, posisi baris kedua dibalik pada desktop |
| 7a | `.wallet-stack` | Bagian dari ProductStory | Tiga kartu dompet bertumpuk, saldo, avatar dan label data contoh |
| 7b | `.line-demo` | Bagian dari ProductStory | Grafik SVG, gradient, garis animasi, dua angka ringkasan, label data contoh |
| 7c | `.budget-demo` | Bagian dari ProductStory | Tiga kategori, nominal, progress 50%/30%/20%, label data contoh |
| 8 | `#bersama` | `Together.astro` | Teks workspace, tiga checklist, CTA, kartu Keluarga Kita, saldo, tiga anggota dan undangan ilustratif |
| 9 | `#cara` | `GettingStarted.astro` | Tiga langkah 01/02/03 dengan teks lengkap |
| 10 | `#faq` | `Faq.astro` | Lima pertanyaan dan jawaban lengkap, pertanyaan pertama terbuka |
| 11 | `#download` | `DownloadCta.astro` | Heading, paragraf, kedua store badge, label iOS/Android |
| 12 | `footer` | `Footer.astro` | Logo, tagline, dua kolom link, copyright, teks penutup |

`StoreButtons.astro` digunakan bersama pada Hero dan DownloadCta. Data berulang dapat disimpan di `src/data/landing.ts`; jangan mengganti copy saat refactor.

Nama file boleh disesuaikan dengan struktur proyek aktual. Jangan membangun satu `index.astro` raksasa yang berisi semua CSS, base64, dan script. Struktur minimum yang disarankan:

- `src/pages/index.astro`: menyusun section dalam urutan tabel.
- `src/layouts/FinaraLayout.astro`: dokumen HTML, metadata, global CSS, main/slot sesuai kepemilikan yang jelas.
- `src/components/finara/`: komponen pada tabel dan komponen StoreButtons/SEO bila diperlukan.
- `src/assets/images/finara-home.jpg` dan `finara-report.jpg`.
- `src/styles/finara.css`: token, reset, tipografi dan utilitas bersama.
- `src/scripts/landing.ts`: inisialisasi animasi; menu boleh berada pada script Header.
- `src/config/site.ts`: identitas situs, metadata dan link store.
- `public/`: favicon Finara, robots dan aset yang memang tidak perlu diproses.

## 4. Kesamaan visual dan CSS

HTML sumber memiliki beberapa lapisan CSS: aturan awal, override storytelling, media query, lalu override screenshot/store badge. **Urutan cascade menentukan hasil akhir.** Jangan mengambil hanya blok CSS pertama atau angka ukuran mockup awal.

Pertama implementasikan dengan cascade setara sumber. Setelah tampilan terverifikasi, konsolidasikan aturan duplikat tanpa mengubah computed style. Waspadai Tailwind preflight dan CSS global Astroship yang mengubah font, heading, border, margin atau button. Pastikan satu pemilik reset dan global typography pada halaman Finara.

Pindahkan aturan lokal ke `<style>` komponen. Selector scoped milik parent tidak otomatis mengatur elemen internal child. Pindahkan style tersebut ke komponen pemilik atau gunakan `:global(...)` secara terbatas. Selector seperti `.motion-enabled .reveal` yang bergantung pada class body membutuhkan penanganan global. Keyframe dan variabel delay harus tetap bisa diakses elemen target.

Acuan desktop dari hasil akhir CSS sumber:

- Container `.wrap` maksimum 1180px, padding horizontal 32px.
- Header 78px; hero dua kolom `.9fr 1.1fr`, gap 40px, min-height 740px, padding vertikal 65px/55px.
- H1 57px, line-height 1.25, letter-spacing -2.7px; teks hijau bold.
- Visual akhir min-height 625px; screenshot Home memiliki lebar 274px dan Laporan 250px pada desktop.
- Frame screenshot memakai aspect ratio khusus sumber; jangan memakai tinggi mockup placeholder lama. Optimasi gambar harus mempertahankan proporsi screenshot 720×1600 dan tampilan dalam frame.
- Desktop memiliki z-index 0, Laporan 1, Home 3, floating cards 4. Tidak boleh muncul ponsel placeholder ketiga.
- Orbit hijau besar dipotong oleh area hero; pertahankan maksud desain bulatan terlihat sebagian/setengah di sisi kanan. Verifikasi terhadap sumber pada viewport yang sama; jangan mengecilkannya menjadi lingkaran penuh atau menutup teks hero.
- Section memiliki ruang lega, kartu fitur berikon bulat yang sedikit keluar ke atas, tiga story row berselang-seling, background bersama hijau sangat muda, CTA tengah, footer dua kolom.

Pertahankan breakpoint sumber 1500, 1000, 760 dan 390px sesuai aturan yang masih relevan setelah konsolidasi. Pada ≤760px hero menjadi satu kolom dan desktop mockup disembunyikan sesuai sumber; **dua screenshot mobile tetap ada**. Pada mobile story menjadi satu kolom dengan urutan teks lalu ilustrasi; menu menjadi dropdown. Jangan memaksa mockup desktop masuk mobile sehingga halaman overflow.

Tidak boleh ada horizontal scrolling pada body. Clipping hanya diterapkan pada dekorasi/area yang tepat; jangan menutupi masalah ukuran dengan `overflow-x:hidden` pada seluruh dokumen hingga fokus/teks terpotong.

## 5. Screenshot dan SVG asli

Ekstrak dua `img src="data:image/jpeg;base64,..."` dari HTML menjadi file di `src/assets/images/`. Pilih gambar berdasarkan alt/class dan identifikasi visual, bukan urutan indeks saja: sumber menempatkan Laporan sebelum Home dalam markup.

Decode bytes asli. Jangan mengganti screenshot dengan hasil generatif, UI buatan, stock image, atau screenshot aplikasi lain. Simpan JPEG asli sebagai sumber; optimasi format saat build tidak boleh mengubah isi layar, crop, atau keterbacaan angka.

Gunakan `Image` atau `Picture` dari `astro:assets` dengan local imports. Berikan dimensi/aspect ratio dan alt yang jelas. Terapkan eager loading dan fetch priority high hanya pada screenshot hero yang menjadi kandidat LCP utama, bukan seluruh gambar. Gunakan atribut yang didukung versi Astro aktual; `priority` hanya jika tersedia pada versi terpasang. Periksa markup hasil build.

Gunakan ukuran output responsif yang sesuai frame dan kepadatan layar; hindari mengirim gambar jauh lebih besar dari kebutuhan. Jangan menyimpan base64 besar dalam hasil HTML/CSS/JS. Pertahankan SVG logo, ikon, chart, ID gradient dan `use href="#..."` yang berfungsi setelah pemecahan komponen.

## 6. Animasi dan interaksi wajib

| Elemen | Perilaku yang dipertahankan |
| --- | --- |
| Home depan | `device-enter`, 1.1 detik, delay .15 detik, translateY 45px → 0 |
| Laporan belakang | `back-enter`, 1.2 detik, delay .3 detik, translateY 40px → 0, rotasi akhir -5deg |
| Desktop | `enter`, 1.2 detik, delay .45 detik |
| Floating anggota / laporan | `enter`, .9 detik, delay .65 / .85 detik |
| Bar floating card | `bar-enter`, 1.2 detik, delay .8 detik, scaleY .05 → 1 |
| Reveal section | IntersectionObserver threshold .15, opacity/translateY 28px, .8 detik, unobserve setelah tampil |
| Tiga feature | Stagger 0/130/260ms; hitung dari index feature lokal, bukan index seluruh NodeList |
| Angka laporan | requestAnimationFrame 1400ms, easing sumber, format `id-ID`, satu kali per elemen |
| Garis chart | stroke-dashoffset → 0 selama 1.6 detik ketika terlihat |
| Progress kategori | Lebar → `--percent`, 1.4 detik ketika terlihat |
| Anggota workspace | Opacity/translateX bertahap, delay anggota eksplisit setelah refactor |
| Button/store badge | Hover background dan translateY sesuai sumber |

Perbaikan performa yang disengaja: heading, paragraf, dan CTA hero **langsung terlihat**; hapus entrance yang menahan seluruh `.hero-copy` .9 detik. Animasi mockup tetap dipertahankan. Catat satu perbedaan ini pada laporan implementasi.

Gunakan progressive enhancement: konten default terlihat sebelum JavaScript. Aktifkan state tersembunyi hanya sesudah observer berhasil disiapkan. Jika JS/IntersectionObserver tidak tersedia, tampilkan semua section, garis grafik, progress dan angka akhir. Sumber memiliki garis/progress default tersembunyi; perbaiki fallback ini saat migrasi.

Hormati `prefers-reduced-motion`: hentikan entrance/reveal/count, tampilkan angka akhir dan progress, dan nonaktifkan smooth scrolling. Jangan membuat animasi loop permanen tambahan. Jika preferensi berubah ketika halaman terbuka, tampilkan konten dan hentikan animasi yang berjalan.

Script Astro harus diproses/bundled, tanpa `is:inline` yang tidak perlu. Gunakan query selector bertipe dan null guard. Tambahkan `data-*` hook seperlunya agar script tidak bergantung pada struktur DOM rapuh. Hindari event listener ganda. Untuk landing static satu halaman, jangan menambah ClientRouter hanya untuk animasi; jika proyek sudah memakainya, tangani lifecycle `astro:page-load` dan cleanup.

Menu mobile: klik membuka/menutup, `aria-expanded` dan label konsisten, link menutup menu, Escape menutup dan mengembalikan fokus ke tombol, menu tertutup tidak dapat ditab. Pada desktop navigasi selalu tersedia. Untuk browser tanpa JS, sediakan navigasi mobile yang tetap bisa digunakan.

FAQ tetap native `<details>/<summary>` dan dapat digunakan tanpa JS. Jangan mengubahnya menjadi accordion custom yang membutuhkan framework. Native anchor mengikuti ID `fitur`, `bersama`, `cara`, `faq`, `download`, dengan offset sticky header.

## 7. Store links dan konten yang benar

Simpan dua link pada satu konfigurasi dan gunakan pada semua badge:

```ts
export const storeLinks = {
  appStore: 'https://apps.apple.com/id/app/finara-catatan-keuangan/id6502823235',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.startnow.mobile',
};
```

Badge mempertahankan SVG/teks sumber, ukuran, hover, `aria-label`, `target="_blank"`, dan `rel="noopener noreferrer"`. Jangan memakai `#` sebagai pengganti link store atau menambahkan login sebelum download.

Pertahankan keterangan ilustrasi/data contoh. Kartu undangan mockup bukan tombol undangan nyata. Jangan mengarang jumlah pengguna, rating, harga, testimoni, sinkronisasi bank, atau kemampuan web admin. Tidak perlu membuat halaman kebijakan atau kontak dengan informasi fiktif.

## 8. SEO dan aksesibilitas

- `html lang="id"`, satu H1, heading berurutan, landmark header/nav/main/footer, skip link ke main, fokus keyboard jelas.
- Title awal: `Finara — Atur Bersama, Tumbuh Bersama`.
- Description awal: `Catat pemasukan dan pengeluaran, pahami laporan, dan kelola keuangan bersama orang terdekat dengan Finara.`
- Konfigurasi domain produksi pada satu sumber (`SITE_URL` atau config). **Domain belum diberikan; jangan menebaknya.** Jelaskan cara mengisi dan validasi URL absolut. Saat domain belum tersedia, jangan menghasilkan canonical/sitemap produksi palsu; tandai konfigurasi ini sebagai persiapan rilis yang masih perlu dilengkapi.
- Sesudah domain benar tersedia: isi `site` di Astro config, canonical absolut per route, sitemap dan referensinya di robots. Reuse integrasi sitemap yang sudah ada, hindari duplikasi.
- Open Graph dan Twitter card: title, description, URL, site name, locale Indonesia dan image URL absolut. Buat aset OG Finara 1200×630 dari identitas yang ada; jangan memakai preview Astroship. OG image tidak sama dengan screenshot tinggi 720×1600.
- Gunakan satu mekanisme metadata; jangan menduplikasi title/canonical/OG melalui layout dan komponen SEO sekaligus.
- Structured data `SoftwareApplication` atau `MobileApplication` boleh digunakan untuk data yang benar-benar diketahui: nama, deskripsi, kategori keuangan, Android/iOS dan link aplikasi. Jangan mengisi rating/review/offer harga yang belum diverifikasi atau menjanjikan rich result.
- Favicon memakai logo Finara. Pastikan tidak ada asset 404 atau metadata demo pada hasil build.
- Dekorasi SVG disembunyikan dari pembaca layar; screenshot punya alt deskriptif. Jangan memakai `role="img"` pada seluruh wrapper bila membuat link atau konten penting tidak terbaca.
- Periksa kontras teks kecil/warna muted tanpa merusak brand, ukuran tap target, zoom 200%, dan keyboard navigation.

## 9. Performa dan kebersihan proyek

Output static; hindari hydration untuk section presentasional. Tidak ada fetch untuk konten utama. Optimalkan screenshot dengan pipeline Astro, tetapkan ukuran gambar, dan pastikan font tidak menyebabkan layout shift besar.

Utamakan font lokal melalui paket/aset yang sesuai, dengan hanya bobot Latin yang dipakai dan `font-display: swap`. Hapus pemuatan font bawaan Astroship yang tidak terpakai. Jika Google Fonts masih digunakan, dokumentasikan alasannya dan hindari pemuatan ganda.

Hapus CSS/script demo yang tidak dibutuhkan halaman Finara setelah memastikan dampaknya ke route lain. Jangan mengubah file project-wide atau dependency sekadar mengikuti contoh versi terbaru. Format kode mengikuti formatter proyek.

Target pengukuran build produksi: Lighthouse mobile Performance ≥90, Accessibility/SEO/Best Practices ≥95; LCP ≤2.5s, CLS ≤0.1 sebagai target lab. Target INP ≤200ms dinilai dengan interaksi/field data bila tersedia; Lighthouse bukan bukti INP pengguna nyata. Angka ini adalah sasaran, bukan skor yang sudah dicapai atau jaminan.

## 10. Urutan kerja sampai tuntas

1. Audit repo dan sumber HTML; catat section, selector, aset, script serta cascade.
2. Jalankan baseline proyek dengan dependency/lockfile aktual; catat masalah yang sudah ada.
3. Ekstrak screenshot asli; buat konfigurasi brand/link dan layout Finara.
4. Implementasikan seluruh komponen pada tabel; pastikan tidak ada bagian yang hilang sebelum merapikan CSS.
5. Migrasikan CSS dan responsive rules; cek visual sumber dan hasil pada viewport sama.
6. Migrasikan script/animasi, menu dan FAQ; tambah fallback tanpa JS/reduced motion.
7. Lengkapi SEO, favicon, OG dan setup domain yang dapat dikonfigurasi.
8. Konsolidasikan CSS/bersihkan template setelah parity diperiksa; ulangi cek untuk area yang berubah.
9. Jalankan type check/build, buka production preview, periksa browser dan ukur Lighthouse.
10. Perbaiki temuan lalu hasilkan laporan implementasi yang jujur. Jangan berhenti jika masih ada section/aset/interaksi yang belum diterapkan.

Gunakan scripts dari `package.json`. Contoh untuk pnpm:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm exec astro check
pnpm build
pnpm preview
```

Jika checker belum terpasang, tambahkan dependency dev yang cocok versi proyek dan commit perubahan lockfile secara konsisten. Jika frozen install gagal karena lockfile tidak sinkron, selidiki sebelum melakukan regenerasi. Jangan mengklaim check lulus jika hanya build yang dijalankan.

## 11. Pemeriksaan penerimaan wajib

Bandingkan screenshot HTML referensi dan production preview pada **viewport yang sama**, minimal lebar 360, 390, 768, 1024 dan 1440px. Ambil full-page screenshot serta screenshot hero. Tunggu font/gambar selesai dan reveal selesai untuk perbandingan statis, lalu uji animasi terpisah. Catat viewport dan browser.

- [ ] Semua 12 kelompok pada tabel dan 3 ilustrasi story sudah ada dalam urutan benar.
- [ ] Semua teks dan lima jawaban FAQ sesuai sumber, tanpa placeholder Astroship.
- [ ] Screenshot Home depan dan Laporan belakang adalah gambar asli, tidak tertukar.
- [ ] Desktop tetap di belakang pada desktop dan tersembunyi pada mobile sesuai sumber.
- [ ] Orbit terpotong sesuai maksud desain; tidak mengganggu copy dan tidak menyebabkan overflow body.
- [ ] Font, warna, frame, radius, shadow, jarak antar section dan posisi floating card sesuai sumber.
- [ ] Header/menu/anchor/FAQ/store badge dapat dipakai dengan mouse, touch dan keyboard.
- [ ] H1 dan CTA terlihat segera, tanpa menunggu animation reveal.
- [ ] Seluruh entrance/reveal/stagger/count/chart/progress/member animation berjalan sekali sesuai pemetaan.
- [ ] Tanpa JS dan pada reduced motion seluruh konten, angka, grafik, progress, FAQ dan navigasi tetap tersedia.
- [ ] Tidak ada error console, request 404, duplicated SVG ID, listener ganda atau link store palsu.
- [ ] Tidak ada base64 screenshot dalam HTML hasil build; ukuran gambar ditetapkan.
- [ ] Metadata valid dan tidak ganda; sitemap hanya route yang relevan bila domain telah dikonfigurasi.
- [ ] Type check dan build lulus; responsive preview sudah diperiksa.
- [ ] Hasil Lighthouse produksi dicatat dengan waktu, URL, mode mobile dan keterbatasan lingkungan.

Build berhasil saja tidak cukup membuktikan parity visual. Jika browser/Lighthouse tidak tersedia, nyatakan pemeriksaan tersebut belum dijalankan; jangan membuat angka atau menandai checklist itu selesai. Lanjutkan pekerjaan lain yang tersedia.

## 12. Hasil akhir yang harus disampaikan agent

Berikan ringkasan implementasi, daftar file berubah, pemetaan section yang selesai, perbedaan disengaja, command/check beserta hasil, screenshot hasil, dan temuan yang masih terbuka. Buat `docs/finara-implementation-report.md` sebagai laporan dalam proyek.

Pisahkan status **implementasi layout selesai** dari **siap rilis**. Domain produksi yang belum diberikan harus tercatat sebagai konfigurasi rilis belum lengkap; jangan menghentikan implementasi layout karenanya. Jangan publish/deploy otomatis karena tugas ini hanya implementasi lokal.

## Referensi teknis

- Astroship: https://github.com/surjithctly/astroship
- Gambar Astro: https://docs.astro.build/en/guides/images/
- Scripts dan event handling: https://docs.astro.build/en/guides/client-side-scripts/
- Sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/

Gunakan API yang cocok dengan versi pada proyek lokal. Dokumentasi terbaru dapat berbeda dari versi dependency yang sudah di-clone.
