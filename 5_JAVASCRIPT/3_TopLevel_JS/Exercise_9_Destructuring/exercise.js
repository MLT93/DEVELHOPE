/* La primera forma no funciona porque las variables asignadas a las propiedades no tienen el mismo nombre y, si al console.log() le paso person, me imprime el objeto, no las variables*/
const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const { id, name, surname, old } = person;
console.log(id, name, surname, old);

/* 
Primera solución: Destructuring with Aliases (creación de nuevas variables).
Una forma de resolverlo es utilizar la `destructuración con alias` para asignar un valor a las propiedades de person2, que posteriormente serán también mis variables desestructuradas id2, name2, surname2 y old2. Las cuales imprimo en el console.log() 
*/
const person2 = {
  id: 2,
  firstName: "Maria",
  lastName: "Ugarte",
  age: 35,
};

const { id: id2, firstName: name2, lastName: surname2, age: old2 } = person2;
console.log(id2, name2, surname2, old2);

/* 
Segunda solución: Renaming Object Property Names (renombrar las propiedades del objeto).
La forma correcta según lo que pide el ejercicio es `cambiar directamente el nombre de las propiedades del objeto` person3 para que sean iguales a las variables. En esta solución, estás cambiando directamente los nombres de las propiedades del objeto person3 para que coincidan con los nombres de las variables en la destructuración. Esto significa que las propiedades del objeto en sí mismo han sido renombradas para que tengan los mismos nombres que las variables en el proceso de destructuración. No se están creando nuevas variables, simplemente estás utilizando las propiedades renombradas directamente.
*/
const person3 = {
  id3: 3,
  name3: "Marco",
  surname3: "Zampellan",
  old3: 75,
};

const { id3, name3, surname3, old3 } = person3;
console.log(id3, name3, surname3, old3);



