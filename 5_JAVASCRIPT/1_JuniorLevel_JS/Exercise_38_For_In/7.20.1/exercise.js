// # Exercise 38

// Starting from the exercise 37, print the key of the `car` object.

// **Suggestion**

// Use the `for in` statement

const cars = { // Objeto de coches
    car: "Audi",
    namee: "A3",
    color: "Grey",
};

console.log(cars); // me imprime todo el objeto, las propiedades y sus valores.

for (const propieties in cars) { // Comprueba las pripiedades que tiene mi objeto.
    console.log(propieties); // Me imprime car, namee, color.
};



// PARA CONTROLAR Y OPERAR AL INTERNO DE MIS OBJETOS USAMOS:
// FOR...IN Nos sirve para descubrir todas las propiedades que tiene nuestro objeto.

// Sintaxis:
for (const variablePropieties in obj) { /* Creo un bucle (for (){};), agrego una variable (const variablePropieties) dentro de los paréntesis del bucle for, y le digo que entre (in) adentro de mi objeto (obj), para que me muestre por consola (console.log), todas las propiedades de mi objeto. */
    console.log(variablePropieties)
};

// IF...IN OPERATOR Nos sirve para comprobar y ver singularmente cada propiedad de un objeto y, si fuera necesario, modificarlas.

if ("UnaDeLasPropiedadesDelObjeto" in obj){ // Esto me confirma si la propiedad que yo pongo entre las comillas dentro de los paréntesis de la condición en mi IF(){}, existe. ("UnaDeLasPropiedadesDelObjeto") existe dentro (in) del objeto (obj) en cuestión? En éste caso sí.
    console.log(obj.UnaDeLasPropiedadesDelObjeto)
} else { // Si ésa propiedad no existiera, me devolvería (console.log) el mensaje de: "a propiedad buscada, no existe!".
    console.log("La propiedad buscada, no existe!")
};