let priceOfRooms = "50€"; // 50€, 80€, 100€

switch (priceOfRooms) {
  case "50€":
  console.log(`Price for Basic Room: ${priceOfRooms}`)
    break;
  case "80€":
  console.log(`Price for Junior Suite Room: ${priceOfRooms}`)
  break;
  case "100€":
  console.log(`Price for Master Suite: ${priceOfRooms}`)
  break;

  default:
    break;
}
