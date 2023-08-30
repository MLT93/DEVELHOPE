
const isLogged = true;

const miPromesa = (isLogged) => {
  return new Promise((resolve, reject) => {
    const intervalID = setInterval(() => {
      if (isLogged === true) {
        const number = new Number(isLogged);
        const randomNumber = Math.random() * number;
        resolve(randomNumber);
      } else {
        reject(`El usuario no esta logueado -> isLogged = ${isLogged}`);
      }
    }, 2000);
    setTimeout(() => {
      clearInterval(intervalID);
    }, 4000);
  });
};

const miSegundaPromesa = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      setTimeout(() => {
        resolve({ nombre: "John", edad: 24 });
      }, 3000);
    } else {
      reject("El número no es mayor a 0.5");
    }
  });
};

/* Llamo a mi función pasándole los valores de resolve y reject */
miPromesa(isLogged)
  .then((result) => {
    console.log(`El usuario está logueado y el número aleatorio es: ${result}`);
    return miSegundaPromesa(result);
  })
  .then((result) => {
    console.log("Datos del usuario:", result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  })
  .finally(() => {
    console.log("El proceso ha terminado")
  });
