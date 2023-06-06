// Given the following objects array:

const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: "gamer" },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: "sportsman" },
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: "gamer" },
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: "photographer" },
];

// Create a function that iterates over the array and gives the following output:

// Luca
// Life Is a Game, Play to Win!
// Mario
// Never give up!
// Giovanna
// Life Is a Game, Play to Win!
// Carmelo
// A picture is worth a thousand words!
// The youngest is è Carmelo
// The longest surname is Brambilla

// Creo una función que me ejecute todas las peticiones del ejercicio
function iterateOverArray(array) {
  // Creo un loop (for), con una variable (let i = 0) como punto de partida y que empiece desde el primer índice del array (.. = 0) para que, si es menor que la longitud de todo el array (i < students.length), vaya avanzando (i++) dentro de ése mismo array.
  for (let i = 0; i < array.length; i++) {
    // Imprimo el primer nombre de la primer vuelta del bucle en el array
    console.log(array[i].name);

    // Ahora accedo al array (array), accedo al índice ([i]) *en éste caso, estando dentro del for, deberé darle el índice por el cual itera el loop cada vez, así puedo acceder a cada propiedad a medida que va avanzando el bucle* y después a la propiedad que busco en concreto (.hobby)
    switch (array[i].hobby) {
      case "gamer":
        console.log("Life Is a Game, Play to Win!"); // Estándo dentro del for loop, me dá el resultado de cada uno de los almunos gracias a su recorrido dentro del array
        break;
      case "sportsman":
        console.log("Never give up!");
        break;
      case "photographer":
        console.log("A picture is worth a thousand words!");
        break;
      default:
        console.log("El alumno no tiene hobbies.");
    }

    // Creo mi contador para ver qué edad es la más joven. Pongo el contador antes del bucle for así tengo un punto de partida antes de empezar el recorrido por el array (porque no sé si realmente el primer índice de mi array es el más jóven, por lo tanto, para hacer la comparación partimos del primero de la lista) y le doy el valor del primer índice para tener un valor de referencia antes de comenzar a comparar las edades de los estudiantes. Sin esta inicialización previa, no se tendría un valor de referencia para la comparación y no se sabría qué estudiante es el más joven hasta que se haya recorrido al menos uno. Por lo tanto, es necesario establecer estudianteMasJoven antes del bucle para tener una base inicial adecuada para la comparación.
    let elMasJovenEs = array[0];
    let elApellidoMasLargoEs = array[0];

    // Si (if) la edad (.age) que va recorriendo el bulce for dentro del array (array[i]) es menor (<) que la edad del contador (elMasJovenEs.age) *acordémonos que inicialicé la variable dándole el valor del primer índice del array (elMasJovenEs = array[0]) para tener un punto de partida y de comparación, dónde el bucle for irá analizando cada propiedad a medida que avanza (en éste caso es .age)*, entonces reemplazo sus valores (elMasJovenEs = array[i].age).
    function youngestStudent() {
      if (array[i].age < elMasJovenEs.age) {
        elMasJovenEs = array[i];
      }
      return console.log("The youngest is", elMasJovenEs.name); // Imprimo el nombre de la persona más jóven
    }

    // Si (if) la longitud (.length) del apellido (.surname) del recorrido del bucle for dentro del array (array[i]) es mayor (>) que la longitud (.length) del apellido (.surname) del primer índice del array (elApellidoMasLargoEs = array[0]) *Acuérdate que elApellidoMasLargoEs = array[0] porque lo creaste como un contador con el valor inicial del primer índice del array para poder compararlo con los demás e iniciarlo desde un punto en específico, así el bucle for iterará sobre cada propiedad (en éste caso buscamo solo .surname, entonces nos dará solo éso pero el bucle itera sobre todo el array)*, entonces reemplazo el valor más grande con el que ya tenía antes (elApellidoMasLargoEs = array[i])
    function longestSurname() {
      if (array[i].surname.length > elApellidoMasLargoEs.surname.length) {
        elApellidoMasLargoEs = array[i];
      }
      return console.log(
        "The longest surname is",
        elApellidoMasLargoEs.surname
      );
    }
		
		// .splice (inicio del índice, elemento a quitar, elemento a añadir) Esto empieza en el índice 3, quita ése indice y agrega otra propiedad.
    function addStudent() {
      students.splice(3, 1, {
        id: 5,
        name: "Elena",
        surname: "Pappalardo",
        age: 23,
        hobby: "photographer",
      });
      return array;
    }
  }

  youngestStudent(array);
  addStudent(); // NO necesita que se le pase ningún parámetro porque simplemente ya está adentro de una función y simplemente le agrega una propiedad al array, lo que significa que no trabaja con ningúna propiedad déntro de ella. 
  longestSurname(array);

  return;
}

iterateOverArray(students); // LLámo a la función dándole el array que deseo analizar

// Then add a new student at the third place of the array:
// { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'}

// Run the function one more time. You should get the following output:

// Luca
// Life Is a Game, Play to Win!
// Mario
// Never give up!
// Elena
// A picture is worth a thousand words!
// Giovanna
// Life Is a Game, Play to Win!
// Carmelo
// A picture is worth a thousand words!
// The youngest is Carmelo
// The longest surname is Pappalardo

// Each phrase is related to the students hobbies.
// You can create different functions for each task and invoke them inside the main function.
// The console.log can print a combo: strings and variables ( example: console.log('Hello', name) ).
