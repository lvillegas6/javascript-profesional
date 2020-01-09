//Cuando usamos scrips con type="moduls" debemos ser especificos, declarar la extension.
import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({element: video, plugins: [new AutoPlay()] });

const button = document.querySelector('#buttonPlay');
const buttonMute = document.querySelector('#buttonMute');
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
