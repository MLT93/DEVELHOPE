// Variable. Pueden ser LET, VAR (se pueden modificar ambas, la diferencia está en que con LET no puedo repetir el nombre de mi variable para crear otra, mientras que VAR sí.) y CONST (variable que no cambia ni nombre, ni valor nunca. Es constante)
let variable = "Hola Mundo!";

console.log(variable);

// --------------------------------------------

// Mi variable
let ageMarc = 30;
// Ternary Operator. Válido únicamente para hacer comparaciones y evaluaciones simples, con respuestas como: true, false.
console.log(
  ageMarc >= 18 ? `You can drive a car` : `You are too young to drive`,
);

// --------------------------------------------

let firstName = "Wilmer";
let lastName = "Salazar";
let fullName = firstName + lastName;
console.log(`${firstName} ${lastName}`);

// --------------------------------------------

let hola = "HOLA";
console.log(hola[0]); // Print H. Un <String> no es más que un <Array> de letras, por lo tanto puedo acceder a cada letra individualmente, llamando al índice que corresponde a cualquier array [0] [1] [2] [3]...
console.log(hola[1]); // Print O.
console.log(hola[2]); // Print L.
console.log(hola[3]); // Print A.

// --------------------- AND & OR OPERATOR ------------------------

const obj = {
  a: "a = " + true,
  b: "b = " + true,
};
const { a, b } = obj;

const c = "c = " + false;
const d = "d = " + false;

console.log(d == a || c == c);

/* **`Aclaraciones antes de empezar`**: */

/* En JavaScript todo lo que no es falso como `Null`, `NaN`, `false`, `0`, `undefined` o `"" <empty string>`, se considera verdadero. */

/* En todas las operaciones de comparación se tienen operandos que se comparan en contexto `Booleano` */

/* **`AND operator &&`**: */

/* Si en una comparación con el operador AND `&&` sus operandos obtienen una operación positiva, eso significa que ambos operandos son `true`, obtendremos siempre el segundo valor positivo que se encuentre y nos renderizará ese valor. */

/* Si en una comparación con el operador AND `&&` sus operandos obtienen una operación negativa, eso significa que al menos uno de los operandos es negativo `false`, obtendremos siempre el primer valor negativo que se encuentre y nos renderizará ese valor. */

/* Si ambos operandos son `false` la operación completa se evalúa como false y devuelve la segunda opción */

/* **`OR operator ||`**: */

/* Si en una comparación con el operador OR `||` sus operandos obtienen una operación positiva, por lo tanto ambos operandos son `true`, obtendremos siempre el primer valor positivo que se encuentre y nos renderizará ese valor. */

/* Si en una comparación con el operador OR `||` sus operandos obtienen una operación negativa, por lo tanto los operandos contienen al menos una parte negativa `false`, obtendremos siempre el primer valor positivo que se encuentre y nos renderizará ese valor. */

/* Si ambos operandos son `false` la operación completa se evalúa como false y devuelve la primera opción */

// ---------------------------------------------

// creo variable dentro del bucle, creo una condición, modifico la condición.
for (let i = 0; i >= -10; i--) {
  console.log(i);
}

// lo mismo, pero con array
let miArrayDeNumerosNegativoss = [];

for (let numNeg = 0; numNeg >= -10; numNeg--) {
  miArrayDeNumerosNegativoss.push(numNeg); // Dentro de un array, si llamo el array y le pongo .push, lo que haya adentro de los paréntesis, me lo pondrá al final de la lista.
  console.log(miArrayDeNumerosNegativoss);
}

//------------------------------------------------

let evenNumber = 0;
while (evenNumber <= 10) {
  console.log(evenNumber);
  evenNumber % 2 === 0;
  evenNumber++;
}

//------------------------------------------------

let arrayDeAlumnos = [
  {
    name: "Manuel",
    apellido: "Benitez",
    imprimirNombre: function () {
      console.log(this.name);
    },
  },
  {
    name: "Sergio",
    apellido: "Paez",
    imprimirNombre: function () {
      console.log(this.name);
    },
  },
  {
    name: "Wilmer",
    apellido: "Perez",
    imprimirNombre: function () {
      console.log(this.name);
    },
  },
];

function imprimirApellido(delArray) {
  console.log("El apellido es: ", delArray.apellido);
}
arrayDeAlumnos.forEach((alumno, index) => {
  console.log(alumno.name, `Esta en el indice ${index}`);

  imprimirApellido(alumno);
});

/* Este código tiene un array de objetos llamado arrayDeAlumnos, donde cada objeto tiene una propiedad de name y una de apellido. También hay una función llamada imprimirApellido que recibe un objeto como argumento y luego imprime el apellido de ese objeto en la consola.

Después de definir la función imprimirApellido, se utiliza el método forEach en arrayDeAlumnos para iterar sobre cada objeto en el array. El método forEach recibe una función de devolución de llamada que se ejecutará una vez para cada elemento en el array. En este caso, la función de devolución de llamada es una arrow función que recibe dos argumentos: alumno y index. La función de devolución de llamada imprime el nombre del alumno y su índice en el array.

Dentro de la función de devolución de llamada, también se llama a la función imprimirApellido, que se encarga de imprimir el apellido del objeto alumno actual.

Por lo tanto, cuando se ejecuta este código, se imprimirá el nombre de cada alumno y su índice en el array, seguido de su apellido. */

// ---------------------------------------------------------------------

/** Enunciado del ejercicio:
 *
 * Dado un array de números enteros, crea una función llamada encontrarSuma que tome como argumento el array y un número objetivo. La función debe encontrar dos números en el array que, sumados entre sí, den exactamente la cifra del número objetivo y devolver un array con esos dos números. Si no se encuentran dos números que cumplan con esta condición, la función debe retornar un mensaje indicando que no se encontraron.
 */

function encontrarSuma(arr, objetivo) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === objetivo) {
        return [arr[i], arr[j]];
      }
    }
  }
  return `No se encontraron dos números que sumen ${objetivo}`;
}

const num = [2, 7, 11, 15];
const objetivo1 = 9;
const resultado1 = encontrarSuma(num, objetivo1);
console.log(resultado1); // Output esperado: [2, 7]

const objetivo2 = 8;
const resultado2 = encontrarSuma(num, objetivo2);
console.log(resultado2); // Output esperado: "No se encontraron dos números que sumen 8"

/**
 * **Enunciado del ejercicio:**
 *
 * Dado un array de objetos que contienen propiedades alfanuméricas,
 * crea una función llamada `filtrarNumeros` que tome como argumento
 * este array y devuelva un nuevo array solo con los valores numéricos.
 *
 * **Condiciones:**
 *
 * La función `filtrarNumeros` debe retornar un array con los valores
 * numéricos encontrados en el arreglo de objetos de entrada.
 */

const datos = [
  { clave: "a1", valor: 10 },
  { clave: "b2", valor: "Hola" },
  { clave: "c3", valor: 30 },
  { clave: "d4", valor: "Mundo" },
];

function filtrarNumeros(arr) {
  const numberArr = [];
  arr.forEach((element) => {
    if (typeof element.valor === "number") {
      numberArr.push(element.valor);
    }
  });
  return numberArr;
}
const numerosFiltrados = filtrarNumeros(datos);
console.log(numerosFiltrados);

const filtrarCadenas = (arr) => {
  const arrOfStrings = arr
    .map((element) => element.valor)
    .filter((valor) => typeof valor === "string");
  return arrOfStrings;
};
const stringsFiltrados = filtrarCadenas(datos);
console.log(stringsFiltrados);

// ------------------- ITERACIONES FOR...IN \ FOR IN \ FOR-IN \ Object.entries: PARA OBJETO --------------------------------------

/* 
    Recuerda que: el ciclo `for in` itera sobre las `keys`.
    
    Por este motivo se utilizan más para objects/objetos 
*/

let elObjeto = {
  a: 1,
  b: "Pancho",
  c: 3,
};

for (let propiedadKeyDeMiObjeto in elObjeto) {
  console.log(propiedadKeyDeMiObjeto); // Imprime -> primero: a | después: b | después: c
  console.log(elObjeto[propiedadKeyDeMiObjeto]); // Imprime -> primero: 1 | después: Pancho | después: 3
}

