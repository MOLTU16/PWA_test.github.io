var CACHE_NAME  = "MKit-cache-v1";
var urlsToCache = [
    "https://moltu16.github.io/PWA_test.github.io/",
    "https://moltu16.github.io/PWA_test.github.io/index.html"
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(
            function(cache){
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(
        function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
