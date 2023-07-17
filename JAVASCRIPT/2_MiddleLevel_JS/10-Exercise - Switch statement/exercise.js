// Print in the console the price of the room according to the following scheme:

// Price for Basic Room --> 50€
// Price for Junior Suite Room --> 80€
// Price for Master Suite --> 100€

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
