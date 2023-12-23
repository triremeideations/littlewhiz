const sw=()=>{
    const statCache = 'static-assets-v1';
    self.addEventListener('install',(e)=>{
        e.waitUntil(
            caches.open(statCache)
            .then(
                (cache) => {
                    return fetch('./manif.json')
                    .then(resp => resp.json())
                    .then(staticPaths => cache.addAll(staticPaths));
                }
            )
        );
    });


    self.addEventListener('activate', (ev)=>{
        ev.waitUntil(self.clients.claim());
    });

    self.addEventListener('fetch', (e)=>{
        e.respondWith(
            caches.match(e.request)
            .then(
                (response) => {
                    return response ||
                    fetch(e.request);
                }
            )
        );
    });
}

export function registerSW (){
    if ('serviceWorker' in navigator) {
        window.addEventListener('load',()=>{
            navigator.serviceWorker.register('./service-worker.js')
            .then(
                registration => {
                    console.log('SW registered with scope:', registration.scope);
                }
            )
            .catch(
                (err)=>{
                    console.error('SW registration failed: ', err);
                }
            );
        });
    }            
}