const CACHE_NAME = 'cm-fashion-qr-v1';
const urlsToCache = [
  '/',
  '/index.html'
];

self.addEventListener('fetch', (event) => {
  return;
});


self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
