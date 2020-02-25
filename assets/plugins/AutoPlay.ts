import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    
    constructor() { }
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            //  los setter no los llamos como si fuera una funcion 
            // Simplemente son un VALOR virtual que podemos asignar algun valor
            player.media.muted = true;
        }
        player.play();
        
    }
}


export default AutoPlay;