for (const key in elObjeto) {
  if (Object.hasOwnProperty.call(elObjeto, key)) {
    const element = elObjeto[key];
    console.log(element); // Imprime: 'a', 'b', 'c'
    console.log(key); // Imprime: 1, 'Pancho', 3
  }
}

// Otra forma
for (const key in elObjeto) {
  if (elObjeto.hasOwnProperty(key)) {
    const element = elObjeto[key];
    console.log(key + ":");
    console.log(element);
  }
}
// Otra forma con a una función
function iterarEnObjeto(object) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      console.log(element);
    }
  }
}

iterarEnObjeto(elObjeto);

/* `Object.entries`: crea un array de arrays [['key', 'value'], ['key', 'value'], ['key', '{ value }']]. Tiene un hermano gemelo que hace lo mismo, pero al revés `Object.fromEntries()`, o sea que convierte un array de arrays (key-value) en objeto. */

const persona = {
  nombre: "Juan",
  edad: 30,
  dirección: {
    calle: "Calle Principal",
    ciudad: "Ciudad Ejemplo",
  },
};

const arrFromEntries = Object.entries(persona);

arrFromEntries[0][1] = "Pedro"; // Modifica el valor "Juan" a "Pedro"
arrFromEntries[2][1].ciudad = "Otra Ciudad"; // Modifica la ciudad en la dirección
arrFromEntries[1][1] = 41;

console.log(persona.nombre); // Imprime "Pedro"
console.log(persona.dirección.ciudad); // Imprime "Otra Ciudad"

console.log(arrFromEntries); /* Imprime:
[
  [ 'nombre', 'Pedro' ],
  [ 'edad', 41 ],
  [ 'dirección', { calle: 'Calle Principal', ciudad: 'Otra Ciudad' } ]
]
*/

/* 
Explicación del código:

Definimos un objeto llamado persona con algunas propiedades, incluida una propiedad anidada dirección.

Usamos Object.entries() para convertir el objeto persona en un array de pares clave-valor llamado arrFromEntries.

Modificamos el valor en la posición [0][1] del array arrFromEntries. Esto afecta al primer par clave-valor en el array, que corresponde a la propiedad nombre del objeto persona. Cambiamos "Juan" a "Pedro".

Modificamos la propiedad ciudad en la dirección del objeto anidado en la posición [2][1] del array arrFromEntries. Esto modifica la propiedad ciudad del objeto persona, cambiándola de "Ciudad Ejemplo" a "Otra Ciudad".

Modificamos la edad en la posición [1][1] del array arrFromEntries. Esto cambia la propiedad edad del objeto persona de 30 a 41.

Imprimimos el valor de la propiedad nombre del objeto persona. Como hemos modificado este valor en el array arrFromEntries, ahora imprime "Pedro".

Imprimimos el valor de la propiedad ciudad en la dirección del objeto anidado persona. Como hemos modificado este valor en el array arrFromEntries, ahora imprime "Otra Ciudad".

Imprimimos el contenido del array arrFromEntries en la consola, que muestra cómo se han modificado los valores dentro del array.

En resumen, el código demuestra cómo modificar valores dentro del objeto persona utilizando el array arrFromEntries que fue creado a partir del objeto original utilizando Object.entries(). Sin embargo, ten en cuenta que los cambios se realizan indirectamente a través del array, no directamente en el objeto original.
*/

// ------------------- ITERACIONES FOR...OF \ FOR OF \ FOR-OF \ .forEach() \ FOR \ .map() \ .filter() : PARA ARRAY --------------------------------------

/* 
Recuerda que: el ciclo `for of` itera sobre las `values`. 

Por esta razón se usan más para arrays/arreglos/matrices 
*/

// `FOR...OF`: pertenece al ECMAScript 2015, ES6. Se utiliza para iterar sobre arrays, strings (que es un array de letras), array de objetos y todo aquello que es iterable o sigue un índice. Lo que hace, es pasar por cada elemento de un array (itera sobre de él) y trabaja el código que yo le introduzca.
var misNumeros = [1, 2, 3, 4, 5];
for (let cadaNumero of misNumeros) {
  let multiplication = cadaNumero * 2; // Código introducido.
  console.log(multiplication); // Imprime resultado de la multiplicación de cada numero del array por 2.
}

let array = [1, 2, 3];
for (const iterator of array) {
  console.log(iterator); // Imprime: 1, 2, 3
}

for (const iterator of object) {
  // Tu código aquí
}

// `.forEach()`: quiere decir -> .porCada(lo que haya dentro de los paréntesis.En éste caso, un arrow function).
var misNumeros = [1, 2, 3, 4, 5];
misNumeros.forEach((argumentoNum) => {
  let por2 = argumentoNum * 2;
  console.log(por2);
});

// `FOR`: (crea una variable; cumple una condición; modifica esa condición)
var misNumeros = [1, 2, 3, 4, 5];
for (let i = 0; i < misNumeros.length; i++) {
  let por2 = misNumeros[i] * 2;
  console.log(por2);
}

// `.map()`: sirve para crear un nuevo array a iterando cada elemento del array original. A través de una función callback transformamos los elementos del array original y retornamos los valores que deseamos que tenga en el nuevo array.
var misNumeros = [1, 2, 3, 4, 5];
const cuadrados = misNumeros.map((numero) => numero * numero); // el nuevo array contendrá: [1, 4, 9, 16, 25]

// `.filter()`: sirve para reducir un array a partir del cumplimiento de una condición proporcionada a través de una función callback. A menudo se utiliza en conjunto con .map()
var misNumeros = [1, 2, 3, 4, 5];
const losPares = misNumeros.filter((numero) => numero % 2 === 0); // losPares contendrá: [2, 4]

//---------------- FORMAS DE USAR UN OBJETO CON FUNCIÓN AGREGADA, BUSCAR LAS PROPIEDADES Y LOS MODOS ---------------------

let miObjeto = {
  // Sintaxis de la composición de mi objeto.
  proprieties: "value",
  // También se pueden escribir las propiedades sin las comillas. Propiedad con valor 2.
  number: 2,
  // Arrow function que toma un parámetro y lo devuelve multiplicado por 2.
  function: (argumento) => argumento * 2,
  objInside: {
    propiedadInside:
      "Éste valor, está dentro de un objeto que está adentro del objeto principal.",
  },
};

// Hay dos formas de llamar al valor de mis propiedades dentro de un objeto:
console.log(miObjeto.proprieties); // llamo a mi propiedad (proprieties) para que me imprima su valor.
console.log(miObjeto["number"]); // De ésta forma, siempre que llamamos nuestra propiedad, debe de ir entre comillas.

miObjeto["newKey"] = 7; // Agregar una nueva propiedad a mi objeto (modificar los objetos directamente no es una buena práctica, porque le cambiamos los valores originales. Para eso, debería crear una copia/clon).

// Llamo a la nueva propiedad.
console.log(miObjeto["newKey"]);
// Forma de saber cuáles son todas las propiedades (Object.keys()) de mi objeto (miObjeto).
console.log(Object.keys(miObjeto));
// Llamo a la función (function()) que creé dentro de mi objeto y le asigno un valor (10) al parámetro (argumento) para que me ejecute el código que le metí dentro (argumento * 2).
console.log(miObjeto.function(10));

// ------- GUARDAR VARIAS VARIABLES DENTRO DE UNA FUNCIÓN E IMPRIMIRLAS TODAS JUNTAS  --------

function ejercicio27() {
  let i = 1;
  let pares = [];
  let impares = [];
  let nombreAusar = "Manuel";

  var sumaImpares = 0;
  var sumaPares = 0;
  while (i <= 20) {
    if (i % 2 === 0) {
      pares.push(i);
      sumaPares = sumaPares + i;
    } else {
      impares.push(i);
      sumaImpares = sumaImpares + i;
    }
    i++;
  }

  return { pares, impares, nombreAusar, sumaImpares, sumaPares };
}

let { pares, impares, nombreAusar, sumaImpares, sumaPares } = ejercicio27();

console.log("La suma de los números pares es: " + sumaPares);
console.log("La suma de los números impares es: " + sumaImpares);

// ------------------- CALLBACK ------------------------

