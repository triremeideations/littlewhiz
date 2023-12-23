export function registerSW (){
    if ('serviceWorker' in navigator) {
        window.addEventListener('load',()=>{
            navigator.serviceWorker.register('/src/workers/service-worker.js')
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

