// # Exercise 44

// Given the following array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 32];

// * Print the first element of the array.
// * Print the last element of the array.
// * Print the array length.
// * Print the twentieth element of the array and explain the output.

// Imprimo el primer elemento del array.
console.log("Mi primer elemento equivale a:", numbers[0]); // Los elementos los llamamos con el número del índice al cual pertenecen. El primer elemento de un array siempre empieza desde 0.

// Imprimo el último elemento del array.
console.log("Accedo al último elemento utilizando el .slice:", numbers.slice(-1)[0]); // El .slice(inicio, fin) Se utiliza para extraer una porción de un array existente y devuelve un nuevo array con los elementos seleccionados. Permite especificar el inicio y el fin de la porción que se desea extraer array.slice(inicio, fin) y, si el inicio no se especifica, declara solo el fin. Después accede al array trámite los corchetes [..]
// Array: El array original del cual se desea extraer una porción.
// Inicio (opcional): El índice donde se iniciará la extracción. Si no se especifica, se asume un valor de 0, lo que significa que se comenzará desde el primer elemento del array.
// Fin (opcional): El índice donde finalizará la extracción. El método .slice() extraerá los elementos hasta fin - 1. Si no se especifica, se extraerán todos los elementos hasta el final del array.
// Ejemplo 1: Extraer una porción específica del array
const array1 = [1, 2, 3, 4, 5];
const newArray1 = array1.slice(1, 4);
console.log(newArray1); // Resultado: [2, 3, 4]
// Ejemplo 2: Extraer desde un índice(incluido) hasta el final del array
const array2 = [1, 2, 3, 4, 5];
const newArray2 = array2.slice(2);
console.log(newArray2); // Resultado: [3, 4, 5]
// Ejemplo 3: Crear una copia exacta de un array
const originalArray = [1, 2, 3];
const newArray3 = originalArray.slice();
console.log(newArray3); // Resultado: [1, 2, 3]

// Otra forma de acceder al último elemento de mi array:
console.log("Consigo el último elemento usando el .length:", numbers[numbers.length - 1]); // Ésta es otra manera de acceder al último elemento de mi matriz/array.

// Imprimo la longitud total del array.
let indiceTot = `La longitud total del array es de ${numbers.length} elementos`; // Creo una variable (indiceTot) para almacenar la longitud (.length) referente al índice de mi array (numbers).
console.log(indiceTot); // Imprime por consola el índice total de la cantidad de elementos que tiene el array.

// Imprimo el elemento número 20 del array.
console.log("El elemento dentro del índice número 20 de mi array es:", numbers[20]); // Imprimirá undefined porque no hay 20 elementos del array.