function myBoton(label, disabled, onClick) {
  console.log("Mi label es: " + label);
  console.log("El botón esta deshabilitado? " + disabled);

  console.log("Cada vez que hago click, se ejecuta" + onClick());
}

function siguientePagina() {
  return "Tendria que llevarme a la siguiente pagina";
}

function abrirElMenu() {
  return "Este boton, abriria mi menu";
}

myBoton("Primario", true, siguientePagina);
myBoton("Secundario", false, abrirElMenu);

// ----------------- CONCATENAR STRINGS ----------------------
let yearsCompleted = 2;
let nombree = "Juanin";

// Ejemplos para concatenar Strings, pero también arrays, porque son lo mismo:
console.log(
  String(nombree)
    .concat(" ha completado ")
    .concat(yearsCompleted)
    .concat(" años."),
);

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let array3 = [11, 12, 13, 14, 15];

let nuevoArray = array1.concat(array2, array3);

console.log(nuevoArray);

/* El método .concat() puede ser útil cuando necesitas combinar arrays y/o strings (arrays de letras) existentes o agregar elementos adicionales a un array sin modificar los arrays originales. También puedes usarlo para crear copias de arrays existentes. */

// ------------------ TODOS LOS MATH. ------------------

// MATH es un objeto incorporado en JavaScript que proporciona una serie de funciones matemáticas para realizar operaciones y cálculos matemáticos. Aquí están algunas de las características principales de Math:

// Constantes matemáticas:
console.log(Math.PI); // representa el valor de Pi (3.141592653589793)
console.log(Math.E); // representa el número de Euler (2.718281828459045)
console.log(Math.LN10); // es el logaritmo natural de 10 (2.302585092994046), entre otros.

// Funciones trigonométricas para calcular seno, coseno, tangente, arcoseno, arcocoseno y arcotangente:

Math.sin(); // calcula el seno de un ángulo dado en radianes y no en grados. Entonces el código para convertir de grados a radianes es:
let angleInDegrees = 90;
let angleInRadians = (angleInDegrees * Math.PI) / 180;

console.log(Math.sin(angleInRadians)); // Imprime 1. Primero se define angleInDegrees como 90. Luego, se utiliza la fórmula (angleInDegrees * Math.PI) / 180 para convertir el ángulo de grados a radianes. Finalmente, se llama a Math.sin() pasando angleInRadians como argumento para calcular el seno y se imprime el resultado utilizando console.log(). El resultado impreso en la consola será 1, ya que el seno de 90 grados (o π/2 radianes) es igual a 1.

Math.cos(); // Esto calcula en radianes y no en grados. Por lo tanto, para obtener el coseno de 180 grados, necesitas convertirlo a radianes:
let anguloInDegrees = 180;
let anguloInRadians = (anguloInDegrees * Math.PI) / 180; // Fórmula para convertir los ángulos en grados a radianes
console.log(Math.cos(anguloInRadians)); // Imprime -1.

Math.tan(); // Siempre calcula en radianes. Por lo tanto, el dato dentro de las paréntesis es en radianes. La conversión de radianes a grados sería:
let anguloEnGrados = 210;
let anguloEnRadianes = (anguloEnGrados * Math.PI) / 180; // Convierto mi ángulo escrito en radianes a grados.
console.log(Math.tan(anguloEnRadianes)); // El resultado impreso en la consola será aprox 0.36397023426620234, que es la tangente de 210 grados (o 7π/6 radianes).

Math.asin(); // Calcula el arcoseno de un número en radianes. El rango válido para el argumento debe de estar entre -1 y 1. Si tienes el valor del ángulo en grados y deseas calcular el arcoseno en JavaScript, debes convertir el ángulo de grados a radianes antes de usar la función Math.asin(). Usa la fórmula (angleInDegrees * Math.PI) / 180 para realizar la conversión:
let anguloGrados = Math.asin(-0.4567) * (180 / Math.PI); // utilizamos la función Math.asin() para calcular el arcoseno de -0.4567 en radianes. Luego, multiplicamos el resultado por (180 / Math.PI) para convertirlo de radianes a grados (es lo mismo de arriba pero escrito de otra manera).
console.log(anguloGrados); // Imprime -27.39218341955979, que es el arcoseno de -0.4567

console.log(Math.acos(0.5) * (180 / Math.PI)); // Se utiliza para calcular el arcocoseno de un número. Sin embargo, debes tener en cuenta que la función Math.acos() espera que el argumento esté en el rango válido de -1 a 1 y que trabaja en radianes, no en grados. Por lo tanto, deberé utilizar la fórmula de multiplicar el resultado por (180 / Math.PI) para convertirlo en grados. // Imprime 60.00000000000001.

console.log(Math.atan(22)); // Trabaja en radianes. // Imprime 1.5208379310729538 radianes.
console.log(Math.atan(22) * (180 / Math.PI)); // Imprime 87.39743779750019 grados.

// Funciones exponenciales y logarítmicas  para calcular potencias, logaritmos, exponenciales y raíces cuadradas:

console.log(Math.pow(2 ** 3)); // calcula la potencia. // sería 8 acá. 2*2=4 , 4*2=8.
console.log(Math.log(10)); // Calcula el logaritmo natural basado en "e" (número de Euler, logaritmo natural o neperiano). Imprime 2.302585092994046.

console.log(Math.exp(1)); // se utiliza para calcular el exponente de la constante matemática "e" (base del logaritmo natural o neperiano) elevada a la potencia especificada. // Imprime 2.718281828459045 (éste es el valor de "e" también).

console.log(Math.sqrt(9)); // calcula la raíz cuadrada del número. // Imprime 3.

// Funciones de redondeo para redondear números hacia arriba, hacia abajo o al valor entero más cercano. Estas funciones incluyen Math.ceil(), Math.floor(), Math.round():

// Funciones de números aleatorios:
Math.random(); // genera números pseudoaleatorios entre 0 y 1 y no acepta argumentos.
let miNumeroAleatorio = Math.floor(Math.random() * 20); // Math.floor redondea hacia abajo, para que no me dé decimales y sí acepta argumentos.
console.log(miNumeroAleatorio); // Podemos modificar el límite del rango cambiando los valores de inicio o fin y así crear números pseudoaleatorios con un rango mayor. En éste caso en el rango va de [0, 1), pero lo multiplicamos por 20 y listo. El resultado será un número aleatorio entre el 0 y el 20 porque el 21 no lo cuenta a causa del Math.floor y sus decimales redondeados.

// Otras funciones matemáticas: Math también proporciona otras funciones matemáticas útiles, como Math.abs() para obtener el valor absoluto de un número, Math.max() y Math.min() para encontrar el valor máximo y mínimo entre varios números, y Math.sign() para obtener el signo de un número, entre otros.

// Es importante tener en cuenta que Math es un objeto estático y todas sus funciones son estáticas, lo que significa que no es necesario crear una instancia de Math para utilizar sus funciones. Puedes acceder a las funciones de Math directamente utilizando la sintaxis Math.nombreDeLaFunción(). Además, ten en cuenta que las funciones matemáticas en Math utilizan operaciones de punto flotante y pueden tener limitaciones en términos de precisión y rango, por lo que es importante comprender sus limitaciones y usarlas adecuadamente en tu código.

// ----------------- ARRAY COMPLEJO ANIDADO ----------------

// # Definición de un array tridimensional
temperaturas = [
  // # Año 1
  [
    // # Región 1
    [15.2, 16.3, 14.8],
    // # Región 2
    [17.6, 18.5, 16.9],
    // # Región 3
    [14.1, 13.8, 15.7],
  ],
  // # Año 2
  [
    // # Región 1
    [16.7, 17.8, 18.2],
    // # Región 2
    [19.4, 20.1, 18.9],
    // # Región 3
    [14.5, 15.3, 16.8],
  ],
  // # Año 3
  [
    // # Región 1
    [14.3, 15.2, 16.1],
    // # Región 2
    [18.2, 17.9, 18.6],
    // # Región 3
    [12.8, 13.6, 14.5],
  ],
];
1;
// # Acceso a los datos del array
// # Temperatura en el año 2, región 1, mes 3
temperatura = temperaturas[1][0][2]; // Como se ve, el orden de llamada influye al interno de un array/matriz de arrays.
console.log("La temperatura en el año 2, región 1, mes 3 es:", temperatura);

