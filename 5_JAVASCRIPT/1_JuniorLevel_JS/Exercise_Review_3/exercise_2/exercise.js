// **INT**

// Write a function that takes an array of numbers as a parameter and returns a new array of only the prime numbers in the original array. 
// Print the new array.

// ## Suggestion ##
// Use a for loop to iterate through the array and a nested for loop to check if each number is divisible by any number other than 1 and itself.


// Creo el array de números
let numerillos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Creo la función
function encontrarNumerosPrimos(arr) {
    let numerosPrimos = []; // Creo una variable vacía para guardar mis resultados
  
    for (let i = 0; i < arr.length; i++) { // Le digo a mi loop que recorra el array
      let esPrimo = true; // Inicio una variable con un valor true, así puedo utilizarla después déntro de un IF, si encuentro algún número Primo
  
      if (arr[i] > 1) { // Busco los números dentro del array que sean mayores que 1 (porque un número primo es un número entero mayor que 1 que solo es divisible por 1 y por sí mismo. Si un número es menor o igual a 1, no puede ser considerado primo porque tiene divisores adicionales aparte de 1 y él mismo. Por lo tanto, la condición > 1 se utiliza para excluir los números menores o iguales a 1 de la verificación de primos)
        for (let j = 2; j < arr[i]; j++) { // Al comenzar desde 2 el segundo bucle, nos saltamos la división entre 1 y el número que estamos evaluando (), ya que todo número es divisible por 1. Iniciar en 2 es eficiente y suficiente para realizar la comprobación de divisibilidad adecuada. Establecer j = 2 nos permite iniciar la verificación de divisibilidad desde el número 2 y continuar hasta un número anterior al número que estamos evaluando (el número de j < arr[i]), evitando considerar la divisibilidad entre 1 y el número mismo.
          if (arr[i] % j === 0) { // El operador de módulo % devuelve el resto de la división entre dos números. En este caso, arr[i] % j calcula el resto de dividir arr[i] entre j. Si el resultado es 0, significa que arr[i] es divisible de manera exacta por j, lo que implica que arr[i] no es un número primo, lo cual indica que arr[i] tiene un divisor distinto de 1 y de sí mismo, por lo tanto no sería un número primo.
            esPrimo = false; // Digo que mi variable esPrimo, es false
            break; // Paro el bucle
          }
        }
      } else {
        esPrimo = false; // La función de esta parte del código es establecer la variable esPrimo en false cuando se encuentra un divisor para el número arr[i], lo cual indica que el número no es primo
      }
  
      if (esPrimo === true) { // Si la condición se cumple, es decir, si esPrimo es true, significa que el número arr[i] es un número primo. En ese caso, se ejecuta el bloque de código dentro del if, que dice que agregue al final del array vacío numerosPrimos, el número primo encontrado en cada una de las vueltas del bucle for.
        numerosPrimos.push(arr[i]);
      }
    }
  
    if (numerosPrimos.length > 0) { // Si el arreglo numerosPrimos tiene una longitud mayor que 0, significa que se encontraron números primos en el arreglo. En ese caso, se devuelve el arreglo numerosPrimos que contiene los números primos encontrados mediante la instrucción return numerosPrimos. Si el arreglo numerosPrimos está vacío, es decir, no se encontraron números primos en el arreglo, se ejecuta el bloque else
      return numerosPrimos;
    } else {
      return "No se encontraron números primos en el arreglo.";
    }
  }
  
  const primosEncontrados = encontrarNumerosPrimos(numerillos);
  console.log("Los números primos con for loop:", primosEncontrados);
