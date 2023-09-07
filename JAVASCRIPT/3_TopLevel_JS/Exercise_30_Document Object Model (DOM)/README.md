# DOM

Get the value of the `firstName` text input field and print it in the console.

Use the `id` as selector.


# Almacenar clases, id o cualquier elemento en JavaScript:

Para almacenar una clase HTML de un elemento dentro de una variable JavaScript, puedes seguir estos pasos:

1. **Selecciona el Elemento HTML:**
   Primero, necesitas seleccionar el elemento HTML al que quieres acceder. Puedes hacerlo usando JavaScript, por ejemplo, mediante `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`, `document.getElementsByClassName()` o cualquier otra forma de selección de elementos, como `getElementsByName()`, pero con este último hay que estar un poco más atento.

   Ejemplo:
   ```javascript
   const miElemento = document.getElementById('miElemento'); // Suponiendo que el elemento tiene el ID 'miElemento'
   ```

2. **Obtener la Clase:**
   Una vez que tienes el elemento seleccionado, puedes acceder a su propiedad `classList` para obtener las clases asociadas.

   Ejemplo:
   ```javascript
   const clases = miElemento.classList;
   ```

3. **Convertir a Array (Opcional):**
   Si necesitas trabajar con las clases como un array, puedes convertir la lista de clases a un array usando `Array.from()`.

   Ejemplo:
   ```javascript
   const clasesArray = Array.from(clases);
   ```

   Ahora, `clasesArray` es un array que contiene las clases.

4. **Almacenar en una Variable (Opcional):**
   Si deseas almacenar las clases en una variable, simplemente asigna el resultado a esa variable.

   Ejemplo:
   ```javascript
   const clasesVariable = Array.from(miElemento.classList);
   ```

   Ahora, `clasesVariable` contendrá las clases del elemento.

Recuerda que si necesitas manipular las clases, puedes hacerlo directamente a través de la variable `clases`. Por ejemplo, para agregar una nueva clase puedes usar `clases.add('nuevaClase')`, y para quitar una clase `clases.remove('claseARemover')`.

Espero que esta información te sea útil. Si tienes alguna otra pregunta, ¡no dudes en preguntar!





 # Seleccionar Elementos en el DOM

Estas son cuatro formas comunes de seleccionar elementos del DOM (Documento Object Model) en JavaScript, pero difieren en cómo seleccionan y devuelven elementos:

1. **`document.querySelector()`**
   - **Descripción**: Devuelve el primer elemento que coincide con un selector CSS especificado.
   - **Uso**: Puedes seleccionar elementos usando selectores CSS como `"#id"`, `".clase"`, `"elemento"`, etc.
   - **Ejemplo**:
     ```javascript
     const primerElemento = document.querySelector('#miId'); // Selecciona el primer elemento con id "miId"
     
     var firstName = document.querySelector('label[for="first_name"]').textContent; // Si especificamos detalladamente el elemento que deseamos almacenar en una variable, siempre será el primero que encontrará
     var firstNameValue = document.querySelector('input[name="first_name"]').value;
     ```

2. **`document.querySelectorAll()`**
   - **Descripción**: Devuelve una NodeList (una colección similar a un arreglo) de todos los elementos que coinciden con un selector CSS especificado.
   - **Uso**: Al igual que `querySelector()`, puedes usar selectores CSS.
   - **Ejemplo**:
     ```javascript
     const todosLosElementos = document.querySelectorAll('.miClase'); // Selecciona todos los elementos con clase "miClase"
     ```

3. **`document.getElementById()`**
   - **Descripción**: Devuelve el elemento que tiene el atributo `id` especificado.
   - **Uso**: Debes proporcionar el `id` directamente como una cadena.
   - **Ejemplo**:
     ```javascript
     const elementoPorId = document.getElementById('miId'); // Selecciona el elemento con id "miId"
     ```

4. **`document.getElementsByClassName()`**
   - **Descripción**: Devuelve una HTMLCollection (otra colección similar a un arreglo) de todos los elementos que tienen la clase CSS especificada.
   - **Uso**: Debes proporcionar el nombre de la clase directamente como una cadena.
   - **Ejemplo**:
     ```javascript
     const elementosPorClase = document.getElementsByClassName('miClase'); // Selecciona todos los elementos con clase "miClase"
     ```

**Diferencias clave**:

- `querySelector()` y `querySelectorAll()` pueden usar selectores CSS, lo que proporciona una gran flexibilidad en la selección de elementos.
- `querySelector()` devuelve el primer elemento que coincide, mientras que `querySelectorAll()` devuelve todos los elementos coincidentes en una NodeList.
- `getElementById()` selecciona un elemento por su `id`, lo que significa que solo puede devolver un elemento (ya que los `id` deben ser únicos en un documento).
- `getElementsByClassName()` selecciona elementos por su clase y devuelve una colección de elementos que coinciden.

