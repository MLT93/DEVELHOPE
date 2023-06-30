// ------ función que me permite navegar por el dropdown del NavBar 
function nav(value) {
    if (value !== "") {
      location.href = value;
    }
    return location.href;
  }

// ------ funcion que permite acceder al navegador de google.com, a un suggestion.js y a un data local

// const searchContainer = document.querySelector('.search-input-box');
// const inputSearch = searchContainer.querySelector('input');
// const boxSuggestions = document.querySelector(
// 	'.container-suggestions'
// );

// const searchLink = document.querySelector('a');

// inputSearch.onkeyup = e => {
// 	let userData = e.target.value;
// 	let emptyArray = [];

// 	if (userData) {
// 		emptyArray = suggestions.filter(data => {
// 			return data
// 				.toLocaleLowerCase()
// 				.startsWith(userData.toLocaleLowerCase());
// 		});

// 		emptyArray = emptyArray.map(data => {
// 			return (data = `<li>${data}</li>`);
// 		});
// 		searchContainer.classList.add('active');
// 		showSuggestions(emptyArray);

// 		let allList = boxSuggestions.querySelectorAll('li');

// 		allList.forEach(li => {
// 			li.setAttribute('onclick', 'select(this)');
// 		});
// 	} else {
// 		searchContainer.classList.remove('active');
// 	}
// };

// function select(element) {
// 	let selectUserData = element.textContent;
// 	inputSearch.value = selectUserData;

// 	searchLink.href = `https://www.google.com/search?q=${inputSearch.value}`;
// 	searchContainer.classList.remove('active');
// }

// const showSuggestions = list => {
// 	let listData;

// 	if (!list.length) {
// 		userValue = inputSearch.value;
// 		listData = `<li>${userValue}</li>`;
// 	} else {
// 		listData = list.join(' ');
// 	}
// 	boxSuggestions.innerHTML = listData;
// };

document.addEventListener('DOMContentLoaded', function() {
  var searchForm = document.getElementById('search-form');
  var searchInput = document.getElementById('search-input');
  
  // Evita que el formulario se envíe
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var searchTerm = searchInput.value;
    var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
    
    // Redirige al usuario a la página de búsqueda de Google
    window.location.href = searchUrl; 
  });
});
