// # Exercise 32

// Starting from the exercise 31, we want to print the "Hello" "Name" strings after one second. In order to achieve this, we can use the setTimeout() JavaScript function. This function takes in two parameters: the first one is a function, the second one is the delay time.

// **Suggestion**
// Look at this [link](https://javascript.info/settimeout-setinterval) to understand better how setTimeout() works.

// -----------UTILIZAMOS EL EJERCICIO 31------------
// Creo una función para hacer console.log() de "Marcos".
function printName () {
    console.log ("Marcos")
    return
};

function sayHelloName (printName) { // Creo mi parámetro que, en éste caso, querirendo usarlo como un callback, es la función creada anteriormente.
    console.log ("Hello") // Imprime "Hello".
    printName(); // pongo el parámetro (el cual es una función callback) debajo del código, sin argumentos y con paréntesis vacías, para que se ejecute primero el código y depués la función.
    return
};

sayHelloName(printName); // Llamo mis dos funciónes para que me imprima por consola el resultado déntro de cada código.

// ------------EJERCICIO 32 EXPLICACION------------

// La función setTimeout() es una función de JavaScript que se utiliza para ejecutar una función después de un tiempo específico (en milisegundos) ha transcurrido. Esta función es muy útil cuando se desea realizar una tarea en particular después de un cierto período de tiempo.

// La sintaxis para setTimeout() es la siguiente:

setTimeout(function(){ /*La función anónima que se pasa como primer parámetro a la función setTimeout() es la tarea que se ejecutará después de un tiempo determinado. La función anónima se escribe como function(){...} y se utiliza para definir una tarea específica que se desea ejecutar después de un cierto tiempo.*/
    console.log("Éste código se imprimirá después de 2 segundos"); /*código a ejecutar*/
}, 2000/*tiempo en milisegundos*/);
/*Todo ésto debe de ir al interno de otra función si queremos utilizar el código de otra función*/   

setInterval(function(){
    //código
},2000); /* Ésto funciona exáctamente igual que setTimeout, sin embargo, reimprime el código después del tiempo especificado.*/

// --------------EJERCICIO 32 RESUELTO-------------


function sayHelloName2(callback2) {
    setTimeout(function () { /*Meto la función de retraso dentro de la función que deseo ejecutar después de un tiempo específico.*/
      console.log("Hola");/*Utilizo el código de la otra función, el que deseo retrasar.*/
      callback2();/*llamo mi función callback al final, para que primero se ejecute el código y después me haga la llamada.*/
      return;
    }, 1000);/*introduzco la cantidad de tiempo en milisegundos que deseo retrasar la ejecución del código.*/
  }
  
  function printName2() {
    console.log("Marquitos");
    return;
  }
  
  sayHelloName2(printName2);


