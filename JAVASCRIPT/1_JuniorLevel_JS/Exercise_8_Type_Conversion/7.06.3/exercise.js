// # Exercise 8

// * Create a variable and set it to `true`.
// * Print the value in the console and the data type.
// * Convert it to a numeric data type, print the value and the data type.
// * Convert it to string data type, print the value and the data type.
// * Finally, convert it to a boolean data type, print the value and the data type.

let variable = true
console.log(typeof(variable))
console.log(variable)

variable = Number(variable) // Acá cambio el Number(variable), escrito de esa manera, cambia el valor de mi variable(boolean) a Number
console.log(typeof(variable))
console.log(variable)

variable = String(variable)
console.log(typeof(variable))
console.log(variable)

variable = Boolean(variable)
console.log(typeof(variable))
console.log(variable)

/* Crear variable */
let miVariable = true;
// Imprimir en consola el valor y el tipo de dato
console.log(miVariable, typeof(miVariable));

// Convertir a Number data type, imprimir el valor y el data type
let miVariableNumber = Number(miVariable);
console.log(miVariableNumber, typeof(miVariableNumber));

// Convertir a String data type, imprimir el valor y el data type
let miVariableString = String(miVariable);
console.log(miVariableString, typeof(miVariableString));

// Convertir a Boolean data type, imprimir el valor y el data type
let miVariableBoolean = Boolean (miVariable);
console.log(miVariableBoolean, typeof(miVariableBoolean));