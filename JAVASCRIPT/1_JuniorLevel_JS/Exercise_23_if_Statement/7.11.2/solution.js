const roomRate = "HB";

// Dentro de las paréntesis del "switch", asignamos la variable a evaluar.
switch (roomRate) {
  case "BB": // Dentro del "case", asignamos el valor que tiene la variable que analizamos. De éste modo, si el valor de la variable coincide con el case que tengo, se ejecutará el código.
    console.log("The room rate is 50€");
    break;
  case "HB":
    console.log("The room rate is 80€");
    break;
  case "FB":
    console.log("The room rate is 100€");
    break;
  default:
    console.log("This rate don't exist");
}
