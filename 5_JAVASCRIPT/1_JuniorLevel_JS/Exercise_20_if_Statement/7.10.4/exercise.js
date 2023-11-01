// # Exercise 20

// Create a variable called `primitive` and assign it a value. Check if the value is number, string or boolean type and print it in the console.



let valores = [ // Definimos una array/lista/matriz con los posibles valores que queramos.
"Hola bebé",
42,
true,
"Año de nacimiento",
false,
323,
23345,
"true",
false,
"Hello world!",
true,
32,
0,
`Pimpa Luna`,
false,
true,
]

let valorRandom = valores[Math.floor(Math.random() * valores.length)] // Asignamos un valor aleatorio de la lista a la variable "valorRandom" con math.floor para redondear, math.random para elegir aleatoriamente multiplicado por la longitud del array "valores"

if (typeof valorRandom === "number") { // Creamos un if-else para ver si los valores aleatorios que creamos son String, Booleanos o Numbers.
    console.log(`Number value`)
} else if (typeof valorRandom === "boolean") {
    console.log(`Boolean value`)
} else {
    console.log(`String value`)
}



/*

La expresión Math.floor(Math.random() * valores.length) es una forma común de
generar un índice aleatorio para acceder a un elemento aleatorio de una matriz (array)
valores.

Aquí hay una explicación detallada de lo que hace cada parte de la expresión:

Math.random() devuelve un número decimal aleatorio entre 0 y 1 (excluyendo el 1).
valores.length es la longitud de la matriz (array) valores.
Math.random() * valores.length genera un número decimal aleatorio entre 0 y la longitud 
de la matriz (array) valores. 
La función Math.random() devuelve un número pseudoaleatorio entre 0 y 1 (exclusivo), lo que
significa que puede devolver cualquier número decimal en ese rango.
En el caso de Math.random(100), la sintaxis es incorrecta ya que la función random() no
acepta argumentos. Si se quisiera generar un número pseudoaleatorio entre 0 y 100,
se podría usar Math.random() multiplicado por 100 y luego redondear hacia abajo utilizando
la función Math.floor(), como se muestra en el ejemplo que mencionaste previamente:
Math.floor() redondea el número decimal hacia abajo al número entero más cercano.
En resumen, Math.floor(Math.random() * valores.length) genera un número entero
aleatorio entre 0 y la longitud de la matriz (array) valores menos 1
(ya que los índices de matriz comienzan en 0).

*/