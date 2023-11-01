// # Exercise 17

// Rewrite the exercise number 15, by using the `if else` statement.

// # Exercise 15
// Create a variable called `age` and assign it a numeric value.
// If the variable is grater or equal to 18, print `You can drive a car`.
// If the variable is less than 18, print `You are too young to drive`.

let age = 21

// para las comprobaciones el typeof va dentro del código a ejecutar.
if(typeof age !== "number"){ // Si no es un número me dará true y continuará la línea del código, gracias a la comprobación hecha con tyopeof. Mientra que, si es distinto que un número, ejecutará el console.log("Ops...etc.") .
    console.log("Ops... Inside a number age please.")
} else if (age >= 18 && age < 66){
    console.log("You can drive a car.")
} else if (age < 18){
    console.log("You are too young to drive.")
} else {
    console.log("You don't have a correct age to drive.")
}