
# **TYPESCRIPT**

## The TypeScript Language y Funciones Relacionadas: Una Explicación Detallada

1. #### **`Introducción a TypeScript`**:

   `TypeScript` es un lenguaje de programación desarrollado por `Microsoft` que se basa en `JavaScript`. Su principal objetivo es proporcionar un `sistema de tipos estáticos`, lo que significa que puedes definir el tipo de datos de las variables y parámetros de una función de antemano. Esto ayuda a detectar errores en tiempo de desarrollo y facilita el trabajo en proyectos grandes y colaborativos.
   
2. #### **`Importancia de TypeScript`**:

   TypeScript se ha vuelto `crucial en el desarrollo web` y de aplicaciones `debido a su capacidad para detectar errores` en tiempo de desarrollo. Esto significa que puedes atrapar problemas antes de que tu código llegue a producción, lo que ahorra tiempo y recursos. Además, `al ser un superset de JavaScript, puedes usar todas las características de este último, lo que facilita la transición a TypeScript`.

3. #### **`Sintaxis Básica de TypeScript`**:

   Puedes declarar variables con tipos explícitos.

   ```typescript
   let nombre: string = "Juan";
   let edad: number = 30;
   let esProgramador: boolean = true;
   ```

   Los tipos de datos más comunes en TypeScript incluyen:

   - **number**:

     Representa números, tanto enteros como decimales.

     ```typescript
     let edad: number = 30;
     let precio: number = 49.99;
     ```

   - **string**:

     Representa cadenas de texto.

     ```typescript
     let nombre: string = "Juan";
     ```

   - **boolean**:

     Representa valores de `true` o `false`.

     ```typescript
     let esMayor: boolean = true;
     let esMenor: boolean = false;
     ```
   - **object**:

     Representa un objeto JavaScript.

     ```typescript
     let persona: object = { nombre: "Maria", edad: 25 };
     ```

   - **array**:

     Representa una lista de elementos del mismo tipo.

     ```typescript
     let numeros: number[] = [1, 2, 3, 4];
     let colores: string[] = ["rojo", "verde", "azul"];
     ```

   - **tuple**:

     Permite expresar un array con un número fijo de elementos, donde cada elemento puede tener un tipo específico.

     ```typescript
     let coordenadas: [number, number] = [10, 20];
     ```
   - **enum**:

      Permite definir un conjunto de valores con nombre.

     ```typescript
       enum Direccion {
        Arriba,
        Abajo,
        Izquierda,
        Derecha
      }
     
     let direccionActual: Direccion = Direccion.Arriba;
     ```

   - **any**:

     Puede ser cualquier tipo de dato y no tiene restricciones de tipo. Es el valor por defecto.

     ```typescript
     let dato: any = "Hola";
     dato = 42;
     dato = true;
     ```

   - **void**:

     Indica que una función no devuelve ningún valor.

     ```typescript
     function saludar(): void {
       console.log("¡Hola!");
     }
     ```

   - **null y undefined**:

     Representan la ausencia de valor. Son subtipos de los otros tipos.

     ```typescript
     let nulo: null = null;
     let indefinido: undefined = undefined;
     ```

   - **never**:

     Representa un tipo de valor que nunca ocurre. Usualmente se usa para funciones que lanzan excepciones o que nunca terminan.

     ```typescript
     function error(mensaje: string): never {
       throw new Error(mensaje);
     }
     ```

   - **unknown**:

     Similar a any, pero más seguro. No se permite realizar operaciones sobre valores de tipo unknown sin antes verificar o hacer una conversión de tipo.

     ```typescript
     let desconocido: unknown = 42;
     ```
   
   Estos son algunos de los tipos de datos más comunes en TypeScript. Recuerda que `TypeScript también te permite crear tipos personalizados` y definir uniones e intersecciones de tipos para adaptarse a las necesidades específicas de tu proyecto.
   
