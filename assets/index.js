//Cuando usamos scrips con type="moduls" debemos ser especificos, declarar la extension.
import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video');
const player = new MediaPlayer({element: video, plugins: [ 
    new AutoPlay(),
    new AutoPause()
] });

const button = document.querySelector('#playButton');
const buttonMute = document.querySelector('#muteButton');
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
