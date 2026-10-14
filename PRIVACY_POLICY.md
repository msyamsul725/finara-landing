# Kebijakan Privasi Finara

**Terakhir diperbarui:** 9 Oktober 2026  

**Versi aplikasi acuan:** 1.2.7  

---

## 1. Pendahuluan

Kebijakan Privasi ini menjelaskan bagaimana **Finara: Catatan Keuangan** (“**Aplikasi**”, “**Finara**”, “**kami**”) mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda saat Anda menggunakan aplikasi pencatatan keuangan Finara di perangkat seluler.

Dengan mengunduh, mengakses, atau menggunakan Aplikasi, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini. Jika Anda tidak setuju, mohon hentikan penggunaan Aplikasi.

Privasi data pelanggan (pengguna) adalah prioritas kami. **Catatan dan total keuangan pribadi Anda bersifat sangat privat**—hanya Anda sendiri yang dapat melihat gambaran keuangan pribadi Anda di Aplikasi, kecuali informasi yang **Anda sengaja bagikan** dalam workspace bersama dengan anggota yang Anda undang. Kami tidak menjual data keuangan Anda dan tidak menampilkan total keuangan pribadi Anda kepada pengguna Finara lainnya.

**Pengendali data (Data Controller):**

| | |
|---|---|
| **Nama badan usaha / pengembang** | PT. CLOUDNOW TRANSFORMASI INDONESIA ALPHA |
| **Alamat** | Wirausaha Lt. 1 Unit 104, Jl. HR Rasuna Said Kav. C-5, Kota Administrasi Jakarta Selatan, DKI Jakarta 12920, Indonesia |
| **Surel privasi & dukungan** | digital@cloudnow.co.id |
| **Telepon** | +62 816-676-515 |
| **Kontak pengembang (alternatif)** | donaltam@cloudnow.co.id |
| **Situs web** | URL situs resmi Finara (halaman kebijakan privasi / beranda) |

---

## 2. Ruang lingkup

Kebijakan ini berlaku untuk:

- Aplikasi Finara (Android dan iOS);
- layanan backend yang mendukung akun, sinkronisasi cloud, dan workspace bersama (jika Anda login);
- notifikasi push terkait undangan workspace, pengingat, dan fitur terkait (jika diaktifkan).

Kebijakan ini **tidak** mengatur situs web atau layanan pihak ketiga yang Anda buka di luar Aplikasi (misalnya halaman login Google atau Apple).

---

## 3. Data yang kami kumpulkan

### 3.1 Data yang Anda berikan

| Jenis data | Contoh | Kapan |
|------------|--------|--------|
| **Akun** | Nama, alamat surel, foto profil (dari Google atau Apple), identitas pengguna | Saat login dengan Google / Sign in with Apple |
| **Data keuangan** | Transaksi, dompet, kategori, anggaran, pengingat, transaksi berulang, catatan | Saat Anda mencatat di Aplikasi |
| **Workspace bersama** | Nama workspace, peran anggota, undangan | Saat Anda membuat atau bergabung workspace |
| **Preferensi** | Mode gelap, persetujuan analitik, persetujuan cadangan perangkat | Di Pengaturan |

### 3.2 Data yang dikumpulkan otomatis

| Jenis data | Tujuan |
|------------|--------|
| **Identitas instalasi perangkat** | Membedakan perangkat untuk sinkronisasi dan keamanan sesi |
| **Token sesi** (access / refresh) | Menjaga Anda tetap login dengan aman |
| **Token push (FCM)** | Mengirim notifikasi terkait workspace dan fitur Aplikasi |
| **Log teknis & laporan crash** | Diagnosa error tanpa nomor transaksi atau saldo (lihat bagian 4) |
| **Data analitik produk** (jika Anda memberi persetujuan) | Memahami penggunaan fitur—**bukan** nominal, saldo, atau isi catatan transaksi |
| **Zona waktu & locale** | Format tanggal, pengingat, dan tampilan |

### 3.3 Mode tamu (tanpa login)

Anda dapat menggunakan Aplikasi **tanpa akun**. Data keuangan tamu disimpan **secara lokal di perangkat** Anda. Tanpa login, data tersebut **tidak** diunggah ke server kami kecuali Anda nanti login dan memilih untuk mengimpor atau sinkronkan sesuai alur di Aplikasi.

---

## 4. Cara kami menggunakan data

Kami menggunakan data untuk:

1. **Menyediakan layanan inti** — pencatatan, laporan, dompet, anggaran, pengingat, dan workspace bersama.
2. **Autentikasi dan keamanan** — verifikasi identitas, refresh token, pencegahan penyalahgunaan akun.
3. **Sinkronisasi cloud** (pengguna login) — menyelaraskan data antar perangkat Anda dan anggota workspace yang sama.
4. **Notifikasi** — undangan workspace, pengingat jadwal, dan pesan terkait fitur (sesuai izin OS).
5. **Peningkatan produk** — analitik **hanya setelah persetujuan Anda**, dengan kebijakan internal yang **melarang** mengirim nominal, saldo, catatan transaksi, kredensial, atau token ke layanan analitik.
6. **Stabilitas** — laporan crash/error teknis yang disaring agar tidak memuat data keuangan sensitif.

Kami **tidak** menjual data pribadi Anda kepada pihak ketiga untuk iklan profil.

---

## 5. Dasar pemrosesan (Indonesia)

Sesuai praktik perlindungan data pribadi yang berlaku di Indonesia, pemrosesan kami didasarkan pada:

