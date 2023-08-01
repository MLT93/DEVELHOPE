// ------ función que me permite navegar por el dropdown del NavBar 
function nav(value) {
  if (value !== "") {
    location.href = value;
    document.getElementById("dropdown").value = ""; // Reinicia el dropdown
  }
}

// ------ función que permite acceder al buscador de Google

document.addEventListener('DOMContentLoaded', function() {
  let searchForm = document.getElementById("search-form");
  let searchInput = document.getElementById("search-input");
  
  // Evita que el formulario se envíe
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let searchTerm = searchInput.value;
    let searchUrl = `https://www.google.com/search?q= ${encodeURIComponent(searchTerm)}`;
    
    // Redirige al usuario a la página de búsqueda de Google
    window.location.href = searchUrl;
    document.getElementById("search-input").value = "";
  });
});
