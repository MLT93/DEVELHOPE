
# **TYPESCRIPT**

## The TypeScript Language y Funciones Relacionadas: Una Explicación Detallada

1. #### **`Introducción a TypeScript`**:
   
   `TypeScript es un lenguaje de programación desarrollado por Microsoft basado en JavaScript, Java y C#`.

   `Su` principal `objetivo es proporcionar un sistema de tipos estáticos`, permitiendo definir el tipo de datos de variables y parámetros de funciones de antemano. Esto ayuda a detectar errores en tiempo de desarrollo y facilita el trabajo en proyectos grandes y colaborativos.
   
   `TypeScript ayuda a fortalecer el tipado débil de JavaScript, proporcionando un tipado más fuerte y seguro`.

   `Este lenguaje se compila a JavaScript en tiempo de ejecución`.

   `Es importante destacar que TypeScript funciona principalmente en tiempo de desarrollo y no en tiempo de ejecución`. El navegador o `el entorno de ejecución finalmente interpretará y ejecutará código JavaScript` realmente.
   
2. #### **`Importancia de TypeScript`**:
   
   TypeScript se ha vuelto `crucial en el desarrollo web` y de aplicaciones `debido a su capacidad para detectar errores` en tiempo de desarrollo. Esto significa que puedes atrapar problemas antes de que tu código llegue a producción, lo que ahorra tiempo y recursos. Además, `al ser un superset de JavaScript, puedes usar todas las características de este último, lo que facilita la transición a TypeScript`.

3. #### **`Instalación, Herramientas de Compilación y Running Code`**:
   
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

     Visita la web oficial en: **https://www.typescriptlang.org/tsconfig**

     Si no tienes uno en tu proyecto, puedes crearlo ejecutando el siguiente comando en la raíz de tu proyecto:

     ```bash
     tsc --init
     ```

     Un ejemplo de un archivo `tsconfig.json básico`:
     
     ```json
          {
       "compilerOptions": {
         "target": "ES6",
         "outDir": "./dist",
         "rootDir": "./src",
         "strict": true
       },
       "include": ["./src/**/*.ts"],
       "exclude": ["./src/**/*.test.js"],
     }
     ```
     
     - `target`:
     
       Indica la versión de ECMAScript a la que se debe compilar. En este caso, se compila a ECMAScript (ES) 6.
     
     - `outDir`:
       
       Especifica la carpeta de salida donde se colocarán los archivos JavaScript compilados. Estos archivos estarán listos para ser ejecutados en un navegador o en un entorno de ejecución de JavaScript.
     
     - `rootDir`:
     
       Indica la carpeta raíz donde se encuentra el código TypeScript fuente.
     
     - `strict`:
       
       Habilita las configuraciones estrictas para un código más robusto y sin errores.

     - `include`:

       se utiliza en archivos de configuración de herramientas de construcción, como Webpack, TypeScript, o linters como ESLint. Esta declaración especifica qué archivos deben ser incluidos en ciertos procesos, como la compilación o análisis estático.

       Es un patrón de inclusión que describe la ubicación de los archivos que se deben incluir.
       
       En este caso, `./src/**/*.ts` significa que:
       
       - `./src`: Nos ubicamos dentro de ese directorio del proyecto en específico.
       - `/**`: Seleccionamos todas las carpetas que haya dentro del directorio.
       - `/*`: Elegimos todos los archivos sin importar la extensión.
       - `.ts`: Asignamos la extensión que deseamos buscar en particular (opcional).

       En Webpack, puede ser utilizado en el archivo de configuración `webpack.config.js` para especificar qué archivos deben ser procesados durante la construcción del proyecto.

       En TypeScript, dentro del archivo `tsconfig.json` esta declaración puede usarse para indicar qué archivos TypeScript deben ser compilados.

       En ESLint, en el `archivo de configuración de ESLint` esto podría usarse para especificar qué archivos deben ser analizados estáticamente en busca de problemas de estilo o errores.

     - `exclude`:

       se utiliza para especificar qué archivos y carpetas deben excluirse de un proceso específico. Este es un mecanismo para indicar qué partes del código o del proyecto no deben ser consideradas durante ciertos procesos, como la compilación, análisis estático, o cualquier otra tarea automatizada.

       En este caso, `./src/**/*.test.js` significa que en el directorio `src`, dentro de todas las carpetas y dentro de todos los archivos, se excluyen los files con extensión `.test.js` para el proceso que sea.

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

     El `package.json es un archivo de configuración fundamental` en proyectos de Node.js, junto con NPM o Yarn, que son gestores de paquetes. `Contiene información sobre el proyecto y sus dependencias, lo que facilita la gestión y distribución del software`.

     Si no tuvieras ningún archivo `package.json` en tu proyecto lo puedes crear con el siguiente comando:

     ```
     npm init
     ```

     ```
     yarn init
     ```

     `Estos comandos iniciarán un proceso interactivo que te guiará a través de la creación del archivo package.json`. Te hará preguntas sobre el nombre del proyecto, la versión, la descripción, el punto de entrada, los scripts, etc. Puedes completar estas respuestas o simplemente presionar Enter para aceptar los valores predeterminados.

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

   - **Uso de la `extensión Code Runner` en Visual Studio Code**:

     Un dato interesante es que Visual Studio Code está desarrollado con TypeScript.

     Para facilitar el desarrollo, Visual Studio Code posee varias extensiones y una de ellas es `Code Runner`. Esta extensión `nos permite de ejecutar y testear (debug) el código que realizamos sin la necesidad de posicionarnos en el directorio del proyecto y utilizar el comando node, de Node.js, para ejecutar el debug`.

     Para utilizar esta extensión con TypeScript, debemos instalar a través de nuestra terminal favorita un paquete llamado `ts-node`, con el siguiente comando:

     ```bash
     npm i ts-node
     ```

     ```bash
     yarn add ts-node
     ```

     Al instalar este paquete se habilita la ejecución directa de archivos TypeScript dentro de Visual Studio Code.

     Posteriormente de ejecutar el comando y realzar la instalación, cerraremos nuestro editor de texto (Visual Studio Code) y lo volveremos a abrir para que se realicen las actualizaciones.

     ¡Listo! Ya podemos utilizar la extensión Code Runner.
     
4. #### **`Sintaxis Básica de TypeScript`**:

   Puedes `declarar variables con tipos explícitos` para prevenir errores.

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

     Permite definir un conjunto de valores con un ID asignado automáticamente o manualmente. Este ID será numérico por defecto, pero podemos asignarle un nombre con tipo string, si deseamos. Esto es muy importante a la hora de trabajar con bases de datos, ya que nos permitiría encadenar las claves asignadas a los tipos de error dentro de la base de datos al ID de nuestro código, por ejemplo.
     
     ```typescript
     enum Direccion {
       // Si no se le asigna ningún nombre, se le asignará un ID como el índice de un array automáticamente
       Arriba, // 0
       Abajo, // 1
       Izquierda, // 2
       Derecha // 3
     }
     
     let direccionActual: Direccion = Direccion.Arriba;
     ```

     Hay dos formas de declarar un enum, con `const` o sin él.
     
     - `Con const`:

       `El utilizo de const permite crear un código menos pesado a la hora de compilar` porque realiza una "transpilación" más ligera en código JavaScript, lo que provoca un mejor rendimiento.

       Se aconseja utilizar en mayor medida esta forma, para ahorrar líneas de código.

       ```typescript
       // Con el `const`
       const enum ERROR_TYPES {
         // Esta asignación del ID se introduce manualmente a través de un nombre con tipo string
         NOT_FOUND = 'Not-Found',
         UNAUTHORIZED = 'Unauthorized',
         FORBIDDEN = 'Forbidden'
       }

       function mostrarMensaje (elError: ERROR_TYPES) {
         if(elError === ERROR_TYPES.NOT_FOUND ){
           console.log('No se encuentra el recurso')
         } else if(elError === ERROR_TYPES.UNAUTHORIZED) {
           console.log('No tienes permisos')
         } else if(elError === ERROR_TYPES.FORBIDDEN) {
           console.log('Permisos perdidos')
         }
       }
       ```

       En la compilación el código de JavaScript `con el const`, se verá de la siguiente forma:

       ```javascript
       "use strict";
       function mostrarMensaje(elError) {
         if(elError === 'Not-Found' /* ERROR_TYPES.NOT_FOUND */){
           console.log('No se encuentra el recurso')
         } else if(elError === 'Unauthorized' /* ERROR_TYPES.UNAUTHORIZED */) {
           console.log('No tienes permisos')
         } else if(elError === 'Forbidden' /* ERROR_TYPES.FORBIDDEN */) {
           console.log('Permisos perdidos')
         }
       }
       ```

     - `Sin const`:

       `Sin el uso de const, tendríamos un código más pesado pero también tendríamos la posibilidad de exportarlo fuera de nuestra aplicación` y utilizarlo en otros lados, por ejemplo, en JavaScript.

       ```typescript
       // Sin el `const`
       enum ERROR_TYPES {
         NOT_FOUND = 'Not-Found',
         UNAUTHORIZED = 'Unauthorized',
         FORBIDDEN = 'Forbidden'
       }

       function mostrarMensaje (elError: ERROR_TYPES) {
         if(elError === ERROR_TYPES.NOT_FOUND ){
           console.log('No se encuentra el recurso')
         } else if(elError === ERROR_TYPES.UNAUTHORIZED) {
           console.log('No tienes permisos')
         } else if(elError === ERROR_TYPES.FORBIDDEN) {
           console.log('Permisos perdidos')
         }
       }
       ```

       En la compilación, el código de JavaScript `sin el const` se vería así:

       ```javascript
       "use strict";
       var ERROR_TYPES;
       (function (ERROR_TYPES {
         ERROR_TYPES["NOT_FOUND"] = 'notFound';
         ERROR_TYPES["UNAUTHORIZED"] = 'unauthorized';
         ERROR_TYPES["FORBIDDEN"] = 'forbidden';
       }))(ERROR_TYPES || (ERROR_TYPES 0 {}));
       function mostrarMensaje(elError) {
         if(elError === ERROR_TYPES.NOT_FOUND ){
           console.log('No se encuentra el recurso')
         } else if(elError === ERROR_TYPES.UNAUTHORIZED) {
           console.log('No tienes permisos')
         } else if(elError === ERROR_TYPES.FORBIDDEN) {
           console.log('Permisos perdidos')
         }
       }
       ```

   - **any**:

     Es el valor por defecto. Puede ser cualquier tipo de dato, no tiene restricciones de tipo y le dice a TypeScript que IGNORE el tipado de datos que haya.

     Se aconseja evitar que las estructuras que trabajemos tengan el tipo `Any`.

     ```typescript
     let dato: any = "Hola";
     dato = 42;
     dato = true;
     ```

   - **void**:

     Indica que una función, cuando llega a la parte del return, no devuelve ningún valor y, si devolviera algo, no importaría lo que fuere. `El código sí llega hasta el return de la función.`

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

     Representa un tipo de valor que nunca se retorna. `Es utilizado principalmente para funciones que nunca retornarán un valor o que lanzan errores`. También es inferido por TypeScript cuando una función siempre lanza una excepción o tiene un bucle infinito. `El código no llega hasta el return de la función`.

     ```typescript
     function error(mensaje: string): never {
       throw new Error(mensaje);
     }
     ```

     ```typescript
     function bucleInfinito(): never {
       while (true) {
           console.log('¡Bucle infinito!');
       }

       // Y a demás no retorna nada...
     }
     ```
   
   - **unknown**:
   
     El tipo `unknown es una adición más segura y restrictiva que any`. `Representa una variable cuyo tipo no conocemos en tiempo de compilación, pero queremos obligarnos a hacer una verificación de tipo antes de operar con ella`.
   
     ```typescript
     let valor: unknown = 10;
     
     // No se puede operar directamente con un valor de tipo `unknown`.
     // Se debe realizar una comprobación de tipo antes de cualquier operación.

     let doble = valor * 2; // Esto provocará un Error
     
     if (typeof valor === 'number') {
         let doble = valor * 2; // Esto está bien, porque hemos comprobado que valor es de tipo número.
     }
     ```
   
   Estos son algunos de los tipos de datos más comunes en TypeScript. Recuerda que `TypeScript también te permite crear tipos personalizados` y definir `union type` e `intersections` de tipos para adaptarse a las necesidades específicas de tu proyecto.

