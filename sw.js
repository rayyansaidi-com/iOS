const assets = [
  "/",
  "/index.html",
  "/main.css",
  "/main.js",
  "icon.png",
  // Add extra assets here.
  // Remember that these are not all of the files;
  // They are all of the files used by the browser,
  // and/or the service worker (this file).
]


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open('rayyansaidi-ios-0.0.0').then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})