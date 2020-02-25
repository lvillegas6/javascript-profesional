import MediaPlayer from "../MediaPlayer"

class AutoPause {

    private threshold: number //Este valor es publico por defecto, para arreglar esto debemos indicar el modificador private
    private player: MediaPlayer

    constructor(threshold = 0.25){
        this.handlerIntersection = this.handlerIntersection.bind(this) //Con bind le decimos quien va a ser el this (forzamos) a que siempre sea la clase.
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
        this.threshold = threshold
    }

    run(player: MediaPlayer) {
        
        this.player = player
                                                // El this se va a definir a base del objeto que esta llamando la funcion
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold //este umbral lo que va a definir es: que porcentaje del elemento tiene que tener interccion con el contenedor para que te interese y me avise
        });

        observer.observe(this.player.media)

        document.addEventListener('visibilitychange', this.handleVisibilityChange)

    }

    private handlerIntersection(entries: IntersectionObserverEntry[], observer){
        
        const entry = entries[0]

        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible){
            this.player.play()
        }else{
            this.player.pause();
        }
    }

    private handleVisibilityChange(){
        const isVisible = document.visibilityState === 'visible'
        
        isVisible ? this.player.play() : this.player.pause()
    }
}

export default AutoPause;