- **Pelaksanaan layanan** yang Anda minta (mencatat keuangan, sync, workspace);
- **Persetujuan** — analitik produk, notifikasi push (izin OS), dan opsi cadangan/sinkronisasi di mana Aplikasi meminta persetujuan eksplisit;
- **Kepentingan sah** — keamanan, pencegahan fraud, dan perbaikan stabilitas Aplikasi.

---

## 6. Penyimpanan dan retensi

| Lokasi | Isi |
|--------|-----|
| **Perangkat Anda** | Database lokal (SQLite/Drift), preferensi, token sesi di penyimpanan aman perangkat |
| **Server kami** | Akun, data tersinkronkan workspace, metadata sync, token push terdaftar |

Data disimpan selama akun aktif atau selama diperlukan untuk layanan. Anda dapat meminta penghapusan akun dan data terkait (lihat bagian 9). Data lokal di perangkat dapat Anda hapus dengan menghapus data Aplikasi atau uninstall.

---

## 7. Keamanan

Kami menerapkan langkah wajar, antara lain:

- enkripsi penyimpanan aman untuk token di perangkat;
- komunikasi dengan server melalui HTTPS;
- pembatasan akses server dan prinsip least privilege;
- desain analitik yang menolak parameter sensitif terkait keuangan.

Tidak ada metode transmisi atau penyimpanan yang 100% aman; kami berupaya meminimalkan risiko.

---

## 8. Berbagi data dengan pihak ketiga

Kami dapat memproses data melalui penyedia layanan yang membantu operasi Aplikasi:

| Pihak ketiga | Peran |
|--------------|--------|
| **Google (Sign-In, Firebase Cloud Messaging)** | Login Google; pengiriman push (Android/iOS sesuai konfigurasi) |
| **Apple (Sign in with Apple)** | Login Apple |
| **Penyedia hosting / cloud backend** | API akun, sinkronisasi, workspace *[sesuaikan nama penyedia jika dipublikasikan]* |
| **Shorebird** (jika build production memakainya) | Pembaruan kode Aplikasi over-the-air |
| **Layanan analitik** (jika aktif & Anda setuju) | Statistik penggunaan fitur non-finansial |

Pihak ketiga hanya memproses data sesuai instruksi kami dan kontrak pemrosesan yang berlaku. Kebijakan privasi mereka juga berlaku untuk komponen yang mereka kelola (misalnya [Kebijakan Privasi Google](https://policies.google.com/privacy), [Privasi Apple](https://www.apple.com/legal/privacy/)).

---

## 9. Hak Anda

Anda berhak, sesuai hukum yang berlaku:

- **mengakses** salinan data pribadi yang kami simpan tentang Anda;
- **memperbaiki** data akun yang tidak akurat;
- **menarik persetujuan** analitik atau notifikasi (melalui Pengaturan Aplikasi / izin OS);
- **meminta penghapusan** akun dan data server terkait — hubungi digital@cloudnow.co.id;
- **membatasi** pemrosesan tertentu, termasuk berhenti login dan hanya memakai mode lokal.

Permintaan hak privasi kami jawab dalam jangka waktu wajar (umumnya hingga 30 hari kerja) setelah verifikasi identitas.

---

## 10. Anak-anak

Aplikasi tidak ditujukan untuk anak di bawah **13 tahun** (atau usia minimum setempat). Kami tidak dengan sengaja mengumpulkan data dari anak. Jika Anda yakin anak memberikan data kepada kami, hubungi kami agar data tersebut dihapus.

---

## 11. Transfer internasional

Server atau penyedia layanan kami dapat berada di luar Indonesia. Jika transfer dilakukan, kami menerapkan safeguard yang wajar (kontrak, enkripsi, penilaian risiko) sesuai ketentuan yang berlaku.

---

## 12. Perubahan kebijakan

Kami dapat memperbarui Kebijakan Privasi ini. Perubahan material akan diberitahukan melalui Aplikasi, surel, atau situs web. Tanggal “Terakhir diperbarui” di bagian atas akan disesuaikan. Penggunaan berkelanjutan setelah perubahan berarti Anda menerima versi terbaru.

---

## 13. Hubungi kami

Pertanyaan, keluhan, atau permintaan hak privasi:

| | |
|---|---|
| **Surel** | digital@cloudnow.co.id |
| **Telepon** | +62 816-676-515 |
| **Alamat surat** | Wirausaha Lt. 1 Unit 104, Jl. HR Rasuna Said Kav. C-5, Kota Administrasi Jakarta Selatan, DKI Jakarta 12920, Indonesia |
| **Kontak pengembang (alternatif)** | donaltam@cloudnow.co.id |

---

## Lampiran A — Ringkasan singkat (untuk toko aplikasi)

**Finara: Catatan Keuangan** menyimpan catatan keuangan Anda dengan prinsip privasi ketat: total dan detail keuangan pribadi hanya dapat Anda lihat. Tanpa login, data utama tetap di perangkat. Dengan login Google/Apple, kami sinkronkan data ke server untuk backup dan workspace bersama. Push notification memakai Firebase. Analitik opsional dan tidak mencakup nominal transaksi. Hubungi digital@cloudnow.co.id untuk penghapusan akun.

---

## Lampiran B — Checklist sebelum publikasi

- [ ] Ganti semua placeholder `*[…]*` dengan data resmi perusahaan.
- [ ] Sesuaikan daftar penyedia cloud/backend dengan produksi.
- [ ] Tautkan URL kebijakan ini di Play Console, App Store Connect, dan layar “Kebijakan Privasi” di Aplikasi (jika ada).
- [ ] Pastikan teks persetujuan analitik di Aplikasi selaras dengan bagian 3.2 dan 4.
- [ ] Review oleh penasihat hukum jika melayani banyak pengguna atau data sensitif skala besar.
