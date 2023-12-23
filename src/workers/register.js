/* eslint disable no-restricted-globals */

const sw=()=>{
    const statCache = 'static-assets-v1';
    self.addEventListener('install',(e)=>{
        e.waitUntil(
            caches.open(statCache)
            .then(cache.addAll([
                [
                    "/static/css/main.4abfb3a3.css",
                    "/static/js/main.e5c5cd28.js",
                    "/static/media/selBG_hi.11d79af4e11b726a35ed.png",
                    "/static/media/selBG_lo.b1686ed64509d3d3c263.png",
                    "/static/media/wooden.854ad16612071949e2cc.jpg",
                    "/static/media/alt_3.1b753aa2fce923b11cd5.png",
                    "/static/media/alt_1.70d69900f9c85426a55d.png",
                    "/static/media/alt_5.8d9653369bd141a21285.png",
                    "/static/media/alt_2.145450a7e7b6dfccdd2b.png",
                    "/static/media/alt_4.15425048dbaf23a85092.png",
                    "/static/media/alt_0.76ad4dcc84307321b232.png",
                    "/static/media/hov_3.cf6cb55516c47ca1f806.png",
                    "/static/media/stby_2.84ec99f757be75670d6b.png",
                    "/static/media/hov_1.3808078683a295be38fb.png",
                    "/static/media/stby_3.61e19b28aecb7e3a480b.png",
                    "/static/media/hov_5.5091cbc2d159b716f6b9.png",
                    "/static/media/stby_5.5e6546bb7cdbf2b3a675.png",
                    "/static/media/stby_4.247f75fcabcfe43590d5.png",
                    "/static/media/hov_2.683833ea37b9ad1917b9.png",
                    "/static/media/hov_0.d5f2a1b813cb4c7cf384.png",
                    "/static/media/hov_4.6c40ef3734882b69dc06.png",
                    "/static/media/stby_0.064fbf7f61930668ff98.png",
                    "/static/media/stby_1.3f73b67f9c7ef819e631.png",
                    "/static/media/flt_3.9011686b3bc892b95af8.png",
                    "/static/media/flt_2.9ccbbafead6d4598c02c.png",
                    "/static/media/flt_5.b1779740c1db57217255.png",
                    "/static/media/flt_4.6e01af6b1719f06e36cc.png",
                    "/static/media/flt_0.4618bb6ba204878c40df.png",
                    "/static/media/flt_1.c57379a6d7eba37371bf.png",
                    "/static/media/eraser-regular.d853166f02afeb2606ad.woff",
                    "/static/media/abstract.355bd841805eb525dd3c.jpg",
                    "/static/media/openscript.3d33bd460c63dc7ffa9d.woff",
                    "/static/media/refbeverage.1f881650912e477817a8.woff",
                    "/static/media/belligerentmadness.f1f27f35dfd132a96dc3.woff",
                    "/static/media/smartpeople.25319a49b9562abbca28.woff",
                    "/static/media/nunito-regular.7b68baaa3fd8f51e7bea.woff",
                    "/static/media/rubrics.0df8b3683c1bad2b63ae.jpg",
                    "/static/media/s123.c0a499af2ccc30570846.jpg",
                    "/static/media/abc.726f1b457f4c8addb814.jpg",
                    "/static/media/digitalitalic.3f21caedc9efc406c171.woff",
                    "/index.html",
                    "/static/css/main.4abfb3a3.css.map",
                    "/static/js/main.e5c5cd28.js.map",
                    "/src/faces/smartpeople.woff",
                    "src/faces/refbeverage.woff",
                    "src/faces/eraser-regular.woff",
                
                    "/public/img/stdby_0.png",
                    "/public/img/stdby_1.png",
                    "/public/img/stdby_2.png",
                    "/public/img/stdby_3.png",
                    "/public/img/stdby_4.png",
                    "/public/img/stdby_5.png",
                    "/public/img/flt_0.png",
                    "/public/img/flt_1.png",
                    "/public/img/flt_2.png",
                    "/public/img/flt_3.png",
                    "/public/img/flt_4.png",
                    "/public/img/flt_5.png",
                    "/public/img/hov_0.png",
                    "/public/img/hov_1.png",
                    "/public/img/hov_2.png",
                    "/public/img/hov_3.png",
                    "/public/img/hov_4.png",
                    "/public/img/hov_5.png",
                    "/public/img/alt_0.png",
                    "/public/img/alt_1.png",
                    "/public/img/alt_2.png",
                    "/public/img/alt_3.png",
                    "/public/img/alt_4.png",
                    "/public/img/alt_5.png"
                ]
            ]))
        )
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
            navigator.serviceWorker.register(sw)
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