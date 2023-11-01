const number = 15;


const esMayorQue10 = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 10) {
        resolve(number);
      } else {
        reject("El número es menor que 10.");
      }
    }, 1500);
  });
};


esMayorQue10(number)
  .then((number) => {
    console.log("Número correcto:", number);
  })
  .catch((error) => {
    console.error("El número introducido no es correcto.", error);
  })
  .finally(() => {
    console.log("Proceso de carga finalizado.");
  });



