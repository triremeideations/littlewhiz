const statCache = 'static-assets-v1';
self.addEventListener('install',(e)=>{
    e.waitUntil(
        caches.open(statCache)
        .then(
            (cache) => {
                return cache.addAll(
                    [
                        '/src/faces/smartpeople.woff',
                        'src/faces/refbeverage.woff',
                        'src/faces/eraser-regular.woff',
                        '/public/img/stdby_0.png',
                        '/public/img/stdby_1.png',
                        '/public/img/stdby_2.png',
                        '/public/img/stdby_3.png',
                        '/public/img/stdby_4.png',
                        '/public/img/stdby_5.png',
                        '/public/img/flt_0.png',
                        '/public/img/flt_1.png',
                        '/public/img/flt_2.png',
                        '/public/img/flt_3.png',
                        '/public/img/flt_4.png',
                        '/public/img/flt_5.png',
                        '/public/img/hov_0.png',
                        '/public/img/hov_1.png',
                        '/public/img/hov_2.png',
                        '/public/img/hov_3.png',
                        '/public/img/hov_4.png',
                        '/public/img/hov_5.png',
                        '/public/img/alt_0.png',
                        '/public/img/alt_1.png',
                        '/public/img/alt_2.png',
                        '/public/img/alt_3.png',
                        '/public/img/alt_4.png',
                        '/public/img/alt_5.png',
                    ]
                );

            }
        )
    );
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