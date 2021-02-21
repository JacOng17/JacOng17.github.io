const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/index.html',
  '{{ site.baseurl }}/assets/images/logo.svg',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  '{{ site.baseurl }}/assets/css/screen.css',
  '{{ site.baseurl }}/assets/css/main.css',
  'https://code.jquery.com/jquery-3.4.1.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
  '{{ site.baseurl }}/assets/js/mediumish.js',
  '{{ site.baseurl }}/assets/js/scroll-to-top-button.js',
  '{{ site.baseurl }}/assets/js/lazyload.js',
  '{{ site.baseurl }}/assets/js/ie10-viewport-bug-workaround.js',
//   '/assets/js/ui.js',
//   '/assets/css/main.css',
//   '/assets/images/background-home.jpg',
//   'https://fonts.googleapis.com/css?family=Lato:300,400,700',
];

// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// When we change the name we could have multiple cache, to avoid that we need to delet the old cache, so with this function we check the key that is our cache naming, if it is different from the actual naming we delete it, in this way we will always have only the last updated cache.
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
