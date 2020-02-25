const VERSION = 'v1';


// self es como el this, pero especifico para los serviceWorker
self.addEventListener('install', event => {

            //Espera al que el pre-cache se complete
    event.waitUntil(precache())


})

//en v1 vamos a tener todos los assets que declaramos, eso sera nuestras peticiones. 
// Cuando occura una peticion queremos ir al cache para ver si encontramos una respuesta
self.addEventListener('fetch', event =>{
    const request = event.request
    // get: Solo queremos hacer algo con las peticiones que son get, los post, put los delete no queremos trabajar con ellos.
    // Usualmente traen datos que no queremos cachear 
    if(request.method !== 'GET'){
        return;
    }

    // Buscar en cache
    event.respondWith(cachedResponse(request));

    //Actualizar el cache
    event.waitUntil(updateCache(request));
})

async function precache(){
    //Para trabajar con cache tenemos que utilizar una API del dom, que se llama caches 
    const cache = await caches.open(VERSION) // Esto nos va a dar una instancia de un cache, se va a llamar v1. Pero esto regresa una promesa
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.js',
        // '/assets/index.css',
        // '/assets/BigBuckBunny.mp4',
      ]);
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
        
    //.match Estamos preguntando al cache ya tienes una copia que le corresponde al request, si o no?. Si es no, nos va regresar undefine
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
  }

