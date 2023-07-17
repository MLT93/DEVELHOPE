// Create a variable called password.
// If the password length is between 4 and 6, print the message Password length is correct,
// otherwise print the message Password not valid.

const password = "19283"; // Agrego comillas para que se convierta en una cadena de texto

if (password.length >= 4 && password.length <= 6) {
  console.log("Password length is correct");
} else {
  console.log("Password not valid");
};


const password2 = 12345; // Número de ejemplo
const passwordString = String(password2); // Convertir a cadena de texto

if (passwordString.length >= 4 && passwordString.length <= 6) {
  console.log("La longitud de la contraseña es correcta");
} else {
  console.log("Contraseña no válida");
}
