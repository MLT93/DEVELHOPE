// # Exercise 1

const variableBrandCoche = "Toyota";
const variableModeloCoche = "Corolla";
const caballosDelCoche = "90CV";
// const = variables que no puede ser modificado su valor

let proprietarioDelCoche = "Juan";
let aceiteCoche = "10/13";
// let o var = pueden modificar o reasignar su valor. La diferencia entre var y let es que var es código antiguo y let tiene un sistema de seguridad (ES6)

let x = 8;
// let x = true // la consola da error porque repito la misma variable

var y = 4;
var y = "Pedro"; // No modifica nada, simplemente es otra variable más

// -----------------------------------------

// # Exercise 2

// Write a better names for variables where it's necessary.

let name = "Mario";
let surname = "Rossi";
let age = 20;
let isMarried = false;
let job = "developer";
let seGraduo = false;

// -------------------------------------------

// # Exercise 3

// * Create 3 variables: `area`, `x`, `y`
// * Use the variable called `area` to print in console the area of the rectangle.

let x2 = 2;
let y2 = 4;
const area = x2 * y2;

console.log(x2, y2, area);

// ---------------------------------------------

// # Exercise 4

// * Create the variables `firstName`, `lastName` and `fullName`.
// * Assign them a value and print in the console the full name

let firstName = "Wilmer"; // string -> ""  // boolean -> true # false  // number -> 02345
let lastName = "Salazar";
const fullName = firstName + lastName;

console.log(firstName, lastName, fullName); // console.log nos sirve para mostrarnos lo queramos por consola "Print console"

// --------------------------------------------

// # Exercise 5

// Create the variables `isDoorClosed` and `isDogOutside`. Set the `isDoorClosed` variable to true and `isDogOutside` variable to false.
// Run the script. Try to invert the variables values and see what happens.

isDoorClosed = true;
isDogOutside = false;

// Don't modify this block. This is an if statement, you'll study it later in this course.
if (isDoorClosed == true && isDogOutside == false) {
  console.log("the door is closed and the dog is inside");
} else if (isDoorClosed == false && isDogOutside == true) {
  console.log("The door is open and the dog is outside");
} else console.log("Modify the variables values");

// ----------------------------------------------

// # Exercise 6

// * Convert the `saludando` variable to a boolean data type.
// * Convert the `suEdad` variable to a string data type.
// * Convert the `<añoDeMatriculación>` variable to a numeric data type

let saludando = "ciao"; // boolean -> true o false
let suEdad = "21"; // string -> comillas
let añoDeMatriculación = 965; // number -> 29038

Boolean(saludando);
String(suEdad);
Number(añoDeMatriculación);

// -----------------------------------------------

// # Exercise 7

// * Convert the `saludo` variable to a numeric data type and print it in the console.
// * Convert the `theAge` variable to a boolean data type and print it in the console.
// * Convert the `esGraduado` variable to a string data type and print it in the console.

let saludo = "ciao"; // number
let theAge = 18; // boolean
let esGraduado = false; // string

console.log(Number(saludo));
// Output ---> NaN
console.log(Boolean(theAge));
// Output ---> true
console.log(String(esGraduado));
// Output ---> false

// Try to explain the output of the `saludo` variable casting.
// NaN, proviene del acrónimo en inglés «Not a Number» (en español: no es un número).

// -----------------------------------------------

// # Exercise 8

// * Create a variable and set it to `true`.
// * Print the value in the console and the data type.
// * Convert it to a numeric data type, print the value and the data type.
// * Convert it to string data type, print the value and the data type.
// * Finally, convert it to a boolean data type, print the value and the data type.

/* Crear variable */
let miVariable = true;
// Imprimir en consola el valor y el tipo de dato
console.log(miVariable, typeof miVariable);

// Convertir a Number e imprimirlo en pantalla
let miVariableNumber = Number(miVariable);
console.log(miVariableNumber, typeof miVariableNumber);
console.log(Number(miVariable), typeof Number(miVariable));

// Convertir a String e imprimirlo en pantalla
let miVariableString = String(miVariable);
console.log(miVariableString, typeof miVariableString);

// Convertir a Boolean e imprimirlo en pantalla
let miVariableBoolean = Boolean(miVariable);
console.log(miVariableBoolean, typeof miVariableBoolean);

let variable = true;
console.log(typeof variable);
console.log(variable);
variable = Number; // [Function: Number]
console.log(typeof variable);
console.log(variable);
variable = String;
console.log(typeof variable);
console.log(variable);

