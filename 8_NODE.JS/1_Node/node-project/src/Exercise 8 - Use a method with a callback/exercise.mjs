/* const fs = require("fs"); */
import * as fs from 'node:fs';

/* Exercise 8 - Use a method with a callback

Create a script that uses the Node.js core fs.writeFile() (callback API) method to write a text file. The documentation for this method is on the Node.js File system page:

https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback */

const text = "Hola Marquitos!";

((text) => {
  fs.writeFile("./archivo2.txt", text, (err) => {
    if (err) {
      throw new Error(`Imposible crear el archivo`, err.message);
    }
    console.log(`Escritura de archivo: ${text}`);
  });
})(text);

(() => {
  fs.readFile("./archivo.txt", "utf-8", (err, file) => {
    if (err) {
      console.error(`Imposible leer el archivo: ${err.message}`);
    }
    console.log(`Lectura de archivo: ${file}`);
  });
})();

