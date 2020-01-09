import MediaPlayer from './MediaPlayer.js'

const video = document.querySelector('video');
const player = new MediaPlayer({element: video});

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();
