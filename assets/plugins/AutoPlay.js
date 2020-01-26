function AutoPlay(){}

AutoPlay.prototype.run = function(player){ //objecto player, con sus propiedades => {play, muted}
    if(!player.muted){
        //  los setter no los llamos como si fuera una funcion 
        // Simplemente son un VALOR virtual que podemos asignar algun valor
        player.muted = true 
    }
    
   
    player.play()
}

export default AutoPlay;