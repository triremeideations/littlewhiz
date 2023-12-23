/* eslint-disable no-restricted-globals */

// const sw =()=> {
//     const statCache = 'static-assets-v1';
//     self.addEventListener('install',(e)=>{
//         e.waitUntil(
//             caches.open(statCache)
//             .then(
//                 (cache) => {
//                     cache.addAll(
//                     [                    
//                         "/public/img/stdby_0.png",
//                         "/public/img/stdby_1.png",
//                         "/public/img/stdby_2.png",
//                         "/public/img/stdby_3.png",
//                         "/public/img/stdby_4.png",
//                         "/public/img/stdby_5.png",
//                         "/public/img/flt_0.png",
//                         "/public/img/flt_1.png",
//                         "/public/img/flt_2.png",
//                         "/public/img/flt_3.png",
//                         "/public/img/flt_4.png",
//                         "/public/img/flt_5.png",
//                         "/public/img/hov_0.png",
//                         "/public/img/hov_1.png",
//                         "/public/img/hov_2.png",
//                         "/public/img/hov_3.png",
//                         "/public/img/hov_4.png",
//                         "/public/img/hov_5.png",
//                         "/public/img/alt_0.png",
//                         "/public/img/alt_1.png",
//                         "/public/img/alt_2.png",
//                         "/public/img/alt_3.png",
//                         "/public/img/alt_4.png",
//                         "/public/img/alt_5.png"
//                     ]
//                 )
//             })
//         )
//     });


//     self.addEventListener('activate', (ev)=>{
//         ev.waitUntil(self.clients.claim());
//     });

//     self.addEventListener('fetch', (e)=>{
//         e.respondWith(
//             caches.match(e.request)
//             .then(
//                 (response) => {
//                     return response ||
//                     fetch(e.request);
//                 }
//             )
//         );
//     });
// }

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
