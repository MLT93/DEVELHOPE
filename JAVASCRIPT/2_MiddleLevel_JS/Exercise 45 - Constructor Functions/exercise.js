
class Smartphone {
  constructor(brand, name, price) {
    this.marca = brand;
    this.nombre = name;
    this.precio = price;
  }
};

let telefono1 = new Smartphone("Xiaomi", "Mi11", "300€");
let telefono2 = new Smartphone("Samsung", "A50", "280€");

console.log(telefono1);
console.log(telefono2);
