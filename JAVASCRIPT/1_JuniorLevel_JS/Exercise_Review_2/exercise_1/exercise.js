// **INT**

// Write a function that takes an array of objects as a parameter, each object represents a car with the following properties: brand, model, year. The function should return a new array of strings that contains the brand and model of each car made from the 2000s, in the format ["brand model"].

// Print the new array.

let arrayDeCoches = [
  {
    Marca: "Mercedes",
    Modelo: "GLK",
    Año: 2001,
    Propietario: {
      Nombre: "Manuel",
      Apellido: "Benitez",
      Edad: 31,
      FechaDeNacimiento: "22.04.1992",
    },
  },
  {
    Marca: "Renault",
    Modelo: "Megane",
    Año: 1999,
    Propietario: {
      Nombre: "Jorge",
      Apellido: "Pérez",
      Edad: 23,
      FechaDeNacimiento: "22.12.2000",
    },
  },
  {
    Marca: "Audi",
    Modelo: "S5",
    Año: 2015,
    Propietario: {
      Nombre: "Marcos",
      Apellido: "Lambir",
      Edad: 33,
      FechaDeNacimiento: "20.01.90",
    },
  },
];

const cars = [
  {
    Marca: "Ferrari",
    Modelo: "F40",
    Año: 1987,
  },
  {
    Marca: "Lamborghini",
    Modelo: "Aventador",
    Año: 2011,
  },
  {
    Marca: "Bugatti",
    Modelo: "Chiron",
    Año: 2016,
  },
];

function brandModelOf2000(CualquierArray) {
  // Inicio una variable vacía, que es un array, para que guarde los coche a partir de los años 2000 en adelante
   let brandModel = [];

  // Inicio el for para buscar dentro del array
  for (let IndiceDelArray = 0; IndiceDelArray < CualquierArray.length; IndiceDelArray++) {
    // Si el año de la propiedad del índice que va recorriendo el bucle FOR, es menor que 2000, reemplazo el valor de mi variable vacía brandModel por la Marca y el Modelo correspondientes a la condición del IF, después de pasar por el bucle.
    if (CualquierArray[IndiceDelArray].Año >= 2000) {
      brandModel = `${CualquierArray[IndiceDelArray].Marca} ${CualquierArray[IndiceDelArray].Modelo}`
      console.log("Auto a partir del año 2000:", brandModel, "del", CualquierArray[IndiceDelArray].Año);
    } else {
      console.log("Auto más antiguo:", `${CualquierArray[IndiceDelArray].Marca} ${CualquierArray[IndiceDelArray].Modelo}`, "del año", CualquierArray[IndiceDelArray].Año);
    }
  }
  // Devuelvo el nuevo array con las Marcas y Modelos 
  return brandModel;
}

brandModelOf2000(arrayDeCoches);
brandModelOf2000(cars);
