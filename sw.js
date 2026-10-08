const CACHE_NAME = 'nursewin-v1-responsive-offline';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './assets/icons/nursewin-32.png',
  './assets/icons/nursewin-48.png',
  './assets/icons/nursewin-96.png',
  './assets/icons/nursewin-180.png',
  './assets/icons/nursewin-192.png',
  './assets/icons/nursewin-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;

      return fetch(req).then(response => {
        if (response && response.ok && (req.url.startsWith(self.location.origin) ||
            req.url.startsWith('https://cdn.tailwindcss.com/') ||
            req.url.startsWith('https://cdnjs.cloudflare.com/'))) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        }
        return response;
      }).catch(() => {
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
