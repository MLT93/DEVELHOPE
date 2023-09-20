import React from "react";

/**
 *
 * @param {Exercise 1}
 *
 * Let's start with a new project and modify the app.js file. Create a variable called hello and initialize it with an h1 tag with the message "Hello, World!".
 */
export function HelloWorld() {
  const hello = `Hello, World!`;
  return <h1>{hello}</h1>;
};

/**
 *
 * @param {Exercise 2}
 *
 * Write a function that receives a name argument and returns a h1 tag with the name variable appended to the "Hello, " string.
 */
export function NameArgument(param) {
  return <h1>Hello, {param.name}</h1>;
};

/**
 *
 * @param {Exercise 3}
 *
 * What happens if the name variable is not passed to the function?
 */
<div>
  Si no se pasa la variable a la función, esta devuelve unicamente "Hello, "
  produciendo un Warning, porque la función no recibe el parámetro para el cual
  está diseñada.
</div>;

/**
 *
 * @param {Exercise 4}
 *
 * What happens if the name variable contains a JSX expression instead of a string?
 */
<div>
  Devuelve un error porque si yo tuviera un elemento JSX completo como <h1>Marcos</h1>, React me da un error porque dentro de las llaves debería
  pasarle unicamente elementos de JavaScript.
</div>;

/**
 *
 * @param {Exercise 5}
 *
 * Write a function that receives two parameters, a and b and returns the sum of them within an h2 tag.
 */

export function Sum(a, b) {
  return <h2>{a + b}</h2>;
};
