let user = {
  name: "Cosimo",
  age: 30,
};


/* 
let newUser = user; // Acá estamos sobrescribiendo, por referencia, al objeto principal

newUser.name = "Paolo";
console.log(newUser);
console.log(user); 
*/

/* let newUser = Object.fromEntries(Object.entries(user)); */
let newUser = { ...user };
newUser.name = "Marcos"; 


console.log(newUser);
console.log(user); 
