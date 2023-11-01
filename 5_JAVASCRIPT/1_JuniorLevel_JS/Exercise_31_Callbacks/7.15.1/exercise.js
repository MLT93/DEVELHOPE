// # Exercise 31

// * Create two functions: the first one is called `sayHelloName` and takes is as parameter another function (the second one) called `printName`.
// * The `printName` function should just execute the console.log() method and print the name. The `sayHelloName` that takes in the callback as parameter, must execute the console.log() of the "Hello" string and after that invoke the function taken in as parameter.

// Creo una función que albergará como parámetro ótra función posteriormente, cuando la invoco.
/* El uso de funciones como argumentos de otras funciones se conoce como "callbacks". Los callbacks son muy útiles para crear funciones flexibles y dinámicas
que pueden realizar diferentes tareas según la función que se pase como argumento. En este caso, sayHelloName tiene un comportamiento genérico que simplemente
imprime "Hello", pero su comportamiento específico se determina por la función que se pasa como argumento. En este caso, la función printName se utiliza para
imprimir el nombre "Cosimo" después del mensaje "Hello".*/
function sayHelloName (callback) { // Creo mi parámetro que posteriormente, cuando lo llámo dentro de mi función para poderlo utilizar, le pongo los dos paréntesis y se convierte en una función
    console.log ("Hello") // Imprime "Hello".
    callback(); // pongo el parámetro, el cual ahora es una función y que no tiene argumento, para que se ejecute primero el código y depués dé una respuesta.
    return
};

// Creo una función para hacer console.log() de "Hello"
function printName () {
    console.log ("Marcos")
    return
};

sayHelloName(printName);

//---------------------EJEMPLO------------------------


function operarEnArreglo(arreglo, operacion) {
    for (let i = 0; i < arreglo.length; i++) {
      let resultado = operacion(arreglo[i]);
      console.log(`El resultado de la operación en el elemento ${i} es ${resultado}.`);
    };
    return
  };
  
  function duplicarNumero(resultado) {
    return resultado * 22; // Multiplica por 2 el número que están dentro del índice del array, cada vez que completa una vuelta del bucle.
  };
  
  let numeros = [2, 4, 8, 12, 16, 18];

  // Al imprimir <numeros> me imprimirá los números del índice del array.
  operarEnArreglo(numeros, duplicarNumero);
  
  //---------------EXPLICACIÓN CALLBACKS--------------

// Los callbacks son funciones que se pasan como argumentos a otras funciones. Para aplicarlos, debes seguir los siguientes pasos:
// Crea una función que reciba como parámetro otra función, que será la función callback. Esta función puede tener una lógica propia que llame a la función callback en algún momento.
// Crea la función callback, que será la que se ejecutará en respuesta a algún evento o condición específica que se defina en la función que la llama. Esta función puede tener un nombre y parámetros, dependiendo de cómo vaya a ser utilizada.
// Llama a la función principal y pásale la función callback como argumento. La función principal se encargará de llamar a la función callback en el momento adecuado, de acuerdo a su lógica interna.
// Un ejemplo de cómo aplicar los callbacks puede ser el siguiente:

// Función que recibe un callback como parámetro
function doSomething(callback) {
  // Realiza alguna tarea...
  console.log("Haciendo algo...");
  // Llama a la función callback
  callback();
}

// Función callback
function doSomethingElse() {
  console.log("Haciendo algo más...");
}

// Llamada a la función principal pasando la función callback como argumento
doSomething(doSomethingElse); // Print -> Haciendo algo...// Print -> Haciendo algo más...

// En este ejemplo, la función doSomething recibe como parámetro una función callback,
// la cual es la función doSomethingElse. La función doSomething realiza alguna tarea y 
// luego llama a la función callback, que se ejecutará en respuesta a la tarea realizada
// por doSomething.

 //---------------EXPLICACIÓN CALLBACKS---------------

 function sumar(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
  }
  
  function imprimirResultado(resultado) {
    console.log(`El resultado es ${resultado}`);
  }
  
  sumar(2, 3, imprimirResultado);
  
// En este ejemplo, la función sumar toma tres argumentos: a, b y callback.
// Suma a y b y luego llama a callback con el resultado. La función imprimirResultado
// toma un argumento resultado y lo imprime en la consola.
// Cuando se llama a sumar con los argumentos 2, 3 y imprimirResultado, imprimirResultado
// se pasa como el callback. Por lo tanto, cuando sumar termina de sumar los dos números,
// llama a imprimirResultado con su argumento resultado, y imprimirResultado lo imprime en la consola.
// Los callbacks son útiles para realizar tareas asíncronas como solicitudes de red o lectura
// de archivos, donde se necesita esperar una respuesta antes de continuar con el resto del código.


