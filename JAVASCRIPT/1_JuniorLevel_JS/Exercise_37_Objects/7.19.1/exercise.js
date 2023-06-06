// # Exercise 37

// Create an object literal called `car` with two properties: `name` and `color`. Print in the console values of the properties.

// Creo un objeto
const car = { // Mi objeto tiene dos propiedades: namee y color.
    namee: "Audi", // Le asigno a namee el valor de "Audi". 
    color: "Grey", // Asigno a color el valor de "Grey".
};

console.log( // Imprimo sólo los valores de namee y color. Para eso, llamo el nombre de mi objeto (car) y le pongo (.) la propiedad a la cual deseo acceder (namee)
    car.namee,
    car.color
); // Esto imprime "Audi" y "Grey".