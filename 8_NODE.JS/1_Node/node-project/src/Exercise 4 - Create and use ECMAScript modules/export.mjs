/* Exercise 4 - Create and use ECMAScript modules

Create a script that uses export default to export a function.
Create another script that uses import to import the function and then calls it. */

const hola = (nombre) => {
  console.log("Hola", nombre);
};

export default hola;