// ------------ EJERCICIO DE FUNCIÓN CONTADORA -------------

// La entrada de este método es una matriz que contiene 10 números y como salida devuelve un número entero
// Dada una matriz de enteros positivos y negativos cuente las ocurrencias del número 0 y devuélvalo a la salida

function contarOcurrenciasDeCero(delArray) {
  let contador = 0;
  for (let i = 0; i < delArray.length; i++) {
    if (delArray[i] === 0) {
      contador++;
    }
  }
  return contador;
}

// En este ejemplo, la función contarOcurrenciasCero recibe una matriz de números como entrada y utiliza un bucle for para iterar a través de cada elemento en la matriz. Luego, verifica si el elemento es igual a 0 usando la condición matriz[i] === 0, y si es así, incrementa el contador en 1. Finalmente, devuelve el contador como el resultado de la función.

// Ejemplo de uso
function main() {
  let arrayDeNumeros = [2, 0, -3, 0, 0, 1, -5, 0, 4, 0];
  let contarLosCeros = contarOcurrenciasDeCero(arrayDeNumeros);
  console.log("El número de ocurrencias del número 0 es:", contarLosCeros);
}

main(); // Imprime 5

// En el ejemplo de uso, se crea una matriz de ejemplo arrayDeNumeros con 10 números enteros y se llama a la función contarOcurrenciasDeCero con esta matriz como entrada dentro de la misma función. El resultado, que es el conteo de ocurrencias del número 0 dentro de la matriz, se imprime en la consola usando console.log().

// -------------------------------------------------------

// Escribe una función que usa como objeto un parámetro y devuelve un nuevo array con todos los nombres de las propiedades del objeto que tenga un valor string más largo de 5 caracteres. Imprime la función.

function obtenerNombresPropiedades(objeto) {
  let nombresPropiedades = [];

  // Iterar a través de las propiedades del objeto
  for (let propiedad in objeto) {
    // Verificar si el valor de la propiedad es una cadena y tiene una longitud mayor a 5
    if (typeof objeto[propiedad] === "string" && objeto[propiedad].length > 5) {
      // Agregar el nombre de la propiedad al array
      nombresPropiedades.push(propiedad);
    }
  }

  // Devolver el array con los nombres de las propiedades que cumplen el criterio
  return nombresPropiedades;
}

// Ejemplo de uso
let theObjeto = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Nueva York",
  ocupacion: "Desarrollador de software",
  direccion: "123 Calle Principal, Apt 4B",
  telefono: "555-1234",
};

let nombresPropiedades = obtenerNombresPropiedades(theObjeto);
console.log(nombresPropiedades);

// ------------------------------------------------------

// import {
//   imprimirFrase,
//   addStudent,
//   findYoungestStudent,
//   imprimirString,
//   findLongestSurname,
// } from "./juegaConImportExport.js";

// let estudiantes = [
//   { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: "gamer" },
//   { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: "sportsman" },
//   { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: "gamer" },
//   { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: "photographer" },
// ];

// function infoStudents() {
//   imprimirFrase(estudiantes);

//   addStudent(estudiantes);

//   imprimirFrase(estudiantes);

//   findYoungestStudent(estudiantes);

//   imprimirString();

//   findLongestSurname(estudiantes);
// }

// infoStudents();

// --- sigue el código abajo, pero esto es para entender y separar lo que hay en el archivo juegaConImportExport.js y ver qué ocurre con el resto --- //

// export function imprimirFrase(estudiantes) {
//   estudiantes.forEach((estudiante) => {
//     // Imprimir el mensaje relacionado con su hobby
//     console.log(estudiante.name);

//     if (estudiante.hobby === "gamer") {
//       console.log("Life Is a Game, Play to Win!");
//     } else if (estudiante.hobby === "sportsman") {
//       console.log("Never give up!");
//     } else if (estudiante.hobby === "photographer") {
//       console.log("A picture is worth a thousand words!");
//     }
//     // switch (estudiante.hobby) {
//     //   case "gamer":
//     //     console.log("Life Is a Game, Play to Win!");
//     //     break;
//     //   case "sportsman":
//     //     console.log("Never give up!");
//     //     break;
//     //   case "photographer":
//     //     console.log("A picture is worth a thousand words!");
//     //     break;
//     // }
//   });
// }

// export function addStudent(estudiantes) {
//   let newStudent = {
//     id: 5,
//     name: "Elena",
//     surname: "Pappalardo",
//     age: 23,
//     hobby: "photographer",
//   };

//   estudiantes.splice(2, 0, newStudent);
// }
// export function findYoungestStudent(estudiantes) {
//   let youngestStudent = estudiantes[0];

//   estudiantes.forEach((estudiante) => {
//     if (estudiante.age < youngestStudent.age) {
//       youngestStudent = estudiante;
//     }
//   });

//   for (let i = 1; i < estudiantes.length; i++) {
//     if (estudiantes[i].age < youngestStudent.age) {
//       youngestStudent = estudiantes[i];
//     }
//   }

//   console.log("El más joven es", youngestStudent.name);
// }

// export function imprimirString() {
//   let palabra = "palabra";
//   for (let i = 0; i < palabra.length; i++) {
//     console.log(palabra[i]);
//   }
// }
// export function findLongestSurname(estudiantes) {
//   let longestSurname = "";

//   estudiantes.forEach((estudiante) => {
//     if (estudiante.surname.length > longestSurname.length) {
//       longestSurname = estudiante.surname;
//     }
//   });
//   // for (let i = 1; i < estudiantes.length; i++) {
//   //   if (estudiantes[i].surname.length > longestSurname.length) {
//   //     longestSurname = estudiantes[i].surname;
//   //   }
//   // }
//   console.log("El apellido más largo es", longestSurname);
// }

// /*
// Esto lo debemos crear como package.json para tener un archivo en el cual habrá una librería de metadatos (licencia, dependencias, scripts, comandos, importaciones de otros archivos, etc...) para utilizarlos dentro de cualquier proyecto.

//   {
//    "type": "module"
//   }

// Explicación:
// // module
// export let data = 42;
// export let method = () => console.log("Hello");

// // index
// import { data, method } from "./module.js";
// Este sistema de módulos nativo por fin nos permite cargar módulos externos con una sintaxis simple y de forma síncrona y asíncrona. Eso sí, con una pequeña pega que seguiremos sufriendo durante un tiempo: esperar que la industria vaya abandonando CommonJS a favor de ESM.
// */

// ----- FORMAS PARA AÑADIR, QUITAR O AGRUPAR COSAS DE UN ARRAY -----

// El .slice(inicio, fin) Se utiliza para extraer una porción de un array existente y devuelve un nuevo array con los elementos seleccionados. Permite especificar el inicio y el fin de la porción que se desea extraer array.slice(inicio, fin) y, si el inicio no se especifica, declara solo el fin. Después accede al array trámite los corchetes [..]
let numbers = [1, 2, 3, 4, 5, 11, 12, 22, 0.7];

console.log(
  "Accedo al último elemento utilizando el .slice:",
  numbers.slice(-1)[0],
);
// Array: El array original del cual se desea extraer una porción.
// Inicio (opcional): El índice donde se iniciará la extracción. Si no se especifica, se asume un valor de 0, lo que significa que se comenzará desde el primer elemento del array.
// Fin (opcional): El índice donde finalizará la extracción. El método .slice() extraerá los elementos hasta fin - 1. Si no se especifica, se extraerán todos los elementos hasta el final del array.

// El método .splice(indice de inicio(inclusive), cantidad de elementos a eliminar, item para añadir) permite modificar el contenido de un array eliminando, reemplazando o agregando elementos. Acepta varios argumentos. Puedes utilizarlo para quitar una parte del array especificando el índice de inicio (inclusive) y la cantidad de elementos a eliminar en elementos a eliminar.
let numbers2 = [1, 2, 3, 4, 5, 11, 12, 22, 0.7];

console.log(
  "Con .splice éstos son los números que quito: ",
  numbers2.splice(0, 5, 55),
);
console.log("Este es mi array después de pasarle el .splice:", numbers2);

