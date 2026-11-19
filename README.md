# Meowville Web (`meowville.najer.dev`)

Situs web statis untuk halaman legal, penghapusan akun, verifikasi email Supabase, dan kanal kontak dukungan aplikasi **Meowville**. Tanpa login, tanpa cookie, tanpa analytics, dan tanpa JavaScript sisi klien.

## Stack

- **Generator:** Astro 5 (`output: 'static'`, `trailingSlash: 'never'`, `build.inlineStylesheets: 'never'`)
- **Konten:** Markdown di `src/content/`
- **Styling:** CSS murni (`src/styles/global.css`), token desain selaras dengan aplikasi Flutter Meowville
- **Font:** Plus Jakarta Sans (400, 600, 700) self-hosted di `public/fonts/`
- **Hosting:** Cloudflare Pages (Node 20+)

## Pengembangan Lokal

Prasyarat: Node.js 20 LTS atau lebih baru.

```bash
npm install
npm run dev
```

Build produksi dan preview lokal:

```bash
npm run build
npm run preview
```

Output statis dihasilkan di direktori `dist/`.

## Struktur Halaman

| URL | File | Keterangan |
|---|---|---|
| `/` | `src/pages/index.astro` | Beranda informasi & tautan dokumen legal |
| `/privacy` | `src/pages/privacy.astro` → `src/content/privacy.md` | Kebijakan Privasi |
| `/terms` | `src/pages/terms.astro` → `src/content/terms.md` | Ketentuan Layanan |
| `/hapus-akun` | `src/pages/hapus-akun.astro` → `src/content/delete-account.md` | Panduan Hapus Akun |
| `/verified` | `src/pages/verified.astro` | Tujuan Site URL verifikasi email Supabase (`noindex`) |
| `/404` | `src/pages/404.astro` | Halaman tidak ditemukan |

Redirect di `public/_redirects`:
- `/privacy-policy` → `/privacy` (301)
- `/delete-account` → `/hapus-akun` (301)
- `/hapus` → `/hapus-akun` (301)

## Mengubah Konten Legal

Seluruh teks dokumen legal dikelola melalui file Markdown di `src/content/`:

- `src/content/privacy.md`
- `src/content/terms.md`
- `src/content/delete-account.md`

Setiap heading `##` otomatis diberi nomor pasal (`01`, `02`, dst.) lewat CSS counter, jadi jangan menulis nomor secara manual di Markdown. Ubah nilai `updated` di frontmatter setiap kali dokumen diperbarui.

## Placeholder Sebelum Go-Live

Nilai berikut sudah terisi:
- Nama developer: `Najer.dev`
- Tanggal berlaku / pembaruan: `19 November 2026`
- Region Supabase: `ap-northeast-1`
- Email dukungan: `meowville@najer.dev`

Satu placeholder yang masih perlu diputuskan sebelum rilis:
- `{{N}}` di `src/content/delete-account.md`: masa retensi backup terjadwal (isi angka hari seperti `7` jika memakai Supabase Pro, atau hapus kalimat backup jika memakai Free tier).

## Deploy ke Cloudflare Pages

1. Hubungkan repository ini ke **Cloudflare Pages**.
2. Pengaturan build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION=20`
3. Tambahkan custom domain `meowville.najer.dev` pada **Pages > Custom domains**.
4. Header keamanan (`public/_headers`) dan redirect (`public/_redirects`) otomatis aktif di Cloudflare Pages.
