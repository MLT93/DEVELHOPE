// # Exercise 19

/* Given the variables `name` and `surname`, create an `if else`
statement to print the full name. The full name must be printed only
if `name` and `surname` are `truthy`, otherwise(*de lo contrario) print the message:
`Full name is invalid`.
*/

// let nombre = "Mario";
// let surname = "Rossi";

// if (nombre === "Mario" && surname === "Rossi") {
//     console.log(`${nombre} ${surname}`)
// } else {
//     console.log("Full name is invalid")
// };

let nombre = 'Luis';
let surname = 'Rossi';

// if (nombre === "Mario" && surname === "Rossi") {
//   console.log("Mario" + "Rossi")  
// } else {
//   console.log(`Full name is invalid`)
// };

let fullName = nombre + surname;
console.log(nombre === "Mario" && surname === "Rossi" ? fullName : `Full name is invalid`);