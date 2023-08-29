const isLogged = true;

const miPromesa = (isLogged) => {
  return new Promise((resolve, reject) => {
    // guardo una variable con el setInterval para ejecutar mi función varias veces
    const intervalID = setInterval(() => {
      if (isLogged) {
        const number = new Number(isLogged); // isLogged vale 1, porque está en true
        const randomNumber = Math.random() * number;
        // Devuelve true cuando resuelve isLogged porque el usuario está logueado
        resolve(isLogged);
        // valor aleatorio entre 0 y 1 multiplicado por el valor de "number"
        if (randomNumber > 0.5) {
          resolve(randomNumber);
        } else {
          reject(randomNumber);
        }
      } else {
        // Devuelve false cuando rechaza isLogged porque el usuario no está logueado
        reject(isLogged);
      }
    }, 1500);
    setTimeout(() => {
      // Creo un setTimeout para parar la ejecución de setInterval con el clearInterval después de 6 segundos para que la función se ejecute 4 veces
      clearInterval(intervalID);
    }, 6000);
  });
};

/* Llamo a mi función pasándole el  */
miPromesa(isLogged)
  .then((isLogged) => {
    console.log(`El usuario está logueado -> isLogged = ${isLogged}`);
  })
  .catch((isLogged) => {
    console.error(
      `Error: El usuario no está logueado -> isLogged = ${isLogged}`
    ); // Utilizo el mensaje dentro de reject e imprimo un error de advertencia
  });
