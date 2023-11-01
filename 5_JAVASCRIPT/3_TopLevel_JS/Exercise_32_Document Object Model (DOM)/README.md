# DOM

Get the value of all `input` and `label` fields.

The output in the console must be:

```
First Name: Mario
Last Name: Rossi
Age: 25
```

# Ejercicio resuelto:

Para lograr eso, puedes usar JavaScript para acceder al DOM y obtener los valores de los campos `input` y `label`. Asumiendo que tienes un formulario con campos de entrada (`input`) y etiquetas (`label`) asociadas, puedes usar el siguiente código:

```javascript
// Obtener el valor del campo "First Name"
var firstName = document.querySelector('label[for="first_name"]').textContent;
var firstNameValue = document.querySelector('input[name="first_name"]').value;

// Obtener el valor del campo "Last Name"
var lastName = document.querySelector('label[for="last_name"]').textContent;
var lastNameValue = document.querySelector('input[name="last_name"]').value;

// Obtener el valor del campo "Age"
var age = document.querySelector('label[for="age"]').textContent;
var ageValue = document.querySelector('input[name="age"]').value;

// Imprimir los resultados en la consola
console.log(`${firstName}: ${firstNameValue}`);
console.log(`${lastName}: ${lastNameValue}`);
console.log(`${age}: ${ageValue}`);
```

Asegúrate de que los selectores (`'label[for="first_name"]'`, `'input[name="first_name"]'`, etc.) coincidan con los atributos de tus elementos HTML. Por ejemplo, si tu etiqueta para el nombre se ve así:

```html
<label for="first_name">First Name:</label>
<input type="text" name="first_name" value="Mario">
```

Entonces el selector para el nombre sería `label[for="first_name"]` y `input[name="first_name"]`.

Puedes ejecutar este código en la consola del navegador web después de cargar tu página para obtener los resultados deseados. Recuerda que esto asume que tus etiquetas y campos de entrada tienen los atributos y estructura adecuada.
