// ------ función que me permite navegar por el dropdown del NavBar 
function nav(value) {
    if (value !== "") {
      location.href = value;
    }
    return location.href;
  }
  
// ------ funcion para mostrar u ocultar informacion tramite un boton 
  function myFunction() {
  // Creo variable que guardará la información de una identificación (ID) correspondiente a un archivo
  let elementId = document.getElementById("nombre de mi id del archivo que deseo utilizar para el display");
  // Si (if) el elemento (elementID) con su próprio estilo (style) y su visualización (display) es equivalente (===) a nada ("none")
  if (elementId.style.display === "none") {
      // El elemento (elementId.style.display) es igual (=) al bloque ("block"). Lo que significa, que se mostrará en el recuadro/bloque elegido
    elementId.style.display = "block";
  // Si no, el elemento no se mostrará
  } else {
    elementId.style.display = "none";
  }
}
