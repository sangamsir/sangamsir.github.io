// MindriX PWA Service Worker
const CACHE = 'mindrix-v1.5.7.5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install — cache main file
self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(cache){
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

// Fetch — network first, cache fallback
self.addEventListener('fetch', function(e){
  // Only handle same-origin requests
  if(!e.request.url.startsWith(self.location.origin)) return;
  
  e.respondWith(
    fetch(e.request)
      .then(function(res){
        // Cache successful responses
        if(res && res.status === 200){
          var clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(function(){
        // Offline fallback
        return caches.match(e.request)
          .then(function(cached){
            return cached || caches.match('./index2_v5.html');
          });
      })
  );
});

// OneSignal ko allow karo
self.addEventListener('notificationclick', function(e){
  e.notification.close();
  e.waitUntil(clients.openWindow('./index2_v5.html'));
});
