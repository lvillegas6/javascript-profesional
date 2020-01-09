
function MediaPlayer(config) {
    this.media = config.element;
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function () {
    this.media.paused ? this.play() : this.pause();
}

export default MediaPlayer;
