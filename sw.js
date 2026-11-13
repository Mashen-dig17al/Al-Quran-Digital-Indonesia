/**
 * Service Worker untuk Al-Qur'an Indonesia Pro
 * Menyimpan App Shell dan UI secara offline (PWA Offline Capability)
 * Dataset Al-Qur'an disimpan dan dikelola terpisah melalui IndexedDB (QuranOfflineDB)
 */

const CACHE_NAME = 'quran-indonesia-v3.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './alquran-mobile.html',
  './manifest.json',
  './css/app.css',
  './js/app.bundle.js',
  './js/app.js',
  './js/data/quranMetadata.js',
  './js/data/offlineSurahs.js',
  './js/data/quranDb.js',
  './js/data/prayerTimes.js',
  './js/data/kemenagStandards.js',
  './js/data/hadithData.js',
  './js/data/thematicVerses.js',
  './js/api/quranApi.js',
  './js/components/HomeScreen.js',
  './js/components/QuranReader.js',
  './js/components/LastReadModal.js',
  './js/components/SurahListModal.js',
  './js/components/SearchModal.js',
  './js/components/PrayerTimesScreen.js',
  './js/components/SettingsModal.js',
  './js/components/HadithModal.js',
  './js/components/KemenagInfoModal.js',
  './js/components/OfflineDataModal.js',
  './assets/fonts/UthmanicHafs.woff2',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Gunakan penambahan resilien agar jika salah satu aset gagal (misal font lokal pada environment tertentu), aset lain tetap di-cache
      return Promise.allSettled(
        ASSETS_TO_CACHE.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[SW] Aset dilewati saat install:', url, err.message);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Hanya tangani request GET http/https
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  // Jangan tangani API eksternal di SW, serahkan pada IndexedDB & quranApi
  if (url.origin !== self.location.origin) {
    return;
  }

  // Cache First dengan Network Fallback untuk App Shell
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache).catch(() => {});
        });
        return networkResponse;
      }).catch(() => {
        // Fallback jika offline dan membuka root atau halaman HTML
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html') || caches.match('./alquran-mobile.html');
        }
      });
    })
  );
});
