let car = {
  name: "Fiat",
  color: "red",
};

// for (const key in car) {
//   if (car.hasOwnProperty(key)) {
//     const nuevoObjeto = car[key];
//     console.log(key + ":");
//     console.log(nuevoObjeto);
//   }
// };

function copiarObjeto(object) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      console.log(element);
    }
  }
};

copiarObjeto(car);
