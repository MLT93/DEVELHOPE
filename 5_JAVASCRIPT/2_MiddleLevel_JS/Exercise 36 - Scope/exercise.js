let sport = " Football";

function canPlay() {
  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }
}

canPlay();

// Desplazamos la variable sport afuera de la función para que tome un enfoque general al interno de todo el código y no solo dentro de la función, después pasamos el console.log() dentro de su if, para que pueda utilizar correctamente la variable declarada en su interior
