
class Persona{

    private nombre: string
    public apellido: string

    public nombreCompleto(){
        console.log(`Mi nombre completo es: ${this.nombre} ${this.apellido}`)
    }

    saludo(){
        console.log('Hola')
    }

}




export default Persona