let user = {
  name: "Cosimo",
  age: 30,
  detalles: {
    colorFavorito: "rojo",
    cocheFavorito: "audi",
    formaNormal: function decir() {
      return console.log("Hola");
    },
    formaArrow: decirDeNuevo = () => {
      return console.log("Hola de nuevo");
    },
  },
};

/* Acá se está sobrescribiendo el objeto principal */
// var newUser = user;

// newUser.name = "Paolo";

// console.log(newUser);
// console.log(user);

/* Esta forma realiza una copia superficial del objeto principal. Los cambios realizados en objetos anidados dentro de la copia, serán modificados también en el objeto original */
/* var newUser = Object.fromEntries(Object.entries(user)); */

/* Acá se crea una copia superficial del objeto principal. */
/* var newUser = { ...user }; */

/* Y esta otra también realiza una copia superficial del objeto principal: */
/* let newUser = Object.assign(user); */

/* Esta forma utiliza manera distinta de realizar una copia de un objeto. Utilizamos JSON.stringify() para convertir el objeto en una cadena JSON y luego JSON.parse() para convertir esa cadena nuevamente en un objeto. Esto realiza una copia independiente del objeto original, incluyendo objetos anidados. Sin embargo, es importante tener en cuenta que este enfoque tiene algunas limitaciones. No funcionará ni con funciones, ni con objetos que contengan referencias circulares, ya que JSON.stringify() no puede serializar referencias circulares y arrojará un error en ese caso. */
var newUser = JSON.parse(JSON.stringify(user));

newUser.name = "Marcos";
newUser.detalles.colorFavorito = "naranja";

console.log(user);
console.log(newUser);

