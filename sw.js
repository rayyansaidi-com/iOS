const assets = [
  '/',
  '/index.html',
  '/main.css',
  '/main.js',
  '/fontawesome-5.14.0.min.js',
  '/images/icon.png',
  '/images/rayyan.jpg',
  '/images/salam.jpg',
  '/images/wissam.jpg',
  '/images/rakie.jpg',
  '/images/salame.jpg',
  '/images/orlando.jpeg',
  '/images/south.jpeg'
  // Add extra assets here.
  // Remember that these are not all of the files;
  // They are all of the files used by the browser,
  // and/or the service worker (this file).
]

self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open('rayyansaidi-ios-0.1.2').then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