// Sintaxis y explicación:
array.splice(
  0 /*inicio*/,
  2 /*deleteCount*/,
  7 /*añadirItem1*/,
  40 /*añadirItem1*/,
);
// inicio: Es el índice en el cual comenzar a realizar las modificaciones en el array.
// deleteCount: Es el número de elementos a eliminar a partir del índice start. Si se establece en 0, no se eliminará ningún elemento.
// añadirItem1, añadirItem2, .. : Son los elementos opcionales que se pueden agregar al array en el lugar donde se eliminaron los elementos.

// Otro Ejemplo:
let numeritos = [1, 2, 3, 4, 5];

let removedElements = numeritos.splice(
  2 /* inicio incluido */,
  2 /* elementos a eliminar */,
  32 /* elementos a añadir */,
); // Elimina 2 elementos a partir del índice 2
console.log("Array modificado:", numeritos); // Resultado: [1, 2, 32, 5]
console.log("Elementos eliminados:", removedElements); // Resultado: [3, 4]

/* En JavaScript, el método .reduce() se utiliza para recorrer/iterar un arreglo/array y acumular sus elementos en un único valor. Se usa frecuentemente para realizar operaciones como sumar números, encontrar el valor máximo o mínimo, o cualquier otra operación que involucre combinar elementos del arreglo. */
/* La sintaxis básica del método .reduce() es la siguiente: */
let valorInicial = 0;
const miValorFinal = array.reduce((acumulador, valorActual) => {
  // operaciones del código
}, valorInicial);
/* 
1. array: El arreglo en el que deseas operar + .reduce().
2. .reduce(): ponemos una función y un valor inicial.
3. función callback: una función que se ejecuta en cada elemento del arreglo y que acepta 3 argumentos a su vez:
      ·Acumulador (obligatorio): El valor que se está acumulando mientras la función  recorre el arreglo.
      ·Valor Actual (opcional): El elemento actual en el arreglo que está siendo procesado.
      ·Índice Actual (opcional): El índice del elemento actual.
      ·Array (opcional): El arreglo original en el que se está iterando.
4. valorInicial: Un valor inicial opcional para el acumulador, normalmente 0. Si no se proporciona, se utilizará el primer elemento del arreglo como valor inicial del acumulador.
*/

/* Usando .reduce() para calcular la suma de los elementos del array */
const nume = [10, 5, 3, 7, 2];

const numerosSumados = nume.reduce((contador, valor) => {
  return contador + valor;
}, 0);

console.log(`La suma de los números es: ${numerosSumados}`);

/* Usando .reduce() para encontrar el número más grande en el array */
const numb = [10, 5, 3, 7, 2];

const numeroMasGrande = numb.reduce((acumulador, valorActual) => {
  return valorActual > acumulador ? valorActual : acumulador;
}, numb[0]); /* Inicializamos el acumulador con el primer valor del array */

console.log(`El número más grande es: ${numeroMasGrande}`);

/* Aquí tienes un ejemplo de cómo podrías usar .reduce() para encontrar la suma de un arreglo de números: */
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0,
);

console.log(suma); // Salida: 15
/* En este ejemplo, el acumulador comienza en 0, y por cada elemento en el arreglo numeros, se suma el valorActual al acumulador, resultando en la suma de todos los números. */

/* También puedes usar .reduce() para operaciones más complejas, como encontrar el valor máximo en un arreglo: */
const numerols = [8, 3, 11, 6, 4];
const maximo = numerols.reduce(
  (acumulador, valorActual) => Math.max(acumulador, valorActual),
  -Infinity,
);

console.log(maximo); // Salida: 11
/* Recuerda que .reduce() puede ser poderoso, pero otros métodos de arreglo como .map(), .filter() y .forEach() podrían ser más apropiados para ciertas tareas. Es importante elegir el método adecuado según la operación específica que deseas realizar. */

/* Tanto `.map()` como `.forEach()` son métodos de los arrays en JavaScript y se utilizan para iterar sobre los elementos de un array, pero tienen algunas diferencias clave en términos de su funcionamiento y el valor que devuelven. Aquí están las diferencias más importantes:

1. Valor Devuelto:
   - `.map()`: Devuelve un nuevo array que contiene los resultados de aplicar una función a cada elemento del array original. La longitud del nuevo array es la misma que la del array original.
   - `.forEach()`: No devuelve ningún valor. La función se ejecuta para cada elemento del array, pero no crea un nuevo array.

2. Efecto Secundario vs. Transformación:
   - `.map()`: Se utiliza cuando deseas realizar una transformación en cada elemento del array original y crear un nuevo array basado en esas transformaciones.
   - `.forEach()`: Se utiliza cuando deseas ejecutar una función en cada elemento del array sin necesariamente crear un nuevo array. Por lo general, se usa cuando estás interesado en el efecto secundario de la función (por ejemplo, imprimir valores en la consola) en lugar de generar un nuevo array.

3. Uso de Resultados:
   - `.map()`: Se utiliza cuando necesitas trabajar con una nueva colección de datos que es el resultado de aplicar alguna transformación a los elementos originales.
   - `.forEach()`: Se utiliza cuando deseas ejecutar una operación en cada elemento del array sin necesidad de generar un nuevo array.

4. Modificación del Array Original:
   - `.map()`: No modifica el array original. Crea un nuevo array con los resultados de la función aplicada a cada elemento.
   - `.forEach()`: No modifica el array original. Se utiliza principalmente para efectos secundarios, como impresiones en consola, cambios de estado externo, etc.

5. Encadenamiento:
   - `.map()`: Puedes encadenar métodos después de `.map()` para seguir aplicando operaciones en el nuevo array.
   - `.forEach()`: Como no devuelve un valor, no es posible encadenar métodos directamente después de `.forEach()`.

Ejemplos: */

const nmbers = [1, 2, 3];

// Ejemplo de .map() - creando un nuevo array
const duplicados = nmbers.map((numero) => numero * 2); // [2, 4, 6]

// Ejemplo de .forEach() - efecto secundario
nmbers.forEach((numero) => console.log(numero * 2)); // Imprime 2, 4, 6

/* En resumen, utiliza `.map()` cuando necesitas transformar elementos y crear un nuevo array basado en esas transformaciones, y utiliza `.forEach()` cuando deseas ejecutar una función en cada elemento del array sin necesariamente crear un nuevo array. Ambos métodos tienen sus propios casos de uso específicos dependiendo de tus necesidades. */

// ---------- FUNCIÓN ES PRIMO O NO ES PRIMO / BUSCAR NUMEROS PRIMOS--------------

// PRIMERA FORMA con .forEach() ------------------
let numerolos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function refactorNumbersArray(NumeroDelArray) {
  let newArray = [];
  NumeroDelArray.forEach((number) => {
    // Inicializo la variale isPrime como true
    let isPrime = true;

    // Si le numero es igual o mayor a dos ->
    if (number >= 2) {
      // Empiezo otro bucle y le digo que comience su índice a partir de la posición 2, eso elimina la división entre el 1 y el mismo número que estamos evaluando
      for (let i = 2; i < number; i++) {
        // Si el resto es 0, fue divisible por otro numero, por lo que no es primo y cambio isPrime a false
        if (number % i === 0) {
          isPrime = false;
        }
      }
    } else {
      isPrime = false;
    }

    if (isPrime) {
      newArray.push(number);
    }
  });

  return newArray;
}
// creo una variable para almacenar el resultado de mi función
let resultadox = refactorNumbersArray(numerolos); // le paso un array a mi función para que ejecute el código.
console.log("Resultado de números primos con .forEach:", resultadox);

