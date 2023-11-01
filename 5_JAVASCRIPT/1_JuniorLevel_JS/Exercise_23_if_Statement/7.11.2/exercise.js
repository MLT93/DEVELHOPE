// # Exercise 23

// Print in the console the price of the room according to the following scheme:

// * Price for Basic Room --> 50€
// * Price for Junior Suite Room --> 80€
// * Price for Master Suite  --> 100€

// Use the Switch statement.


// Creo una función para imprimir por consola
function d (imprimirMensaje) {
    return console.log(imprimirMensaje);
};


// Creo una lista de objetos para los precios de cada estación de mi hotel. Para acceder a ellos, usaré los índices de un array [del 0 a la longitud de mi array]
let priceRoom = [
    {   // índice del array 0
        precioBasicoDeEneroAMayo: 50,
        precioJovenDeEneroAMayo: 80,
        precioMasterDeEneroAMayo: 100,
    },
    {   // índice del array 1
        precioBasicoDeMayoAAgosto: 80,
        precioJovenDeEneroAMayo: 110,
        precioMasterDeEneroAMayo: 130,
    },
    {   // índice del array 2
        precioBasicoDelRestoDelAño: 40,
        precioJovenDelRestoDelAño: 70,
        precioMasterDelRestoDelAño: 90,

    },
];

// Creo una variable para almacenar la selección de las habitaciones deseadas:
// let selectionOfRooms = []

// Con el priceRoom[0] dentro de las primeras paréntesis del switch, accedo al índice del array donde quiero comparar los datos que tengo.
switch (priceRoom[0]) {
    case 50: { // Los "case" acceden al valor que tengo guardado dentro de una variable(propiedad), siempre que sea <String> o <Number>. Por lo tanto, deberé seleccionar directamente el dato que deseo analizar, en este caso equivale a 50, que corresponde al valor de la variable precioBasicoDeEneroAMayo.
        d(`The price of Basic Room from January to May is ${priceRoom[0].precioBasicoDeEneroAMayo} euros.`)
        // selectionOfRooms.push(priceRoom[0].precioBasicoDeEneroAMayo)
        break; // El "break;" detiene la ejecución del switch, cuando encuentra un "case" que corresponde a la expresión evaluada. En éste caso, 50 es la expresión evaluada.
    }; // Si le quitamos el "break;", el código, sigue funcionando, hasta que encuentra un "break;"         
    case 80: { // Acá el dato al cual deseo acceder trámite el "case", es el 80, que es el valor de la variable precioJovenDeEneroAMayo.
        d(`The price of Junior Room from January to May is ${priceRoom[0].precioJovenDeEneroAMayo} euros.`)
        // selectionOfRooms.push(priceRoom[0].precioJovenDeEneroAMayo)
        break; 
    };
    case 100: { // Con este "case" accedo al valor de mi variable precioMasterDeEneroAMayo.
        d(`The price of Master Suite from January to May is ${priceRoom[0].precioMasterDeEneroAMayo} euros.`)
        // selectionOfRooms.push(priceRoom[0].precioMasterDeEneroAMayo)
        break;
    };

    default: {
        d(`You don't have select your room.`)
        break;
    };
};

// Veo la selección de la habitación elegida
// d(selectionOfRooms);