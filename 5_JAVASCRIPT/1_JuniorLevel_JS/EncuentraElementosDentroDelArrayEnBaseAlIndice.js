// # Dado un array de 10 numeros, busca la primera posición del número 1 déntro del primer elemento del índice, si no está presente, return -1. El output devuelve un integrante el indice

const arrayNumeroso = [2, 23, 1, 55, 6, 1, 8];
const arrNum = [89, 33, 12, 1, 22, 12];

function buscarPosicion(array) {
  // Recorro el array,
   for (let i = 0; i < array.length; i++) {
    // si la variable i, mientras avanza por el array, encuentra una propiedad/elemento que es equivalente a 1, 
    if (array[i] === 1) {
      // devuelvo el índice, del valor de la propiedad/elemento, donde se encuentra la variable i a medida que recorre el array. Pero recuerda que sólo devolverá el primer índice encontrado. 
      return console.log("El índice dónde se encuentra el número 1 es:", i);
    }
  }
  // Si no se encuentra nada, devolverá -1
  return -1;
}

// buscarPosicion(arrayNumeroso);
buscarPosicion(arrNum);

// La declaración return i se utiliza para terminar la ejecución de la función buscarPosicion y devolver un valor. En este caso, cuando se encuentra la primera posición del número 1 dentro del primer elemento del array, se devuelve el valor de i, que representa la posición en la que se encontró el número.
// Por ejemplo, si el primer elemento del array es [1, 1, 1, 1], al iterar sobre cada elemento, la variable i tomará los siguientes valores: 0, 1, 2, 3. En la segunda iteración, se encuentra el número 1 en la posición 1, por lo tanto, se ejecuta return i, y el valor 1 se devuelve como resultado de la función.
// En caso de que no se encuentre el número 1 en el primer elemento del array, se llegará al final del bucle for sin encontrar una coincidencia, y se ejecutará la instrucción return -1. Esto indica que el número 1 no está presente en el primer elemento del array, y se devuelve -1 como indicador de que no se encontró la posición buscada.
// Espero que esta explicación aclare el uso del return i en el código