// -----------------------------------------------

// # Exercise 9

// * Try to predict the output of the comparisons before printing them in the console

const nombres = "Mario";
const apellidos = "Rossi";
const años = 27;
const estaGraduado = false;
const average = 27;
const examsCompleted = 10;
const primerAñoCompletado = true;
const añosRealizados = 1;

nombres == apellidos;
años <= average;
primerAñoCompletado == apellidos;
añosRealizados == primerAñoCompletado;
primerAñoCompletado === añosRealizados;
examsCompleted < años;
estaGraduado > añosRealizados;

// output_1 ---> false
// output_2 ---> true
// output_3 ---> false
// output_4 ---> true
// output_5 ---> false
// output_6 ---> true
// output_7 ---> false

// ------------------------------------------------

// # Exercise 10

// * Explain the difference between the double and the triple equals operator.

const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted;
yearsCompleted === firstYearCompleted;

// (==)  que son igual ma no el mismo tipo 1 == "1" (no igual)
// (===) realiza una comparación de igualdad estricta, lo que significa que compara 1 === 1 (igual)
// los valores sin realizar ninguna conversión de tipo. Si los valores son del mismo tipo
// y tienen el mismo valor, se consideran iguales. Si los valores son de tipos diferentes o tienen valores diferentes, se consideran no iguales.
// -------------------------------------------------

// # Exercise 11

// Modify the second term of the expression in order to get true as result.

10 < 9;
45 == 34;
true === 1;
false === 0;
1 == 0;
4 <= 2;
4 >= 8;

//respuesta

10 < 12;
45 == 45;
true === true;
false === false;
1 == "1";
4 <= 4;
4 >= 3;

console.log(10 < 11);
console.log(45 == 45);
console.log(true === true);
console.log(false === false);
console.log(1 == "1");
console.log(4 <= 5);
console.log(4 >= 4);

// -------------------------------------------------

// # Exercise 12

// Complete the expression inside the console.log(), by using the correct logical operator. The output must be `true`.

// console.log("testing" == "testing" ... "Mario" == "Cool Guy") //the result must be true

// -------------------------------------------------

// # Exercise 13

// * Complete the expression inside the console.log(), by using the correct logical operator. The output must be `false`.

// console.log("testing" == "testing" ... "Mario" == "Cool Guy") // the result must be false

console.log("testing" == "testing" || "Mario" == "Cool Guy");

// --------------------------------------------------

// # Exercise 14

// Complete the expressions inside the console.log(), by using the correct logical operator.

const pregunta1 = 101 < 67; // false
const pregunta2 = 1 == true; //true
const pregunta3 = true != 1; // false
const pregunta4 = 4 <= 4; // true

// console.log(pregunta1 ... pregunta2) //the result must be true
// console.log(pregunta1 ... pregunta2) //the result must be false
// console.log(pregunta3 ... pregunta2) //the result must be true
// console.log(pregunta4 ... pregunta4) //the result must be false
// console.log(pregunta2 ... pregunta4) //the result must be false

// Marcos
// console.log(question1 || question2) //the result must be true
// console.log(question1 && question2) //the result must be false
// console.log(question3 || question2) //the result must be true
// console.log(question4 != question4) //the result must be false
// console.log(question2 != question4) //the result must be false

// console.log(question1 || question2) //the result must be true
// console.log(question1 && question2) //the result must be false
// console.log(question3 || question2) //the result must be true
// console.log(question4 && !question4) //the result must be false
// console.log(question2 && !question4) //the result must be false

// console.log(
//     question1, // Print false
//     question2, // Print true
//     question3, // Print false
//     question4, // Print true
// )

//# Exercise 14 EXPLICADO

// Complete the expressions inside the console.log(), by using the correct logical operator.

const question1 = 101 < 67; // Print false
const question2 = 1 == true; // Print true
const question3 = true != 1; // Print false
const question4 = 4 <= 4; // Print true

console.log(
  `
1º variable ${question1},`,
  `2ª variable ${question2},`
  // `3ª variable ${question3},`,
  // `4ª variable ${question4},
  // `,
);