// SEGUNDA FORMA con FOR loop ------------------
let numerillos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function encontrarNumerosPrimos(arr) {
  let numerosPrimos = []; // Creo una variable vacía para guardar mis resultados

  // Le digo a mi loop que recorra el array
  for (let i = 0; i < arr.length; i++) {
    let esPrimo = true; // Inicio una variable con un valor true, así puedo utilizarla después dentro de un IF, si encuentro algún número Primo

    // Busco los números dentro del array que sean mayores que 1 (porque un número primo es un número entero mayor que 1 que solo es divisible por 1 y por sí mismo. Si un número es menor o igual a 1, no puede ser considerado primo porque tiene divisores adicionales aparte de 1 y él mismo. Por lo tanto, la condición > 1 se utiliza para excluir los números menores o iguales a 1 de la verificación de primos)
    if (arr[i] > 1) {
      // Al comenzar desde 2 el segundo bucle, nos saltamos la división entre 1 y el número que estamos evaluando (), ya que todo número es divisible por 1. Iniciar en 2 es eficiente y suficiente para realizar la comprobación de divisibilidad adecuada. Establecer j = 2 nos permite iniciar la verificación de divisibilidad desde el número 2 y continuar hasta un número anterior al número que estamos evaluando (el número de j < arr[i]), evitando considerar la divisibilidad entre 1 y el número mismo.
      for (let j = 2; j < arr[i]; j++) {
        // El operador de módulo % devuelve el resto de la división entre dos números. En este caso, arr[i] % j calcula el resto de dividir arr[i] entre j. Si el resultado es 0, significa que arr[i] es divisible de manera exacta por j, lo que implica que arr[i] no es un número primo, lo cual indica que arr[i] tiene un divisor distinto de 1 y de sí mismo, por lo tanto no sería un número primo.
        if (arr[i] % j === 0) {
          esPrimo = false; // Digo que mi variable esPrimo, es false
          break; // Paro el bucle
        }
      }
    } else {
      esPrimo = false; // La función de esta parte del código es establecer la variable esPrimo en false cuando se encuentra un divisor para el número arr[i], lo cual indica que el número no es primo
    }

    if (esPrimo === true) {
      // Si la condición se cumple, es decir, si esPrimo es true, significa que el número arr[i] es un número primo. En ese caso, se ejecuta el bloque de código dentro del if, que dice que agregue al final del array vacío numerosPrimos, el número primo encontrado en cada una de las vueltas del bucle for.
      numerosPrimos.push(arr[i]);
    }
  }

  if (numerosPrimos.length > 0) {
    // Si el arreglo numerosPrimos tiene una longitud mayor que 0, significa que se encontraron números primos en el arreglo. En ese caso, se devuelve el arreglo numerosPrimos que contiene los números primos encontrados mediante la instrucción return numerosPrimos. Si el arreglo numerosPrimos está vacío, es decir, no se encontraron números primos en el arreglo, se ejecuta el bloque else
    return numerosPrimos;
  } else {
    return "No se encontraron números primos en el arreglo.";
  }
}

const primosEncontrados = encontrarNumerosPrimos(numerillos);
console.log("Los números primos con for loop:", primosEncontrados);

// // TERCERA OPCIÓN con .map() y .filter() --------------

let numerolosX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function refactorNumbersArray(NumeroDelArray) {
  const newArray = NumeroDelArray.map((number) => {
    // Inicializo la variale isPrime como true, suponiendo que cada número es primo
    let isPrime = true;

    // Empezamos la búsqueda por el 2 dado que es el primer número primo que existe y así eliminamos las futuras divisiones entre sí mismos, entre 0 y entre 1
    if (number >= 2) {
      // Ahora creamos otro bucle y le digo que comience su índice a partir de la posición 2, eso elimina la división entre el 1 y el mismo número que estamos evaluando
      for (let i = 2; i < number; i++) {
        // Si el resto es 0, fue divisible por otro numero, por lo que no es primo y cambio isPrime a false
        if (number % i === 0) {
          isPrime = false;
        }
      }
    } else {
      isPrime = false;
    }
    if (isPrime) {
      return number; // Agregamos el número a newArray solo si es primo
    }
  });
  return newArray.filter((num) => num !== undefined); // Filtramos los elementos undefined
}
// creo una variable para almacenar el resultado de mi función
let resultadoxX = refactorNumbersArray(numerolos); // le paso un array a mi función para que ejecute el código.
console.log("Resultado de números primos con .forEach:", resultadoxX);

// --------------------------------------------------

// # Dado un array de 10 numeros, busca la primera posición del número 1 dentro del primer elemento del índice, si no está presente, return -1. El output devuelve un integrante el indice

const arrayNumeroso = [2, 23, 1, 55, 6, 1, 8];

function buscarPosicion(array) {
  // Recorro el array,
  for (var i = 0; i < array.length; i++) {
    // si la variable i, mientras avanza por el array, encuentra una propiedad/elemento que es equivalente a 1,
    if (array[i] === 1) {
      // devuelvo el índice, del valor de la propiedad/elemento, donde se encuentra la variable i a medida que recorre el array. Pero recuerda que sólo devolverá el primer índice encontrado.
      return console.log("El índice dónde se encuentra el número 1 es:", i);
    }
  }
  // Si no se encuentra nada, devolverá -1
  return -1;
}

buscarPosicion(arrayNumeroso);

// La declaración return i se utiliza para terminar la ejecución de la función buscarPosicion y devolver un valor. En este caso, cuando se encuentra la primera posición del número 1 dentro del primer elemento del array, se devuelve el valor de i, que representa la posición en la que se encontró el número.
// Por ejemplo, si el primer elemento del array es [1, 1, 1, 1], al iterar sobre cada elemento, la variable i tomará los siguientes valores: 0, 1, 2, 3. En la segunda iteración, se encuentra el número 1 en la posición 1, por lo tanto, se ejecuta return i, y el valor 1 se devuelve como resultado de la función.
// En caso de que no se encuentre el número 1 en el primer elemento del array, se llegará al final del bucle for sin encontrar una coincidencia, y se ejecutará la instrucción return -1. Esto indica que el número 1 no está presente en el primer elemento del array, y se devuelve -1 como indicador de que no se encontró la posición buscada.
// Espero que esta explicación aclare el uso del return i en el código

// --------------------- MÉTODOS ----------------------------

const namess = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Add a hyphen after each element of the array. The output should something like this: Luca-Marco-Vittorio-Giovanni

// **Suggestion**
// Look at the official [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to find the right method.

console.log("Array normal => ", namess);
let namesSeparadoPorGuiones = namess.join("-"); // join() une todos los elementos del array por aquello que le escribamos en los argumentos (dentro de los paréntesis). No modifica el array original, devuelve una nueva cadena. Si deseas mantener el array original sin cambios, puedes asignar el resultado a una nueva variable e imprimir eso.
console.log("El array con el .join => ", namesSeparadoPorGuiones);

// -----------------------------------------

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

// * Create the variables `firstNames`, `lastNames` and `fullNames`.
// * Assign them a value and print in the console the full name

let firstNames = "Wilmer"; // string -> ""  // boolean -> true # false  // number -> 02345
let lastNames = "Salazar";
const fullNames = firstNames + lastNames;

console.log(firstNames, lastNames, fullNames); // console.log nos sirve para mostrarnos lo queramos por consola "Print console"

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

let variabile = true;
console.log(typeof variabile);
console.log(variabile);
variabile = Number; // [Function: Number]
console.log(typeof variabile);
console.log(variabile);
variabile = String;
console.log(typeof variabile);
console.log(variabile);

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
const yearsCompletedd = 1;

yearsCompletedd == firstYearCompleted;
yearsCompletedd === firstYearCompleted;

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
  `2ª variable ${question2},`,
  // `3ª variable ${question3},`,
  // `4ª variable ${question4},
  // `,
);

