# Changelog

Format: Keep a Changelog. Tanpa versioning, hanya tanggal.

## 2026-09-30

### Added
- Favicon custom (blue.png, format ICO 3 ukuran + PNG 512x512)
- Summary hover underline + cursor pointer di halaman Now

### Changed
- Shortcode now-updated: dari :fileModTime ke lastmod manual di front matter
- Hapus override [frontmatter] di hugo.toml

### Removed
- share.png (OG image default tema) dan referensinya di hugo.toml

### Fixed
- :fileModTime tidak reliable di Cloudflare Pages. Setiap deploy clone repo baru, semua file dapat mtime = waktu clone, jadi selalu tampil "0 jam".

## 2026-09-28

### Added
- Halaman Now (content/now.md) dengan narasi personal
- Halaman Resume (content/resume.md) format ATS, 2 halaman A4
- Post blog pertama: "Halo" (content/blog/halo.md)
- Shortcode now-updated untuk relative time di halaman Now
- Footer kustom: copyright dinamis dengan link Instagram
- Print CSS untuk Resume (header/nav/footer hidden saat print)
- Set timezone Asia/Jakarta di hugo.toml
- Deploy ke Cloudflare Pages + domain bara.asia
- File README.md, CHANGELOG.md, HANDOFF.md, LICENSE

### Changed
- hugo.toml: baseURL jadi https://bara.asia/, locale jadi id-id
- hugo.toml: unsafe = true di goldmark renderer
- Override baseof.html: .Site.LanguageCode jadi .Site.Language.Locale
- custom_head.html: font stack diubah ke Inter / InterDisplay / IBM Plex Mono
- Visited link color disamakan dengan link color
- Alias h ditambah --baseURL http://localhost:1313/ untuk development

### Fixed
- Em dash dihapus dari konten (_index.md, now.md, resume.md, halo.md)
- Newline di akhir shortcode now-updated.html menyebabkan spasi sebelum titik
- Deprecated warning .Site.LanguageCode di Hugo v0.158+

### Removed
- Baris "Made with Hugo Bear Blog" dari footer (diganti footer kustom)
- Em dash di semua konten (kecuali footer)
- Kata "pengen" diganti "ingin" di blog
- Kata "namaku" diganti "nama saya" di blog

## 2026-09-27

### Added
- Setup awal: Hugo site + Bear Blog theme (submodule)
- Favicon dari exampleSite tema
- Git repo + initial commit
- Deploy pertama ke Cloudflare Pages
- Halaman: Home, Now, Resume, Blog
- Kustomisasi awal: font, footer, custom_head.html

### Fixed
- Permalink blog ke /:slug/ (feature tema)
- Config locale (menggantikan languageCode yang deprecated)
