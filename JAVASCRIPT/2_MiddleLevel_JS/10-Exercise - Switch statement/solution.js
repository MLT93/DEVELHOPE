const roomType = "Master Suite";
let roomPrice;

if (roomType === "Basic Room") {
  roomPrice = 50;
} else if (roomType === "Junior Suite Room") {
  roomPrice = 80;
} else if (roomType === "Master Suite") {
  roomPrice = 100;
} else {
  console.log("Invalid room type");
}

console.log(`Price for ${roomType} --> ${roomPrice}€`);

// ********************************************************

const roomType2 = "Master Suite";
let roomPrice2;

switch (roomType2) {
  case "Basic Room":
    roomPrice2 = 50;
    break;
  case "Junior Suite Room":
    roomPrice2 = 80;
    break;
  case "Master Suite":
    roomPrice2 = 100;
    break;
  default:
    console.log("Invalid room type");
}

console.log(`Price for ${roomType2} --> ${roomPrice2}€`);

// *********************************************************

let precioHabitación = "100€"; // 50€, 80€ o 100€

switch (precioHabitación) {
  case "50€":
    console.log("El precio de esta habitación es", precioHabitación);
    break;
  case "80€":
    console.log("El precio de esta habitación es", precioHabitación);
    break;
  case "100€":
    console.log("El precio de esta habitación es", precioHabitación);
    break;

  default:
    console.log("No hay precios establecidos");
    break;
}

// Primero, se define la variable precioHabitación y se le asigna un valor de "100€".

// Luego, se utiliza la estructura de control switch para evaluar el valor de la variable precioHabitación.

// El switch compara el valor de precioHabitación con cada caso (case) dentro de la estructura.

// Cuando se encuentra un caso que coincide con el valor de precioHabitación, se ejecutan las instrucciones asociadas a ese caso. En este ejemplo, las instrucciones simplemente imprimen en la consola el mensaje "El precio de esta habitación es" seguido del valor de precioHabitación.

// Después de ejecutar las instrucciones de un caso, se utiliza la palabra clave break para salir del switch y evitar la ejecución de los casos siguientes. Esto es importante para asegurarse de que solo se ejecute el código correspondiente al caso encontrado.

// Si ninguno de los casos coincide con el valor de precioHabitación, se ejecutan las instrucciones dentro del caso default. En este caso, se imprime en la consola el mensaje "No hay precios establecidos".

// En resumen, el switch evalúa el valor de una única variable (precioHabitación en este caso) y compara ese valor con cada caso dentro de la estructura. Cuando se encuentra un caso que coincide, se ejecutan las instrucciones asociadas a ese caso. Si no hay una coincidencia, se ejecutan las instrucciones del caso default (si está presente).


// *********************************************************
