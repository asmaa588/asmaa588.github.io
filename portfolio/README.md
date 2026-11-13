# Asmaa Salah | Portfolio

Static portfolio (HTML, CSS, vanilla JS). No build step, no dependencies. Fonts load from Google Fonts with system fallbacks.

## Structure
```
portfolio/
├── index.html
├── css/style.css
├── js/main.js
└── assets/
    ├── favicon.svg
    ├── img/profile.jpg        <- add your photo
    └── cv/Asmaa-Salah-CV.pdf  <- add your CV
```

## Add your photo
Save a portrait (about 800x1000 px, under 200 KB) as `assets/img/profile.jpg`. Until then the hero shows an owl placeholder.

## Add your CV
Save your CV as `assets/cv/Asmaa-Salah-CV.pdf`. Until the file exists on the server, the button reads "CV coming soon" and is disabled; once deployed, it becomes a working "Download CV" link automatically. If you use another filename, change the `href` of `#cv-btn` in `index.html`.

## Preview locally
```
cd portfolio
python3 -m http.server 8000
```
Open http://localhost:8000 (use a server, not a double-click, so the CV check works).

## Deploy to GitHub Pages (without touching your Chirpy homepage)
1. Clone `https://github.com/asmaa588/asmaa588.github.io`.
2. Copy this whole `portfolio` folder into the repository root, next to the existing files. Do not edit or delete anything else.
3. If the Jekyll build skips or mangles the folder, add `portfolio/` handling to `_config.yml` only as needed. A plain HTML folder normally works as is.
4. Commit and push:
   ```
   git add portfolio
   git commit -m "Add portfolio site"
   git push
   ```
5. When the Pages build finishes, open https://asmaa588.github.io/portfolio/

## Editing content
All text is in `index.html`. Add certificates to the Training section only once verified, and label them as certifications then.

## Accuracy notes
- Project 1 is a collaborative team project; only your contribution is described.
- The graduation project is academic, not commercial.
- Training and learning paths are not labeled as certifications.
- No employment dates are given for Intouch.
