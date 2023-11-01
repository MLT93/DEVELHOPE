// # Exercise 42

// Create a constructor function called `Smartphone` that takes in 3 parameters: `brand`,`name`, `price`. To create an object from a constructor function, we use the `new` keyword. Create two different objects.


function MySmartphone(brand, name, price){
    this.brand = brand; //"This.X" se usa para hacer que se convierta en un valor sin la necesidad de dar valores
    this.name =  name;
    this.price = price;
};

let newPhone = new MySmartphone("Samsung", "Galaxy", "800$.");
console.log(newPhone);

let newPhone2 = new MySmartphone("Oppo", "Realme", "600$");

// Otra forma de hacerlo:

// class MySmartphone {
//     constructor(brand, name, price) {
//         this.brand = brand; //"This.X" se usa para hacer que se convierta en un valor sin la necesidad de dar valores
//         this.name = name;
//         this.price = price;
//     }
// };

// let newPhone = new MySmartphone("Samsung", "Galaxy", "800$.");
// console.log(newPhone);

// let newPhone2 = new MySmartphone("Oppo", "Realme", "600$");
