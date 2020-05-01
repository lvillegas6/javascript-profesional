//Es es patron de diseño que pertenece al creacional

//Es un patron que te asegura que una clase solo tiene
//una instancia

//Esta unica insancia puede ser consumida por cualquier
//otro objeto

class Singleton{
    private static instance: Singleton

    private constructor(){
        // init
    }

    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton()
        }

        return Singleton.instance
    }

}

export default Singleton