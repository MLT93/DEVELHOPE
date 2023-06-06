// # Exercise 18

// Rewrite the code, by using the ternary operator.


/* EXPLICACIÓN + EJEMPLO:

condición ? expresión1 : expresión2

let age = 18;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message); // "You are an adult"

En este ejemplo, tenemos la condición age >= 18.
Si la condición es verdadera, la expresión "You are an adult" se asigna a la variable message.
Si la condición es falsa, la expresión "You are not an adult" se da a la variable message.
Los operadores ternarios son especialmente útiles para asignar valores a variables en una
sola línea de código en lugar de utilizar un if-else completo, lo que hace que el código 
sea más conciso y legible. Sin embargo, es importante tener en cuenta que, si la expresión
ternaria es muy compleja o difícil de leer, puede ser mejor usar un if-else regular para
mejorar la claridad y la legibilidad del código.
En el ejemplo que te mostré, se asigna un valor a la variable greeting dependiendo
de la condición que se cumpla en el operador ternario. La asignación de valores a 
una variable es común en muchos casos de uso de los operadores ternarios.
La razón por la que se asigna un valor a una variable es porque los operadores ternarios
pueden ser muy útiles para simplificar la lógica de una condición, especialmente cuando
queremos asignar un valor a una variable dependiendo de la condición que se cumpla.
En lugar de utilizar una declaración if...else, podemos utilizar un operador ternario
para asignar el valor a la variable en una sola línea de código.
*/


let number = 7;

if (number > 0) {

console.log("The number is positive");

} else console.log("The number is negative");




let numero = -24;
let mensajeDelNumero;

mensajeDelNumero = 
    numero > 0 
        ? "El número es positivo" 
        : "El número es negativo"
console.log(mensajeDelNumero)

/*
OTRO EJEMPLO:

let isSunny = true;
let weatherMessage = isSunny ? "Today is sunny!" : "Today is not sunny.";
console.log(weatherMessage);

Cuando se ejecuta este código, la variable weatherMessage se asigna al valor "Today is sunny!", 
ya que la condición en el operador ternario [isSunny ? "Today is sunny!" : "Today is not sunny."]
es verdadera (ya que isSunny es true).
Luego, se muestra el valor de la variable weatherMessage en la consola con console.log(weatherMessage),
que imprimirá el valor "Today is sunny!" en la consola.
*/