console.log(
  "Primera comparación || con la 1º variable y la 2ª variable =" + "",
  question1 || question2,
); //the result must be true ♦ Con || si las dos condiciones son true, dará TRUE. Si la primera es true y la segunda es false, dará TRUE. Si la primera es false y la segunda es false, será FALSE. Si la primera es false y la segunda es true, será TRUE.
console.log(
  "Segunda comparación && con la 1º variable y la 2ª variable =" + "",
  question1 && question2,
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
  losAños >= 18 ? `You can drive a car` : `You are too young to drive`,
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
  miEdad >= 18 ? "Puedes conducir un coche" : "No puedes conducir un coche",
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
  diaDeVerano && deberesHechos
    ? "Jesse can go out to play"
    : "Jesse stays home",
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
  numerico > 0 ? "the numerico is positive" : "the numerico is negative",
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
  nombre === "Mario" && surName === "Rossi"
    ? fullNamer
    : `Full name is invalid`,
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
    : "Password not valid",
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

let primitivi = false;

switch (typeof primitivi) {
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
let primitivos = 23;

switch (typeof primitivos) {
  case "string":
    console.log("Esto es un String.");
    break;
  case "number":
    console.log("Esto es un Number.");
    break;
  case "boolean":
    console.log("Esto es un Boolean.");
    break;
  case "undefined":
    console.log("No hay ningún valor asignado.");
    break;
  default:
    console.log("No conozco aún ese valor.");
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
    console.log("Esta habitación no esta disponible");
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
    console.log(
      `The price of Basic Room from January to May is ${priceRoom[0].precioBasicoDeEneroAMayo} euros.`,
    );
    // selectionOfRooms.push(priceRoom[0].precioBasicoDeEneroAMayo)
    break; // El "break;" detiene la ejecución del switch, cuando encuentra un "case" que corresponde a la expresión evaluada. En éste caso, 50 es la expresión evaluada.
  } // Si le quitamos el "break;", el código, sigue funcionando, hasta que encuentra un "break;"
  case 80: {
    // Acá el dato al cual deseo acceder trámite el "case", es el 80, que es el valor de la variable precioJovenDeEneroAMayo.
    console.log(
      `The price of Junior Room from January to May is ${priceRoom[0].precioJovenDeEneroAMayo} euros.`,
    );
    // selectionOfRooms.push(priceRoom[0].precioJovenDeEneroAMayo)
    break;
  }
  case 100: {
    // Con este "case" accedo al valor de mi variable precioMasterDeEneroAMayo.
    console.log(
      `The price of Master Suite from January to May is ${priceRoom[0].precioMasterDeEneroAMayo} euros.`,
    );
    // selectionOfRooms.push(priceRoom[0].precioMasterDeEneroAMayo)
    break;
  }

  default: {
    console.log(`You don't have select your room.`);
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
    // En este caso, la función <comprobarParImpar> está diseñada para verificar si los números del 0 a <variableNumero> son pares o impares. Uso el parámetro <variableNumero> para compararlo con la variable <num> para utilizarlo dentro del código y así poderle asignar a la función un número cualquiera cuando la llamo.
    if (num % 2 === 0) {
      // L’operatore resto <%> non è legato alla percentuale. Il risultato di <%> è il resto della divisione intera di <num> diviso <2>. Ad esempio: 5 / 2 = 1, con resto 1. È lo stesso che fare: 2 * 2 = 4, ma fino al 5 abbiamo resto di 1.
      arrayPar.push(`El Número ${num} es par.`); // Con el <.push> agrego al <arrayPar> los número pares, en éste caso.
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
  // console.log("La suma de los números a medida que el bucle va girando es " + cajaDeNumeros)
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

// # Exercise 32

// * Realizar un array de objetos con el nombre teamMembers.
// * Cada objeto tendrá los siguientes elementos: name, surname, age , city, hobby, favoriteFood, favoriteVideoGame, favoriteFilm, favoriteBook y petName
/*  posteriormente haremos un recorrido del array con las siguientes funciones: 
        Print the team in alphabetical order (surname name).
        Print the team in age order (name age).
        Print the team middle age.
        Print who has a pet (name petName).
        Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name).
        Print if there are some members with the same name (name). */

let teamMembers = [
  {
    name: "Marcos",
    surname: "Lambir Torres",
    age: 30,
    city: "Franchuski",
    hobby: "Rascarme",
    favoriteFood: "Pasta",
    favoriteVideoGame: "Lol",
    favoriteFilm: "Titanic",
    favoriteBook: "Memorias del Agua",
    petName: "Turi",
  },
  {
    name: "Esteve",
    surname: "Mogas Silva",
    age: 28,
    city: "Granollers",
    hobby: "Escalar",
    favoriteFood: "Croquetas",
    favoriteVideoGame: "LOL",
    favoriteFilm: "Origen",
    favoriteBook: "",
    petName: "",
  },
  {
    name: "Manuel",
    surname: "Benitez",
    age: 29,
    city: "Palma",
    hobby: "Ski",
    favoriteFood: "Empanadas",
    favoriteVideoGame: "Catan",
    favoriteFilm: "",
    favoriteBook: "Shantaram",
    petName: "Shaka, Shiva, Mechi",
  },
  {
    name: "Marta",
    surname: "Miras Méndez",
    age: 21,
    city: "Madrid",
    hobby: "Papiroflexia",
    favoriteFood: "Sushi",
    favoriteVideoGame: "PUBG",
    favoriteFilm: "Avatar",
    favoriteBook: "Loco por ella",
    petName: "Mochi",
  },
];

/* La función .sort() se utiliza en el array (teamMembers) para ordenar sus elementos. Recibe una función de comparación como argumento para determinar el orden de los elementos, que sería la arrow function (prev, next) => { ... } que utilizamos para comparar los atributos/elementos "prev" y "next".
  Luego comparamos las variables fa y fb, que contienen los atributos/elementos (a) con las propiedades de los apellidos (.surname) escritas en minúsculas (.toLowerCase).
  Si (if) (prevSurname) es menor (<) que (nextSurname), se retorna (return) (-1), lo que indica que a se pondrá antes de b en el ordenamiento de los elementos. Si (if) (prevSurname) es mayor (>) que (nextSurname), se retorna (return) (1), lo que indica que a debe ubicarse después de b en el ordenamiento. En el caso de que nada de lo anterior se cumpla, se devuelve (return) (0), lo que indica que no hay diferencia en el orden relativo de prev y next. */
teamMembers.sort((prev, next) => {
  /* .toLowerCase() convierte todas las letras a minúsculas. */
  const prevSurname = prev.surname.toLowerCase(),
    nextSurname = next.surname.toLowerCase();

  if (prevSurname < nextSurname) {
    return -1;
  }

  if (prevSurname > nextSurname) {
    return 1;
  }

  return 0;
});
/* Imprimo por consola un titulo relativo a la función, para mejorar su lectura */
console.log("Los miembros del grupo son:");

/* Por cada (.forEach) atributo/elemento (element) que hay en el array (teamMembers), devuelve (return) e imprime por consola (console.log()) la propiedad (.surname) del elemento (element) y también la propiedad nombre del mismo elemento (element.name)*/
teamMembers.forEach((element) => {
  console.log(`   ${element.surname} ${element.name} `);
});

/* Imprimo por consola un titulo relativo a la función, para mejorar su lectura */
console.log("La edad de los miembros del grupo es:");

/* El (.sort) nos compara los atributos/elementos al interno del array, ordenándolos y nos devuelve (return) el mismo arreglo de forma ordenada, después de hacer una comparación entre el parametro "a" y el parametro "b" */
teamMembers.sort((edadA, edadB) => {
  /* La comparación se realiza restando los atributos (edadA y edadB) con el valor asignado de la propiedad correspondiente (.age):
     Si la propiedad (.age) del primer parametro (edadA) es mas pequeña que la otra (edadB.age), el resultado de la resta nos dará un número negativo, lo que indica que ese atributo (edadA) debe ser colocado antes que el otro elemento (edadB) dentro de la lista.
     Si (edadA.age) es mas grande que (edadB.age), el resultado de la resta será positivo, lo que indica que el elemento (edadA) debe ser colocado después de (edadB).
     Si las edades son iguales, el resultado de la resta será 0, lo que significa que no hay diferencia en la posición relativa de los elemento edadA y edadB. */
  return edadA.age - edadB.age;
});
/* Por cada (.forEach) atributo/elemento (elemento) dentro del array (teamMembers) imprime por consola (console.log) el nombre del elemento (elemento.name) y su edad (elemento.age) */
teamMembers.forEach((elemento) => {
  console.log(`   La edad de ${elemento.name} es ${elemento.age} `);
});

/* Creo dos variables, una con la longitud (.length) del array (teamMembers) y la otra la inicializo en 0 para guardar la suma total de todas las edades */
let cantidadDeEdadesEnElArray = teamMembers.length;
let sumaDeEdades = 0;
/* Por cada atributo/elemento del array sumo las edades entre sí mismas y devuelvo su suma. */
teamMembers.forEach((atributo) => {
  return (sumaDeEdades =
    sumaDeEdades +
    atributo.age); /* también se puede escribir así: sumarEdades += atributo.age */
});
/* creo una variable para guardar el valor de la media de edades (una media se realiza sumando todos los valores entre sí y dividiendo el resultado entre la cantidad de valores dados) y finalmente imprimo el resultado por consola */
console.log(
  "La edad media del equipo es:",
  sumaDeEdades / cantidadDeEdadesEnElArray,
);

/* Imprimo por consola un titulo relativo a la función, para mejorar su lectura */
console.log("Quién es fanático de League Of Legends?");

/* Por cada atributo/elemento del array: 
  creo una variable (let juegoFavorito) para almacenar las propiedades (.favoriteVideoGame) del atributo/elemento (attribute) del array
  Después digo, Si (if) la variable (let juegoFavorito) sin importar si está escrito en mayúsculas o minúsculas (.toLowerCase) es estrictamente equivalente (===) a "lol" o (||) "league of legends"
  devuelve (return) e imprime por consola (console.log()) que se juega a ese juego */
teamMembers.forEach((attribute) => {
  let juegoFavorito = attribute.favoriteVideoGame;
  if (
    juegoFavorito.toLowerCase() === "lol" ||
    juegoFavorito.toLowerCase() === "league of legends"
  ) {
    console.log(`   ${attribute.name} es un fanático del Lol`);
  }
  if (
    juegoFavorito.toLowerCase() !== "lol" &&
    juegoFavorito.toLowerCase() !== "league of legends"
  ) {
    console.log(`   ${attribute.name} no pierde la vida en el Lol`);
  }
});

/* Imprimo por consola un titulo relativo a la función, para mejorar su lectura */
console.log("Mascota o mascotas que tienen los participantes del grupo:");

/* Creo una función con un parametro (function petAtribute (arr)) para saber qué mascotas tiene cada miembro del team y si ha rellenado la casilla de petName */
function petAtribute(arr) {
  /* Recorro el array completo utilizando un bucle (for) */
  for (let i = 0; i < arr.length; i++) {
    /* Inicializo una variable con el valor de todas las mascotas de un array */
    let saberPetName = arr[i].petName;
    /* Si (if) la condición de comprobar (typeof()) si la variable (const saberPetName) es equivalente (===) a una cadena de texto ("string") y (&&) si la condición de la variable (saberPetName) posee una longitud (.length) distinta (!==) a 0
      entonces imprimo por consola (console.log()) el nombre de la/las mascota/s que se puedan tener
      Si no (else) imprimo por consola (console.log()) que no tiene mascota. */
    if (typeof (saberPetName === "string") && saberPetName.length !== 0) {
      console.log(`   ${arr[i].name} tiene a: ${saberPetName}`);
    } else {
      console.log((saberPetName = `   ${arr[i].name} tiene a: N/A`));
    }
  }
}
petAtribute(teamMembers);
/** Las lineas de código desde la linea #135 hasta la linea #154 pueden ser reemplazadas por algo mas simple: 
  
   * teamMembers.forEach((member) => {
        if(member.petName){
            console.log(`La mascota de ${member.name} es: ${member.petName}`)
            }
        })

   */

/* Creo una función para saber si hay nombre repetidos en el array */
function hayNombresRepetidosEnElArray(array) {
  /* Creo un array vacío para guardar probables nombres repetidos */
  let nombresRepetidos = [];
  /* Creo un bucle (for) que inicializa en el primer índice del array y va avanzando hasta que llega a su fin */
  for (let primerIndex = 0; primerIndex < array.length; primerIndex++) {
    /* Necesito crear otro bucle para tener otra referencia. Así podré compararlas entre ellas. Por esa misma razón, inicializamos la variable del segundo bucle con la variable del primero más 1, así podemos comparar el primer elemento del array con el segundo. */
    for (
      let segundoIndex = primerIndex + 1;
      segundoIndex < array.length;
      segundoIndex++
    ) {
      /* Si el índice del primer array es equivalente al segundo, añadimos (.push) el nombre del segundo índice al array vacío (let nombresRepetidos = [];) */
      if (array[primerIndex].name === array[segundoIndex].name) {
        nombresRepetidos.push(array[primerIndex].name);
      }
    }
  }
  /* Si (if) el array (nombresRepetidos) tiene una longitud (.length) mayor (>) que zero (0), quiere decir que hay algún nombre al interno del array */
  if (nombresRepetidos.length > 0) {
    console.log("Los nombres que se repiten son:", nombresRepetidos);
    /* Si no (else), no posee ninguna longitud, por lo tanto seguirá vacío */
  } else {
    console.log("No hay nombres repetidos");
  }
  /* Devuelvo el array (nombresRepetidos) que utilicé para guardar los nombres que se repiten */
  return nombresRepetidos;
}
hayNombresRepetidosEnElArray(teamMembers);

/** Otra forma de encontrar los nombres repetidos:
 * Function para encontrar nombres repetidos entre los miembros del equipo
 *
 * @param {teamMembers} array - array de miembros del equipo
 */
function hayNombresRepetidosEnElArray(array) {
  let nombresRepetidos = [];
  /**
   * Recorro el array
   */
  for (let primerIndex = 0; primerIndex < array.length; primerIndex++) {
    /**
     * Segundo bucle para comparar el proximo miembro del equipo
     */
    for (
      let segundoIndex = primerIndex + 1;
      segundoIndex < array.length;
      segundoIndex++
    ) {
      /**
       * Si los nombres son iguales, lo guardo en el array
       */
      if (array[primerIndex].name === array[segundoIndex].name) {
        nombresRepetidos.push(array[primerIndex].name);
      }
    }
  }
  if (nombresRepetidos.length > 0)
    console.log("Los nombres que se repiten son:", nombresRepetidos);
  else console.log("No hay nombres repetidos");
}
hayNombresRepetidosEnElArray(teamMembers);

// -------------------- HEXADECIMAL -> ID or COLOR --------------------------

/* Crea 3 códigos para ID y Colors, deben ser hechos en forma `Hexadecimal` y con `randomUUID()` */

/* 1. Código Hexadecimal random ID */
const randomHexID = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const hexadecimalNumber = [];

  for (let hex = randomNumber; hex > 0; hex = Math.floor(hex / 16)) {
    const remainder = hex % 16;

    hexadecimalNumber.push(remainder.toString(16));
  }

  const toID = hexadecimalNumber.join("-").toLocaleUpperCase();

  const aleatoryHexID = `#${toID}`;

  return aleatoryHexID;
};
console.log(randomHexID());

/* 2. Código Hexadecimal random Color */
const randomHexColor = () => {
  const hexadecimalNumbers = [];

  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    hexadecimalNumbers.push(randomNumber.toString(16));
  }

  const toHex = hexadecimalNumbers.join("").toUpperCase();
  const aleatoryHexColor = `#${toHex}`;

  return aleatoryHexColor;
};
console.log(randomHexColor());

/* 3. Código UUID (Identificador Único Universal). Para utilizar randomUUID() debemos utilizar librerías externas porque no es un método estándar en JavaScript */

/**
 *
 * const crypto = require("node:crypto");
 *
 * const randomID = crypto.randomUUID();
 *
 * console.log(randomID);
 *
 */

/* 4. Código UUID (Identificador Único Universal) formateado. */

/**
 * 
 * function generateFormattedUUID() {
 * const randomID = crypto.randomUUID();
 * const formattedUUID = randomID
 *   .replace(/-/g, "")
 *   .match(/.{1,4}/g)
 *   .join("-#");
 * return `#${formattedUUID}`;
 * }
 * 
 * const formattedUUID = generateFormattedUUID();
 * console.log(formattedUUID);
 * 
 */


// -------------------- CONVERTIR DECIMAL A HEXADECIMAL --------------------------

// 1. Convertir decimal a hexadecimal para dirección IP
const decimalIP = 3232235778; // Ejemplo de dirección IP en formato decimal
const hexadecimalIP = decimalIP.toString(16);
console.log("Dirección IP en hexadecimal:", hexadecimalIP);

// 2. Convertir decimal a hexadecimal para número de puerto
const decimalPort = 8080; // Ejemplo de número de puerto en formato decimal
const hexadecimalPort = decimalPort.toString(16);
console.log("Número de puerto en hexadecimal:", hexadecimalPort);

// 3. Convierte el número decimal a hexadecimal
const decimalNumber = 42; // Reemplaza con tu número decimal
const hexString = "0x" + decimalNumber.toString(16);
console.log("Número decimal:", decimalNumber);
console.log("Número hexadecimal:", hexString);
