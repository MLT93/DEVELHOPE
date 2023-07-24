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
