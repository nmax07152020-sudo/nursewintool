# NurseWin — Responsive + Offline PWA

This package is based on the edited NurseWin `index.html` supplied by the user.

## What was added
- Responsive layout tuning for phones, tablets, desktops and landscape mode.
- iOS-friendly viewport and safe-area handling.
- Prevents iOS input zoom by using a minimum 16px form-control size.
- PWA manifest and Home Screen icon support.
- Service worker for cached/offline use after the first successful online load.
- Online/Offline status indicator in the header.
- `orientation: any` so the app can be used portrait or landscape.

## GitHub Pages
Upload the contents of this folder to the repository root. Open the GitHub Pages HTTPS URL once while online so the browser can install/cache the app. Then it can continue working offline when the service worker has cached the app shell and external CDN resources.

## Local testing
Because browsers do not allow service workers from `file://`, test the offline PWA through a local web server, for example:

    python -m http.server 8000

Then open:

    http://localhost:8000/

Do not double-click `index.html` if you are testing the service worker/offline behavior.
