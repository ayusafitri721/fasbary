// Fasbary PWA - Service Worker
const CACHE_NAME = 'fasbary-v1';
const URLS_TO_CACHE = [
  '/',
  '/manifest.webmanifest',
];

// Install - pre-cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch - Network-first for HTML, Cache-first for assets
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET and chrome-extension
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') return;

  // For navigation requests (HTML) -> Network first, fallback to cache, then offline fallback to /
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request).then((resp) => resp || caches.match('/')))
    );
    return;
  }

  // For other requests -> Cache first, fallback to network, then cache put
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(request)
        .then((response) => {
          // Only cache successful, same-origin or fonts
          if (!response || response.status !== 200) return response;
          const shouldCache =
            response.type === 'basic' ||
            url.hostname === 'fonts.googleapis.com' ||
            url.hostname === 'fonts.gstatic.com' ||
            request.destination === 'image' ||
            request.destination === 'style' ||
            request.destination === 'script' ||
            request.destination === 'font';
          if (shouldCache) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Optional: return offline placeholder for images
          return cachedResponse;
        });
    })
  );
});
