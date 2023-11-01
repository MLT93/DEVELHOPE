const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

class DatosPersonales {
  constructor(name, surname, age) {
    this.nombre = name;
    this.apellido = surname;
    this.edad = age;
  }

  addOnObject(object) {
    object.personalData = this;
  }
};

let datosPersonalesDelUsuario = new DatosPersonales("Marcos", "Lambir", "30",);
datosPersonalesDelUsuario.addOnObject(student);

console.log(student);


/* Se define un objeto (student) que representa a un estudiante con las propiedades "id", "school" y "year". */
/* Creo la clase (DatosPersonales) con un constructor que tiene tres parámetros "name", "surname" y "age".
Cuando se crea una instancia (cuando creo un nuevo objeto con la palabra clave "new") de DatosPersonales, estos parámetros se utilizan para inicializar las propiedades nombre, apellido y edad dentro del nuevo objeto. */
/* Dentro de la clase hago una función\método (addOnObject). Esto toma un objeto (object) como argumento y le asignan estos (this) valores, los que se le den al constructor de DatosPersonales, a la propiedad (personalData), que irá dentro del objeto que le pasemos a la función. Esto agrega los datos personales a ese objeto. */
/* Creo una instancia con mis datos. */
/* Se llama a la función (addOnObject()) para agregar los datos personales del nuevo objeto (datosPersonalesDelUsuario) al objeto antiguo (student). */
/* Imprimo y veo los cambios */
