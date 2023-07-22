let password = "123456";

if (password.length >= 4 && password.length <= 6) {
  console.log("Password length is correct");
} else {
  console.log("Password not valid");
};

const password2 = 123456; // Número de ejemplo
const passwordString = String(password2); // Convertir a cadena de texto

if (passwordString.length >= 4 && passwordString.length <= 6) {
  console.log("La longitud de la contraseña es correcta");
} else {
  console.log("Contraseña no válida");
};

