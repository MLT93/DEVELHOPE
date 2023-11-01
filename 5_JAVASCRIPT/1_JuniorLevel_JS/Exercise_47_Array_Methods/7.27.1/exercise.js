// # Exercise 47

// Given the following array:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// * Remove the element `Giovanni`.
// * Add a new element called `Pippo` at the end of the array.
// * Add the element `Giovanni` to the beginning of the array.

// **Suggestion**

// Look at the official [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to find the right methods

console.log("El array inicial es =>", names)

console.log("Con .splice éstos es lo que quito => ", names[3]);
names.splice(3,1); // Quita y añade del array de ésta forma: .splice(inicioIndice(inclusive), elementosAQuitar, elementoParaAñadir1, elementoParaAñadir2, ..)
console.log("Lo que queda después del .splice en el array => ", names);

names.push("Pippo"); // Permite agregar al final del array
console.log("Agrego al final del array utilizando el .push => ", names[3]);
console.log("El array ahora es => ", names)

names.unshift("Giovanni");  // Permite agregar al inicio del array
console.log("Agrego al inicio del array => ", names[0]);
console.log("En fin el array queda así => ", names)