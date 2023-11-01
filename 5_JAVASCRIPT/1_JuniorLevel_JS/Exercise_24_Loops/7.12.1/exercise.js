// # Exercise 24

// Print in the console the numbers from 1 to 10.

// Código común para buscar al interno de un Array, con el bucle for:
// for (let indice = 0; ♦nombre del array donde quiero buscar♦ <= indice.length; indice++) {
//   ♦código a ejecutar♦
// };

function d (variable) {
    return console.log(variable)
};


for (let x = 0; x <= 10; x++) { // Entre las paréntesis asignamos una variable; creamos y cumplimos una condicíon; modifico la condición
    d(`Number ${x}`)
}; // Nos va a imprimir los números del 0 al 10, porque empieza siempre desde 0 a contar.


// Si deseo imprimir del 1 al 10, como pide el ejercicio, entonces la variable inicial debe cambiar.
for (let numeros = 1; numeros <= 10; numeros++) { // Entre las paréntesis asignamos una variable; creamos y cumplimos una condicíon; modifico la condición
    d(`Los números ahora son ${numeros}`)
};