# Handoff Notes

Catatan status dan pekerjaan lanjutan untuk proyek bara.asia.

Terakhir diperbarui: 2026-09-28

---

## Status Saat Ini

Situs sudah live di https://bara.asia. Semua halaman utama (Home, Now, Resume, Blog) berfungsi. Deploy otomatis via Cloudflare Pages dari branch main.

## Yang Belum Selesai

### Prioritas Tinggi
- [ ] Halaman Projects belum dibuat. Rencana: content/projects.md dengan menu = "main", weight = 30. Isi: Five Pillars Compendium dan Wondering.
- [ ] Link Projects di homepage: saat ini hanya ada di blok "Proyek kecil-kecilan", belum ada halaman khusus.

### Prioritas Sedang
- [ ] Isi data Resume: angka pencapaian (jumlah dealer, jumlah support, dll) untuk optimasi keyword ATS.
- [ ] Konfirmasi apakah Gaabor perlu tahun spesifik (saat ini tanpa tahun).
- [ ] Halaman 404 custom (saat ini pakai default tema).
- [ ] OG image: share.png masih dari tema. Bisa diganti dengan desain sendiri.

### Prioritas Rendah / Opsional
- [ ] Shortcode untuk daftar post di homepage. Saat ini manual di _index.md.
- [ ] RSS link di footer: cek apakah /index.xml accessible.
- [ ] Dark mode: tema sudah support via prefers-color-scheme. Perlu cek kontras font.

---

## Keputusan Desain & Alasan

### Referensi gaya
Struktur halaman dan gaya penulisan blog mengacu pada dua referensi:
- herman.bearblog.dev - blog personal di platform Bear Blog. Struktur yang diadopsi: homepage dengan bio + daftar post, halaman Now dengan details penjelasan, navigasi pendek.
- nownownow.com - gerakan /now page. Konsep halaman Now yang mendeskripsikan "apa yang sedang dikerjakan saat ini", bukan sekadar About statis.

### Em dash dihindari di konten
Preferensi personal. Em dash hanya boleh di footer. Di blog dan halaman konten, gunakan titik, koma, atau restrukturisasi kalimat.

### Permalink blog /:slug/
Fitur bawaan tema Bear Blog. URL pendek, konsisten dengan platform Bear. Post di content/blog/ di-render ke /slug/, bukan /blog/slug/.

### --baseURL di alias h
hugo.toml pakai baseURL https://bara.asia/ untuk production. Saat development lokal, link absolut (misal .Permalink di list.html) akan mengarah ke domain production. Flag --baseURL http://localhost:1313/ mengoverride ini saat development.

### unsafe = true di goldmark
Homepage _index.md perlu render HTML mentah (ul class="blog-posts"). Tanpa ini, Goldmark membuang HTML.

### lastmod manual untuk shortcode now-updated
Shortcode pakai .Lastmod dari front matter now.md. Alasan: :fileModTime tidak reliable di Cloudflare Pages. Setiap deploy, Cloudflare clone repo baru, semua file dapat mtime = waktu clone, sehingga selalu tampil "0 jam".

Setiap edit now.md, update manual tanggal lastmod di front matter:
    lastmod = 2026-09-30

Tanpa update manual, "terakhir diperbarui" tidak berubah.

### Override baseof.html minimal
Hanya untuk fix deprecated .Site.LanguageCode jadi .Site.Language.Locale. Tidak ada perubahan struktur lain.

---

## Cara Kerja di Termux

Seluruh development dilakukan dari HP Android 10 + Termux. Tidak ada laptop.

### Alias dan function di ~/.bashrc
- b - cd ~/bara
- h - hugo server --noBuildLock --baseURL http://localhost:1313/
- p - cd ~/5pc
- w - cd ~/wondering
- cx 'command' - jalankan command, tampilkan output, copy ke clipboard

### Cara pakai cx
cx untuk command yang menghasilkan output (misal hugo --gc, ls, git status). Output tampil di layar dan masuk clipboard Android otomatis.

Untuk menulis file, pakai cat > file << 'EOF' tanpa cx.

### Cara cek warning tanpa buka server
cx 'hugo --gc' - build sekali jalan, selesai, output ke clipboard.

### Kill Hugo server
Ctrl+C kalau di foreground. Kalau nyangkut: pkill hugo.

### Batasan yang diketahui
- Clipboard Android sering gagal copy teks panjang atau berisi unicode (tree diagram, em dash, kutip lengkung). Kalau perlu blok panjang, pakai ASCII saja.
- File .bashrc harus di-source ulang setelah edit: source ~/.bashrc. Kalau tidak, alias/function baru tidak aktif.

---

## Gotcha & Catatan Teknis

### 1. Shortcode tanpa newline
File layouts/shortcodes/now-updated.html tidak boleh ada newline di akhir. Newline akan jadi spasi di output.

### 2. Timezone
hugo.toml set timeZone Asia/Jakarta. Kalau post tanggalnya "future" relatif ke timezone, Hugo tidak akan render.

### 3. Submodule tema
Tema di themes/hugo-bearblog adalah git submodule. Jangan edit langsung. Untuk override, taruh file dengan path sama di layouts/ atau static/ project root.

### 4. Cloudflare Pages build
- Build command: hugo --gc --minify
- Output directory: public
- Environment variables: HUGO_VERSION = 0.166.0, HUGO_ENV = production
- Auto-deploy: setiap push ke main

### 5. Git remote
origin: https://github.com/stagnansi/bara.git. Push pakai HTTPS, bukan SSH. Token tersimpan di ~/.git-credentials.

---

## File yang Perlu Diketahui

- hugo.toml - Konfigurasi utama (baseURL, locale, timeZone, params)
- layouts/_default/baseof.html - Override base template (fix deprecated)
- layouts/partials/custom_head.html - CSS & font tambahan
- layouts/partials/footer.html - Footer kustom
- layouts/shortcodes/now-updated.html - Shortcode relative time (tanpa newline di akhir)
- content/_index.md - Homepage (ada HTML mentah)
- content/now.md - Halaman Now (pakai now-updated)
- content/resume.md - CV format ATS (print CSS aktif)
- static/favicon.ico - Favicon browser (ICO, 3 ukuran: 16/32/48)
- static/images/favicon.png - Apple touch icon & SEO (PNG 512x512)

---

## Kontak

- Email: hi@bara.asia
- Instagram: @baramadhans
- GitHub: stagnansi
