/* Billy Service Worker – offline-fähig; HTML network-first, damit Updates
   beim nächsten Öffnen mit Internet automatisch ankommen. */
const CACHE = 'billy-v3';
const ASSETS = ['./', './billy.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const cachePut = res => {
    /* Nur gesunde Antworten cachen – sonst vergiftet ein transienter 4xx/5xx den Offline-Cache */
    if (res && res.ok) {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return res;
  };
  const isHtml = e.request.mode === 'navigate' ||
    (e.request.headers.get('accept') || '').includes('text/html');
  if (isHtml) {
    /* Network-first: online immer die neuste Version, offline die letzte gecachte */
    e.respondWith(
      fetch(e.request).then(cachePut).catch(() =>
        caches.match(e.request, { ignoreSearch: true })
          .then(hit => hit || caches.match('./billy.html'))
      )
    );
  } else {
    e.respondWith(
      caches.match(e.request, { ignoreSearch: true })
        .then(hit => hit || fetch(e.request).then(cachePut))
    );
  }
});
