# bara.asia

CV dan blog personal Bara Ramadhan. Dibangun dengan Hugo + Bear Blog theme, di-deploy via Cloudflare Pages.

**Live:** https://bara.asia

## Stack

- Hugo v0.166.0 (extended)
- Theme: janraasch/hugo-bearblog (via git submodule)
- Hosting: Cloudflare Pages (auto-deploy dari branch main)
- Domain: bara.asia (nameserver Cloudflare, registrar Domainesia)

## Struktur Folder

- `content/` - Konten markdown
  - `_index.md` - Homepage
  - `now.md` - Halaman Now
  - `resume.md` - CV
  - `blog/` - Postingan blog
- `layouts/` - Override & kustomisasi
  - `_default/baseof.html` - Override base template
  - `partials/custom_head.html` - CSS & font tambahan
  - `partials/footer.html` - Footer kustom
  - `shortcodes/now-updated.html` - Shortcode relative time
- `static/` - File statis (favicon, gambar)
- `themes/` - Git submodule tema
- `hugo.toml` - Konfigurasi Hugo

## Development Lokal

    b           # masuk folder proyek
    h           # jalankan server, buka http://localhost:1313
    cx 'hugo --gc'   # cek build tanpa server

Catatan: alias `h` menjalankan `hugo server --noBuildLock --baseURL http://localhost:1313/`. Flag `--baseURL` wajib saat development lokal.

## Deploy

Push ke branch `main`:

    git add .
    git commit -m "pesan commit"
    git push

Cloudflare Pages otomatis build dan deploy. Build command: `hugo --gc --minify`. Output: `public/`.

## Kustomisasi yang Diterapkan

- Font: Inter (body), InterDisplay (heading), IBM Plex Mono (code & time)
- Footer: copyright dengan link Instagram, smooth scroll
- Shortcode: `now-updated` untuk "terakhir diperbarui" di halaman Now
- Goldmark markdown: `unsafe = true` untuk HTML di dalam markdown
- Visited link: disamakan dengan link color
- Em dash: dihindari di konten (kecuali footer)

## Konvensi Konten

- Bahasa: Indonesia, gaya personal-santai
- Em dash: hindari di blog dan halaman konten
- Kata ganti: gunakan "saya", bukan "aku"
- Post blog: front matter TOML, `date`, `draft = false`
- Permalink blog: `/:slug/` (tanpa prefix `/blog/`)

## Lisensi

Lihat [LICENSE](LICENSE).
