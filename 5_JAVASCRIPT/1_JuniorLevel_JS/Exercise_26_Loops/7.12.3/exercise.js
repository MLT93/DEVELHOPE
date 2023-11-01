// # Exercise 26

// Rewrite the exercise 24, by using the While loop.

// Print in the console the numbers from 1 to 10

let num = 0; // A diferencia del bucle <for>, en el bucle <while> se escribe la variable fuera del mismo.
while (num <= 10) { // Dentro de los paréntesis puedo escribir sólo una variable.
    num++; // La modificación de la variable se debe ingresar dentro del código a ejecutar. Pero tener cuidado porque el código va a seguir ejecutándose después de pasar por la condición dentro de los primeros paréntesis.
    console.log(num); // Imprime del 1 al 11.
};

let i = 0;
while (i <= 10) {
  console.log("The number is " + i);
  i++; /* La diferencia entre poner la variable <i++> arriba o abajo del console.log(), es que el código se sigue ejecutando después que pasa por la condición entre paréntesis.
  Si la condición es falsa, el código seguirá ejecutándose.*/
};