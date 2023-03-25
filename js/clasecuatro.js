// FUNCION SIMPLE

// function saludar () {
//     console.log ("Esto es el mensaje de la función")
// }

// saludar ();

// FUNCION CON PARAMETROS

// function login (){
//     let usuario = prompt ("Ingresá tu usuario")
//     if(usuario !== "" && usuario.trim().length >1){
//         alert("Bienvenido: " + usuario)
//     } else {
//         alert("Error en el dato ingresado")
//     }
// }

// function saludar (nombre){
//     console.log (`Hola $(nombre)`) // $ = VALOR
// }

//CALCULADORA IVA
const IVA = 1.21
// function calcularIva(importe) { //convierto a numero, si el importe ingresado es un numero seguimos (lo ejecutamos)
//     if (parseFloat(importe)) {
//         let resultado = importe * IVA
//         alert("El importe + IVA es: " + resultado)
//     }
//     else{
//         alert("No ingresaste un numero")
//     }
// }

// //EJEMPLO DE UNA FUNCION DENTRO DE OTRA

// function calcularPrecioFinal() {
//     let precioDelproducto = prompt("Ingrese el importe del producto") // pido el precio del producto
//     calcularIva(precioDelproducto) //Utilizo la func que ya creé y le paso a esta funcion como parametro la nueva
//     // alert ("El importe final es " + resultado )
// }

// calcularPrecioFinal ();

//FUNCION CON DOS PARAMETROS (HAY QUE TRATAR QUE LA FUNCION SEA LO MAS SIMPLE POSIBLE)

// function suma(numero1, numero2){
//     numero1 = parseInt(prompt("Ingrese el primer numero"))
//     numero2 = parseInt(prompt("Ingresa el segundo numero"))
//     let resultado = numero1 + numero2
//     alert ("El resultado de la suma es: " + resultado)
// }

// suma();

//FUNCION CON RETURN

// function sumar (numero1, numero2){
//     let resultado = numero1 + numero2
//     return resultado
// }

// function concatenar (texto1, texto2){
//     if(texto1.trim() !== "" && texto2.trim() !== "")
//     textoConcatenado = texto1.trim() + texto2.trim()
//     return textoConcatenado
// }

//SCOPE = ALCANCE DE LAS VARIABLES EN EL CODIGO
//SCOPE LOCAL = SE REFIERE A LAS VARIABLES QUE SE REFIEREN DENTRO DE LAS FUNCIONES, Y SOLO SE REFIEREN A ESAS
//SCOPE GLOBAL = VARIABLES QUE SE DEFINEN FUERA DE CUALQUIER FUNCION, SUELTA EN EL PROGRAMA

// FUNCIONES FLECHA O ARROW FUNCTION

let funcionAnonima = function (a,b){
    return a+b
}

let funcionFlecha = (a,b) => {
    return a+b
}