Es importante tener en cuenta que `querySelector()` y `querySelectorAll()` son más recientes y más poderosos en términos de selección de elementos, ya que permiten el uso de selectores CSS complejos. Sin embargo, `getElementById()` y `getElementsByClassName()` todavía son comunes y útiles en situaciones específicas.

Para modificar las clases de elementos HTML usando JavaScript, puedes usar el método `classList` del elemento seleccionado. Si ya tienes un elemento seleccionado con `querySelector`, como en tu ejemplo, puedes hacer lo siguiente:

```javascript
const miElemento = document.querySelector('.laClase');
miElemento.classList.add('nuevaClase'); // Agrega una nueva clase
miElemento.classList.remove('laClase'); // Remueve una clase existente
```

En el código anterior, primero seleccionamos un elemento con la clase "laClase" y lo almacenamos en la variable `miElemento`. Luego, usamos `classList.add()` para agregar una nueva clase llamada "nuevaClase" al elemento y `classList.remove()` para eliminar la clase "laClase".

También puedes usar otros métodos de `classList` como `toggle`, `contains`, etc...

Por ejemplo, si quieres cambiar completamente la clase sin preocuparte si ya está presente o no, puedes hacerlo así:

```javascript
const miElemento = document.querySelector('.laClase');
miElemento.classList.replace('laClase', 'nuevaClase'); // Reemplaza una clase por otra
```

Este código reemplazará la clase "laClase" con la clase "nuevaClase" si la primera está presente. Si no lo está, no hará nada.

Recuerda que estos métodos trabajan con clases individuales, por lo que si necesitas agregar o remover múltiples clases, tendrás que llamar a estos métodos varias veces.

Espero que esto te ayude a modificar las clases de tus elementos HTML con JavaScript. Si tienes más preguntas, no dudes en preguntar.





# Diferencias entre `.className()` y `.classList()`:

`.classList` y `.className` son dos propiedades de JavaScript que se utilizan para manipular las clases de un elemento HTML.

1. **`classList`**:

   `classList` es una propiedad que proporciona una interfaz más moderna y poderosa para manipular las clases de un elemento. Permite agregar, quitar y alternar clases de manera más sencilla.

   Por ejemplo, si tenemos un elemento HTML así:

   ```html
   <div id="miElemento" class="clase1 clase2"></div>
   ```

   Podemos manipular las clases usando `classList` de esta manera:

   ```javascript
   var elemento = document.getElementById("miElemento");

   // Agregar una clase
   elemento.classList.add("clase3"); // Agrega la clase "clase3"

   // Quitar una clase
   elemento.classList.remove("clase2"); // Quita la clase "clase2"

   // Alternar una clase (si está presente, la quita; si no está presente, la agrega)
   elemento.classList.toggle("clase1"); // Quita la clase "clase1" porque ya estaba presente

   // Cambiar una clase por otra
   elemento.classList.replace("clase1", "claseNueva"); // Quita la "clase1" y la reemplaza por la "caseNueva"

   // Comprobar si tiene una clase específica
   var tieneClase = elemento.classList.contains("clase1"); // Devuelve true
   ```

   `classList` es especialmente útil cuando necesitas trabajar con múltiples clases y realizar operaciones complejas.

2. **`className`**:

   `className` es una propiedad más antigua que proporciona una cadena de texto con todas las clases de un elemento separadas por espacios.

   Usando el mismo ejemplo anterior:

   ```javascript
   var elemento = document.getElementById("miElemento");

   // Obtener la lista de clases como una cadena
   var clases = elemento.className; // Devuelve "clase1 clase2"

   // Asignar nuevas clases (esto reemplazará las clases existentes)
   elemento.className = "nuevaClase1 nuevaClase2";
   ```

   `className` es útil si solo necesitas realizar operaciones básicas de manipulación de clases y no necesitas funcionalidades avanzadas.

**Resumen**:

- `classList` es más versátil y proporciona métodos específicos (`add`, `remove`, `toggle`, `contains` y `replace`) para manipular clases de manera más granular.
- `className` simplemente proporciona una cadena de texto con todas las clases y es más adecuada para operaciones simples de asignación de clases.

En general, se prefiere el uso de `classList` debido a su mayor flexibilidad y funcionalidades, a menos que estés trabajando con un código más antiguo o necesites una compatibilidad específica con versiones muy antiguas de navegadores donde `classList` podría no estar completamente soportado.
