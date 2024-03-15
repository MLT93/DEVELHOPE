// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.

/* El alert() muestra una pantalla emergente dentro de la página web donde estemos, con el mensaje que escribamos al interno de las paréntesis.*/

// alert("Hello world") <- Ejercicio hecho
let word = "world";
function showAlert(params) {
  return console.log(
    `Hello ${params}.`
  ); /* En este caso no utilizo el alert(), si no el console.log()
    para poder ver el mensaje en consola, si no, da error.*/
}

showAlert(word);

/* ♦♦♦ EJEMPLO ♦♦♦
En este ejemplo, hemos creado una función mostrarSaludo() que se ejecuta cuando el usuario hace clic en un botón.
Esta función utiliza alert() para mostrar un mensaje de saludo en una ventana emergente.

Cuando el usuario carga la página, verá un encabezado (<h1>) y un botón. Al hacer clic en el botón,
se mostrará un cuadro de alerta con el mensaje "¡Hola, mundo!".

Ten en cuenta que hemos agregado el código JavaScript en la sección <script> del documento HTML.
También hemos utilizado el atributo (onclick="") para indicar que se debe llamar a la función mostrarSaludo() cuando el botón se hace clic.

Recuerda que varias ventanas emergentes, son molestas para el usuario.

<!DOCTYPE html>
 <html>
   <head>
     <title>Mi página web</title>
   </head>
   <body>
     <h1>Bienvenido/a a mi página web</h1>
     <button onclick="mostrarSaludo()">Mostrar saludo</button>
    
     <script>
       function mostrarSaludo() {
         let name = "world"
         return alert(`¡Hello, ${name}!`);
       }
     </script>
   </body>
 </html>
♦♦♦ FIN DEL EJEMPLO ♦♦♦ */

// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” document.write().

/* document.write() es un método en JavaScript que se utiliza para escribir texto o HTML en un documento HTML. El método write()
pertenece al objeto document, que representa el documento actual que está siendo visualizado en un navegador web.
Para utilizar document.write(), simplemente necesitas llamar al método y pasarle como argumento el texto o el HTML que deseas agregar
al documento.*/

// document.write("Hello World") <- Ejercicio hecho
let word2 = "world";
function showDocumentWrite(params) {
  console.log(`Hello ${params}!`); /* En este caso no utilizo el document.write(), si no el console.log()
    para poder ver el mensaje en consola, si no, da error.*/
}

showDocumentWrite(word2);

/*♦♦♦ EJEMPLO ♦♦♦
document.write("¡Hola, mundo!");
Este código agregará el texto "¡Hola, mundo!" en el lugar donde se encuentre el script.

Ten en cuenta que document.write() no es muy utilizado en la programación moderna de JavaScript, ya que puede ser problemático
si se utiliza después de que la página se haya cargado por completo. Además, no es una forma recomendada de manipular el contenido
de la página, ya que puede sobrescribir todo el contenido existente en el documento HTML. En su lugar, se recomienda utilizar métodos
más seguros y flexibles como el DOM (Document Object Model) para manipular y modificar el contenido de la página de manera más
precisa y controlada.

<!DOCTYPE html>
<html>
  <head>
    <title>Mi página web</title>
  </head>
  <body>
    <h1>Bienvenido/a a mi página web</h1>
    
    <script>
      document.write("¡Hola, mundo!");
    </script>
  </body>
</html>
♦♦♦ FIN DEL EJEMPLO ♦♦♦ */

// 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

console.log(3 + 5); // Realizo directamente la suma dentro del console.log() sin crear variables, porque así me lo pide.

// 4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

let nombreUsuario =
  prompt(
    `Cuál es tu nombre?`
  ); /* El prompt solicita al usuario que ingrese información de cualquier tipo,
dentro de la página web. Hay que tener cuidado con el prompt porque puede ser sujeto a entrada de código malicioso.*/
alert(`¡Hola ${nombreUsuario}!`); // alert me genera una ventana emergente en la página web.

// 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let primerNumero = prompt(`Cuánto es 2+2? ->`);
let segundoNumero = prompt(`Haz la suma de 3+1 ->`);
console.log(primerNumero + segundoNumero);

// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// Creo dos números aleatorios
let numeroAleatorio1 = Math.floor(Math.random() * -41) + 20; // Math.random() genera un número aleatorio entre 0 (incluido) y 1 (excluido). Al multiplicarlo por -41 (Math.random() * -41), obtendrías un rango de -41 a 0. Luego, al sumarle 20 (Math.floor(Math.random() * -41) + 20), trasladarías el rango al intervalo de 20 a -20. Finalmente, Math.floor() redondea el resultado hacia abajo para obtener un número entero.
console.log("La variable numero1 es:", numeroAleatorio1); // Para que funcione e imprima por consola sin molestar a la función, hacemos el console.log() fuera de la variable, así ésta misma almacena sólo el número aleatorio
let numeroAleatorio2 = Math.floor(Math.random() * 41) - 20; // Rango de -20 a 20
console.log("La variable numero2 es:", numeroAleatorio2);

// Creo función de comparación entre los números
function devuelveNumeroMayorEntreDosNumeros(numero1, numero2) {
  if (numero1 >= 0 && numero2 < 0) {
    console.log(`El número ${numero1} es mayor que el número ${numero2}`);
  } else if (numero2 >= 0 && numero1 < 0) {
    console.log(`El número ${numero2} es mayor que el número ${numero1}`);
  } else if (numero2 >= 0 && numero1 >= 0) {
    console.log(`Ambos números son positivos`);
  } else if (numero1 < 0 && numero2 < 0) {
    console.log(`Los números son negativos`);
  } else {
    console.log("No hay números añadidos");
  }
  return;
}

devuelveNumeroMayorEntreDosNumeros(numeroAleatorio1, numeroAleatorio2);

// # Otra forma más aplicada:

// Función para solicitar dos números al usuario
function solicitarNumeros() {
  return parseFloat(prompt("Ingrese dos números por favor:"));
}

// Función principal del sistema que almacenará los números que metió el usuario y  nos devuelve el numero mayor
function devuelveElNumeroMayorDeLosNumerosSolicitados() {
  let numerosParaGuardar = [];

  // Solicitar dos números al usuario. Se guardará la función (solicitarNumeros()) donde los usuarios ingresarán los números, dentro de una variable (losNumerosIngresadosPorElUsuario) creada dentro de un for, que solicita a su vez únicamente dos números. Entonces guardo esos dos números que ingresa el usuario al final del array vacío (numerosParaGuardar = [])
  for (let i = 0; i < 2; i++) {
    let NumerosIngresadosPorElUsuario = solicitarNumeros();
    numerosParaGuardar.push(NumerosIngresadosPorElUsuario);
  }

  // Mostrar los el array de numeros ingresados por consola
  console.log(
    "Los números que se utilizarán para la comparación son:",
    numerosParaGuardar
  );

  // Creo que hay que desarrollar un for sobre el array de numerosParaGuardar para que busque y compare los números mayores
  if (numerosParaGuardar[0] >= 0 && numerosParaGuardar[1] < 0) {
    return console.log(
      `El número ${numerosParaGuardar[0]} es mayor que el número ${numerosParaGuardar[1]}`
    );
  } else if (numerosParaGuardar[1] >= 0 && numerosParaGuardar[0] < 0) {
    return console.log(
      `El número ${numerosParaGuardar[1]} es mayor que el número ${numerosParaGuardar[0]}`
    );
  } else if (numerosParaGuardar[0] >= 0 && numerosParaGuardar[1] >= 0) {
    return console.log(`Ambos números son positivos`);
  } else if (numerosParaGuardar[0] < 0 && numerosParaGuardar[1] < 0) {
    return console.log(`Los dos números son negativos`);
  } else {
    return console.log("No hay números añadidos");
  }
}

// Ingreso números en la funcion que los solicita
solicitarNumeros(10, -12);

// Llamo mi función para devolver el número mayor
console.log(devuelveElNumeroMayorSobreNumerosAlmacenados());

// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// 8. Escribe un programa que pida un número y diga si es divisible por 2

// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen

// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales

// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

// 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro). Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

// 14. Escribir un programa que escriba en pantalla los divisores de un número dado

// 15. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

// 16. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