console.log(
  "Primera comparación || con la 1º variable y la 2ª variable =" + "",
  question1 || question2
); //the result must be true ♦ Con || si las dos condiciones son true, dará TRUE. Si la primera es true y la segunda es false, dará TRUE. Si la primera es false y la segunda es false, será FALSE. Si la primera es false y la segunda es true, será TRUE.
console.log(
  "Segunda comparación && con la 1º variable y la 2ª variable =" + "",
  question1 && question2
); //the result must be false ♦ Con && si las dos condiciones son true, dará TRUE. Si la primera es true y la segunda es false, dará FALSE. Si la primera es false y la segunda es false, será FALSE. Si la primera es false y la segunda es ture, será FALSE.
// console.log("Tercera comparación" + "", question3 || question2) //the result must be true
// console.log("Cuarta comparación" + "", question4 != question4) //the result must be false ♦ Acá creo una negación con el <!=> para que NO sea <==>
// console.log("Quinta comparación" + "", question2 != question4) //the result must be false

// console.log(question1 || question2) //the result must be true
// console.log(question1 && question2) //the result must be false
// console.log(question3 || question2) //the result must be true
// console.log(question4 && !question4) //the result must be false ♦ Con el <!> creo una negación en la variable/condición
// console.log(question2 && !question4) //the result must be false

// ---------------------------------------------------

// # Exercise 15

// Create a variable called `age` and assign it a numeric value. Use the Conditional (ternary) operator. If the variable is grater or equal to 18, print `You can drive a car`. If the variable is less than 18, print `You are too young to drive`.
// Wil
let laEdad = 26;

console.log(laEdad >= 18 ? "you can drive a car" : "NO PUEDES");

let losAños = 22;
console.log(
  losAños >= 18 ? `You can drive a car` : `You are too young to drive`
);

let age2 = 15;
age2 >= 18
  ? console.log("You can drive a car")
  : console.log("You are too young to drive");

let edad = 999;
console.log(edad >= 18 ? "You can drive a car" : "You are too young to drive");
console.log(edad);

// Lau
let miEdad = 17;
console.log(
  miEdad >= 18 ? "Puedes conducir un coche" : "No puedes conducir un coche"
);

// function d () {
// 	return console.log ()
// };

// let d = console.log
// // luisa
// let age01 = 22;
//     if (Boolean(age01)  >= 18) {
//         d("You can drive a car");
//     return true;
// } else if (Boolean(age01) <= 18) {
//     d("you are too young to drive");
//     return false
// };

// ---------------------------------------------------

// # Exercise 16

// Create two boolean variables called `isSunnyDay` and `isHomeworkCompleted`. Assign them a value. Use the Ternary Operator in order to print `Jesse can go out to play`, if both variables are true. If one of them or both are false print `Jesse stays home`.

//Wil
let diaDeVerano = true;
let deberesHechos = true;
console.log(
  diaDeVerano && deberesHechos ? "Jesse can go out to play" : "Jesse stays home"
);

//luisa
let isSunnyDay = true;
let isHomeworkCompleted = false;
isSunnyDay == true
  ? console.log("Jesse can go out to play")
  : console.log("Jesse stays home");

// --------------------------------------------------

// # Exercise 17

// Rewrite the exercise number 15, by using the `if else` statement.

// # Exercise 15
// Create a variable called `losMisAños` and assign it a numeric value.
// If the variable is grater or equal to 18, print `You can drive a car`.
// If the variable is less than 18, print `You are too young to drive`.

let losMisAños = 68;

// if (losMisAños >= 18) {
//   console.log("You can drive a car");
// } else {
//   console.log("You are too young to drive");
// }

// <Typeof> nos da el tipo de variable que tengo (boolean, string o number). Para las comprobaciones el typeof va dentro del código a ejecutar.
if (typeof losMisAños !== "number") {
  // Si no es un número me dará true y continuará la línea del código, gracias a la comprobación hecha con typeof. Mientra que, si es distinto que un número, ejecutará el console.log("Ops...etc.") .
  console.log("Ops... Inside a number losMisAños please.");
} else if (losMisAños >= 18 && losMisAños < 66) {
  console.log("You can drive a car.");
} else if (losMisAños < 18) {
  console.log("You are too young to drive.");
} else {
  console.log("You don't have a correct losMisAños to drive.");
}

// --------------------------------------------------

// # Exercise 18

// Rewrite the code, by using the ternary operator.

let numerico = 7;

// if (numerico > 0) {

// console.log("The numerico is positive");

// } else console.log("The numerico is negative");

console.log(
  numerico > 0 ? "the numerico is positive" : "the numerico is negative"
);

// Variable a comparar.
let number = -23;
// Creo una variable para hacer la comparación.
let numberMessage =
  number > 0 ? "The number is positive" : "The number is negative";
