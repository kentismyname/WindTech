// Name of the cache
const CACHE_NAME = 'windtech-cache-v1';

// List of assets to cache
const urlsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/scripts.js',
    '/js/backtotop.js',
    '/assets/video.mp4',
    '/assets/img/logo.png',
    '/assets/img/services/1.jpg',
    '/assets/img/services/2.jpg',
    '/assets/img/services/3.jpg',
    '/assets/img/services/4.jpg',
    '/assets/img/services/5.jpg',
    '/assets/img/services/coming-soon.jpg',
    '/assets/favicon.ico',
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    'https://use.fontawesome.com/releases/v6.3.0/js/all.js',
    'https://fonts.googleapis.com/css?family=Montserrat:400,700',
    'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700',
    'https://cdn.jsdelivr.net/npm/less',
    'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
    'https://cdn.startbootstrap.com/sb-forms-latest.js',
    'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
];

// Install event - caching resources
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serving cached content
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return the cached version if it exists, otherwise fetch from the network
                return response || fetch(event.request);
            })
    );
});

// Activate event - cleaning up old caches
self.addEventListener('activate', function(event) {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
