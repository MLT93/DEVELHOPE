let user = {
  name: "Cosimo",
  age: 30,
};

/* let newUser = user; // Acá estamos sobrescribiendo, por referencia, al objeto principal

newUser.name = "Paolo";
console.log(newUser);
console.log(user); */

let newUser = {};
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    newUser[key] = user[key];
  }
}
newUser.name = "Marcos";

console.log(newUser);
console.log(user);

/* Creo objeto vacío para guardar la propiedad del objeto a copiar */
/* Por (for) la propiedad (key) que exista en (in) el objeto (user) */
/* Si (if) el objeto (user) tiene esta propiedad (.hasOwnProperty(key))  */
/* La copia (newUser) tendrá la propiedad [key] igual (=) que el objeto principal (user[key]) */
/* Ya tenemos una copia exacta del objeto principal */
