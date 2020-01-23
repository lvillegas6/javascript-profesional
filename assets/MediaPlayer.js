
function MediaPlayer(config) {
    this.media = config.element;
    this.plugins = config.plugins || [];
    
    this.initPlugins();
}

MediaPlayer.prototype.initPlugins = function(){
    
    const player = {
        play: () => this.play(), //Esto es se pasa como si fuera una referencia por lo tanto debemos ejecutarla despues utilizando los ()
        pause: () => this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted
        },
        set muted(value){
            this.media.muted = true
        }
    }

    this.plugins.forEach(plugin =>{
        plugin.run(player);
    });
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

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function(){
    this.media.muted ? this.unmute() : this.mute();
}

export default MediaPlayer;