4. #### **`Funciones en TypeScript`**:

   En TypeScript se permite definir funciones de manera similar a `JavaScript`, `pero con tipos de datos explícitos en los parámetros y en el valor de retorno`.

   `Recuerda que puedes asignar tipos a los parámetros de las funciones y también puedes asignar el tipo que devolverá`.

   ```typescript
   // Se asigna el tipo `number` a los parámetros de la función. A demás, se especifica también un tipo `number` para lo que devuelve la función
   function suma(a: number, b: number): number {
     return a + b;
   }

   const resultado: number = suma(5, 3);
   ```

   Aquí, `suma` es una función que toma dos parámetros numéricos y devuelve un número. Esto ayuda a prevenir errores en tiempo de desarrollo.

   - **Asignación de un `parámetro opcional`**:

     `Cuando defines una función y quieres que uno de los parámetros sea opcional, debes utilizar el símbolo de interrogación ? después del nombre del parámetro`. Esto indica que el parámetro es opcional y puede ser omitido al llamar a la función.
   
     ```typescript
     // `language2` se asigna como parámetro opcional usando `?` después del nombre. Esto significa que podrá ser omitido al llamar la función
     function languagesSpoken(country: string, language1: string, language2?: string): void {
      console.log(`The languages spoken in ${country} are:`);
   
      console.log(language1);
   
      console.log(language2);
     }
     
     languagesSpoken("Colombia", "Spanish", "English");
     
     languagesSpoken("Greece", "Greek");
     
     languagesSpoken("New Zealand", "English", "Māori");
     
     // ----
     
     export {};
     ```

   - **`Aserción de tipos`**:
  
     Las aserciones de tipo, también conocidas como `type assertions` en inglés, son una característica de TypeScript que te `permite decirle al compilador el tipo de un valor cuando TypeScript no puede inferirlo automáticamente`. `Esto es útil cuando estás seguro de que cierto valor tiene un tipo específico`.
   
     - `Cuando Usar Aserciones de Tipo?`:
   
       Si tú, como programador, tienes información sobre el tipo de un valor que TypeScript no puede determinar por sí mismo, puedes utilizar una aserción de tipo para indicarle a TypeScript qué tipo debe considerar.
    
     - `Las Aserciones si Trabajas con Tipos Union e Intersection`:
   
       Las aserciones de tipo pueden ser necesarias cuando trabajas con `tipos unión` (`|`) e `intersección` (`&`). En algunos casos, necesitarás decirle a TypeScript cuál es el tipo específico que estás tratando.
   
     - `Sintaxis de Aserción de Tipo`:
   
       Para formar una aserción deberás utilizar la palabra reservada `as`.
   
       ```typescript
       const valor: any = "pancho fue a jugar";
       const longitudCadena: number = (valor as string).length;
       ```
       
       Aquí, `(valor as string)` es una aserción de tipo que indica que `valor` debe tratarse como un `string`.
   
       Es importante recordar que `las aserciones de tipo no realizan una transformación en tiempo de ejecución`; `simplemente le dicen al compilador cómo interpretar un valor en particular durante la fase de desarrollo`. Por lo tanto, si la aserción es incorrecta, aún podrían ocurrir errores en tiempo de ejecución. Por esta razón, se debe tener cuidado al usar aserciones de tipo y asegurarse de que sean correctas y necesarias.
   
     - **Tipo `Any`**:
   
       Las aserciones de tipo son especialmente útiles cuando estás trabajando con valores de tipo `any`, ya que TypeScript no puede proporcionar verificaciones de tipo en estos casos.
    
     - **El `DOM`**:
    
       Al interactuar con el DOM en TypeScript, a menudo necesitas asertar el tipo de un elemento del DOM para acceder a sus propiedades y métodos específicos.
    
     - **Conversiones entre tipos**:
   
       Por ejemplo, si estás recibiendo datos de una API y necesitas convertirlos a tipos específicos, puedes usar aserciones de tipo para indicar a TypeScript qué tipo esperas.
   
     - **No Engañes al Compilador**:
   
       Las aserciones de tipo te permiten `decirle` al compilador qué tipo debe considerar un valor. Sin embargo, si te equivocas en la aserción, es posible que obtengas errores en tiempo de ejecución.
   
     - **Debes Estar Seguro del Tipo**:
   
       Antes de usar una aserción de tipo, asegúrate de que estás completamente seguro de que el valor es del tipo que afirmas. Si cometes un error, podrías introducir errores difíciles de depurar en tu código.
      
   En resumen, las aserciones de tipo en TypeScript te proporcionan una forma de comunicarte con el compilador sobre el tipo de un valor cuando TypeScript no puede determinarlo por sí mismo. Sin embargo, debes usarlas con precaución y asegurarte de que estás seguro del tipo del valor que estás asertando.
     
