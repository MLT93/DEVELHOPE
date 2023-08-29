const isLogged = true;

const miPromesa = (isLogged) => {
  return new Promise((resolve, reject) => {
    const intervalID = setInterval(() => {
      // guardo una variable con el ID del setInterval para después parar los intervalos de mi función
      if (isLogged === true) {
        const number = new Number(isLogged); // isLogged vale 1, porque está en true
        const randomNumber = Math.random() * number; // creo una variable con números aleatorios entre el 0 y 1
        resolve(randomNumber); // Resuelve randomNumber, si isLogged es true, devolviendo un número aleatorio
      } else {
        // Devuelve false cuando rechaza isLogged porque el usuario no está logueado
        reject(`El usuario no esta logueado -> isLogged = ${isLogged}`);
      }
    }, 2000);
    // Creo un setTimeout para parar la ejecución de setInterval con el clearInterval(intervalID) después de 4 segundos
    setTimeout(() => {
      clearInterval(intervalID);
    }, 4000);
  });
};

const miSegundaPromesa = (number) => {
  return new Promise((resolve, reject) => {
    // Si el número que le paso es mayor que 0.5 me resuelve con un objeto
    if (number > 0.5) {
      // Uso un setTimeout para simular un tiempo de espera
      setTimeout(() => {
        resolve({ nombre: "John", edad: 24 });
      }, 3000);
      // Manejo el error
    } else {
      reject("El número no es mayor a 0.5");
    }
  });
};

/* Llamo a mi función pasándole los valores de resolve y reject */
miPromesa(isLogged)
  // utilizo el primer resolve para ver si el usuario está logueado o no e imprimo su resultado
  .then((result) => {
    console.log(`El usuario está logueado y el número aleatorio es: ${result}`);
    return miSegundaPromesa(result); // Encadenar la segunda promesa
  })
  // Usar el otro resolve para devolver el objeto { nombre: "John", edad: 24 } gracias a la otra promesa encadenada
  .then((result) => {
    console.log("Datos del usuario:", result);
  })
  .catch((error) => {
    // Utilizo el mensaje dentro del reject e imprimo un error de advertencia
    console.error(`Error: ${error}`);
  });
