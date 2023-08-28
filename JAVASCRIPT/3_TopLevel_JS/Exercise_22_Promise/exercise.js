const number = 15;

/* Creas una función para que haga una nueva Promise con resolve y reject como argumentos.
Adentro creas el setTimeout con un delay en milisegundos.
En el interior haces un if-else y, si es correcta la condición devuelves resolve, si no, el reject */
const esMayorQue10 = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 10) {
        resolve(number);
      } else {
        reject("El número es menor que 10");
      }
    }, 1500);
  });
};

/* Llamas a la función y le pasas los .then() para el resolve, .catch() para el reject y .finally() para que nos diga si hemos acabado el proceso */
esMayorQue10(number)
  .then((number) => {
    console.log("Número correcto:", number);
  })
  .catch((error) => {
    console.error("El número introducido no es correcto", error);
  })
  .finally(() => {
    console.log("Proceso de carga finalizado");
  });



