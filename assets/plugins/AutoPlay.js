function AutoPlay(){}

AutoPlay.prototype.run = function({play, muted}){ //objecto player, con sus propiedades => {play, muted}
    if(!muted){
        //  los setter no los llamos como si fuera una funcion 
        // Simplemente son un VALOR virtual que podemos asignar algun valor
        muted = true 
    }
    
   play();
    
}

export default AutoPlay;