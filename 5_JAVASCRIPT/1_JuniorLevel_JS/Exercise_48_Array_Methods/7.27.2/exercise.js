// # Exercise 48

// Given the following array:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Add a hyphen after each element of the array. The output should something like this: Luca-Marco-Vittorio-Giovanni

// **Suggestion**
// Look at the official [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to find the right method.

console.log("Array normal => ", names)
let namesSeparadoPorGuiones = names.join("-"); // join() une todos los elementos del array por aquello que le escribamos en los argumentos (dentro de los paréntesis). No modifica el array original, devuelve una nueva cadena. Si deseas mantener el array original sin cambios, puedes asignar el resultado a una nueva variable e imprimir eso. 
console.log("El array con el .join => ", namesSeparadoPorGuiones);
