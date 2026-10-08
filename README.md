# NurseWin v13 Mobile Fix

Upload ALL files/folders in this folder to the GitHub/Vercel project root:

- index.html
- manifest.webmanifest
- sw.js
- apple-touch-icon.png
- nursewintool.apk
- assets/

Important: keep the `assets/` folder. The header logo is embedded in index.html, but PWA icons use the assets folder.

Mobile behavior:
Dashboard card -> calculator opens as a full-screen tool view under the header.
The dashboard is hard-hidden and cannot remain visible above the calculator.
