// Service Worker: legt alle Dateien der App im Cache ab, damit sie auch offline startet.
// Bei Änderungen an der App die Versionsnummer erhöhen (v1 -> v2), dann aktualisiert sich die App bei allen automatisch.
const CACHE = 'fotos-sortieren-v1';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './vendor/exifr.lite.umd.js',
  './vendor/jszip.min.js',
  './fonts/oswald-latin-400-normal.woff2',
  './fonts/oswald-latin-500-normal.woff2',
  './fonts/oswald-latin-600-normal.woff2',
  './fonts/oswald-latin-700-normal.woff2',
  './fonts/inter-latin-400-normal.woff2',
  './fonts/inter-latin-500-normal.woff2',
  './fonts/inter-latin-600-normal.woff2',
  './fonts/inter-latin-700-normal.woff2',
  './fonts/space-mono-latin-400-normal.woff2',
  './fonts/space-mono-latin-700-normal.woff2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(e.request).catch(() => e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error());
    })
  );
});
