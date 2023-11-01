// # Exercise 16

// Create two boolean variables called `isSunnyDay` and `isHomeworkCompleted`. 
// Assign them a value. 
// Use the Ternary Operator in order to print `Jesse can go out to play`, if both variables are true. 
// If one of them or both are false print `Jesse stays home`.

// let isSunnyDay = false
// let isHomeworkCompleted = true
// let name = 12

// typeof name === "string"

// if (isSunnyDay === false && isHomeworkCompleted === false) {
//     console.log(`${name} stays home.`)
// } else if (isSunnyDay === true && isHomeworkCompleted === true) {
//     console.log(`${name} can go out to play`)
// } else if (isSunnyDay === true && isHomeworkCompleted === false) {
//     console.log(`${name} can go out, but first, him need finish the home works.`)
// } else if (isSunnyDay === false && isHomeworkCompleted === true) {
//     console.log(`Sorry ${name}, the day is bad.`)
// } else if (name !== "string") {
//     console.log(`Ops... You need to complete your name with letters.`)
// } else {
//     console.log(`${name} wrong.`)
// }

let isSunnyDay = false;
let isHomeworkCompleted = true;
let nameOf = true;

if (typeof nameOf !== "string") { // La comprobación va siempre al inicio del código que iremos a escribir. Si name es una cadena de texto, el código continúa y verifica las otras condiciones utilizando los operadores === y !== en lugar de == y !=, para asegurarse de que se comparan los valores y los tipos de datos.
  console.log("Ops... You need to complete your name with letters.");
} else if (isSunnyDay === false && isHomeworkCompleted === false) {
  console.log(`${nameOf} stays home.`);
} else if (isSunnyDay === true && isHomeworkCompleted === true) {
  console.log(`${nameOf} can go out to play`);
} else if (isSunnyDay === true && isHomeworkCompleted === false) {
  console.log(`${nameOf} can go out, but first, him need finish the homework.`);
} else if (isSunnyDay === false && isHomeworkCompleted === true) {
  console.log(`Sorry ${nameOf}, the day is bad.`);
} else {
  console.log(`${nameOf} wrong.`);
}
