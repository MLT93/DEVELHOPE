// # Exercise 30

// Write a function called `sayHelloName` that takes in one parameter. The function must return the concatenation of two strings (the output should be: "Hello Cosimo"). In this case "Cosimo" is the string passed as parameter.
// * The function takes in one parameter.
// * The function returns "Hello" plus the name.
// * The output printed in the console must be: "Hello `name`"


// Creo una función con un parámetro
function sayHelloName (oneParameter){
    oneParameter = "Cosimo" // Le asigno un valor a mi variable del parámetro que creé, para poder utilizarla dentro de la función.
    return console.log("hello " + oneParameter) // Devuelvo "hello" más mi variable que utilizo y creo como un parámetro dentro de mi función.
};

sayHelloName(); // Llamo mi función