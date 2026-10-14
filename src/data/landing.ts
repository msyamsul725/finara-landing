export { storeLinks } from "../config/site";

export const benefits = [
  { icon: "edit", label: "Pencatatan yang praktis" },
  { icon: "chart", label: "Ringkasan yang jelas" },
  { icon: "people", label: "Personal & bersama" },
] as const;

export const features = [
  {
    icon: "edit",
    title: "Catat tanpa ribet",
    body: "Simpan pemasukan dan pengeluaran, pilih kategori, lalu temukan kembali lewat riwayat dan kalender.",
    foot: "Riwayat & pencatatan transaksi",
  },
  {
    icon: "chart",
    title: "Lihat gambaran utuh",
    body: "Pahami pola pengeluaran lewat ringkasan dan grafik. Lebih mudah mengevaluasi kebiasaan keuanganmu.",
    foot: "Laporan keuangan",
  },
  {
    icon: "wallet",
    title: "Rapikan setiap dompet",
    body: "Pisahkan catatan uang tunai, rekening bank, dan e-wallet. Pantau saldo tanpa mencampur semuanya.",
    foot: "Dompet & saldo",
  },
] as const;
