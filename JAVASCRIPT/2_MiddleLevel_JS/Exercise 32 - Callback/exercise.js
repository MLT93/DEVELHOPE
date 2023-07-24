// Variable con nombre
let name = "Cosimo";

// Función que imprime el name
function printName(name) {
  console.log(name);
}

// Función que dice "Hola" e invoca la función callback después con el parámetro de la variable
function sayHelloName(callback) {
  console.log("Hola");
  callback(name);
}

// Invoco la función
sayHelloName(printName);

// Agrego SetTimeout() con un retardo de 3000ms, sin parámetros para que el mensaje se imprima después de 3 segundos
setTimeout(() => {
  sayHelloName(printName);
}, 3000);

