// con esta linea de codigo requiero la libreria que instale con npm
const prompt = require ('prompt-sync')()
const limpiarpantalla = require ('clear')

//Declarar una variable para almacenar lo que el usuario ingrese
const nombre = prompt ('Ingresa tu nombre:')
const edad = Number (prompt ('Ingresa tu edad:'))
limpiarpantalla()


//Warning edad es de tipo String
// Si voy a tratar esta variable edad como NUMERO debo convertirla

//Mostrar el valor de edad para mi como Programador
console.log (edad)

console.log (nombre)

console.log ('Hola', nombre, 'Que lindo que tengas', edad, 'años')