5. #### **`Interface & Type`**:

   Existe la posibilidad de `crear tipos personalizados` utilizando las palabras reservadas `interface` o `type`.
   

   - **interface**:

     Define la estructura de un objeto.

     ```typescript
     interface Producto {
       nombre: string;
       precio: number;
       disponible: boolean;
       calcularImpuesto: (impuesto: number) => number;
     }
     
     // Implementación de la interface
     let producto: Producto = {
       nombre: "Camisa",
       precio: 29.99,
       disponible: true,
       calcularImpuesto: function (impuesto) {
         return this.precio * impuesto;
       },
     };
     ```
   
   - **Type**:
     
     Puede usarse para crear tipos customizados más complejos.

     ```typescript
     type Usuario = {
       nombre: string;
       edad: number;
       email: string;
     };
     
     // Uso del type
     let usuario: Usuario = {
       nombre: "Juan",
       edad: 30,
       email: "juan@example.com",
     };
     ```
     
     O crear un tipo único para varias ocasiones

     ```typescript
     type Country = string;
     
     const country1: Country = "Nigeria";
     
     const country2: Country = "Italy";
     
     const country3: Country = "China";
     ```

   `Ambos permiten definir estructuras de datos`, pero hay algunas diferencias sutiles entre ellos. Por lo general, `se prefiere interface para definir formas de objetos`, ya que es más adecuada para describir la forma de los objetos y puede ser extendida o implementada en otras interface. `type es más flexible y puede ser usado con uniones y tipos condicionales`.

