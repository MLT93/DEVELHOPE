// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.

/* El alert() muestra una pantalla emergente dentro de la página web donde estemos, con el mensaje que escribamos al interno de las paréntesis.*/

// alert("Hello world") <- Ejercicio hecho
function showAlert (message) {
    let name = "world"
    return console.log(`Hello ${name}.`) /* En este caso no utilizo el alert(), si no el console.log()
    para poder ver el mensaje en consola, si no, da error.*/
}

showAlert()

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
function showDocumentWrite (message) {
    let name = "world"
    return console.log(`Hello ${name}.`) /* En este caso no utilizo el document.write(), si no el console.log()
    para poder ver el mensaje en consola, si no, da error.*/
}

showDocumentWrite()

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

let nombreUsuario = prompt(`Cuál es tu nombre?`); /* El prompt solicita al usuario que ingrese información de cualquier tipo,
dentro de la página web. Hay que tener cuidado con el prompt porque puede ser sujeto a entrada de código malicioso.*/
alert(`¡Hola ${nombreUsuario}!`); // alert me genera una ventana emergente en la página web.

// 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let primerNumero = prompt(`Cuánto es 2+2? ->`);
let segundoNumero = prompt(`Haz la suma de 3+1 ->`);
console.log(primerNumero + segundoNumero);

// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.



// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// 8. Escribe un programa que pida un número y diga si es divisible por 2
// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen
// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
// 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//      Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
// 14. Escribir un programa que escriba en pantalla los divisores de un número dado
// 15. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
// 16. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)


