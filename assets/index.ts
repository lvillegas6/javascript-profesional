//Cuando usamos scrips con type="moduls" debemos ser especificos, declarar la extension.
import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector('video');
const player = new MediaPlayer({element: video, plugins: [ 
    new AutoPlay(),
    new AutoPause(),
    new Ads()
] });
    
const button: HTMLElement = document.querySelector('#playButton');
const buttonMute: HTMLElement = document.querySelector('#muteButton');

button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
                                //Vamos a registrar un archivo
    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error.message)
    })
}
