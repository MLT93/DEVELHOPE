class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(miFigura) {
    if (miFigura instanceof Square) {
      return miFigura.side * miFigura.side;
    } else if (miFigura instanceof Rectangle) {
      return miFigura.width * miFigura.height;
    } else if (miFigura instanceof Circle) {
      /* también es válido esto: Math.PI * Math.pow(miFigura.radius, 2) */
      return Math.PI * miFigura.radius ** 2;
    } else {
      console.log("Error: figura no compatible");
    }
  }
}

// Instancias
const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

/* 
Definición de las Clases:

1. Se definen tres clases: Square, Rectangle y Circle, cada una representando una figura geométrica con propiedades específicas (side para el cuadrado, width y height para el rectángulo, y radius para el círculo).

2. Definición de la Clase AreaCalculator:

Se define la clase AreaCalculator que contendrá el método estático calculate.

3. El Método calculate en AreaCalculator:

El método calculate toma un parámetro llamado miFigura, que reflejará cualquier instancia de alguna de las clases Square, Rectangle o Circle.
Así podremos hacer todos los cálculos correctamente.

4. Uso del Operador instanceof:

Dentro del método calculate, se utilizan declaraciones if, seguidas del operador instanceof, para determinar qué tipo de figura se pasó como argumento y si es una herencia directa o de una instancia

5. Calculando el Área:

Si el argumento figure es una instancia de la clase Square, se calcula el área del cuadrado multiplicando miFigura.side por sí mismo.

Si el argumento figure es una instancia de la clase Rectangle, se calcula el área del rectángulo multiplicando miFigura.width por miFigura.height.

Si el argumento figure es una instancia de la clase Circle, se calcula el área del círculo usando la fórmula π * radio^2, donde Math.PI es el valor de Pi y miFigura.radius es el radio del círculo.

6. Retorno del Área:

Después de calcular el área de acuerdo con el tipo de figura, el método calculate devuelve el área calculada.

7. Manejo de Tipos No Soportados:

Si el argumento miFigura no es una instancia de ninguna de las clases esperadas (Square, Rectangle o Circle), se lanza un error indicando que el tipo de figura no es compatible.

8. Ejemplo de Uso:

Luego se crean instancias de las clases Square, Rectangle y Circle.

Se llama al método calculate de la clase AreaCalculator pasando cada una de estas instancias como argumento.

El método calculate detecta el tipo de figura mediante el operador instanceof y realiza los cálculos apropiados según la figura.

9. Salida:

Finalmente, se imprimen los resultados de los cálculos de área en la consola.

En resumen, el operador instanceof se utiliza en este código para determinar si un objeto es una instancia de una clase específica. Esto permite a la clase AreaCalculator calcular el área de diferentes figuras geométricas basándose en sus tipos. Cada tipo de figura se maneja de manera diferente según su clase correspondiente.
*/