6. #### **`Clases en TypeScript`**:

   Typescript `soporta la programación orientada a objetos` y te permite definir clases con propiedades y métodos.

   ```typescript
   class Empleado {
     nombre: string;
     salario: number;

     constructor(nombre: string, salario: number) {
       this.nombre = nombre;
       this.salario = salario;
     }

     mostrarInformacion() {
       console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}`);
     }
   }
   ```

   Las `clases` en TypeScript son una `herramienta poderosa para crear objetos con estructura definida`.

7. #### **`Módulos y Encapsulación`**:

   `TypeScript admite la modularización, permitiendo dividir el código en partes más pequeñas y reutilizables`. Puedes exportar e importar elementos entre módulos para mantener tu código organizado y modular.

8. #### **`Generics`**:

   Los `generics` son una característica importante que `permite escribir código reutilizable con tipos dinámicos`. Puedes crear funciones y clases que trabajen con diferentes tipos de datos de manera segura.

   ```typescript
   function primeroDe<T>(array: T[]): T {
     return array[0];
   }

   const numeros: number[] = [1, 2, 3];
   const primerNumero: number = primeroDe(numeros);
   ```

   En este ejemplo, `T` es un tipo genérico que se adapta al tipo de datos del array que se pasa como argumento.

9. #### **`TypeScript y Desarrollo Web`**:

   Las principales bibliotecas y frameworks, como `Angular`, `React` y `Vue.js`, `tienen soporte para TypeScript`. Esto permite escribir aplicaciones más robustas y mantenibles.

10. #### **`Instalación, Herramientas de Compilación y Running Code`**:
   
   `Para utilizar TypeScript en proyectos, necesitas un proceso de compilación que convierta tu código TypeScript en JavaScript`, ya que los navegadores solo entienden JavaScript. Típicamente, `se utiliza el compilador de TypeScript (tsc) o herramientas de construcción como Webpack junto con loaders de TypeScript` para automatizar este proceso.

   - **Instalar TypeScript**:

     Antes de nada debes asegurarte que tienes TypeScript instalado en tu proyecto.

     Puedes instalarlo como una dependencia de desarrollo en tu proyecto utilizando el siguiente comando:

     ```bash
     npm i typescript
     ```

     ```bash
     yarn add typescript
     ```
     
   - **Configuración del Proyecto para Compilación `tsconfig.json`**:

     `Para tu proyecto TypeScript necesitas` una configuración adecuada. Esto se logra mediante `un archivo de configuración`. `tsconfig.json` es el archivo que contiene la información sobre cómo se debe realizar la compilación, qué archivos incluir, qué versión de ECMAScript (ES) se debe generar, entre otras opciones.

     Si no tienes uno en tu proyecto, puedes crearlo ejecutando el siguiente comando en la raíz de tu proyecto:

     ```bash
     tsc --init
     ```

     Un ejemplo de un archivo `tsconfig.json básico`:
     
     ```json
          {
       "compilerOptions": {
         "target": "ES5",
         "outDir": "./dist",
         "rootDir": "./src",
         "strict": true
       }
     }
     ```
     
     - `target`:
     
       Indica la versión de ECMAScript a la que se debe compilar. En este caso, se compila a ECMAScript 5.
     
     - `outDir`:
       
       Especifica la carpeta de salida donde se colocarán los archivos JavaScript compilados. Estos archivos estarán listos para ser ejecutados en un navegador o en un entorno de ejecución de JavaScript.
     
     - `rootDir`:
     
       Indica la carpeta raíz donde se encuentra el código TypeScript fuente.
     
     - `strict`:
       
       Habilita las configuraciones estrictas para un código más robusto y sin errores.

     `La configuración adecuada del tsconfig.json es crucial para el éxito de la compilación`. Asegúrate de entender cada opción y cómo afecta el proceso de compilación.
   
   - **Compilador de TypeScript `tsc`**:
       
     `TypeScript proporciona su propio compilador` de línea de comandos llamado `tsc`. Puedes utilizar este compilador para compilar tus archivos TypeScript.
     
     Puedes compilarlo en la terminal con este comando:

     ```bash
     tsc archivo.ts
     ```
     
     Este comando ejecutará la compilación, pero debes estar dentro del directorio del proyecto que contiene el archivo `tsconfig.json`. El compilador buscará ese archivo de configuración y comenzará a compilar tus archivos TypeScript.
     
   - **Herramienta de Construcción `Build Tools`**:
     
     También puedes usar herramientas de construcción como `Webpack junto con loaders de TypeScript`. Estas herramientas ofrecen ventajas adicionales como la capacidad de gestionar dependencias, optimizar el código y automatizar tareas de construcción.
     
     `Si estás utilizando una herramienta de construcción como Webpack, asegúrate de tener un loader de TypeScript configurado. Esto permitirá a Webpack compilar tus archivos TypeScript como parte de su proceso de construcción`.

   - **Scripts en `package.json`**:

     Puedes definir scripts en el archivo `package.json` para facilitar la compilación y ejecución de tu código TypeScript. Por ejemplo, puedes definir un script de compilación que utilice `tsc` para compilar tus archivos TypeScript.

     Abre tu archivo `package.json` y agrega o modifica el campo `scripts` para incluir un script de compilación. Puedes usar el siguiente ejemplo:
     
     ```json
     "scripts": {
       "build": "tsc",
       "start": "node src/index.js",
       "dev": "node index.js",
     }
     ```

     - `build`:

       Este es el script. Se ejecuta utilizando el comando `npm run build`.

     - `start`:

       Este es el nombre del script. Se puede ejecutar utilizando el comando `npm start`.

     - `dev`:

       Script que se ejecuta a través del comando `npm run dev`.

     - `node`:
       
       Es el comando para ejecutar código JavaScript en el entorno de `Node.js`.

     - `dist/index.js` o `src/index.js`:
       
       Es la ruta al archivo JavaScript que deseas ejecutar.
       `Normalmente se destina una carpeta` llamada `dist`, que se utiliza `para` almacenar `los archivos de salida después de la compilación de TypeScript`. Si no tienes una, créala.
     
     Ahora puedes compilar tu código TypeScript ejecutando el siguiente comando:

     ```bash
     npm run build
     ```
     
     Por último ejecuta tu aplicación en `create-react-app`:

     ```bash
     npm start
     ```
     
     O en tu aplicación `Vite` / `Next.js`:

     ```bash
     npm run dev
     ```
     
     ¡Listo! Ahora tienes un script de compilación configurado para tu proyecto TypeScript. Este script te permitirá compilar tu código TypeScript en JavaScript para su ejecución. Recuerda que puedes ajustar las configuraciones según las necesidades de tu proyecto.


11. #### **`Librerías y Frameworks de Ejecución de TypeScript`**

   Algunos frameworks y librerías, como `Angular`, `NestJS`, y `Deno`, están diseñados para ejecutar código TypeScript directamente. Esto significa que no es necesario compilar manualmente el código antes de ejecutarlo.
     
12. #### **`Consideraciones y Ventajas`**:

    `TypeScript agrega complejidad adicional a tus proyectos, pero las ventajas de detección temprana de errores y herramientas de desarrollo mejoradas hacen que el esfuerzo valga la pena`. Además, la comunidad de desarrolladores de TypeScript es activa y proporciona recursos y librerías que facilitan su adopción.

    También `posee la ventaja de proporcionar sugerencias sobre el código`. Esto está `integrado en` editores de texto como `Visual Studio Code` o `WebStorm`, `mientras que otros` editores `como` `Atom` o `Vim`, `tienen extensiones` que soportan TypeScript.

13. #### **`Conclusiones`**:

    TypeScript es una herramienta poderosa en el mundo del desarrollo web y de aplicaciones. `Proporciona una forma más segura y estructurada de escribir código JavaScript, lo que resulta en aplicaciones más robustas y mantenibles`. Su capacidad para detectar errores en tiempo de desarrollo es especialmente valiosa en proyectos grandes y colaborativos. Si bien puede requerir un esfuerzo adicional, las ventajas que ofrece hacen que TypeScript sea una elección sólida para muchos desarrolladores y equipos de desarrollo.

## The Types en TypeScript y Funciones Relacionadas: Una Explicación Detallada

1. #### **`Introducción a Tipos en TypeScript`**:

   Una de las características principales es la capacidad de definir y trabajar con tipos de datos. `Los types en TypeScript permiten especificar qué tipo de valores puede contener una variable, parámetro o retorno de función`.

2. #### **`Importancia de los Tipos`**:

   La introducción de tipos en TypeScript tiene varios beneficios. `Ayudan a detectar errores en tiempo de desarrollo, mejora la documentación del código, facilita el trabajo en equipo y proporciona herramientas de desarrollo más potentes, como autocompletado y sugerencias`.

3. #### **`Sintaxis de Declaración de Tipos`**:

   En TypeScript, los tipos se pueden declarar de varias maneras. Por ejemplo, utilizando los tipos primitivos como `number`, `string`, `boolean`, entre otros, como explicamos arriba. También es posible definir tipos personalizados mediante interfaces o tipos union.

   ```typescript
   // Declaración de tipos
   let edad: number = 30;
   let nombre: string = "Juan";
   let esMayor: boolean = true;

   interface Persona {
     nombre: string;
     edad: number;
   }

   let usuario: Persona = {
     nombre: "Maria",
     edad: 25
   };
   ```

4. #### **`Funciones y Tipos`**:

   En TypeScript, las funciones también pueden tener tipos. Esto incluye el tipo de los parámetros que aceptan y el tipo del valor que devuelven.

   ```typescript
   // Función que suma dos números
   function sumar(a: number, b: number): number {
     return a + b;
   }

   let resultado = sumar(5, 3); // resultado tiene el tipo number
   ```

5. #### **`Funciones como Tipos y Tipos de Retorno`**:

   Las funciones también pueden ser utilizadas como tipos en TypeScript. Esto significa que podemos definir tipos que representen funciones específicas.

   ```typescript
   type OperacionMatematica = (a: number, b: number) => number;

   let suma: OperacionMatematica = (a, b) => a + b;
   let resta: OperacionMatematica = (a, b) => a - b;
   ```

6. #### **`Funciones con Parámetros Opcionales y por Defecto`**:

   TypeScript permite definir parámetros opcionales y valores por defecto en las funciones. Esto se logra mediante el uso del símbolo de interrogación `?` para parámetros opcionales y asignaciones por defecto.

   ```typescript
   function saludar(nombre: string, saludo: string = "Hola") {
     console.log(`${saludo}, ${nombre}`);
   }

   saludar("Juan"); // Imprime: "Hola, Juan"
   saludar("Maria", "Hi"); // Imprime: "Hi, Maria"
   ```

7. #### **`Funciones de Flecha y Tipos de this`**:

   Las funciones de flecha en TypeScript tienen una sintaxis más concisa y comparten el contexto `this` del ámbito en el que fueron definidas.

   ```typescript
   let miObjeto = {
     valor: 42,
     mostrarValor: function() {
       setTimeout(() => {
         console.log(this.valor);
       }, 1000);
     }
   };

   miObjeto.mostrarValor(); // Imprime: 42 después de 1 segundo
   ```

8. #### **`Funciones Genéricas`**:

   Las funciones genéricas en TypeScript permiten trabajar con tipos de datos de manera flexible, lo que significa que pueden adaptarse a diferentes tipos sin perder la información del tipo.

   ```typescript
   function imprimir<T>(elemento: T): void {
     console.log(elemento);
   }

   imprimir(5); // Imprime: 5
   imprimir("Hola"); // Imprime: "Hola"
   imprimir([1, 2, 3]); // Imprime: [1, 2, 3]
   ```

9. #### **`Sobrecarga de Funciones`**:

   `TypeScript permite definir múltiples versiones de una función con diferentes parámetros y tipos`. Esto se conoce como `sobrecarga de funciones` y es útil cuando una función puede aceptar diferentes tipos de argumentos.

   ```typescript
   function obtenerInfo(x: number): string;
   function obtenerInfo(x: string): number;
   function obtenerInfo(x: any): any {
     if (typeof x === "number") {
       return "Es un número";
     } else if (typeof x === "string") {
       return 42;
     }
   }

   let a = obtenerInfo(5); // a es de tipo string
   let b = obtenerInfo("Hola"); // b es de tipo number
   ```

10. #### **`Consideraciones Finales`**:

   `Utilizar tipos` en TypeScript `proporciona una capa adicional de seguridad y documentación en tu código. Ayuda a prevenir errores y facilita la comprensión del código por parte de otros desarrolladores`. Además, TypeScript ofrece una amplia variedad de tipos incorporados y la capacidad de definir tipos personalizados para adaptarse a las necesidades específicas de tu proyecto.
