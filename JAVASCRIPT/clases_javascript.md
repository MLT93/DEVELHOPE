En JavaScript, las clases son una forma de implementar la Programación Orientada a Objetos (POO). Permiten crear objetos que tienen propiedades y métodos, lo que facilita la organización y reutilización del código.
Son plantillas que definen cómo se crearán los objetos (instancias) y qué comportamientos (métodos) tendrán.

Aquí te explico más sobre las clases, para qué sirven y cómo se utilizan en JavaScript:


¿Para qué sirven las clases en JavaScript?
Las clases en JavaScript sirven para encapsular datos y comportamientos relacionados en un objeto, lo que facilita la creación y el mantenimiento de código. Ayudan a organizar y estructurar programas, permitiendo la reutilización de código a través de la herencia.

¿Cómo se utilizan las clases en JavaScript?
Para crear una clase en JavaScript, utilizamos la palabra clave "class" seguida del nombre de la clase. Dentro de la clase, definimos sus propiedades y métodos usando el constructor y otros métodos. Aquí tienes un ejemplo básico:

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}
```

Una vez definida la clase, podemos crear instancias (objetos) de ella usando la palabra clave `new`:

```javascript
const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("María", 25);

persona1.saludar(); // Imprime: Hola, soy Juan y tengo 30 años.
persona2.saludar(); // Imprime: Hola, soy María y tengo 25 años.
```

Además, es posible extender una clase para crear una nueva clase que herede sus propiedades y métodos:

```javascript
class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad);
    this.carrera = carrera;
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.carrera}.`);
  }
}

const estudiante1 = new Estudiante("Pedro", 22, "Ingeniería");
estudiante1.saludar(); // Imprime: Hola, soy Pedro y tengo 22 años.
estudiante1.estudiar(); // Imprime: Pedro está estudiando Ingeniería.
```
