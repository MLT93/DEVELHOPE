
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

/* Se accede a la propiedad "age" a través del objeto "person" al interno de la función "isAdult" y después gracias a la función vemos si es mayor o menor de edad pasándole como argumento, en el momento de la invocación, el objeto person por completo */
function isAdult(person) {
  return person.age >= 18;
}
console.log(isAdult(person));

/* Acá se hace la destructuración de la propiedad del objeto al que se desea acceder y a la función le pasamos como argumento, dicha variable (la que tiene el mismo nombre que la propiedad). Este método hace que tengamos que destructurar cada propiedad por separado y ponerle cada argumento a la función, cosa tediosa. Recuerda que si la función si tiene más de un valor para devolver, los guardamos en otro objeto o array para poder devolver varios valores contemporaneamente. */
const { age } = person;
const { id } = person;

function isAdult2(age, id) {
  return { isAdult: age >= 18, id }; /* return [age >= 18, id]; */
}
console.log(isAdult2(age, id));

/* Acá la destructuración se realiza directamente al interno de la función, lo cual permite pasarle cualquier objeto la función (siempre que tenga alguna de las propiedades destructuradas en su interno). Así solo necesitamos pasarle un solo argumento a la función, la cual nos devolverá otro objeto con los valores deseados (siempre que deba devolvernos más de un valor) */
function isAdult3(person) {
  const { age, firstName } = person;
  return {isAdult: age >= 18, firstName}; /* return [age >= 18, firstName]; */
};
console.log(isAdult3(person));

/* BUENA PRÁCTICA => Primero, creamos una copia del objeto person y le modificamos la propiedad age en el nuevo objeto resultante (recuerda que esta copia es a nivel superficial y no nos vale para objetos anidados). Luego, al definir la función isAdult4, utilizamos la desestructuración en los parámetros para obtener directamente la propiedad age del objeto. Esto hace que la función sea más legible y comprensible en su uso. En el cuerpo de la función, ejecutamos el código necesario para determinar si la edad es mayor o igual a 18. Finalmente, llamamos a la función isAdult4 pasando como parámetro el objeto deseado y obtenemos el resultado esperado. */
const person2 = { ...person, age: 66 };

function isAdult4({age}) {
  return age >= 18;
}
console.log(isAdult4(person2));
