// # Exercise 14

// Complete the expressions inside the console.log(), by using the correct logical operator. 

const question1 = 101 < 67;    // Print false
const question2 = 1 == true;   // Print true
const question3 = true != 1;   // Print false
const question4 = 4 <= 4;      // Print true

console.log(
    `
1º variable ${question1},`, 
    `2ª variable ${question2},`, 
    `3ª variable ${question3},`, 
    `4ª variable ${question4},
    `, 
)

console.log("Primera comparación con || entre la 1º variable y la 2ª variable =" + "", question1 || question2) //the result must be true ♦ Con || si las dos condiciones son true, dará TRUE. Si la primera es true y la segunda es false, dará TRUE. Si la primera es false y la segunda es false, será FALSE. Si la primera es false y la segunda es ture, será TRUE.
console.log("Segunda comparación con && entre la 1º variable y la 2ª variable =" + "", question1 && question2) //the result must be false ♦ Con && si las dos condiciones son true, dará TRUE. Si la primera es true y la segunda es false, dará FALSE. Si la primera es false y la segunda es false, será FALSE. Si la primera es false y la segunda es ture, será FALSE.
console.log("Tercera comparación" + "", question3 || question2) //the result must be true
console.log("Cuarta comparación" + "", question4 != question4) //the result must be false ♦ Acá creo una negación con el <!=> para que NO sea <==>
console.log("Quinta comparación" + "", question2 != question4) //the result must be false


console.log(question1 || question2) //the result must be true
console.log(question1 && question2) //the result must be false
console.log(question3 || question2) //the result must be true
console.log(question4 && !question4) //the result must be false ♦ Con el <!> creo una negación en la variable/condición a la cual se le asigna, modificando su valor true por false. Sirve sólo para cambiar los resultados de true o false.
console.log(question2 !== question4) //the result must be false

// ♦♦♦ EJEMPLO ♦♦♦

const elFormularioEsValido = true;

if (elFormularioEsValido) {
    console.log("Todo bien")
} else if (!elFormularioEsValido) { // Acá se ve como <!> cambia el valor de la variable a false.
    console.log("Todo mal")
} else {
    console.log("Ingrese los datos nuevamente")
};