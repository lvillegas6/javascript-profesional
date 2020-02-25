

// console.log('Hello, TypeScript')

// function add(a: number, b: number){
//     return a + b
// }

// //Cuando coloque el cursor sobre sum, me dira que sum es un numero.
// //¿Como TypeScript sabe esto?
// //Porque le esta haciendo análisis estático al código 
// //El Análisis estático de software es un tipo de análisis de software que se realiza sin ejecutar el programa
// const sum = add(2, 3)

// Boolean
let muted: boolean = true
muted = false


// Numeros
let numerador: number = 42
//let denominador: number = "6" esto tira un error ya que la variable solo ACEPTA numeros
let denominador: number = 6
let resultado:number = numerador / denominador

// String
let nombre: string = 'Luis'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = []
people = ['Isabel', 'Nicole', 'Raul']
// people.push(900) tira un error ya que este erreglo solo acepta string y no numeros

                    //Asi denomatos que nuestro arreglo tenga string y numeros
let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Luis')
peopleAndNumbers.push(900)


//Enum - Los enums no existen en JS
//En los enum por defecto se le asigna un indice: 0 para el rojo , 1 para el verde, etc
//Pero podemos asignarle nuestros propios valores como en Java
// enum Color {

//     Rojo,
//     Verde,
//     Azul

// }

enum Color {

    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'

}

let colorFavorito: Color = Color.Rojo
console.log(`'Mi color favorito es ${colorFavorito}`)
console.log(Color[0])

// Any - con any podemos asignar cualquier cosa, incluso despues de que le coloquemos algun valor
let comodin: any = 'Joker'
comodin = {
    type: 'Wildcar'
}

//Object
let someObject: object = {type: 'Wildcar'}

//Tuple
let x: [string, number]

x = ['Hola', 10]
console.log(x)
x = ['Pepe', 20]
console.log(x)

//Funciones 
function add(a: number, b: number)  {

}

const sum = add(4, 3)

function createAdder(a: number): (b: number) => number  {
    return function(b: number){
        return a + b
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)


                            //Para que el parametro sea opcional debemos colocar un signo de interrogacion
function fullName(firstName?    : string, lastName: string = "Smith"): string {
    return `${firstName} ${lastName}`
}

const luis = fullName('agente')
console.log(luis)


//INTERFACES

interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    alto: 4,
    ancho: 6
}

function area(rect: Rectangulo){
    return rect.alto * rect.ancho
}

console.log(rect.color)

import Persona from "./Persona"

const pepe: Persona = new Persona()
