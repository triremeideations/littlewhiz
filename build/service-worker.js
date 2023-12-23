const statCache = 'static-assets-v1';
self.addEventListener('install',(e)=>{
    e.waitUntil(
        caches.open(statCache)
        .then(
            (cch) => {
                return fetch('./asset-manifest.json')
                .then(resp => resp.json())
                .then((resp)=>{
                    const staticPaths = extractPaths(resp);
                    cch.addAll(staticPaths);
                }
                )
            }
        )
    );
});

function extractPaths(x){
    const staticPaths = Object.values(x.files);
    return staticPaths;
}

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
