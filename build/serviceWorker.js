// Service Worker optimizado para Synapsis
const CACHE_NAME = 'synapsis-cache-v2';
const RUNTIME_CACHE = 'synapsis-runtime-v2';

// Recursos críticos que se deben cachear inmediatamente
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/static/css/main.76fd5fac.css',
  '/static/js/main.bb62ecd3.js'
];

// Recursos secundarios que cachearemos al usarse
const SECONDARY_ASSETS = [
  '/logo192.png',
  '/logo512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
];

// Recursos que no se cachearán (como APIs, analíticas, etc.)
const NEVER_CACHE_DOMAINS = [
  'google-analytics.com',
  'analytics',
  'googletagmanager.com',
  'firebase',
  'api.emailjs.com'
];

// Instalar - Precachear recursos críticos
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Caché principal para recursos críticos
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Caché de recursos críticos iniciado');
          return cache.addAll(CRITICAL_ASSETS);
        }),
      // Caché para recursos secundarios
      caches.open(RUNTIME_CACHE)
        .then(cache => {
          console.log('Caché de recursos secundarios iniciado');
          // Precargar algunos recursos secundarios importantes
          return cache.addAll(SECONDARY_ASSETS);
        })
    ])
    .then(() => self.skipWaiting()) // Activar inmediatamente
  );
});

// Activar - Limpiar cachés antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => 
            cacheName !== CACHE_NAME && 
            cacheName !== RUNTIME_CACHE
          )
          .map(cacheName => {
            console.log('Eliminando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          })
      );
    })
    .then(() => {
      console.log('Service Worker activado correctamente');
      return self.clients.claim(); // Tomar control de clientes inmediatamente
    })
  );
});

// Fetch - Estrategia de caché optimizada
self.addEventListener('fetch', event => {
  // Ignorar solicitudes de análisis o APIs
  const url = new URL(event.request.url);
  const shouldNotCache = NEVER_CACHE_DOMAINS.some(domain => url.hostname.includes(domain));
  
  if (shouldNotCache) {
    return;
  }

  // Estrategia adaptada según el tipo de recurso
  if (event.request.mode === 'navigate') {
    // Para navegación principal (HTML): Network-first con fallback a caché
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        })
        .catch(() => {
          console.log('Fallback a caché para:', event.request.url);
          return caches.match(event.request)
            .then(cachedResponse => {
              return cachedResponse || caches.match('/index.html');
            });
        })
    );
  } 
  else if (
    event.request.destination === 'style' || 
    event.request.destination === 'script' ||
    event.request.destination === 'font'
  ) {
    // Para CSS, JS y fuentes: Cache-first (crítico para rendimiento)
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Actualizar caché en segundo plano
            fetch(event.request)
              .then(response => {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, response.clone());
                });
              })
              .catch(error => console.error('Error actualizando caché:', error));
            
            return cachedResponse;
          }
          
          // Si no está en caché, buscarlo en la red
          return fetch(event.request)
            .then(response => {
              const clonedResponse = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, clonedResponse);
              });
              return response;
            });
        })
    );
  } 
  else if (event.request.destination === 'image') {
    // Para imágenes: Stale-while-revalidate (mostrar rápido desde caché mientras actualizamos)
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          const fetchedResponse = fetch(event.request)
            .then(networkResponse => {
              caches.open(RUNTIME_CACHE).then(cache => {
                cache.put(event.request, networkResponse.clone());
              });
              return networkResponse;
            })
            .catch(error => {
              console.error('Error recuperando imagen:', error);
              // No hacer nada - devolver la caché
            });
          
          return cachedResponse || fetchedResponse;
        })
    );
  } 
  else {
    // Para el resto de recursos: Network-first con caché de respaldo
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cachear solo si es exitoso
          if (response && response.status === 200) {
            const clonedResponse = response.clone();
            caches.open(RUNTIME_CACHE).then(cache => {
              cache.put(event.request, clonedResponse);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
});

// Gestionar sincronización en segundo plano
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

// Gestionar notificaciones push
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/logo192.png',
      badge: '/favicon.ico',
      vibrate: [100, 50, 100],
      data: {
        url: data.url || '/'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification('Synapsis', options)
    );
  }
});

// Manejar clics en notificaciones
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then(windowClients => {
        // Si ya hay una ventana abierta, enfocarla
        for (const client of windowClients) {
          if (client.url === event.notification.data.url && 'focus' in client) {
            return client.focus();
          }
        }
        // Si no hay ventana abierta, abrir una nueva
        if (clients.openWindow) {
          return clients.openWindow(event.notification.data.url);
        }
      })
  );
}); 