// Imprimo en consola.
console.log(numberMessage);

// ------------------------------------------------

// # Exercise 19

// Given the variables `name` and `surName`, create an `if else` statement to print the full name. The full name must be printed only if `name` and `surName` are `truthy`, otherwise print the message: `Full name is invalid`.

// function d() {
//   return console.log()
// };

let nombre = "Mario";
let surName = "Rossi";

if (nombre === "Mario" && surName === "Rossi") {
  console.log("Mario" + "Rossi");
} else {
  console.log(`Full name is invalid`);
}

let fullNamer = nombre + surName;
console.log(
  nombre === "Mario" && surName === "Rossi" ? fullNamer : `Full name is invalid`
);

// -----------------------------------------------

// # Exercise 20

// Create a variable called `primitivo` and assign it a value. Check if the value is number, string or boolean type and print it in the console.
//Wilmer
let primitivo = 2;

if (typeof primitivo === "string") {
  console.log("es una string");
} else if (typeof primitivo === "number") {
  console.log("es un numero");
} else if (typeof primitivo === "boolean") {
  console.log("es un booleano");
} else console.log("no se que tipo de variable es");

// Marcos
let valores = [
  // Definimos una array/lista/matriz con los posibles valores que queramos.
  "Hola bebé",
  42,
  true,
  "Año de nacimiento",
  false,
  323,
  23345,
  "true",
  false,
  "Hello world!",
  true,
  32,
  0,
  `Luna`,
  false,
  true,
];

let valorRandom = valores[Math.floor(Math.random() * valores.length)]; // Asignamos un valor aleatorio de la lista a la variable "valorRandom" con math.floor para redondear, math.random para elegir aleatoriamente multiplicado por la longitud del array "valores"

if (typeof valorRandom === "number") {
  // Creamos un if-else para ver si los valores aleatorios que creamos son string, booleanos o numbers.
  console.log(`Number value`);
} else if (typeof valorRandom === "boolean") {
  console.log(`Boolean value`);
} else {
  console.log(`String value`);
}

// -----------------------------------------------

// # Exercise 21

// Create a variable called `password`. If the password length is between 4 and 6, print the message `password length is correct`, otherwise print the message `password not valid`.

// Wilmer
const passwordId = "123456";

if (passwordId.length < 4 || passwordId.length > 6) {
  console.log("The passwordId is not valid");
} else console.log("the passwordId is correct");

// Lau
const passWord = "Hi560";

console.log(
  passWord.length > 4 && passWord.length < 6
    ? "Password length is correct"
    : "Password not valid"
);

if (passWord.length > 4 && passWord.length < 6) {
  console.log("Password length is correct");
} else {
  console.log("Password not valid");
}

// Marcos
const password = "HiFi";

if (password.length >= 4 && password.length <= 6) {
  console.log("Password length is correct");
} else {
  console.log("Password not valid");
}

// -----------------------------------------------

// # Exercise 22

// Rewrite the exercise 20, by using a Switch statement.

primitive = false;

switch (typeof primitive) {
  case "string":
    console.log("es una string");
    break;
  case "number":
    console.log("es un numero");
    break;
  case "boolean":
    console.log("es un booleano");
    break;
  default:
    console.log("no se que tipo de variable es");
}

// Marcos
function d(variable) {
  return console.log(variable);
}

let primitivos = 23;

switch (typeof primitivos) {
  case "string":
    d("Esto es un String.");
    break;
  case "number":
    d("Esto es un Number.");
    break;
  case "boolean":
    d("Esto es un Boolean.");
    break;
  case "undefined":
    d("No hay ningún valor asignado.");
    break;
  default:
    d("No conozco aún ese valor.");
}

// Lau
let primitive = "Amy";

switch (typeof primitive) {
  case "number":
    console.log("Es un numero");
    break;
  case "string":
    console.log("Es un string");
    break;
  case "boolean":
    console.log("Es un boolean");
    break;
  default:
    console.log("Esta tipo de variable no esta estudiada todavía");
}

// ----------------------------------------------

// # Exercise 23

// Print in the console the price of the room according to the following scheme:

// * Prince for Basic Room --> 50€
// * Price for Junior Suite Room --> 80€
// * Price for Master Suite  --> 100€

// Use the Switch statement.

//Wilmer
const roomRate = "BR";

