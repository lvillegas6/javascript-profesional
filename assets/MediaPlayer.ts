
class MediaPlayer { //Si no usamos el keyword class TypeScript no lo va a conciderar

    public media: HTMLMediaElement
    private plugins: Array<any>
    container: HTMLElement

    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlayer()
        this.initPlugins();
    }

    private initPlayer(){
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }

    private initPlugins() {

        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        this.media.muted ? this.unmute() : this.mute();
    }
}

export default MediaPlayer;