5. #### **`Palabras Clave y Utilidades`**:

   A continuación hacemos una lista de algunas de las principales palabras clave y utilidades con una breve descripción:
   
   **Typeof**: Permite obtener el tipo de una variable o una expresión en tiempo de compilación.
   
   **Keyof**: Devuelve unión de las claves de un tipo.
   
   **In**: Itera sobre los miembros de un tipo.
   
   **As**: Permite realizar "type assertions" para decirle al compilador que confíe en tu conocimiento sobre el tipo de una variable.
   
   **Extends**: Se usa en contextos genéricos para establecer restricciones en los tipos.
   
   **Infer**: Se utiliza en contextos genéricos para inferir tipos.
   
   **Partial**: Una utilidad de tipo predefinida que convierte todas las propiedades de un tipo en opcionales.
   
   **Required**: Una utilidad de tipo predefinida que convierte todas las propiedades opcionales de un tipo en requeridas.
   
   **Readonly**: Una utilidad de tipo predefinida que hace todas las propiedades de un tipo como de solo lectura.
   
   **Pick**: Una utilidad de tipo predefinida que selecciona un subconjunto de propiedades de un tipo.
   
   **Omit**: Una utilidad de tipo predefinida que omite un subconjunto de propiedades de un tipo.
   
   **Record**: Una utilidad de tipo predefinida que crea un tipo con un conjunto de claves y tipos dados.
   
   **Exclude**: Una utilidad de tipo predefinida que excluye un conjunto de tipos de otro.
   
   **Extract**: Una utilidad de tipo predefinida que extrae un conjunto de tipos de otro.
   
   **NonNullable**: Una utilidad de tipo predefinida que elimina null y undefined de un tipo.

   **Mapped Types**: Permite crear nuevos tipos a partir de otros tipos existentes.
   
   **ReturnType**: Devuelve el tipo de retorno de una función.
   
   **Parameters**: Obtiene el tipo de los parámetros de una función.
   
   **ConstructorParameters**: Obtiene el tipo de los parámetros del constructor de una clase.
   
   **InstanceType**: Obtiene el tipo de una instancia creada a partir de una clase.
   
   **ThisType**: Permite especificar el tipo de `this` dentro de una función.
   
   **GlobalThis**: Representa el contexto global en cualquier entorno (como el navegador o Node.js).
   
   **AsyncReturnType**: Devuelve el tipo de retorno de una función asíncrona.
   
   **PromiseType**: Obtiene el tipo de un objeto `Promise`.
   
   **Iterable**: Verifica si un tipo es iterable.
   
   **AsyncIterable**: Verifica si un tipo es async iterable.
   
   **UnwrapPromise**: Desenvuelve el tipo de una promesa.
   
   **ReadonlyArray**: Hace que un array sea de solo lectura.
   
   **RequiredKeys**: Obtiene las claves requeridas de un tipo.
   
   **OptionalKeys**: Obtiene las claves opcionales de un tipo.
   
   **NonFunctionKeys**: Obtiene las claves que no son funciones de un tipo.
   
   **FunctionKeys**: Obtiene las claves que son funciones de un tipo.
   
   **WritableKeys**: Obtiene las claves modificables de un tipo.
   
   **DeepReadonly**: Hace que todas las propiedades de un objeto sean de solo lectura de manera profunda.
   
   **DeepPartial**: Hace que todas las propiedades de un objeto sean opcionales de manera profunda.
      
   Cada una tiene su propio propósito y puede ser útil en diferentes situaciones.

6. #### **`Inferencia de tipos`**:

   La inferencia de tipos en TypeScript es la capacidad del compilador para deducir automáticamente el tipo de una variable basándose en su valor inicial. Esto significa que no siempre es necesario especificar explícitamente el tipo de una variable, ya que TypeScript puede determinarlo por sí mismo.

   Ejemplo:

   ```typescript
   let nombre = "Juan"; // TypeScript infiere que nombre es de tipo string
   let edad = 30; // TypeScript infiere que edad es de tipo number
   ```

   - **Cómo Funciona**:

     La inferencia de tipos en TypeScript se basa en la asignación de tipos. Cuando asignas un valor a una variable, TypeScript analiza el tipo de ese valor y lo asigna como el tipo de la variable.
     
     ```typescript
     let mensaje = "Hola"; // TypeScript infiere que mensaje es de tipo string
     ```

   - **Contextos de Inferencia**:

     La inferencia de tipos ocurre en varios contextos:

     - `Declaraciones de Variables`:

       ```typescript
       let x = 10; // TypeScript infiere que x es de tipo number
       ```

     - `Argumentos de Funciones`:

       ```typescript
       function duplicar(n: number) {
         return n * 2;
       };
       
       let resultado = duplicar(5); // TypeScript infiere que resultado es de tipo number
       ```

     - `Valores de Retorno de Funciones`:

       ```typescript
       function obtenerNombre() {
         return "Juan";
       };
        
       let nombre = obtenerNombre(); // TypeScript infiere que nombre es de tipo string
       ```

     - `Expresiones de Arrays y Objetos`:
       
       ```typescript
       let colores = ["rojo", "verde", "azul"]; // TypeScript infiere que colores es de tipo string[]
       let punto = { x: 10, y: 20 }; // TypeScript infiere que punto es de tipo { x: number, y: number }
       ```
       
   - **Ventajas y Consideraciones**:

     - La inferencia de tipos mejora la legibilidad del código al reducir la necesidad de escribir tipos explícitos.

     - Sin embargo, a veces es útil proporcionar tipos explícitos para mejorar la documentación y la comprensión del código.

     - La inferencia de tipos no siempre es perfecta y puede haber situaciones en las que sea necesario proporcionar tipos explícitos para evitar comportamientos inesperados.
     
   En resumen, la inferencia de tipos es una característica poderosa de TypeScript que permite escribir código más limpio y legible al tiempo que proporciona un alto nivel de seguridad de tipos. Sin embargo, es importante comprender cómo funciona y cuándo es apropiado utilizarla en tus programas.
     