switch (roomRate) {
  case "BR":
    console.log("the price is 50 euros");
    break;
  case "JSR":
    console.log("the price is 80 euros");
    break;
  case "MS":
    console.log("the price is 100 euros");
    break;
  default:
    console.log("no tenemos precios ni habitaciones ni na");
    break;
}

// Lau
let room = "mi caca";

switch (room) {
  case "Basic Room":
    console.log("El precio de la Basic Room son 50£");
    break;
  case "Junior Suite Room":
    console.log("El precio de la Junior Suite Room son 80£");
    break;
  case "Master Suite":
    console.log("El precio de la Master Suite son 100£");
    break;
  default:
    console.log("Esta habitacion no esta disponible");
}

// Marcos PRODIGY

let priceRoom = [
  (preciosEneroAMayo = {
    // índice del array 0
    precioBasicoDeEneroAMayo: 50,
    precioJovenDeEneroAMayo: 80,
    precioMasterDeEneroAMayo: 100,
  }),
  (preciosDeMayoAAgosto = {
    // índice del array 1
    precioBasicoDeMayoAAgosto: 80,
    precioJovenDeEneroAMayo: 110,
    precioMasterDeEneroAMayo: 130,
  }),
  (preciosRestoDelAño = {
    // índice del array 2
    precioBasicoDelRestoDelAño: 40,
    precioJovenDelRestoDelAño: 70,
    precioMasterDelRestoDelAño: 90,
  }),
];

// Creo una variable para almacenar la selección de las habitaciones
// let selectionOfRooms = []

// Con el priceRoom[0] dentro de las primeras paréntesis del switch, accedo al índice del array donde quiero comparar los datos que tengo.
switch (priceRoom[0]) {
  case 50: {
    // Los "case" acceden al valor que tengo guardado dentro de una variable, siempre que sea <String> o <Number>. Por lo tanto, deberé seleccionar directamente el dato que deseo analizar, en este caso equivale a 50, que corresponde al valor de la variable precioBasicoDeEneroAMayo.
    d(
      `The price of Basic Room from January to May is ${priceRoom[0].precioBasicoDeEneroAMayo} euros.`
    );
    // selectionOfRooms.push(priceRoom[0].precioBasicoDeEneroAMayo)
    break; // El "break;" detiene la ejecución del switch, cuando encuentra un "case" que corresponde a la expresión evaluada. En éste caso, 50 es la expresión evaluada.
  } // Si le quitamos el "break;", el código, sigue funcionando, hasta que encuentra un "break;"
  case 80: {
    // Acá el dato al cual deseo acceder trámite el "case", es el 80, que es el valor de la variable precioJovenDeEneroAMayo.
    d(
      `The price of Junior Room from January to May is ${priceRoom[0].precioJovenDeEneroAMayo} euros.`
    );
    // selectionOfRooms.push(priceRoom[0].precioJovenDeEneroAMayo)
    break;
  }
  case 100: {
    // Con este "case" accedo al valor de mi variable precioMasterDeEneroAMayo.
    d(
      `The price of Master Suite from January to May is ${priceRoom[0].precioMasterDeEneroAMayo} euros.`
    );
    // selectionOfRooms.push(priceRoom[0].precioMasterDeEneroAMayo)
    break;
  }

  default: {
    d(`You don't have select your room.`);
    break;
  }
}

// --------------------------------------------------

// # Exercise 24

// Print in the console the numbers from 1 to 10.

//Wilmer
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}

// Marcos
// Creo un Array vacío para almacenar resultados.
let miArrayDeNumeros = [];
// Creo un <Bucle For> en en el cual imprimo los números del 0 al 10 y después los añado al final de mi <Array> con el <.push>
for (let num = 0; num <= 10; num++) {
  miArrayDeNumeros.push(num);
  console.log(miArrayDeNumeros);
}

// --------------------------------------------------

// # Exercise 25

// Print in the console the numbers from 0 to -10

// Marcos
let miArrayDeNumerosNegativos = [];

for (let numNeg = 0; numNeg >= -10; numNeg--) {
  miArrayDeNumerosNegativos.push(numNeg);
  console.log(miArrayDeNumerosNegativos);
}

// --------------------------------------------------

// # Exercise 26

// Rewrite the exercise 24, by using the While loop.

// Marcos
let paraMiWhileLoop = 0;

while (paraMiWhileLoop <= 10) {
  console.log(`Mi número es: ${paraMiWhileLoop}`);
  paraMiWhileLoop++;
}

// --------------------------------------------------

// # Exercise 27

// Print in the console all the even numbers from 0 to 20

