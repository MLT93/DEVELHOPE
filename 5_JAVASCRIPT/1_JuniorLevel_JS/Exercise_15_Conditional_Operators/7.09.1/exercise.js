// # Exercise 15

// Create a variable called `age` and assign it a numeric value.
// Use the Conditional (ternary) operator.
// If the variable is grater or equal to 18, print `You can drive a car`.
// If the variable is less than 18, print `You are too young to drive`.


// Esto está mal, porque la comprobación no está dentro del <if-else>
// let age = "12"
// typeof age === "number"

// if (age >= 18 && age !== "number") {
//     console.log("You can drive a car")
// } else if (age < 18 && age !== "number") {
//     console.log("You are too young to drive.")
// } else {
//     console.log("Ops... Inside your number age please")
// }

// ♦♦♦ EJEMPLOS DE COMPROBACIÓN Y CORRECCION DEL EJERCICIO ♦♦♦

// Creo mi variable
let age = 20
// Creo una comprobación preguntándo si mi número, no es un número, poniendo el signo <!>.
let esUnNumero = !isNaN(0)

if (age >= 18 && !isNaN(0)) {
    console.log("You can drive a car")
} else if (age < 18 && age !== "number") {
    console.log("You are too young to drive.")
} else {
    console.log("Ops... Inside your number age please")
}

// if(typeof age !== "number"){ // Si no es un número me dará true y continuará la línea del código, gracias a la comprobación hecha con tyopeof. Mientra que, si es distinto que un número, ejecutará el console.log("Ops...etc.") .
//     console.log("Ops... Inside a number age please.")
// } else if (age >= 18 && age < 66){
//     console.log("You can drive a car.")
// } else if (age < 18){
//     console.log("You are too young to drive.")
// } else {
//     console.log("You don't have a correct age to drive.")
// }
// * Para hacer la comprobación que está hecha con typeof, debemos iniciar el IF
// con dicha verificación para que inicie el código, analizando la variable. En
// este caso, typeof hace la comprobación pero después no se utiliza, porque no está
// al interno de ningún código a ejecutar.