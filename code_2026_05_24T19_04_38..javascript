
const CACHE_NAME = 'ruleta-v1';
const urlsToCache = ['/', '/index.html'];

self.addEventListener('install', event => {
    event.waitUntil(
[MAC_ADDRESS] caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
[MAC_ADDRESS] caches.match(event.request).then(response => response || fetch(event.request))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
[MAC_ADDRESS] caches.keys().then(keys =>
[MAC_ADDRESS]     Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
[MAC_ADDRESS] )
    );
});

