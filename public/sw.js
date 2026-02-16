// Minimal service worker — required for PWA installability.
// No caching: the app always loads fresh from the network.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
