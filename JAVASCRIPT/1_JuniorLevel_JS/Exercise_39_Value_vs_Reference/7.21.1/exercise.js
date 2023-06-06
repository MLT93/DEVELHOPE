// # Exercise 39

// In the code below we have an object literal called `user` that has two properties: `name` and `age`. If we try to create a `newUser` starting from `user` and, after that, we try to change the name, you'll notice that even the original `user` has been modified. How can we modify the name of `newUser` without changing the name of `user`?

let userObject = {
name: "Cosimo",
age: 30,
};

let newUser = userObject;

newUser.name = "Paolo";

console.log("User1: ", userObject);
console.log("Sobreescripción del usuario original: ",newUser);

// **Suggestion**
// Try to use a `for in` loop, as it showed in the video lessons.
// You would need a new copy of the `user` object.
// You can find some useful info [here](https://javascript.info/object-copy)

// COMO ASIGNAR NUEVAS PROPIEDADES A LOS OBJETOS EXISTENTES: 
let user2 = Object.assign(
  userObject, // Hago una copia del objeto (user). Tiene que estar fuera de las llaves pero déntro del paréntesis y antes que cualquier otro posible cambio que deseemos hacer dentro de las llaves.
  {
  apellido: "Ramirez", // Asigno una nueva propiedad al objeto => Object.assign(nombre del objeto a copiar,{nuevas propiedades para agreagr});. En éste caso la nueva pripiedad es apellido: "Ramirez".
  },
);
user2.name = "Alejandro" // Modifico mi nuevo objeto.

console.log("User2: ", user2)

let user3 = {
  ...userObject, // Acá creo una copia del objeto (user) gracias a los tres puntitos (...) antes del nombre del objeto a copiar. Tiene que estar dentro de las llaves y antes que cualquier otra modificación al nuevo objeto.
  colorFavorito: "Verde", // Añado una propiedad al objeto.
}
user3.name = "Julián" // Aquí le cambio el nombre a mi nuevo objeto, por el nombre que deseo.

console.log("User3: ", user3);

for (variablesQueHay in userObject ){
  console.log(variablesQueHay);
};