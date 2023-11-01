let name = true;
let surname = 'Rossi';

if (name === undefined || name.length <= 1) {
  console.log("Full name is invalid");
} else if (typeof(name === "number")) {
  console.log("Input letters please");
} else if (typeof (name === "string")) {
  let fullName = `The full name is: ${name} ${surname}`;
  console.log(fullName);
} else {
  console.log("Input your first name and last name please")
};



