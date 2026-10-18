# Personal Links: a static profile page

Plain HTML, CSS and JavaScript. No build step, no dependencies, no tracking.
Almost everything you will want to change lives in the `CONFIG` object at the top of `js/script.js`.

## 1. Run locally
Double-click `index.html`. For the most accurate preview run `npx serve .` or `python3 -m http.server` in this folder and open the address it prints.

## 2. Name and bio
`CONFIG.profile` → `name`, `handle`, `bio`, `location`, `status`. Set any of them to `""` to hide it.

## 3. Social links
`CONFIG.socials`. Each entry has `name`, `user`, `url`, `icon`, `label`, `group`, `show`.
- Hide: `show: false`. Remove: delete the line. Add: copy a line. Reorder: move lines up or down.
- Icons are simple built-in line icons (`globe mail phone chat play at code camera music send briefcase link`). To use official brand logos, add their licensed SVG path to the `ICONS` object and reference its name.
- URLs must start with `https://`, `http://`, `mailto:` or `tel:`; invalid ones are skipped.
- The sample URLs are placeholders. Replace them before publishing.

## 4. GCash and Maya
`CONFIG.payments`. Set `holder` and `number`. Optional: `qr` (e.g. `"assets/payment-qr/gcash.png"`), `link`, `note`. Hide one with `show: false`, or hide the section by setting `show: false` for `payments` in `CONFIG.sections`. The Copy button stays disabled while the number still contains `X`. This page only displays your details; it does not process payments. Think carefully about which numbers you want public.

## 5. Profile image
Put your photo at `assets/profile.jpg` (square, about 400×400 px) and set `profile.photo: "assets/profile.jpg"`. `shape` can be `circle`, `rounded` or `square`. Without a photo, your initials are shown.

## 6. Background image
Save an image as `assets/profile-background.jpg` (under about 400 KB; resize it first) and set `background.mode: "photo"`. Use `"plain"`, `"gradient"` or `"none"` for no photo. If the file is missing, the solid colour is used.

## 7. Opacity, blur, position
`CONFIG.background`: `opacity`, `blur`, `brightness`, `position` (e.g. `"center 20%"`), `size`, `fixed`, `overlayColor`, `overlayOpacity`. Only the photo layer changes, never your text or buttons. If text is hard to read, raise `overlayOpacity` or lower `opacity`.

## 8. Light and dark
`CONFIG.theme`: `"light"`, `"dark"` or `"system"`. The toggle button in the corner remembers each visitor's choice.

## 9. Layout
`CONFIG.layout`: `"minimal"` (centred, airy), `"cards"` (structured panels), `"editorial"` (profile beside links on desktop). Sections can be reordered or hidden in `CONFIG.sections`. Colours, spacing and fonts are CSS variables at the top of `css/style.css`.

## 10. Upload to GitHub
1. Create a new empty repository on github.com.
2. In this folder run:
```
git init
git add .
git commit -m "First version"

git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git

git branch -M main
git push -u origin main
```

## 11. Deploy to Vercel
Sign in at vercel.com with GitHub → **Add New → Project** → import the repository → leave Framework as **Other**, no build command, no output directory → **Deploy**. No environment variables are needed.

## 12. Update later
Edit files, then `git add . && git commit -m "Update" && git push`. Vercel redeploys automatically.

## Custom icons
In `CONFIG.socials` (also `contacts` and `featured`), set `icon` to any of:
- a built-in name, e.g. `icon: "camera"`
- a file you added, e.g. `icon: "assets/icons/instagram.svg"` (PNG, JPG, WebP also work)
- a data URL, e.g. `icon: "data:image/svg+xml;base64,PHN2Zy..."`
- pasted SVG code in backticks, e.g. ``icon: `<svg viewBox="0 0 24 24">...</svg>` ``

Put icon files in `assets/icons/` and write the path starting with `assets/` (no leading slash; names are case-sensitive on Vercel, so `Instagram.svg` is not `instagram.svg`). Black icons automatically turn white in dark mode. Add `iconColor: true` to keep an icon's own colours (use it for coloured logos). If an icon cannot load, a generic link icon is shown and the browser console (F12) names the path that failed. Check each icon's licence before using it.