7. #### **Tipos personalizados `Interface` & `Type`**:

   Existe la posibilidad de crear tipos personalizados utilizando las palabras reservadas `interface` (objects, class y extends) o `type` (union types y conditional types).
   
   - **interface**:
     
     Las interfaces son como contratos que especifican qué propiedades y métodos debe tener un `object` o una `class`.

     `Puedes tener 2 interface con el mismo nombre y se extienden automáticamente la una dentro de la otra. Es como el var de JavaScript`.

     Las interfaces no pueden declarar un tipo primitivo.

     `Define la estructura de un objeto, puede ser anidada dentro de otras interfaces y también pueden ser extendida de otras interfaces`.

     ```typescript
     interface Producto {
       nombre: string;
       precio: number;
       disponible: boolean;
       calcularImpuesto: (impuesto: number) => number;
     };
     
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

     En este ejemplo, se define la estructura de un `interface` creando un objeto con el nombre declarativo `Producto`. Ahora siempre que se defina un objeto que se considere un tipo de producto, tendrá todas esas propiedades y el método, obligatoriamente.

     ```typescript
     interface Forma {
       color: string;
       area: () => number;
     };
     
     // `Circulo` recibe todas las propiedades de `Forma` y agrega la prop `radio`
     interface Circulo extends Forma {
       radio: number;
     };
     
     let miCirculo: Circulo = {
       color: "rojo",
       area: () => Math.PI * miCirculo.radio ** 2, // Función de flecha que toma directamente el contexto `this` del ámbito donde es declarada
       radio: 5
     };
     ```

     En este ejemplo, se ilustra cómo se puede usar `interface` y `herencia de interface` en TypeScript con la palabra clave `extends`.
     Se definen dos interfaces en TypeScript: `Forma` y `Circulo`.
     La interfaz `Circulo extiende la interfaz Forma heredando sus propiedades y métodos`. Después `añade su propia propiedad radio con tipo number`.
     Por último `se define el objeto miCirculo que tiene todas las props y métodos de las dos interfaces`.

     ```typescript
     interface Item {
       id: string,
       nombre: string,
       precio: number,
       quantity: number
     };

     interface CarritoDeCompras {
       totalPrice: number,
       products: Item[]
     };

     const miCarrito: CarritoDeCompras = {
       totalPrice: 110,
       products: [
         {
           id: 'XY-083', 
           nombre: 'Camisa Beige',
           precio: 54.90,
           quantity: 1
         }
       ]
     };
     ```

     En este ejemplo, `Item` define las propiedades de un producto (`id`, `nombre`, `precio` y `cantidad`), y `CarritoDeCompras` describe un carrito que tiene un precio total (`totalPrice`) y después (`products`), que sigue la estructura de un array de objetos definida en la interfaz `Item`, que `viene anidada dentro de CarritoDeCompras`.
     Luego, creamos un objeto `miCarrito` que cumple con la estructura definida en la interfaz CarritoDeCompras.

   - **Type**:
     
     `Puede usarse para crear tipos customizados más complejos`.

     Utilizan tipos primitivos.
     
     `Es similar a interface pero no puede "duplicarse" su nombre. No puedes tener dos types iguales. Es como el let de JavaScript`.

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
     
     `O crear un tipo único para asignarlo a casos específicos`.
     
     ```typescript
     type Country = string;
     
     // Utilizo
     const country1: Country = "Nigeria";
     
     const country2: Country = "Italy";
     
     const country3: Country = "China";
     ```

   `Ambos permiten definir estructuras de datos`, pero hay algunas diferencias sutiles entre ellos. Por lo general, `se prefiere interface para definir formas de objetos o clases`, ya que es más adecuada para describir la forma de los objetos y `porque puede ser extends` o implementada `en otras interface`. `type es más flexible y puede ser usado con union types y conditional types`.

8. #### **`Type Assertion`**:
  
   Las aserciones de tipo, también conocidas en inglés como `type assertions`, son una característica de TypeScript que te `permite decirle al compilador el tipo de un valor cuando TypeScript no puede inferirlo (deducirlo automáticamente)`. `Esto es útil cuando estás seguro de que cierto valor tiene un tipo específico`.
  
   - **Cuando Usar las Aserciones?**:
  
     Si tú como programador, tienes información sobre el tipo de un valor que TypeScript no puede determinar por sí mismo, puedes utilizar una aserción de tipo para indicarle a TypeScript qué tipo debe considerar.
  
   - **Funcionamiento de las Aserciones si Trabajas con `Union Type` e `Intersection`**:
  
     Las aserciones de tipo pueden ser necesarias cuando trabajas con `union type` (`|`) e `intersection` (`&`). En algunos casos, necesitarás decirle a TypeScript cuál es el tipo específico que estás tratando.
  
   - **Sintaxis de Assertion**:
  
     Para formar una aserción deberás utilizar la palabra reservada `as`.
  
     ```typescript
     const valor: any = "pancho fue a jugar";
     const longitudCadena: number = (valor as string).length;
     ```
     
     Aquí, `(valor as string)` es una aserción de tipo que indica que `valor` debe tratarse como un `string`.
  
     Es importante recordar que `las aserciones de tipo no realizan una transformación en tiempo de ejecución`, `simplemente le dicen al compilador cómo interpretar un valor en particular durante la fase de desarrollo`. Por lo tanto, si la aserción es incorrecta, aún podrían ocurrir errores en tiempo de ejecución. Por esta razón, se debe tener cuidado al usar aserciones de tipo y asegurarse de que sean correctas y necesarias.
     
   - **Aserciones y Type `Any`**:
  
     Las aserciones de tipo son especialmente útiles cuando estás trabajando con valores de tipo `any`, ya que TypeScript no puede proporcionar verificaciones de tipo en estos casos.
  
   - **Aserciones y el `DOM`**:
  
     Al interactuar con el DOM en TypeScript, a menudo necesitas asertar el tipo de un elemento del DOM para acceder a sus propiedades y métodos específicos.
     
     La aserciones son comúnmente utilizadas para asignar el tipo de un elemento HTML del DOM dentro de nuestro código TypeScript.
     
     Todos los elementos del DOM tienen sus propios métodos y atributos a los cuales quizás necesitamos acceder.

     TypeScript no sabe de qué tipo es un elemento del DOM. Por ejemplo, un canvas:

     ```typescript
     const canvas = document.getElementById('canvas');

     // Esto nos devuelve:
     // `null` si no lo encuentra
     // `HTMLElement` si lo encuentra
     ```
     
     Podríamos utilizar la palabra reservada `as` para "obligar" a TypeScript a tratar el tipo de una determinada manera, tal que así:

     ```typescript
     // Aquí estamos obligando a TypeScript a fiarse de nosotros mientras nos hemos confundido a escribir el ID
     const canvas = document.getElementById('span') as HTMLCanvasElement; 
     ```

     En el ejemplo de arriba, si no se encontrara el elemento con el ID canvas, nos saldría un error, y si escribiéramos mal (cosa muy probable) el nombre del ID o nos confundiéramos al hacerlo, también se nos arruinaría todo. Por lo tanto, no podemos obligar a TypeScript a hacernos caso porque trataría el dato como nosotros le decimos, pero no haría ninguna validación del mismo.

     `Si como somos seres humanos y nos podemos equivocar, es mejor realizar una validación en vez de una aserción la mayor parte de veces, porque así hacemos que TypeScript realice una inferencia automática de los tipos y evitamos posibles errores humanos`. `A esto se le llama narrowing también`.
     
     Lo podríamos hacer de la siguiente forma:
     
     ```typescript
     // Cómo sabe TypeScript que realmente estás recuperando un elemento <canvas /> ???
     const canvas = document.getElementById('canvas');

     // Tendremos que realizar una validación para realizar una inferencia automática:
     if (canvas instanceof HTMLCanvasElement) {
       const ctx = canvas.getContext('2d');
     };
     ```
  
   - **Aserciones y las Conversiones entre Types**:
  
     Por ejemplo, si estás recibiendo datos de una API y necesitas convertirlos a tipos específicos, puedes usar aserciones de tipo para indicar a TypeScript qué tipo esperas.
  
   - **No Engañes al Compilador**:
  
     Las aserciones de tipo te permiten `decirle` al compilador qué tipo debe considerar un valor. Sin embargo, si te equivocas en la aserción, es posible que obtengas errores en tiempo de ejecución.
  
   - **Debes Estar Seguro del Tipo**:
  
     Antes de usar una aserción de tipo, asegúrate de que estás completamente seguro de que el valor es del tipo que afirmas. Si cometes un error, podrías introducir errores difíciles de depurar en tu código.
      
   En resumen, las aserciones de tipo en TypeScript te proporcionan una forma de comunicarte con el compilador sobre el tipo de un valor cuando TypeScript no puede determinarlo por sí mismo. Sin embargo, debes usarlas con precaución y asegurarte de que estás seguro del tipo del valor que estás asertando.

9. #### **`Type Intersection`**:

   `La intersección de tipos en TypeScript te permite combinar múltiples tipos para formar uno solo`. `Se denota utilizando el operador &`. `Esto significa que el valor resultante tendrá todas las propiedades y características de los tipos combinados`.
   
   Por ejemplo, si tienes un tipo `A` con ciertas propiedades y un tipo `B` con otras propiedades, puedes crear un tipo `C` que incluya ambas propiedades utilizando una intersección de tipos.
   
   ```typescript
   type A = { propA: number };
   type B = { propB: string };
   
   type C = A & B;
   
   const objetoC: C = {
     propA: 10,
     propB: "Hola"
   };
   ```
   
   En este ejemplo, el tipo `C` es una intersección de `A` y `B`, lo que significa que un objeto de tipo `C` debe tener tanto la propiedad `propA` como la propiedad `propB`.
   
   Es importante mencionar que las intersecciones son útiles cuando necesitas combinar diferentes conjuntos de propiedades de varios tipos.
   
   Por ejemplo, si estás trabajando en un sistema que requiere que un objeto tenga ciertas características de diferentes fuentes, puedes usar intersecciones para combinar estos requisitos.
   
   ```typescript
   type Requisitos1 = { propA: number; propB: string };
   type Requisitos2 = { propC: boolean; propD: number };
   
   type ObjetoCumpleRequisitos = Requisitos1 & Requisitos2;
   
   const objeto: ObjetoCumpleRequisitos = {
     propA: 42,
     propB: "Hola",
     propC: true,
     propD: 10
   };
   ```
   
   En este caso, `ObjetoCumpleRequisitos` debe tener tanto las propiedades de `Requisitos1` como las de `Requisitos2`.
   
   `También se pueden usar para extender un tipo con otro tipo. Esto permite combinar las propiedades y características de varios tipos en uno solo`.

   Por ejemplo, si tienes un tipo `A` con ciertas propiedades y un tipo `B` con otras propiedades, puedes crear un nuevo tipo `C` que incluya todas las propiedades de `A` y `B` utilizando una intersección de tipos.
   
   ```typescript
   type A = { propA: number };
   type B = { propB: string };
   
   type C = A & B;
   
   const objetoC: C = {
     propA: 10,
     propB: "Hola"
   };
   ```
   
   En este ejemplo, el tipo `C` tiene tanto la propiedad `propA` como la propiedad `propB`, lo que significa que un objeto de tipo `C` debe tener ambas propiedades.
   
   ```typescript
   type Animal = { name: string };
   type Bear = Animal & { hasFur: boolean, hibernates: boolean };
   
   const myBear: Bear = { name: "Yogi", hasFur: true, hibernates: true };
   ```
   
   En este ejemplo, el tipo `Bear` se crea extendiendo el tipo `Animal` con las propiedades adicionales `hasFur` (que indica si el oso tiene pelaje) y `hibernates` (que indica si el oso hiberna). Luego, se crea un objeto `myBear` que cumple con el tipo `Bear`, incluyendo todas las propiedades requeridas.
   
   Esto es útil cuando deseas crear un nuevo tipo que herede características de otros tipos existentes, permitiendo una mayor flexibilidad en la definición de tipos en TypeScript.
   Recuerda que las intersecciones son una herramienta poderosa para combinar tipos, pero también pueden llevar a tipos muy complejos si no se usan con moderación. Es importante mantener un equilibrio para mantener la legibilidad y la mantenibilidad del código.
   
9. #### **`Narrowing`**:

   El `narrowing en TypeScript se refiere al proceso en el que el compilador es capaz de deducir (inferir) el tipo de una variable en función de ciertas comprobaciones de flujo del código`. Esto significa que después de realizar ciertas verificaciones, TypeScript puede determinar con mayor precisión el tipo de una variable.

   Proceso mediante el cual el compilador puede reducir el rango de posibles valores para un tipo específico en función de ciertas comprobaciones o condiciones.
   
   Un ejemplo común de `narrowing es cuando utilizas condicionales if o switch y realizas verificaciones sobre una variable. Si el compilador puede determinar que ciertas condiciones son siempre verdaderas o falsas en función del flujo de código, entonces puede inferir el tipo de la variable` dentro del bloque condicional.
   
   Aquí hay un ejemplo para ilustrar el concepto de "narrowing":
   
   ```typescript
   function mostrarMensaje(valor: string | number) {
     if (typeof valor === "string") {
       // En este bloque, TypeScript sabe que 'valor' es de tipo 'string'
       console.log(`El valor es una cadena: ${valor.toUpperCase()}`);
     } else {
       // En este bloque, TypeScript sabe que 'valor' es de tipo 'number'
       console.log(`El valor es un número: ${valor.toFixed(2)}`);
     }
   };
   ```
   
   En este ejemplo, la función `mostrarMensaje` acepta un parámetro `valor` que puede ser tanto `string` como `number`. Dentro del bloque `if`, TypeScript "narrowea" el tipo de `valor` a `string`, ya que ha comprobado que la condición `typeof valor === "string"` es verdadera. De manera similar, dentro del bloque `else`, `valor` se "narrowea" a `number`.
   
   El narrowing es una característica importante de TypeScript que ayuda a aumentar la precisión de los tipos y proporciona herramientas adicionales para el desarrollo seguro y eficiente de código.
   
9. #### **`Type Alias`**:

   `Un Type Alias es una forma de asignar un nombre a un tipo existente o a una combinación de tipos`. Puedes pensar en ello como un apodo que le das a un tipo de dato para hacer más claro su propósito o para abstraer su complejidad.

   Por ejemplo, `si trabajas con objetos que tienen una estructura específica, puedes crear un alias para ese tipo de objeto. Esto hace que tu código sea más legible y fácil de entender`.

   - **Sintaxis de Alias**:

     ```typescript
     type MiTipo = TipoExistente;
     ```

     Ejemplo:

     ```typescript
     type Punto = { latitud: number; longitud: number };

     let coordenada: Punto = { latitud: 31.4201; longitud: 64.1888 };
     ```

   - **Alias para Types Compuestos**:

     Los Type Aliases también pueden usarse para combinar tipos existentes y crear tipos más complejos. Esto es especialmente útil cuando necesitas describir estructuras de datos complejas o patrones de uso frecuente.

     ```typescript
     type Coordenada = { x: number; y: number };
     type Triangulo = [Coordenada, Coordenada, Coordenada];
     ```

     En este ejemplo, hemos creado un Type Alias `Triangulo` que representa un `array de tres coordenadas`. Cada coordenada es un `Object` con propiedades `x` e `y`.

     Ahora Supongamos que tenemos un tipo que representa un objeto con información sobre un usuario:

     ```typescript
     type UserInfo = {
       id: number;
       username: string;
       email: string;
     };
     
     const user: UserInfo = {
       id: 1,
       username: "johndoe",
       email: "john@example.com"
     };
     ```

     En este caso, hemos creado un `alias` llamado `UserInfo` que representa un `Object` con tres propiedades: `id`, `username` y `email`. Luego, utilizamos este alias para definir la variable `user`.

     Si no utilizáramos el alias, el código se vería así:

     ```typescript
     const user: {
       id: number;
       username: string;
       email: string;
     } = {
       id: 1,
       username: "johndoe",
       email: "john@example.com"
     };
     ```

   - **No exageres creando Alias**:

     La creación de demasiados Alias puede llevar a un código complicado y difícil de mantener a la larga.
     
   En resumen, `los Type Alias son una herramienta poderosa en TypeScript que te permite asignar nombres descriptivos a tipos de datos existentes o combinar tipos para crear estructuras más complejas`. Esto mejora la legibilidad y reutilización del código.

10. #### **`Optional Properties`**:
   
   Las propiedades opcionales en TypeScript proporcionan flexibilidad al permitir que una propiedad no sea obligatoria en una estructura de datos, ya sea en una `interface`, un `type`, en un `class`, en `índices de un array` o en `parámetros de funciones`.
   Esto significa que `al interno de un objeto o en los parámetros de una función podemos asignar propiedades opcionales en la creación de su estructura, y no será necesaria su presencia a la hora de su asignación o en la creación de instancias`.

   ```typescript
   interface Persona {
     nombre: string; // La propiedad `nombre` no es opcional
     edad?: number; // La propiedad `edad?` es opcional
   };

   let persona1: Persona = { nombre: "Juan" }; // No da un error porque edad es opcional
   let persona2: Persona = { nombre: "María", edad: 30 }; // Esto también es válido, incluye la propiedad edad
   ```

   En este caso, `la propiedad edad es opcional porque tiene un signo de interrogación ? después de su nombre`. Esto indica que un objeto que implemente esta interfaz puede tener o no la propiedad edad.

   ```typescript
   type Usuario = {
     nombre: string;
     edad: number;
     correoElectronico?: string; // Correo electrónico es una propiedad opcional
   };
   
   // Ejemplo de uso
   const usuario1: Usuario = {
     nombre: "Juan",
     edad: 30,
     correoElectronico: "juan@example.com" // La propiedad correoElectronico está presente
   };
   
   const usuario2: Usuario = {
     nombre: "María",
     edad: 25
     // La propiedad correoElectronico no está presente
   };
   ```

   En este ejemplo, `Usuario` es un `type` que tiene tres propiedades: `nombre`, `edad` y `correoElectronico`. La última propiedad está marcada como opcional con el uso del símbolo `?`.

   ```typescript
   class Producto {
     nombre: string;
     precio: number;
     descripcion?: string; // Descripción es una propiedad opcional
     
     constructor(nombre: string, precio: number, descripcion?: string) {
       this.nombre = nombre;
       this.precio = precio;
       this.descripcion = descripcion;
     }
   };
   
   const producto1 = new Producto("Laptop", 1200); // Sin asignación de la prop opcional `descripcion`
   const producto2 = new Producto("Teléfono", 800, "Nuevo modelo 2023");
   
   console.log(producto1);
   console.log(producto2);
   ```

   En este ejemplo, la propiedad `descripcion` es definida como opcional, por lo que no es obligatoria su definición a la hora de crear una instancia de `Producto`.

   ```typescript
   let arrayMixto: (string | number)[] = ["uno", 23, "tres"];
   
   arrayMixto.forEach((element, index) => {
     if (typeof element === 'number') {
       console.log(`Elemento en la posición ${index} es de tipo number: ${element}`);
     } else {
       console.log(`Elemento en la posición ${index} es de tipo string: ${element}`);
     }
   });
   ```

   En este ejemplo, vemos cómo es posible utilizar índices opcionales en la creación de un array con TypeScript.

   ```typescript
   interface Producto {
     nombre: string;
     precio: number;
     descripcion?: string; // Descripción es una propiedad opcional
   };
   
   const productos: Producto[] = [
     { nombre: "Laptop", precio: 1200 },
     { nombre: "Teléfono", precio: 800, descripcion: "Nuevo modelo 2023" },
     { nombre: "Tablet", precio: 500 },
   ];
   
   productos.forEach(producto => {
     console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
     if (producto.descripcion) {
       console.log(`Descripción: ${producto.descripcion}`);
     }
   });
   ```

   Este último ejemplo es un ejemplo mixto, para que puedas ver cómo utilizar una prop opcional y trabajar con ella.

11. #### **`Readonly Properties`**:

   Una propiedad de solo lectura `read-only property` en TypeScript es una propiedad cuyo valor no puede ser modificado una vez que se le ha asignado un valor. `Esto significa que una vez que se inicializa la propiedad, no puede ser modificado su valor`.

   Para definir una propiedad como de solo lectura, se utiliza la palabra clave `readonly` antes del nombre de la propiedad. Esto se puede hacer en `interface` y en `clases`.

   ```typescript
   interface Punto {
     readonly x: number;
     y: number;
   };

   let punto: Punto = { x: 10, y: 20 };

   punto.x = 30; // Error, no se puede modificar el valor a una propiedad de solo lectura
   punto.y = 23 // No da error y se puede modificar porque no tiene `readonly` en la creación de su estructura
   ```

   En este ejemplo, cuando intentas asignar un nuevo valor a punto.x, TypeScript arroja un error porque la propiedad x está marcada como de solo lectura y no se puede modificar una vez que se ha asignado.

   Esta es una característica útil para asegurarse de que ciertos valores no cambien después de su inicialización, lo que puede ser importante en situaciones donde la inmutabilidad es esencial para el diseño del programa.

12. #### **`Template Union Type / Union Type / Intersection Type`**:

   Los Template Union Types, también conocidos como Template Literal Types, son una característica poderosa de TypeScript que permite crear tipos basados en patrones de cadenas de texto. Esta característica combina plantillas literales con tipos de unión para crear tipos que pueden representar patrones específicos de cadenas.

   - **Template Union Type**:

     La sintaxis básica de un `Template Union Type` es la siguiente:

     ```typescript
     type NombreTipo = `patrón${Tipo1 | Tipo2}`;
     ```

     - Las comillas graves o backticks `` se utilizan para definir el inicio y el final del patrón de cadena en `Template Union Type`.

     - `Tipo1` y `Tipo2` son tipos que pueden ser parte del patrón.

     Supongamos que queremos crear un tipo que represente diferentes formatos de fecha. Podríamos hacerlo de la siguiente manera:
     
     ```typescript
     type FormatoFecha = `dd/mm/yyyy` | `mm/dd/yyyy` | `yyyy-mm-dd`;
     ```
     
     `FormatoFecha` solo podrá ser una de las tres cadenas de texto especificadas.

     Ahora imagínate que deseas preservar una forma de escritura estandarizada para guardar las variables de colores escritos en forma hexadecimal. Podrías hacerlo así:

     ```typescript
     type Hexadecimal = `#${string}`; // Esto hará que el tipo `Hexadecimal` siempre deberá ser escrito de una manera determinada
     
     const color1: Hexadecimal = "0033ff"; // Esto dará un error, porque no está escrito según la forma estructurada en el tipo `Hexadecimal`

     const color2: Hexadecimal = "#FF2490"; // Correcto
     ```

     `Los Template Union Types son especialmente útiles cuando se utilizan en funciones genéricas para inferir (deducirlo por sí solo) y aplicar restricciones de tipo a argumentos de cadena de texto`.
     
     ```typescript
     function procesarCadena<T extends string>(texto: T): `¡Hola, ${T}!` {
       return `¡Hola, ${texto}!`;
     };
     
     let resultado = procesarCadena("Mundo"); // resultado tiene el tipo "¡Hola, Mundo!"
     ```
     
     En este ejemplo, la función `procesarCadena` toma un argumento de tipo `T` que será una cadena de texto. El tipo de `return` se infiere como una cadena de texto que comienza con `¡Hola, ` seguido del tipo de `T` (que es un string) y termina con `!`.

     En resumen, `los Template Union Types son extremadamente útiles para crear tipos específicos basados en patrones de cadenas de texto. Pueden combinarse con otras características de TypeScript, como condicionales y genéricos`, para crear tipos aún más complejos y personalizados.

   - **Union Type**:

     En TypeScript, `los Union Types son una característica que te permite combinar dos o más tipos en uno solo`. Esto significa que una variable con un Union Type puede tener uno de varios tipos diferentes.

     La sintaxis para definir un `Union Type` utiliza el operador de tubería `|` entre los tipos que se están uniendo.

     ```typescript  
     let miVariable: Tipo1 | Tipo2 | Tipo3; // La variable puede ser de un tipo o de otro
     
     type Tipo = Tipo1 | Tipo2; // `Tipo` puede tener un tipo u otro
     ```
     
     Ejemplo:

     ```typescript
     // Este tipo puede ser de tipo `string` o de tipo `boolean`    
     type Type_StringOrBoolean = string | boolean;
     
     let resultadoDelExamen: Type_StringOrBoolean = `Usted sacó un 10`; // No hay error porque le pasamos un string
     let isGraduated: Type_StringOrBoolean = false;
     let notaDelExamen: Type_StringOrBoolean = 23; // Type 23 is not assignable to type `Type_StringOrBoolean`
     ```
     
     Supongamos que queremos definir una función que acepte un argumento que pueda ser de tipo número o cadena de texto:
     
     ```typescript
     function imprimirID(id: number | string) {
         console.log("ID:", id);
     };
     ```
     
     En este ejemplo, `id` puede ser de tipo `number` o de tipo `string`. Puedes   pasar tanto un número como una cadena a esta función.
     
     También puedes utilizar Union Types en la definición de interfaces y tipos   personalizados:
     
     ```typescript
     type Resultado = number | string;
     
     interface Producto {
         nombre: string;
         precio: number;
         estado: "disponible" | "agotado";
     };
     
     let miResultado: Resultado = 10; // `miResultado` es de tipo number
     let otroResultado: Resultado = "Hola"; // `otroResultado` es de tipo string
     
     let miProducto: Producto = {
         nombre: "Camisa",
         precio: 29.99,
         estado: "disponible"
     };
     ```
   
     - `Proporcionan flexibilidad al permitir que una variable o parámetro acepte múltiples tipos`.
  
     - `Ayudan a manejar diferentes casos de uso en una función o estructura de datos`.
  
     En resumen, Union Types en TypeScript son una herramienta valiosa para manejar diferentes tipos de datos en situaciones donde un valor puede ser de uno de varios tipos. Esto proporciona una mayor flexibilidad en el diseño y el desarrollo de tus programas.

   - **Intersection Type**:
     
     En TypeScript, `los Intersection Types permiten combinar múltiples tipos en uno solo. A diferencia de los Union Types, donde una variable puede ser de uno de varios tipos, en un Intersection Type, una variable debe tener todas las propiedades de los tipos combinados`.
     
     Es parecido a los `extends` de las `class`.
     
     La sintaxis para definir un `Intersection Type` utiliza el operador de intersección `&`.
     
     ```typescript
     type Tipos = Tipo1 & Tipo2 & Tipo3;

     let miVariable: Tipos = //... Se deben cumplir todos los tipos
     ```

     Ejemplo:

     ```typescript
     type Tipo1 = {
         propiedad1: string;
     };
     
     type Tipo2 = {
         propiedad2: number;
     };
     
     type Tipo3 = {
         propiedad3: boolean;
     };
     
     type Tipos = Tipo1 & Tipo2 & Tipo3;
     
     let miVariable: Tipos = {
         propiedad1: "Hola",
         propiedad2: 42,
         propiedad3: true
     };
     
     // El siguiente código mostrará un error porque `miVariableIncorrecta` no tiene la propiedad `propiedad3`, que es requerida por el tipo `Tipos`
     let miVariableIncorrecta: Tipos = {
         propiedad1: "Hola",
         propiedad2: 42
     };
     ```
     
     En este ejemplo, `miVariable` es una variable que cumple con todas las propiedades definidas en `Tipo1`, `Tipo2` y `Tipo3`, ya que tiene `propiedad1`, `propiedad2` y `propiedad3` con los tipos correctos.

     Si intentas asignar un valor que no cumple con alguna de las propiedades, TypeScript te mostrará un error.

     Supongamos que queremos crear un tipo que represente a un estudiante que también es un atleta. Esto significa que el objeto debe tener tanto propiedades de estudiante como de atleta.
     
     ```typescript
     type Estudiante = {
         nombre: string;
         edad: number;
         grado: string;
     };
     
     type Atleta = {
         deporte: string;
         medallas: number;
     };
     
     type EstudianteAtleta = Estudiante & Atleta;
     
     let miEstudianteAtleta: EstudianteAtleta = {
         nombre: "Juan",
         edad: 20,
         grado: "Universidad",
         deporte: "Natación",
         medallas: 3
     };
     ```
     
     En este ejemplo, `EstudianteAtleta` es un tipo que tiene todas las propiedades de `Estudiante` y todas las propiedades de `Atleta`.
     
     - `Permiten crear tipos complejos que tienen todas las características de los tipos combinados`.

     - `Son útiles en situaciones donde se necesita que un objeto cumpla con múltiples criterios`.
     
     - `Recordar que los Intersection Types requieren que el objeto cumpla con todas las propiedades de los tipos combinados. Si alguna propiedad falta, se producirá un error`.
     
     En resumen, Intersection Types en TypeScript te permiten combinar múltiples tipos para crear tipos más complejos y específicos. Esto es útil cuando necesitas representar objetos que deben cumplir con múltiples criterios o tener múltiples funcionalidades.
   
13. #### **`Type Indexing`**:

   Type Indexing en TypeScript es una característica que te permite acceder a los miembros de un tipo utilizando un índice, similar a como lo harías con un array. Esto es útil cuando tienes tipos que representan estructuras de datos indexables, como arrays o objetos.
   
   La sintaxis básica para el Type Indexing es usar corchetes `[]` para indicar el tipo del índice que se utilizará para acceder a los miembros del tipo.
   
   Ejemplo:
   
   ```typescript
   type Empleado = {
       nombre: string;
       edad: number;
       cargo: string;
   };
   
   type InfoEmpleado = Empleado['nombre']; // Reutilizamos el tipo de dato de la prop'nombre' estructurada en Empleado, para usarla en `InfoEmpleado`
   ```
   
   En este ejemplo, `Empleado` es un tipo que representa la estructura de un empleado con propiedades como `nombre`, `edad` y `cargo`. Luego, creamos un nuevo tipo `InfoEmpleado` utilizando `Type Indexing` para acceder al tipo de dato de la propiedad `nombre` en el tipo `Empleado`.
   
   - **Uso con Arrays**:
   
     El Type Indexing también es útil para trabajar con arrays:
     
     ```typescript
     type Numeros = number[];
     type PrimerElemento = Numeros[0]; // Tipo de dato del primer elemento en el array
     ```
     
     En este caso, `Numeros` es un tipo que representa un array de números. Luego, utilizamos Type Indexing para acceder al tipo del primer elemento en el array.
   
   - **Uso con Objetos**:
     
     También puedes utilizar Type Indexing con objetos:
     
     ```typescript
     type Coche = {
         marca: string;
         modelo: string;
         año: number;
     };
     
     type Propiedad = 'marca' | 'modelo' | 'año';
     type TipoDeDato = Coche[Propiedad]; // Tipo de dato de una propiedad específica en Coche
     ```
     
     Aquí, `Coche` es un tipo que representa la estructura de un coche. Luego, creamos un tipo `Propiedad` que es una unión de las claves (propiedades) del tipo `Coche`. Después, utilizamos Type Indexing para acceder al tipo de dato de una propiedad específica en `Coche`.
   
   Es importante tener en cuenta que el `Type Indexing solo funciona con tipos que tienen propiedades indexables`. No puedes utilizar Type Indexing en tipos que no tienen esta característica.
   
   Además, ten en cuenta que TypeScript realiza comprobaciones de tipos en tiempo de compilación, por lo que si intentas acceder a una propiedad que no existe en el tipo, obtendrás un error.
   
   En resumen, `Type Indexing` es una poderosa herramienta en TypeScript que `te permite acceder a los miembros de un tipo de manera dinámica utilizando índices`. Esto es útil para trabajar con estructuras de datos indexables como arrays y objetos.

14. #### **`Type From Value`**:

   En TypeScript, `typeof` es un operador que te permite extraer el tipo de un valor o una variable en tiempo de compilación. Esto es útil cuando quieres utilizar el tipo de una variable o un valor existente para definir otros tipos.

   `typeof` es un operador que permite sacar el tipo de cualquier cosa en TypeScript.
   
   Ejemplo:
   
   Supongamos que tenemos una variable `numero` con el valor `42`:
   
   ```typescript
   let numero = 42;
   ```
   
   Si queremos crear un tipo que represente el tipo de `numero`, podemos usar `typeof` de la siguiente manera:
   
   ```typescript
   type TipoNumero = typeof numero;
   ```
   
   En este caso, `TipoNumero` será inferido como el tipo `number` porque `numero` es de tipo `number`.

   ```typescript
   const address : {
     planet: "Earth",
     city: "Madrid",
   };

   type Address = typeof address; // Esto infiere el tipo `Object` de `address`, en el tipo `Address`

   const addressFarFromHome: Address = {
     planet: "Mart", 
     city: "Lun" // Ahora el objeto `addressFarFromHome` esperará todas las props del objeto `address` porque le asignamos el tipo `Address`
   };
   ```
   
   - **`typeof` con Funciones**:
   
     También puedes utilizar `typeof` con funciones para obtener el tipo de la función. Por ejemplo:
     
     ```typescript
     function saludar(nombre: string): string {
       return `¡Hola, ${nombre}!`;
     };
     
     type TipoSaludo = typeof saludar;
     ```
     
     En este caso, `TipoSaludo` será inferido como el tipo de la función `saludar`, que es `(nombre: string) => string`.
     
   - **`typeof` con Objetos**:
   
     Puedes utilizar `typeof` para obtener el tipo de un objeto existente:
     
     ```typescript
     const persona = {
       nombre: "Juan",
       edad: 30,
     };
     
     type TipoPersona = typeof persona;
     ```
     
     Aquí, `TipoPersona` será inferido como el tipo que representa la estructura del objeto `persona`.

   - **`typeof` from function return**:

     Este operador, también nos permite recuperar el tipo que se devuelve al interno de una función.

     ```typescript
     const createAddress = () => {
       return {
         planet: "",
         city: "",
       }
     };

     type Address = ReturnType<typeof createAddress>; // El tipo `Address` tendrá el tipo que se devuelve en la función
     ```

     En este ejemplo, conseguimos el tipo que devuelve la función `createAddress` con todas sus propiedades usando `ReturnType` y `typeof`, y lo guardamos dentro del nuevo tipo `Address`.
     
     `ReturnType` es una utilidad incorporada en TypeScript que permite obtener el tipo de retorno de una función.

     Esta utilidad es especialmente útil cuando trabajas con funciones genéricas o cuando necesitas manipular tipos de datos de manera dinámica en tu código.
   
   Es importante tener en cuenta que `typeof solo puede ser usado con expresiones y no con tipos de datos primitivos o literales`. Por ejemplo, esto no funcionará:
   
   ```typescript
   type TipoNumero = typeof 42; // Error: no puedes usar typeof con un valor literal
   ```
   
   En resumen, `typeof` en TypeScript te permite obtener el tipo de un valor o una variable en tiempo de compilación. Esto es útil cuando quieres utilizar el tipo de una variable o un valor existente para definir otros tipos, lo cual puede ser especialmente útil en situaciones donde la información del tipo está disponible en tiempo de ejecución.

15. #### **`Mapped Types`**:

   `Los Mapped Types` en TypeScript son una característica poderosa que te permite crear nuevos tipos basados en la estructura de un tipo existente. Básicamente, `te permiten transformar cada propiedad de un tipo de una cierta manera, y así obtener un nuevo tipo`.
   
   ```typescript
   type NuevoTipo = {
     [Propiedad existente]: Tipo de transformación;
   };
   ```

   Iterando sobre Propiedades:

   `[Propiedad existente]` representa cada una de las propiedades en el tipo original que estás transformando. Esto te permite iterar sobre cada propiedad (`key`).

   Tipo de Transformación:

   `Tipo de transformación` especifica qué tipo tendrán las propiedades en el nuevo tipo. Puede ser el mismo tipo que el original `(Type[Property])`, o puedes aplicar modificadores y hacerlo opcional `(Type[Property]?)`, de solo lectura `(readonly Type[Property])`, que devuelva un tipo distinto por completo `(string)`, o incluso crear un nuevo tipo basado en la propiedad.
   
   Aquí hay algunos ejemplos para ilustrar cómo funcionan los "Mapped Types":
   
   - **Readonly**
   
     ```typescript
     type Readonly<Type> = {
       readonly [Property in keyof Type]: Type[Property];
     };
     
     // Uso:
     type Usuario = {
       nombre: string;
       edad: number;
     };
     
     type UsuarioReadOnly = Readonly<Usuario>;
     // Esto hace que todas las propiedades de `Usuario` sean de solo lectura.
     ```

     Este mapea sobre todas las propiedades `Property` de `Type` y las hace de solo lectura, gracias al `keyof`.
   
   - **Partial**
   
     ```typescript
     type Partial<T> = {
       [P in keyof T]?: T[P];
     };
     
     // Uso:
     type Coche = {
       marca: string;
       modelo: string;
       año: number;
     };
     
     type CocheParcial = Partial<Coche>;
     // Esto hace que todas las propiedades de `Coche` sean opcionales.
     ```

     Este hace que todas las propiedades de `T` sean opcionales (`?` al final de cada prop).
   
   - **Pick**
   
     ```typescript
     type Pick<T, K extends keyof T> = {
       [P in K]: T[P];
     };
     
     // Uso:
     type Animal = {
       nombre: string;
       tipo: string;
       edad: number;
     };
     
     type InfoAnimal = Pick<Animal, "nombre" | "tipo">;
     // Esto crea un tipo que solo tiene las propiedades `nombre` o `tipo` de `Animal`.
     ```

     Este permite seleccionar un subconjunto de propiedades de `T` especificado por `K`.
   
   - **Record**
   
     ```typescript
     type Record<K extends string | number | symbol, T> = {
       [P in K]: T;
     };
     
     // Uso:
     type DiasSemana = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";
     type Horarios = Record<DiasSemana, string>;
     // Esto crea un tipo donde las claves son los días de la semana y los valores son strings.
     ```

     Este crea un nuevo tipo donde las claves son del tipo `K` y los valores son de tipo `T`. Esto representará los pares `(Key: Value)` de un objeto, por ejemplo.

   - **Omit**:

     ```typescript
     type Omit<T, K extends keyof T> = {
       [P in Exclude<keyof T, K>]: T[P];
     };
     
     // Uso:
     type Coche = {
       marca: string;
       modelo: string;
       año: number;
     };
     
     type CocheSinModelo = Omit<Coche, "modelo">;
     // Esto crea un tipo que tiene todas las propiedades de Coche excepto `modelo`.
     ```
     
     `T` es el tipo del que deseamos omitir propiedades. `K` es un conjunto de las claves a omitir.

   - **Required**:

     ```typescript
     type Required<T> = {
       [P in keyof T]-?: T[P];
     };
     
     // Uso:
     type Usuario = {
       nombre?: string;
       edad?: number;
     };
     
     type UsuarioRequerido = Required<Usuario>;
     // Esto hace que todas las propiedades de Usuario sean requeridas.
     ```
     
     El tipo `Required` hace que todas las propiedades del tipo sean obligatorias.

   `Los Mapped Types son una característica que te permite trabajar con tipos de datos de manera más dinámica y expresiva. Puedes crear tipos complejos y personalizados con facilidad, lo que te da un mayor control sobre la estructura de tus datos. Esto es especialmente útil en situaciones donde necesitas manipular y transformar tipos de manera programática.`

15. #### **`Los Types en los Arrays`**:

   Los arrays en TypeScript pueden tener tipos específicos. Esto significa que puedes definir qué tipo de datos pueden contener los elementos de un array. Aquí está una explicación detallada sobre los tipos en los arrays de TypeScript:
   
   - **Arrays Homogéneos**
     
     Un array homogéneo es aquel en el que todos los elementos tienen el mismo tipo de dato.
     
     Puedes definir el tipo de dato que contendrá un array de la siguiente manera:
     
     ```typescript
     let numeros: number[] = [1, 2, 3, 4, 5]; // `numeros` es un array que solo puede contener números
     ```
     
     También puedes utilizar los tipos genéricos para definir el tipo de un array. Se define de la siguiente forma:
     
     ```typescript
     let lista: Array<number> = [1, 2, 3, 4, 5]; // También `lista` es un array de solo números
     ```
     
   - **Arrays Multi-Type**
     
     También puedes tener arrays que contengan varios tipos de datos. Esto se logra utilizando `Union Types` (`|`).
     
     ```typescript
     let mixto: (string | number)[] = ["Hola", 42, "Mundo"];

     // Alternativa
     let mixto: Array<string | number> = ["Hola", 42, "Mundo"];
     ```
     
     En este caso, `mixto` es un array que puede contener tanto cadenas de texto como números.
     
   - **Tuple Arrays**
   
     `Un tuple array es un tipo especial de array donde el type y la cantidad de elementos son específicos e invariables`.
     
     ```typescript
     let persona: [string, number] = ["Juan", 30];
     ```
     
     En este caso, `persona` es un array que debe contener exactamente dos elementos: un string y un número, en ese orden.

     `Existe un problema con los Tuples, y es que son mutables`.

     ```typescript
     type RGB = [number, number, number];

     const white: RGB = [255, 255, 255];

     white.push(3); // Esto no provoca error porque los Tuples son mutables     
     ```
     
     `Para resolver este problema se aconseja añadir siempre readonly para que queden siempre fijas e inmutables`.

     ```typescript
     type RGB = readonly [number, number, number];
     
     const white: RGB = [255, 255, 255];
     const black: RGB = [0, 0, 0];

     const color1: RGB = [1, 2]; // Esto está mal porque hay menos elementos que los estipulados en la estructura
     const color2: RGB = [233, 123, 233, 182]; // Esto también estaría mal

     white.push(3); // Esto ahora nos da un error gracias al utilizo de `readonly`
     ```

     En este ejemplo, `se crea un type RGB que representa la escala de colores red, green, blue y se define con 3 type number`. Esto `es un tuple porque no puede tener ninguna otra tipología de tipos en su interior y tampoco puede tener otra cantidad de elementos que no sean los estrictamente definidos en la estructura`. A demás se le añade un `readonly` para evitar posibles mutaciones.
     
   - **Arrays de Objetos**
     
     Puedes crear arrays que contengan objetos de cierto tipo.
     
     ```typescript
     interface Persona {
         nombre: string;
         edad: number;
     }
     
     let personas: Persona[] = [
         { nombre: "Juan", edad: 30 },
         { nombre: "María", edad: 25 },
         { nombre: "Carlos", edad: 35 }
     ];
     ```
     
     En este ejemplo, `personas` es un array que solo puede contener objetos que cumplan con la estructura definida en la interfaz `Persona`.

   - **Array de Arrays o Matriz**  

     También puedes definir una `Matriz` (array de arrays) para varias aplicaciones.

     ```typescript
     type ArrayValue = string | number;
     
     const ArrayDeArrays_3x3: readonly [
       [ArrayValue, ArrayValue, ArrayValue],
       [ArrayValue, ArrayValue, ArrayValue],
       [ArrayValue, ArrayValue, ArrayValue],
     ] = [
       ["X", 0, 22],
       ["pancho", 1, 22],
       ["pancho", 22, true] // Error. El tipo no es ni `string`, ni `number`
     ];
     ```
     
     En este ejemplo, se define un type llamado `ArrayValue` que puede ser una cadena de texto (string) o un número (number). Luego, se declara una variable llamada `ArrayDeArrays_3x3` que es una matriz de 3x3 donde cada elemento puede ser de type string o number, pero no podrá tener más de 3 elementos por array y tampoco podrá tener más de 3 array dentro del array "padre".

     Se puede hacer aún más específico:

     ```typescript
     // Introducimos exactamente los valores que deseamos que aparezcan
     type ArrayValue = 'X' | 0 | '';
     
     const ArrayDeArrays_3x3: readonly [
       [ArrayValue, ArrayValue, ArrayValue],
       [ArrayValue, ArrayValue, ArrayValue],
       [ArrayValue, ArrayValue, ArrayValue],
     ] = [
       ['X', 0, 'X'],
       ['X', '', 0],
       ['X', 0, 1] // Error. El tipo introducido no es ni `X`, ni `0`, ni `''`
     ];
     ```
     
   - **Arrays Readonly**
     
     Puedes hacer que un array sea de solo lectura usando la palabra clave `readonly`. Esto significa que no se pueden realizar modificaciones en el array después de su inicialización:
     
     ```typescript
     let numeros: readonly number[] = [1, 2, 3, 4, 5];

     // Alternativa
     let numeros: ReadonlyArray<number> = [1, 2, 3, 4, 5];
     ```
     
   Estos son los conceptos fundamentales sobre los tipos en los arrays de TypeScript. Al definir el tipo de datos que un array puede contener, puedes mejorar la robustez y la claridad de tu código.
     
16. #### **`Funciones en TypeScript`**:

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

   - **`Valor de un Parámetro por Defecto`**:

     TypeScript permite definir valores por defecto en las funciones.

     ```typescript
     function saludar(nombre: string, saludo: string = "Hola") {
       console.log(`${saludo}, ${nombre}`);
     }
  
     saludar("Juan"); // Imprime: "Hola, Juan"
     saludar("Maria", "Hi"); // Imprime: "Hi, Maria"
     ```

   - **`Funciones y Tipos`**:

     En TypeScript, las funciones también pueden tener tipos. Esto incluye el tipo de los parámetros que aceptan y el tipo del valor que devuelven.

     ```typescript
     // Función que suma dos números
     function sumar(a: number, b: number): number {
       return a + b;
     }
     
     let resultado = sumar(5, 3); // resultado tiene el tipo number
     ```

   - **`Funciones como Tipos y Tipos de Retorno`**:

     Las funciones también pueden ser utilizadas como tipos en TypeScript. Esto significa que podemos definir tipos que representen funciones específicas.
     
     ```typescript
     type OperacionMatematica = (a: number, b: number) => number;
     
     // Declaración en forma de Arrow Function
     let suma: OperacionMatematica = (a, b) => a + b;
     let resta: OperacionMatematica = (a, b) => a - b;
     ```

   - **`Arrow Functions y this`**:
  
     Las funciones de flecha en TypeScript tienen una sintaxis más concisa y `comparten el contexto this` del ámbito en el que fueron definidas.
  
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

     En TypeScript, `las funciones de flecha pueden tener un tipo de retorno inferido automáticamente por el compilador` si no se especifica explícitamente. En el caso de tu ejemplo:

     ```typescript
     let suma = (a: number, b: number) => a + b;
     ```

     `No es necesario especificar explícitamente el tipo de retorno` en este caso. Sin embargo, si deseas hacerlo por razones de claridad o para documentar el código, puedes hacerlo de la siguiente manera:

     ```typescript
     let suma = (a: number, b: number): number => a + b;
     ```

   - **`Sobrecarga de Funciones (Overloads)`**:

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
    
   - **`Generic Functions`**:

     `Una función genérica es una función que puede trabajar con varios tipos de datos al mismo tiempo`.

     ```typescript
     function outputCountryData<T1, T2>(country: T1, data: T2): void {
       console.log(`The data for ${country} is: ${data}`);
     }

     outputCountryData("Italy", 60_317_116);

     outputCountryData("Nigeria", "Naira");

     outputCountryData("United States of America", "English");

     outputCountryData("India", 1_352_642_280);
     ```

   - **`Union Type Functions`**:

     `Puedes usar union types para indicar que un parámetro puede aceptar más de un tipo si lo deseas`.

     ```typescript
     function outputCountryData(country: string | number, data: string | number): void {
       console.log(`The data for ${country} is: ${data}`);
     }

     outputCountryData("United States of America", "English");

     outputCountryData("India", 1_352_642_280);

     outputCountryData("India", true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
     ```    
     
17. #### **`Clases en TypeScript`**:

   Typescript `soporta la programación orientada a objetos` y te permite definir clases con propiedades y métodos.

   ```typescript
   class Empleado {
     // `public` es accesible desde cualquier parte del código
     // `readonly` es asignable soltanto 1 vez, en la clase o en la declaración
     // `private` es accesible unicamente desde su clase, ni en instancias, ni en `extends` de esa clase
     // `protected` es igual a `private`, pero puede ser utilizado dentro en un `extends` de la clase base

     public nombre: string;
     readonly id: string;
     private code: number;
     protected salario: number;
   
     constructor(nombre: string, id: string, code: number, salario: number) {
       this.nombre = nombre;
       this.id = id;
       this.code = code;
       this.salario = salario;
     }
   
     // Method
     public describe(): void {
       let description = `${this.nombre} `;
       description += `has the private code ${this.code}. `;
       description += `Has the ID: ${this.id} `;
       description += `and the salary is ${this.salario}.`;
   
       console.log(description);
     }
   }
   
   // Instancia
   const alberto = new Empleado("Alberto", "A-2350-#Y", 5341, 1250);
   
   alberto.describe();
   
   // Extends
   class EmpleadoDelMes extends Empleado {
     public isMejorDelMes: boolean;
   
     constructor(
       nombre: string,
       id: string,
       code: number,
       salario: number,
       isMejorDelMes: boolean,
     ) {
       super(nombre, id, code, salario);
   
       this.isMejorDelMes = isMejorDelMes;
     }
   
     public describeElMejorDelMes(): void {
       let description = `${this.nombre} is the best worker this month? `;
       description += `The answer is: ${this.isMejorDelMes}. `;
       description += `The award is 250$ more on salary = ${this.salario + 250}.`;
   
       console.log(description);
     }
   }
   
   // Instancia
   const juan = new EmpleadoDelMes("Juan", "X-2351-#R", 4412, 1250, true);
   
   juan.describe();
   juan.describeElMejorDelMes();
   
   juan.id = "asd"; // Error: Cannot assign to 'id' because it is a read-only property
   juan.code = 2133; // Error: Property 'code' is private and only accessible within class 'Empleado'
   juan.salario = 2800; // Error: Property 'salario' is protected and only accessible within class 'Empleado' and its subclasses
   ```

   En TypeScript, existen cuatro tipos de modificadores de acceso que se pueden aplicar a los miembros de una clase: `public`, `private`, `protected` y `readonly`. Cada uno tiene un impacto diferente en cómo los miembros de la clase pueden ser accedidos dentro y fuera de la misma. Vamos a explicar cada uno de ellos en el contexto de la clase `Empleado` proporcionada:

   - **`public`**:

     - `Descripción`: 
     
        Cuando un miembro se declara como público, puede ser accesible desde cualquier parte del código, ya sea dentro de la propia clase, desde una instancia de la clase o desde clases que heredan de esta.
     
     - `Ejemplo`: 
      
         En la clase `Empleado`, `nombre` es un miembro público. Esto significa que se puede acceder y modificar desde cualquier parte del código.
   
   - **`readonly`**:

     - `Descripción`: 
     
       Un miembro marcado como `readonly` sólo puede ser asignado una vez, ya sea en el momento de la declaración o dentro del constructor de la clase. Después de eso, su valor no puede ser modificado.

     - `Ejemplo`: 
     
       En la clase `Empleado`, `id` es un miembro de solo lectura. Esto significa que una vez que se le asigna un valor en el constructor, no puede ser cambiado posteriormente.
   
   - **`private`**:

     - `Descripción`: 
     
       Un miembro marcado como `private` sólo puede ser accedido dentro de la misma clase donde se definió. No puede ser accedido desde instancias de la clase ni desde clases que heredan de ella.

     - `Ejemplo`: 
     
       En la clase `Empleado`, `card` es un miembro privado. Esto significa que sólo puede ser accedido y modificado dentro de la propia clase.
   
   - **`protected`**:

     - `Descripción`: 
     
       Un miembro marcado como `protected` es similar a uno privado, pero con una diferencia clave: puede ser accedido por clases que heredan de la clase donde se definió el miembro.

     - `Ejemplo`: 
     
       En la clase `Empleado`, `salario` es un miembro protegido. Esto significa que puede ser accedido y modificado por la clase `Empleado` y por cualquier clase que herede de `Empleado`.

   En el contexto de la clase `Empleado`, los modificadores de acceso se utilizan para controlar qué partes del código pueden interactuar con los miembros de la clase y cómo pueden hacerlo. Esto es fundamental para la encapsulación y la seguridad de los datos en un programa.

   Las `clases` en TypeScript son una `herramienta poderosa para crear objetos con estructura definida`.

18. #### **`Módulos y Encapsulación`**:

   `TypeScript admite la modularización, permitiendo dividir el código en partes más pequeñas y reutilizables`. Puedes exportar e importar elementos entre módulos para mantener tu código organizado y modular.

    - **`.ts y .mts`**:
   
   En TypeScript, los archivos poseen la extensión `.ts` (TypeScript), que son los archivos fuente. Esta extensión de forma nativa no posee la capacidad de exportar o importar archivos. Para modularizar los archivos y poder utilizar los `export` e `import`, deberíamos cambiar la extensión del archivo `.ts` a `.mts`.
  
   Sin embargo, esto no hace falta si trabajamos con `Vite` o `Webpack` porque lo hacen de manera automática. `Node.js` no lo hace.
  
   Para más información sobre los módulos presentamos algunos links:
    
     - What are `.mjs`, `.cjs`, `.mts`, and `.cts` extensions?
     
       - **https://www.totaltypescript.com/concepts/mjs-cjs-mts-and-cts-extensions**
          
     - The module compiler option:
    
       - **https://www.typescriptlang.org/docs/handbook/modules/reference.html#node16-nodenext**
    
     - `.mts` is a cool file extension (TypeScript ES modules):
    
       - **https://mtsknn.fi/blog/mts-file-extension/**
   
19. #### **`Generics Types`**:

   Los `generics` son una característica importante que `permite escribir código reutilizable con tipos dinámicos`. Puedes crear funciones y clases que trabajen con diferentes tipos de datos de manera segura.

   Son fundamentales para escribir código flexible y reutilizable en TypeScript, ya que permiten que una parte del código pueda adaptarse a diferentes tipos de datos sin sacrificar la inferencia de tipos. Esto es especialmente valioso en situaciones donde necesitamos que una clase o función pueda trabajar con una amplia gama de tipos. Utilizar los angular brackets `<>` para definir y utilizar generics es una práctica común y poderosa en TypeScript.
   
   `Los generics types nos brindan la posibilidad de crear una variable en la estructura de nuestro código al puesto de los type primitivos, dándonos la ventaja de poder usarlos todos indistintamente. En pocas palabras, esto le dice a TypeScript que puede recibir la tipología del type que nosotros queramos asignarle esplicitamente o que lo infiera (deduzca) automáticamente, lo cual nos permite trabajar types diferentes cada vez que lo necesitemos, sin provocar errores`. `Esta variable se crea utilizando los angular brackets <> y puede tener el nombre que desees, normalmente se utiliza T (Type)`. `Esto es especialmente útil para classes y functions, dado que pueden recibir varios tipos distintos de types`.

   ```typescript
   // La variable se pone dentro de los `angular brackets` y concede a TypeScript la posibilidad de recibir esplicitamente o inferir (deducir) automáticamente, los types que nosotros usemos.
   function primeroDe<Type>(array: Type[]): Type {
     return array[0];
   };

   const numeros: number[] = [1, 2, 3];
   const primerNumero: number = primeroDe(numeros);
   ```

   En este ejemplo, `Type` es la variable de un tipo genérico que se adapta al tipo de datos que viene especificado en la inicialización del código.

   ```typescript
   const identity = <T>(value: T): T => value;
   
   // Aquí estamos estamos asignando el type que nosotros deseamos trabajar esplicitamente y TypeScript lo aceptará tal cual
   let output1 = identity<string>("");
   
   // Acá TypeScript está asignando el type `number` por sí solo, gracias a la inferencia de tipos
   let output2 = identity(2310);

   // Inferencia del type
   let output3 = identity(true);
   ```

   ```typescript
   // También podemos usar más de una variable
   const identityMultiple = <T1, T2>(value1: T1, value2: T2): [value1: T1, value2: T2] => {
     return [value1, value2];
   };
   
   // La inferencia nos dirá que output4 recibe un array de valores con los tipos `string` y `number`
   let output4 = identity("Marcos", 32);

   // O podemos hacerlo de manera esplicita
   let output5 = identity<boolean, string>(true, "");
   ```

   ```typescript
   // Aquí estamos obligados a definir esplicitamente el tipo que corresponderá a `<Type>` de la `interface` `This`, en la creación del objeto `currencyObj1` y `currencyObj2`. Si no lo hacemos, obtendremos un error. En pocas palabras, le debemos decir a `currencyObj1` y `currencyObj2` qué tipo trabajará la prop `currency` (u otras props si las hubiera)

   interface This<Type> {
     currency: Type;
   }
   
   const currencyObj1: This<string> = { currency: "Marcos" };
   
   const currencyObj2: This<{ name: string; surname: string }> = {
     currency: {
       name: "Marcos",
       surname: "González",
     },
   };
   ```
   
   Este es otro ejemplo interesante que aplica `interface` genéricas.

   Ahora, `si desearas poder reutilizar los tipos que adopta la interface This en los objetos declarados en el ejemplo precedente, deberías utilizar los type y extraer el tipo definido en el objeto currencyObj1 y currencyObj2`. `De esta forma, tendremos acceso a estos tipos en todo nuestro código`. Puedes hacerlo de la siguiente manera:

   ```typescript
   // (También se podría hacer con `type` en vez de `interface`)
   interface This<Type> {
     currency: Type;
   };

   type CurrencyString = This<string>;
   type CurrencyObject = This<{ name: string; surname: string }>;
   
   const currencyObj1: CurrencyString = { currency: "Marcos" };
   
   const currencyObj2: CurrencyObject = {
     currency: {
       name: "Marcos",
       surname: "González",
     },
   };
   ```

   En este ejemplo, tenemos acceso a los tipos reutilizables `CurrencyString` y `CurrencyObject` de forma generalizada en nuestro código.
   
   Recuerda que la propiedad `.length` sólo existirá si trabajamos con arrays, porque lo que definimos en el proceso de desarrollo (TypeScript) no es lo mismo que se devuelve en el proceso de ejecución (JavaScript).

   ```typescript
   function loggingIdentity<Type>(arg: Type): Type {
     console.log(arg.length); /* Error: Property 'length' does not exist on type 'Type'. */
     return arg;
   };

   function loggingIdentity<Type>(arg: Type[]): Type[] {
     console.log(arg.length); // No error
     return arg;
   };
   
   // Alternativa
   function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
     console.log(arg.length); // Array has a .length, so no more error
     return arg;
   };
   ```
   
   Otra forma de definir un tipo genérico es escribirlo como una `firma de llamada de un tipo literal de objeto` y para entender este concepto vamos a explicar primero qué es una `firma de llamada`:

   - **firma de llamada**:

     `Una firma de llamada en TypeScript se refiere a la forma en que un tipo o una estructura puede ser invocada o utilizada`.

     Es una descripción de cómo interactuar con una entidad en términos de los tipos de entrada que acepta y el tipo de salida que produce. Esto proporciona un nivel de abstracción que permite definir interfaces y tipos de manera más genérica, sin tener que detallar la implementación subyacente. Esto es fundamental para la creación de código flexible y reutilizable en TypeScript.

     ```typescript
     Copy code
     function suma(a: number, b: number): number {
         return a + b;
     };
     // En este caso, la firma de llamada de la función `suma` es `(a: number, b: number) => number`. Esto indica que la función acepta dos argumentos, ambos de tipo `number`, y devuelve un valor de tipo `number`.
     ```

     En este caso se refiere a la estructura y los tipos de los parámetros que una función acepta, así como el tipo de valor que devuelve. Es una forma de describir la forma y el comportamiento de una función sin proporcionar la implementación real. De todas formas, una firma de llamada no se limita solo a funciones, también puede aplicarse a objetos o clases que tengan una estructura similar a una función.

     En términos más genéricos, una firma de llamada describe la estructura y los tipos de entrada y salida que se esperan en una operación específica. Esto puede aplicarse a:
     
     - `Funciones`: Como ya vimos, la firma de llamada de una función especifica los tipos de sus argumentos y el tipo de retorno que se espera.
     
     - `Métodos de Objetos o Clases`: Pueden tener firmas de llamada que describan cómo se invocan.
     
     - `Constructores`: La firma de llamada de un constructor de clase especifica los tipos de los argumentos que debe recibir.
     
     - `Interfaces y Tipos de Objeto`: Pueden tener firmas de llamada para definir qué métodos o propiedades deben estar presentes en un objeto que implemente esa interfaz o tipo.
     
     -  `Funciones de Callback`: En situaciones donde se espera una función de retorno como argumento, la firma de llamada especifica cómo se debe ver esa función.

   `Entonces cuando hablamos de firma de llamada de un tipo literal de objeto, nos referimos a una forma de definir un tipo genérico que representa una función. Este tipo de función acepta un argumento con una estructura específica (un tipo literal de objeto) y devuelve otro objeto con una estructura también específica`.
   
   Supongamos que queremos definir un tipo genérico que represente una función que toma un objeto con una propiedad `nombre` de tipo `string` y devuelve un objeto con la misma propiedad `nombre`, pero de tipo `number`. Podríamos hacerlo de la siguiente manera:
   
   ```typescript
   type FuncionCambiaTipo = <T extends { nombre: string }>(objeto: T) => { nombre: number };
   ```
   
   En este ejemplo, `FuncionCambiaTipo` es el nombre del tipo genérico que estamos definiendo.`<T extends { nombre: string }>` significa que este tipo genérico `T`, que es un objeto, debe tener una propiedad `nombre` de tipo `string` y `(objeto: T) => { nombre: number }` es la firma de llamada de la función. Significa que esta función toma un argumento de tipo `T` y devuelve un objeto con una propiedad `nombre` de tipo `number`.
   Entonces, cuando utilizamos `FuncionCambiaTipo`, estamos diciendo que esperamos una función que cumpla con esta firma específica.
   
   `extends` en este contexto indica una restricción en el tipo genérico.

   Estamos definiendo un tipo llamado `FuncionCambiaTipo`. `Este tipo es una función que toma un argumento objeto de tipo T y devuelve un objeto con una propiedad nombre de tipo number`.

   `<T extends { nombre: string }> es la declaración del tipo genérico T. Esto significa que T puede ser cualquier tipo, pero está restringido a tipos que tengan una propiedad nombre de tipo string`.
   
   Por lo tanto, `cuando se utiliza esta función, el argumento objeto debe ser de un tipo que tenga una propiedad nombre de tipo string. Esto proporciona cierta garantía de tipo y permite que la función trabaje con objetos que tienen una estructura específica`.
   
   `extends` en este contexto significa que el tipo genérico `T` debe extender (o ser un subtipo de) un tipo que tenga una propiedad `nombre` de tipo `string`.
   
   ```typescript
   type MiTipoGenerico<T> = (arg: T) => T;
   ```
   
   En este ejemplo, `MiTipoGenerico es un tipo que representa una función que toma un argumento de tipo T y devuelve un valor del mismo tipo T`.
   
   ```typescript
   function identity<Type>(arg: Type): Type {
     return arg;
   };
   
   let myIdentity: { <Type>(arg: Type): Type } = identity;
   ```
   
   En este fragmento de código estás definiendo una función genérica llamada `identity`. Esta función toma un argumento de tipo `Type` y devuelve el mismo tipo. Básicamente, esta función simplemente devuelve lo que se le pasa.
   Luego, estás declarando una variable `myIdentity` de tipo objeto que tiene una firma de llamada de función. Esta firma de llamada es una función que también es genérica y tiene la misma estructura que la función `identity`.
   En resumen, `myIdentity` es un objeto que tiene una función genérica con la misma firma que la función identity. Puedes usar `myIdentity` como si fuera la función `identity`.
   Este tipo de notación puede ser útil en situaciones donde necesitas definir un tipo de función de manera más precisa y detallada, especialmente cuando trabajas con funciones genéricas o con funciones de alto orden (que aceptan funciones como argumentos o devuelven funciones).
   
   Estas son otras formas poderosas de utilizar `generics` en TypeScript, y pueden ser especialmente útiles en situaciones donde necesitemos definir tipos de funciones o métodos que sean flexibles con respecto a los tipos de datos que manejan. 
   
   - **Generic Interface**:

   Tomando el objeto literal del ejemplo anterior, lo recreamos en una interfaz

     ```typescript
     interface GenericIdentityFn {
       <Type>(arg: Type): Type;
     };
     
     function identity<Type>(arg: Type): Type {
       return arg;
     };
     
     let myIdentity: GenericIdentityFn = identity;
     ```

     Si quisiéramos mover el parámetro genérico `<Type>` para que sea un parámetro de toda la interfaz, deberíamos moverlo al final del nombre de la misma `interface`. Esto nos permite ver sobre qué tipo(s) somos genéricos (por ejemplo, `Dictionary<string>` en lugar de solo `Dictionary`). Esto hace que el parámetro de tipo sea visible para todos los demás miembros de la interfaz.

     ```typescript
     interface GenericIdentityFn<Type> {
       (arg: Type): Type;
     };
     
     function identity<Type>(arg: Type): Type {
       return arg;
     };
     
     let myIdentity: GenericIdentityFn<number> = identity;
     ```

     Ahora nuestro ejemplo ha cambiado para ser algo ligeramente distinto. En lugar de describir una función genérica, `ahora tenemos una firma de función no genérica que forma parte de un tipo genérico`. `Cuando usemos GenericIdentityFn, ahora también necesitaremos especificar el argumento de tipo correspondiente (aquí: number)`, bloqueando efectivamente lo que usará la firma de llamada subyacente. `Comprender cuándo colocar el parámetro de tipo directamente en la firma de llamada y cuándo colocarlo en la interfaz misma será útil para describir qué aspectos de un tipo son genéricos y cuales no`.

   - **Generic Class**:

     Una clase genérica tiene una forma similar a una interfaz genérica. Las clases genéricas tienen una lista de parámetros de tipo genérico entre corchetes angulares `<>` después del nombre de la clase.

     ```typescript
     class GenericNumber<NumType> {
       zeroValue: NumType;
       add: (x: NumType, y: NumType) => NumType;
     };
     
     let myGenericNumber = new GenericNumber<number>();
     myGenericNumber.zeroValue = 0;
     myGenericNumber.add = function (x, y) {
       return x + y;
     };
     ```

     `Al igual que con la interfaz, poner el parámetro de tipo en la clase misma nos permite asegurarnos de que todas las propiedades de la clase funcionen con el mismo tipo.`

     `Una clase tiene dos lados en su tipo: el lado estático y el lado de instancia. Las clases genéricas solo son genéricas en su lado de instancia en lugar de en su lado estático, por lo que cuando se trabaja con clases, los miembros estáticos no pueden usar el parámetro de tipo de la clase.`

   - **Generic Restrictions**:

     En TypeScript, `Generic Restrictions` se refiere a las restricciones que se pueden aplicar a los tipos genéricos para limitar el conjunto de tipos que pueden ser utilizados como argumentos genéricos. Estas restricciones permiten especificar qué tipos de datos son válidos para ser utilizados en lugar de un tipo genérico.

     `Las restricciones genéricas se aplican utilizando la palabra clave extends seguida del tipo o interfaz que se utilizará como restricción. Esto significa que el tipo genérico debe extender o cumplir con la restricción especificada`.
     
     En el ejemplo de nuestro `loggingIdentity`, queríamos poder acceder a la propiedad `.length` de `arg`, pero el compilador no pudo probar que cada tipo tuviera esa prop, por lo que nos advierte que no podemos hacer esta suposición.
     
     ```typescript
     function loggingIdentity<Type>(arg: Type): Type {
       console.log(arg.length); // Error: Property 'length' does not exist on type 'Type'.
       return arg;
     };
     ```
     
     En lugar de trabajar con todos y cada uno de los tipos, nos gustaría restringir esta función para que funcione con todos y cada uno de los tipos que también tengan la propiedad `.length`. Siempre que el tipo tenga esta prop, lo permitiremos, pero es necesario que la tenga y para esto, debemos crear una restricción de lo que `Type` puede ser.
     
     Para hacerlo, crearemos una interfaz que describa nuestra restricción. Aquí, crearemos una interfaz que tiene una sola `.length` prop y luego usaremos esta interfaz y la palabra clave `extends` para indicar nuestra restricción:
     
     ```typescript
     interface Lengthwise {
       length: number;
     };
     
     function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
       console.log(arg.length); // Now we know it has a .length property, so no more error
       return arg;
     };
     ```
     
     Debido a que la función genérica ahora está restringida, ya no funcionará en todos los tipos:
     
     ```typescript
     loggingIdentity(3); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
     ```
     
     En lugar de ello, necesitamos pasar valores cuyo tipo tenga todas las propiedades requeridas:
     
     ```typescript
     loggingIdentity({ length: 10, value: 3 });
     ```

     Aquí ponemos otro ejemplo:

     ```typescript
     interface Animal {
       name: string;
     };
     
     function printName<Type extends Animal>(animal: Type): void {
       console.log(animal.name);
     };
     
     // Esto es válido, ya que Cat es un subtipo de Animal
     const cat: Animal = { name: "Whiskers" };
     printName(cat);
     
     // Esto dará un error, ya que string no es un subtipo de Animal
     const stringName = "Fluffy";
     printName(stringName); // Error
     ```
     
     En este ejemplo, la función `printName` acepta un argumento genérico `Type` que debe `extends` la `interface` `Animal`. Esto asegura que el argumento proporcionado tenga un `object` con una propiedad `name` de tipo `string`.

   Las restricciones genéricas son útiles para escribir código más seguro y proporcionar más información sobre los tipos que se utilizan en una función o clase genérica. Permiten restringir los tipos que pueden ser utilizados como argumentos genéricos, lo que puede mejorar la seguridad y la claridad del código.

20. #### **`TypeScript y Desarrollo Web`**:

   Las principales bibliotecas y frameworks, como `Angular`, `React` y `Vue.js`, `tienen soporte para TypeScript`. Esto permite escribir aplicaciones más robustas y mantenibles.

21. #### **`Librerías y Frameworks de Ejecución de TypeScript`**

   Algunos frameworks y librerías, como `Angular`, `NestJS`, y `Deno`, están diseñados para ejecutar código TypeScript directamente. Esto significa que no es necesario compilar manualmente el código antes de ejecutarlo.
     
22. #### **`Consideraciones y Ventajas`**:

    `TypeScript agrega complejidad adicional a tus proyectos, pero las ventajas de detección temprana de errores y herramientas de desarrollo mejoradas hacen que el esfuerzo valga la pena`. Además, la comunidad de desarrolladores de TypeScript es activa y proporciona recursos y librerías que facilitan su adopción.

    También `posee la ventaja de proporcionar sugerencias sobre el código`. Esto está `integrado en` editores de texto como `Visual Studio Code` o `WebStorm`, `mientras que otros` editores `como` `Atom` o `Vim`, `tienen extensiones` que soportan TypeScript.

23. #### **`Conclusiones`**:

    TypeScript es una herramienta poderosa en el mundo del desarrollo web y de aplicaciones. `Proporciona una forma más segura y estructurada de escribir código JavaScript, lo que resulta en aplicaciones más robustas y mantenibles`. Su capacidad para detectar errores en tiempo de desarrollo es especialmente valiosa en proyectos grandes y colaborativos. Si bien puede requerir un esfuerzo adicional, las ventajas que ofrece hacen que TypeScript sea una elección sólida para muchos desarrolladores y equipos de desarrollo.
