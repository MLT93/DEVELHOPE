// **INT**

// Write a function that takes an array of objects as a parameter, each of which represents a book with the following properties: title, author, year, and genre. The function should return an array of strings that contains the title and author of each book in the format "title by author". If the year of the book is after 2000, append " - Modern" to the end of the string. If the genre of the book is "Science Fiction", append " - SciFi" to the end of the string.
// Print the new array.

// Array de objetos
const arrayObjectBooks = [
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    genre: "Science Fiction",
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    year: 1954,
    genre: "Science Fiction",
  },
  {
    title: "The Lord of the Rings",
    author: "Andy Weir",
    year: 1954,
    genre: "Fantasy",
  },
  {
    title: "The Ultimate Hitchhiker's Guide",
    author: "Douglas Adams",
    year: 1979,
    genre: "Fantasy",
  },
  {
    title: "1Q84",
    author: "Haruki Murakami",
    year: 2009,
    genre: "Novel",
  },
];

// Función que devuelve un array de texto con el título y el autor de cada libro con el nombre "title by author". Si el libro es del año 2000 o más, hay que agregar " - Modern" al final de la cadena de texto y, si es de ciencia-ficción, añadimos "- SciFi".
function returnModernsAndFictionBooks(arrayOfBooks) {
  for (let index = 0; index < arrayOfBooks.length; index++) {
    let titleByAuthor =
      arrayOfBooks[index].title + " by " + arrayOfBooks[index].author;
    console.log(titleByAuthor);

    if (arrayOfBooks[index].year >= 2000) {
      console.log(arrayOfBooks[index] + " - Modern");
    } else if (arrayOfBooks[index].genre === "Science Fiction") {
      console.log(arrayOfBooks[index] + " - SciFi");
    }
  }
  return titleByAuthor;
}

returnModernsAndFictionBooks(arrayObjectBooks);
