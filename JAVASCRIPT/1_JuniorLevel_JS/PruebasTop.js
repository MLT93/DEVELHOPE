// Variable. Pueden ser LET, VAR (se pueden modificar ambas, la diferencia está en que con LET no puedo repetir el nombre de mi variable para crear otra, mientras que VAR sí.) y CONST (variable que no cambia ni nombre, ni valor nunca. Es constante)
let variable = "Hola Mundo!";

console.log(variable);

// --------------------------------------------

// Mi variable
let ageMarc = 30;
// Ternary Operator. Válido únicamente para hacer comparaciones y evaluaciones simples, con respuestas como: true, false.
console.log(
  ageMarc >= 18 ? `You can drive a car` : `You are too young to drive`
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

// ---------------------------------------------

for (let i = 0; i >= -10; i--) {
  // creo variable dentro del bucle, creo una condición, modifico la condición.
  console.log(i);
}

// lo mismo, pero con array

let miArrayDeNumerosNegativos = [];

for (let numNeg = 0; numNeg >= -10; numNeg--) {
  miArrayDeNumerosNegativos.push(numNeg); // Dentro de un array, si llamo el array y le pongo .push, lo que haya adentro de los paréntesis, me lo pondrá al final de la lista.
  console.log(miArrayDeNumerosNegativos);
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

//--------------------------------------------

// ARRAY PARA LA DEMOSTRACION
let misNumeros = [1, 2, 3, 4, 5];

// 1º FORMA DE ITERAR/RECORRER EL ARRAY
for (let i = 0; i < misNumeros.length; i++) {
  let por2 = misNumeros[i] * 2;
  console.log(por2);
}

// 2ª FORMA DE ITERAR/RECORRER MI ARRAY
misNumeros.forEach((argumentoNum) => {
  // .forEach() quiere decir: .poraCada(lo que haya acá. En éste caso, un arrow function).
  let por2 = argumentoNum * 2;
  console.log(por2);
});

// 3ª FORMA DE ITERACION DEL MISMO ARRAY
for (let cadaNumero of misNumeros) {
  // El bucle FOR...OF (pertenece al ECMAScript 2015, ES6) se utiliza para iterar sobre arrays, strings (que es un array de letras), array de objetos y todo aquello que es iterable. Lo que hace, es pasar por cada elemento de un array (itera sobre de él) y trabaja el código que yo le introduzca.
  let multiplicacion = cadaNumero * 2; // Código introducido.
  console.log(multiplicacion); // Imprime resultado de la multiplicación de cada numero del array por 2.
}

// ------------------- ITERACIONES FOR...IN \ FOR IN \ FOR-IN: PARA OBJETO --------------------------------------
let elObjeto = {
  a: 1,
  b: 2,
  c: 3,
};

for (let propiedadKeyDeMiObjeto in elObjeto) {
  console.log(propiedadKeyDeMiObjeto); // Imprime: 'a', 'b', 'c'
  console.log(elObjeto[propiedadKeyDeMiObjeto]); // Imprime: 1, 2, 3
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

iterarEnObjeto(car);

// ------------------- ITERACIONES FOR...OF \ FOR OF \ FOR-OF: PARA ARRAY --------------------------------------
let array = [1, 2, 3];

for (let elemento of array) {
  console.log(elemento); // Imprime: 1, 2, 3
  console.log();
}

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
    .concat(" años.")
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

Math.tan(); // Siempre calcula en radianes. Por lo tanto, el dato dentro de las paréntesis es en raidanes. La conversión de radianes a grados sería:
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
let miNumeroAleatorio = Math.floor(Math.random() * 20); // Math.floor redondea hacia abajo, para que no me dé decimales.
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

// ----- FORMAS PARA AÑADIR O QUITAR COSAS DE UN ARRAY -----

let numbers = [1, 2, 3, 4, 5, 11, 12, 22, 0.7];

console.log(
  "Accedo al último elemento utilizando el .slice:",
  numbers.slice(-1)[0]
); // El .slice(inicio, fin) Se utiliza para extraer una porción de un array existente y devuelve un nuevo array con los elementos seleccionados. Permite especificar el inicio y el fin de la porción que se desea extraer array.slice(inicio, fin) y, si el inicio no se especifica, declara solo el fin. Después accede al array trámite los corchetes [..]
// Array: El array original del cual se desea extraer una porción.
// Inicio (opcional): El índice donde se iniciará la extracción. Si no se especifica, se asume un valor de 0, lo que significa que se comenzará desde el primer elemento del array.
// Fin (opcional): El índice donde finalizará la extracción. El método .slice() extraerá los elementos hasta fin - 1. Si no se especifica, se extraerán todos los elementos hasta el final del array.

console.log(
  "Con .splice éstos son los números que quito: ",
  numbers.splice(0, 5, 55)
); // El método .splice(indice de inicio(inclusive), elementos a eliminar, item a añadir) permite modificar el contenido de un array eliminando, reemplazando o agregando elementos. Acepta varios argumentos. Puedes utilizarlo para quitar una parte del array especificando el índice de inicio (inclusive) y la cantidad de elementos a eliminar en elementos a eliminar.
console.log("Este es mi array después de pasarle el .splice:", numbers);

// Ejemplo1:
array.splice(
  0 /*inicio*/,
  2 /*deleteCount*/,
  7 /*añadirItem1*/,
  40 /*añadirItem1*/
);
// inicio: Es el índice en el cual comenzar a realizar las modificaciones en el array.
// deleteCount: Es el número de elementos a eliminar a partir del índice start. Si se establece en 0, no se eliminará ningún elemento.
// añadirItem1, añadirItem2, .. : Son los elementos opcionales que se pueden agregar al array en el lugar donde se eliminaron los elementos.

// Ejemplo2:
let numeritos = [1, 2, 3, 4, 5];
let removedElements = numeritos.splice(
  2 /* inicio incluido */,
  2 /* elementos a eliminar */,
  32 /* elementos a añadir */
); // Elimina 2 elementos a partir del índice 2
console.log("Array modificado:", numeritos); // Resultado: [1, 2, 32, 5]
console.log("Elementos eliminados:", removedElements); // Resultado: [3, 4]

// ---------- FUNCION ES PRIMO O NO ES PRIMO --------------

// PRIMERA FORMA con .forEach ------------------
let numerolos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function refactorNumbersArray(NumeroDelArray) {
  let newArray = [];

  NumeroDelArray.forEach((number) => {
    //Inizializo la varible isPrime como true
    let isPrime = true;

    //Si le numero es igual o mayor a dos entro al if
    if (number >= 2) {
      //Divido cada numero, por los numeros anteriores pero no por si mismo
      for (let i = 2; i < number; i++) {
        //Si el resto es 0, fue divisible por otro numero y cambio
        // la variable isPrime a false
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

// SEGUNDA FORMA con for loop ------------------
let numerillos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function encontrarNumerosPrimos(arr) {
  let numerosPrimos = []; // Creo una variable vacía para guardar mis resultados

  for (let i = 0; i < arr.length; i++) {
    // Le digo a mi loop que recorra el array
    let esPrimo = true; // Inicio una variable con un valor true, así puedo utilizarla después déntro de un IF, si encuentro algún número Primo

    if (arr[i] > 1) {
      // Busco los números dentro del array que sean mayores que 1 (porque un número primo es un número entero mayor que 1 que solo es divisible por 1 y por sí mismo. Si un número es menor o igual a 1, no puede ser considerado primo porque tiene divisores adicionales aparte de 1 y él mismo. Por lo tanto, la condición > 1 se utiliza para excluir los números menores o iguales a 1 de la verificación de primos)
      for (let j = 2; j < arr[i]; j++) {
        // Al comenzar desde 2 el segundo bucle, nos saltamos la división entre 1 y el número que estamos evaluando (), ya que todo número es divisible por 1. Iniciar en 2 es eficiente y suficiente para realizar la comprobación de divisibilidad adecuada. Establecer j = 2 nos permite iniciar la verificación de divisibilidad desde el número 2 y continuar hasta un número anterior al número que estamos evaluando (el número de j < arr[i]), evitando considerar la divisibilidad entre 1 y el número mismo.
        if (arr[i] % j === 0) {
          // El operador de módulo % devuelve el resto de la división entre dos números. En este caso, arr[i] % j calcula el resto de dividir arr[i] entre j. Si el resultado es 0, significa que arr[i] es divisible de manera exacta por j, lo que implica que arr[i] no es un número primo, lo cual indica que arr[i] tiene un divisor distinto de 1 y de sí mismo, por lo tanto no sería un número primo.
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

// // TERCERA OPCIÓN con while loop --------------
// let numeroz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function refactorNumbersArray2(delArray) {
//   let newArray3 = [];

//   delArray.forEach((number) => {
//     //Inicializo la variable isPrime como true
//     let isPrime = true;

//     //Si le numero es igual o mayor a dos entro al if
//     if (number >= 2) {
//       //Divido cada numero, por los numeros anteriores pero no por si mismo
//       let i = 2;
//       while (i < number) {
//         if (number % i === 0) {
//           isPrime = false;
//         }
//         i++;
//       }
//     } else {
//       isPrime = false;
//     }

//     if (isPrime) {
//       newArray3.push(number);
//     }
//   });

//   return newArray3;
// }

// let result = refactorNumbersArray2("Resultado con el while:", numeroz);
// console.log(result);

// --------------------------------------------------

// # Dado un array de 10 numeros, busca la primera posición del número 1 déntro del primer elemento del índice, si no está presente, return -1. El output devuelve un integrante el indice

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

// --------------------- METODOS ----------------------------

const namess = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Add a hyphen after each element of the array. The output should something like this: Luca-Marco-Vittorio-Giovanni

// **Suggestion**
// Look at the official [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to find the right method.

console.log("Array normal => ", namess);
let namesSeparadoPorGuiones = namess.join("-"); // join() une todos los elementos del array por aquello que le escribamos en los argumentos (dentro de los paréntesis). No modifica el array original, devuelve una nueva cadena. Si deseas mantener el array original sin cambios, puedes asignar el resultado a una nueva variable e imprimir eso.
console.log("El array con el .join => ", namesSeparadoPorGuiones);
