// # Exercise 27

// Print in the console all the even numbers from 0 to 20

// **Suggestion**
// In order to check if a number is even or odd, try to use the reminder operator [https://it.javascript.info/operators](https://it.javascript.info/operators)


// Creo un <Array> vacío para almacenar resultado.
let arrayPar = []
// Creo otro <Array> vacío para almacenar los números impares.
let arrayImpar = []

// // Creo una función para que me divida los impares de los pares.
// function comprobarParImpar (variableNumero){ // La <variableNumero> hace referencia al número que yo le pondré a la función cuando la "llame" fuera de su código.
//     for (let num = 0; num <= variableNumero; num++) { // En este caso, la función <comprobarParImpar> está diseñada para verificar si los números del 0 a <variableNumero> son pares o impares. Uso el parámetro <variableNumero> para compararlo con la variable <num> para utilizarlo dentro del código y así poderle asignar a la funcion un número cualquiera cuando la llamo.
//         if (num % 2 === 0){ // L’operatore resto <%> non è legato alla percentuale. Il risultato di <%> è il resto della divisione intera di <num> diviso <2>. Ad esempio: 5 / 2 = 1, con resto 1. È lo stesso che fare: 2 * 2 = 4, ma fino al 5 abbiamo resto di 1.  
//             arrayPar.push(`El Número ${num} es par.`) // Con el <.push> agrago al <arrayPar> los número pares, en éste caso.
//             console.log(arrayPar)
//         } else {
//             arrayImpar.push(`El número ${num} es impar.`) // Almaceno números impares.
//             console.log(arrayImpar)
//         };
//     };
//     return variableNumero
// };

// comprobarParImpar(20);

//♦♦♦ OTRO EJEMPLO Y FORMA DE HACERLO♦♦♦

// Creo un <Array> vacío para almacenar resultado.
let arrayPar2 = [];
// Creo otro <Array> vacío para almacenar los números impares.
let arrayImpar2 = [];
// Creo una variable para utilizarla desde afuera de mi función.
let variableNumero2 = 5;
// Creo una función para que me divida los impares de los pares.
function comprobarParImpar2 (){ // Acá no le asignamos ningún parámetro, para poder utilizar la variable <variableNumero2> en el código déntro de la función <comprobarParImpar2>.
    for (let num = 0; num <= variableNumero2; num++) {
        if (num % 2 === 0){
            arrayPar2.push(`El número ${num}, es par.`);
            console.log(arrayPar2);
        } else {
            arrayImpar2.push(`El número ${num}, es impar.`) // Almaceno números impares.
            console.log(arrayImpar2)
        }
    } return
};

comprobarParImpar2(); // No me hace falta asignar ningún parámetro entre los paréntesis porque mi función no tiene parámetros. Para darle los valores a ejecutar, cambiaré la variable externa que utilizo déntro del código de mi función <comprobarParImpar2>.
