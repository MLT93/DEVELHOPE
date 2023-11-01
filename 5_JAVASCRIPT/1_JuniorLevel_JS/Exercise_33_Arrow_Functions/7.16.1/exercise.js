// # Exercise 33

// Replace the function below with arrow function.

// function sum() {
// return 5 + 5;
// }

// console.log(sum());

// The output of the function doesn't have to change.

// ---------------EXPLICACION----------------
/* Las arrow functions, también conocidas como funciones flecha, son una sintaxis alternativa y más concisa para definir funciones en JavaScript.
La sintaxis básica de una arrow function es la siguiente: */

    const nombreFunción = (misArgumentos) => {código};

/* Donde misArgumentos son los argumentos de la función, y código es el cuerpo de la función.*/

// Definición tradicional de función
function sumar(a, b) {
  return a + b;
}

// Arrow function equivalente
const sumar2 = (a, b) => a + b;

/*La arrow function es más concisa y elimina la necesidad de escribir la palabra clave function, las llaves {}, y la palabra clave return en este caso, ya que el valor de retorno se infiere de forma implícita.

Las arrow functions también tienen algunas diferencias en su comportamiento en comparación con las funciones tradicionales, como el hecho de que no tienen su propio contexto this, lo que significa que heredan el contexto this del ámbito en el que se definen.

En resumen, las arrow functions son una sintaxis alternativa para definir funciones en JavaScript que es más concisa y elimina la necesidad de escribir algunas palabras clave.*/

// ---------------EJERCICIO 33----------------

// Ésto es lo que me piden:
const sum2 = () => { // Declaro el nombre de mi función sin argumentos.
    console.log (5 + 5); // Imprimo por consola la suma de 5+5.
    return // Devuelvo el resultado.
};

sum2(); // Llamo a mi función.


// También podría ser así:
const sumaNumeros = (numero1, numero2) => { // Al utilizar argumentos, puedo llamar la función posteriormente dándole los valores que yo desee sumar.
    console.log(numero1 + numero2)
    return
};

sumaNumeros(10,20);