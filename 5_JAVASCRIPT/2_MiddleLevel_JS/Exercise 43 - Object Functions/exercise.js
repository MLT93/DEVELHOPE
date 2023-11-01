let user = {
  name: "Cosimo",
  age: 30,
  detalles: {
    colorFavorito: "rojo",
    cocheFavorito: "audi",
    formaNormal: function () {
      console.log("Hola");
    },
    formaArrow: () => {
      console.log("Hola de nuevo");
    },
  },
};


/* Acá se está sobrescribiendo el objeto principal por referencia */
var newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);


/* Acá se crea una copia del objeto principal. Para crear una copia también de los objetos anidados debemos hacer otro spread operator con el nombre del objeto anidado, para que me agregue a la copia esos datos */
var newUser = {...user, detalles: {...user.detalles}};

newUser.name = "Marcos";
newUser.detalles.colorFavorito = "naranja";

console.log("Original User:", user);
console.log("New User:", newUser);

newUser.detalles.formaNormal();


/* Esta forma realiza una copia superficial del objeto principal. Los cambios realizados en objetos anidados dentro de la copia, serán modificados también en el objeto original */
/* var newUser = Object.fromEntries(Object.entries(user)); */


/* Y esta otra también realiza una copia superficial del objeto principal: */
/* let newUser = Object.assign(user); */


/* Esta forma utiliza manera distinta de realizar una copia de un objeto. Utilizamos JSON.stringify() para convertir el objeto en una cadena de texto JSON y luego JSON.parse() para convertir esa cadena nuevamente en un objeto. Esto realiza una copia independiente del objeto original, incluyendo objetos anidados. Sin embargo, es importante tener en cuenta que este enfoque tiene algunas limitaciones. No funcionará ni con funciones, ni con objetos que contengan referencias circulares, ya que JSON.stringify() no puede serializar referencias circulares y arrojará un error en ese caso. */
/* Es para traer datos de la base de datos y enviarlos de nuevo modificados */
/* var newUser = JSON.parse(JSON.stringify(user)); */
