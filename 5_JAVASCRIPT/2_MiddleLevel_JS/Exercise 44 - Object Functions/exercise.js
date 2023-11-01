const smartphone = {
  brand: "Apple",
  name: "iPhone 13",
  price: 1300,
};

smartphone.price = 100;

console.log(smartphone);

Object.freeze(smartphone);
