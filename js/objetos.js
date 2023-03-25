
// //OBJETO LITERAL año 2000

// const empleado1 = {
//     nombre: "Javier",
//     cargo: "profesor",
//     ingreso: "2021-03-25", // FORMATO ISO de la fecha
//     edad: 31
// }

// const empleado2 = {
//     nombre: "Celeste",
//     cargo: "desarrollador",
//     ingreso: "2021-03-27", // FORMATO ISO de la fecha
//     edad: 25
// }

// //PARA LEER ALGO DENTRO DEL OBJETO
// PROBLEMA DE LIMITACIÓN

// console.log (empleado1.nombre)
// console.log (empleado2.nombre)
// console.log (empleado1)

// OBJETO CONSTRUCTOR

// function Productos (id, nombre, importe, stock) { // LA PRIMERA INICIAL ES EN MAYUSCULA PARA DIFERENCIAR UNA FUNC CONSTRUCTORA
//     this.id = id
//     this.nombre = nombre
//     this.importe = importe
//     this.stock = stock
// }

// const producto1 = new Producto (3030, "TV 30 pulgadas", $4000, 50)

// function Persona(nombre, edad) {
//     this.nombre = nombre
//     this.edad = edad
//     this.saludar = function () {
//         console.log(`Hola, mi nombre es ${this.nombre}, y tengo ${this.edad} años`)
//     }
// }

// const persona1 = new Persona("Celeste", 40)
// const persona2 = new Persona("Cele", 30)

// console.log(persona1.saludar())
// console.log(persona2.saludar())

const iva = 1.21
function Producto(id, nombre, importe, stock) {
    this.id = id
    this.nombre = nombre
    this.importe = importe
    this.stock = stock
    // definimos un metodo
    this.importeConIva = function () {
        return this.importe * iva
    }
    this.ajustarStock = function (unidadesVendidas) { //cree una funcion anonima con un parametro llamado unidades vendidas
        if (typeof unidadesVendidas === "number" && this.stock >= unidadesVendidas && this.stock > 0) {
            return this.stock = this.stock - unidadesVendidas
        }
    }
}

const producto1 = new Producto(1, "Caja", 3000, 10)

console.log(producto1.importeConIva)