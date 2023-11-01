# DOM

Get the value of the `form-input` text input field and print it in the console.

Use the `class` as selector.

# `getElementsByName()` Explicación a fondo:

La función getElementsByName es un método de JavaScript que se utiliza para obtener una lista de todos los elementos en un documento HTML que tienen un atributo name específico. Esta función devuelve una colección de nodos que coinciden con el nombre especificado.

Por ejemplo, si tienes varios elementos con el mismo nombre (por ejemplo, varios elementos de formulario con el mismo nombre), puedes usar getElementsByName para obtener una lista de todos ellos.

Aquí hay un ejemplo de cómo se podría usar getElementsByName en JavaScript:

```javascript
var elementos = document.getElementsByName("nombre"); // "nombre" es el nombre del atributo que estamos buscando

// elementos es ahora una colección de nodos que tienen el atributo "name" con el valor "nombre"
```

Es importante tener en cuenta que `getElementsByName()` retorna una colección de nodos, no un arreglo JavaScript típico. Si deseas realizar operaciones de array, deberás convertir la colección en un arreglo utilizando técnicas como el uso de `Array.from()` o `Array.prototype.slice.call()`.

Recuerda que esta función solo busca elementos por su atributo `name` y no por otros atributos como `id` o `class`.
