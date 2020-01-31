console.log('Hello, TypeScript')

function add(a: number, b: number){
    return a + b
}

//Cuando coloque el cursor sobre sum, me dira que sum es un numero.
//¿Como TypeScript sabe esto?
//Porque le esta haciendo análisis estático al código 
//El Análisis estático de software es un tipo de análisis de software que se realiza sin ejecutar el programa
const sum = add(2, 3)