// **Suggestion**
// In order to check if a number is even or odd, try to use the reminder operator [https://it.javascript.info/operators](https://it.javascript.info/operators)

// Creo un <Array> vacío para almacenar resultado.
let arrayPar = [];
// Creo otro <Array> vacío para almacenar los números impares.
let arrayImpar = [];

// Creo una función para que me divida los impares de los pares.
function comprobarParImpar(variableNumero) {
  // La <variableNumero> hace referencia al número que yo le pondré a la función cuando la "llame" fuera de su código.
  for (let num = 0; num <= variableNumero; num++) {
    // En este caso, la función <comprobarParImpar> está diseñada para verificar si los números del 0 a <variableNumero> son pares o impares. Uso el parámetro <variableNumero> para compararlo con la variable <num> para utilizarlo dentro del código y así poderle asignar a la funcion un número cualquiera cuando la llamo.
    if (num % 2 === 0) {
      // L’operatore resto <%> non è legato alla percentuale. Il risultato di <%> è il resto della divisione intera di <num> diviso <2>. Ad esempio: 5 / 2 = 1, con resto 1. È lo stesso che fare: 2 * 2 = 4, ma fino al 5 abbiamo resto di 1.
      arrayPar.push(`El Número ${num} es par.`); // Con el <.push> agrago al <arrayPar> los número pares, en éste caso.
      console.log(arrayPar);
    } else {
      arrayImpar.push(`El número ${num} es impar.`); // Almaceno números impares.
      console.log(arrayImpar);
    }
  }
  return variableNumero;
}

comprobarParImpar(20);

//♦♦♦ OTRO EJEMPLO Y FORMA DE HACERLO♦♦♦

// Creo un <Array> vacío para almacenar resultado.
let arrayPar2 = [];
// Creo otro <Array> vacío para almacenar los números impares.
let arrayImpar2 = [];
// Creo una variable para utilizarla desde afuera de mi función.
let variableNumero2 = 5;
// Creo una función para que me divida los impares de los pares.
function comprobarParImpar2() {
  // Acá no le asignamos ningún parámetro, para poder utilizar la variable <variableNumero2> en el código dentro de la función <comprobarParImpar2>.
  for (let num = 0; num <= variableNumero2; num++) {
    if (num % 2 === 0) {
      arrayPar2.push(`El número ${num} es par.`);
      console.log(arrayPar2);
    } else {
      arrayImpar2.push(`El número ${num} es impar.`); // Almaceno números impares.
      console.log(arrayImpar2);
    }
  }
  return;
}

comprobarParImpar2(); // NO me hace falta asignar ningún parámetro entre los paréntesis porque mi función no tiene parámetros. Para darle los valores a ejecutar, cambiaré la variable externa que utilizo dentro de mi función

// Lau
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// -------------------------------------------------

// # Exercise 28

// Use a for loop to print all the numbers from 0 to 10 and their sum. The output should be:
0;
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
55;

// Marcos
let cajaDeNumeros = 0;

for (let num = 0; num <= 10; num++) {
  console.log("La vuelta del bucle va así -> " + num);
  cajaDeNumeros = cajaDeNumeros + num;
  // console.log("La suma de los números a medida que el búcle va girando es " + cajaDeNumeros)
}

console.log("La suma de los números = " + cajaDeNumeros);

// Si dejo adentro del bucle, el console.log() de cajaDeNumeros, me muestra la suma de esos números a medida que el bucle gira. Mientras que, si lo dejo afuera me imprime únicamente la suma final.

// ------------------------------------------------
// # Exercise 29

// Create a function called `printName` that prints in the console the name:

// * Use the console.log() function to print the name.
// * The function doesn't return anything.
// * The function doesn't take in any parameters.

// -----------------------------------------------
// # Exercise 30

// Write a function called `sayHelloName` that takes in one parameter. The function must return the concatenation of two strings (the output should be: "Hello Cosimo"). In this case "Cosimo" is the string passed as parameter.
// * The function takes in one parameter.
// * The function returns "Hello" plus the name.
// * The output printed in the console must be: "Hello `name`"

// -----------------------------------------------
// # Exercise 31

// * Create two functions: the first one is called `sayHelloName` and takes is as parameter another function (the second one) called `printName`.
// * The `printName` function should just execute the console.log() method and print the name. The `sayHelloName` that takes in the callback as parameter, must execute the console.log() of the "Hello" string and after that invoke the function taken in as parameter.

// ----------------------------------------------
