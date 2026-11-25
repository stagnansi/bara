# HANDOFF — bara.asia rebuild

## Konteks proyek
- Domain live: https://bara.asia (masih terparkir di Cloudflare Pages, build lama)
- Repo: https://github.com/stagnansi/bara (user: stagnansi)
- Tema: hugo-bearblog (janraasch) via git submodule
- Environment: Termux di Android, Hugo v0.170.1
- Workflow: user prompt → AI beri perintah → user eksekusi di Termux → paste output
- Bahasa konten: Indonesia (locale = "id-id", defaultContentLanguage = "id")

## Aturan kerja (WAJIB)
1. Jangan improvisasi tanpa approval eksplisit user
2. Jangan halusinasi — rujuk dokumentasi resmi (gohugo.io, repo tema) untuk klaim teknis
3. Satu blok per giliran. User eksekusi dulu, tempel output, baru lanjut
4. Jangan pakai cd — user sudah di ~/bara
5. Output verifikasi → termux-clipboard-set (user paste ke chat)
6. Sebelum perintah destruktif (rm, commit, push --force) → minta approval
7. Jangan asumsikan format file tema — baca themes/hugo-bearblog/exampleSite/ dulu

## Status (per 2026-11-25)
Selesai:
- [x] ~/bara dikosongkan total (isi + .git dihapus; user setuju Opsi A: riwayat lama GitHub boleh tertimpa)
- [x] hugo new site .
- [x] git init, branch main, remote origin → github.com/stagnansi/bara
- [x] Submodule themes/hugo-bearblog (commit 9538d34, branch master)
- [x] hugo.toml dikonfigurasi
- [x] .gitignore dibuat
- [x] 5 file konten dibuat
- [x] Build sukses (EXIT=0, 10 pages)
- [x] Uji lokal (hugo server) — tampilan OK
- [x] git add -A && git commit (d7549c0)
- [x] git push --force-with-lease origin main (sukses, d7549c0)
- [x] Custom footer via layouts/partials/footer.html (copyright + link Instagram)
- [x] Cloudflare Pages build settings (Hugo v0.170.1, auto-deploy dari repo)
- [x] Aktifkan [params] favicon & images (favicon.png & share.png)

Belum:
- [ ] Isi nyata content/now.md dan content/resume.md (masih placeholder)

## hugo.toml final
```toml
baseURL = "https://bara.asia/"
locale = "id-id"
defaultContentLanguage = "id"
title = "Bara Ramadhan"
theme = "hugo-bearblog"
author = "Bara Ramadhan"
copyright = "Copyright © 2026, Bara Ramadhan."
enableRobotsTXT = true
disableKinds = ["taxonomy"]
ignoreErrors = ["error-disable-taxonomy"]

[languages]
  [languages.id]
    locale = "id-id"

[permalinks]
  blog = "/:slug/"
  tags = "/blog/:slug"

[params]
  description = "Situs pribadi Bara, seorang Marketing Specialist. Berisi kumpulan tulisan, pemikiran acak, serta resume lengkap saya."
  title = "Bara Ramadhan"

[markup]
  [markup.highlight]
    style = "friendly"
    lineNos = true
    lineNumbersInTable = false
    codeFences = true
```

## .gitignore
```
public/
resources/_gen/
.hugo_build.lock
```

## Struktur content/
- _index.md — Home, menu weight 1
- now.md — Now, menu weight 10, placeholder "Belum ada isi. Coming soon."
- resume.md — Resume, menu weight 20, placeholder "Belum ada isi. Coming soon."
- blog/_index.md — Blog, menu weight 30
- blog/website-dari-atas-kasur.md — artikel pertama, tanggal 2026-11-25

## Langkah berikutnya (urutan)
1. git add -A && git commit -m "init: rebuild situs Hugo Bear Blog dari nol" — tunggu approval
2. git push --force-with-lease origin main (username stagnansi, password = PAT)
3. Konfigurasi Cloudflare Pages (hubungkan repo, build command, env)
4. Arahkan domain bara.asia ke Pages project baru (atau project lama di-reconnect)
5. Isi nyata now.md & resume.md
6. Siapkan static/images/favicon.png (32×32+) & static/images/share.png, lalu uncomment di hugo.toml
7. Pertimbangkan custom layout untuk resume (tema tidak punya layout khusus)

## Catatan teknis
- Hugo 0.170.1: languageCode deprecated sejak 0.158.0 → pakai locale
- permalinks mengikuti exampleSite/hugo.toml persis (blog /:slug/, tags /blog/:slug)
- disableKinds = ["taxonomy"] + ignoreErrors — sama dengan tema
- Frontmatter TOML (+++), konsisten dengan hugo.toml
- Alias user: alias h='hugo server --noBuildLock --baseURL http://localhost:1313/'
- Clipboard helper: termux-clipboard-set + Termux:API sudah terpasang
- PENTING (heredoc): paste multi-baris panjang di Termux bisa terpotong saat paste ke terminal. Saat menulis file besar via heredoc, tulis BERTAHAP per chunk (~20-25 baris per cat, pakai >> untuk append). Verifikasi tiap chunk dengan wc -l dan tail. Hindari /tmp di Termux (sering tidak ada) — pakai ~/ untuk file sementara.

## Custom UI & Styling
- `layouts/partials/custom_head.html`
  - Font utama: Inter (via rsms.me).
  - Font monospace: IBM Plex Mono (untuk `time`, `pre`, `code`, dll).
  - Link & Visited Color: `#0033cc`.
  - Dark Mode: Dimatikan (dipaksa selalu light mode via `@media` override).
- `layouts/partials/footer.html`
  - Menampilkan copyright, em dash, dan link Instagram (`instagr.am/baramadhans`).
  - Tahun menggunakan `font-feature-settings: 'zero' 1` (slashed zero).

## Update Terbaru (Sesi Ini)
- **Redirect Pages.dev**: Ditambahkan `functions/_middleware.js` untuk me-redirect `baramadhans.pages.dev` ke `bara.asia`.
- **Judul Web**: Diubah menjadi "Bara's Blog" di `hugo.toml` (kedua `title`). Footer tetap "Bara Ramadhan".
- **Custom Homepage Title**: Ditambahkan `layouts/index.html` agar judul tab di homepage hanya "Bara's Blog" (tanpa "Home |").
- **User Select None**: Ditambahkan di `custom_head.html` untuk elemen `header .title`, `header nav`, dan `footer`.
