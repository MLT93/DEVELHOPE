// **INT**

// Write a function that takes an object as a parameter and returns a new array of all the property names in the object that have a string value longer than 5 characters.
// Print the new array.

// ## Suggestion ##
// Use a for...in loop to iterate through the properties of the object and a conditional statement to check if each value is a string and longer than 5 characters.

const obj = {
  longStringProperty: "longStringProperty",
  shortstringProperty: "ciao",
  booleanProperty: true,
  numberProperty: 10,
  longStringProperty2: "longStringProperty2",
};

let object = [
  {
    namee: "Filippe",
  },
  {
    namee: "Jason",
  },
  {
    namee: "Casimiromiró",
  },
  {
    namee: "Cris",
  },
  {
    namee: true,
  },
];

function findStringValueUp5(arr) {
  let greatValueString = [];
  let nombreCorto = [];
  let esBoolean = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].namee.length >= 5 && typeof (arr[i].namee === "string")) {
      greatValueString.push(arr[i]);
    } else if (typeof arr[i].namee === "boolean" || typeof arr[i].namee === "number") {
      esBoolean = arr[i];
    } else {
      nombreCorto = arr[i];
    }
  }
  return { esBoolean, nombreCorto, greatValueString };
}

console.log(findStringValueUp5(object));
// console.log(findStringValueUp5(obj)); // El código que hice para el FOR normal no funciona con éste objeto (primero porque es un objeto y no un array y, a demás, porque yo he de pasarle manualmente todas las propiedades que deseo analizar al for. Entonces debería cambiar el código y hacer un forEach, por ejémplo) mientras que con un FOR-IN (el for in es para objetos y el for of es para arrays) me analizaría todas las propiedades dentro de una variable objeto.

// function longStrings(obj) {
//   // Creo una variable array vacía, así almaceno lo que encuentro
//   let longArr = [];
//   // Acá dice: Por cada una de las propiedades que encuentre el bucle for, déntro del objeto en cuestión (obj),
//   for (let prop in obj) {
//     // Si la propiedad del objeto es un tipo String y (&&) si la longitud de la propiedad el objeto es mayor a 5,
//     if (typeof (obj[prop] === "string") && obj[prop].length > 5) {
//       // Agrego la propiedad a la variable array vacía
//       longArr.push(prop);
//     }
//   }
//   // Devuelvo mi variable array que a éste punto, ya no está vacía
//   return longArr;
// }

// console.log(longStrings(obj));
