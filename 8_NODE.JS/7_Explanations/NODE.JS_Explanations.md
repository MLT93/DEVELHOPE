# **NODE.JS**

## Node.js: Una Explicación Detallada

1. #### **`Introducción a Node.js`**:

   Node.js es un entorno de ejecución de JavaScript del lado del servidor que permite a los desarrolladores construir aplicaciones web y de red escalables y eficientes. Utiliza el motor V8 de Google Chrome para ejecutar JavaScript en el servidor.

2. #### **`Características Principales`**:
   
   - **Asincronía y Event Loop**:
   
     Node.js se basa en un modelo de operaciones no bloqueantes y asíncronas. Esto significa que puede manejar múltiples operaciones simultáneamente sin detener la ejecución del programa.

   - **Módulos y NPM**:

     Node.js utiliza un sistema de módulos que permite a los desarrolladores dividir su código en pequeñas piezas reutilizables. NPM (Node Package Manager) es una herramienta que facilita la gestión de dependencias y la instalación de bibliotecas y paquetes de código.

   - **Rendimiento y Escalabilidad**:

     Node.js está diseñado para ser eficiente y escalable. Su arquitectura basada en eventos y su capacidad para manejar conexiones concurrentes lo hacen ideal para aplicaciones en tiempo real y de alta concurrencia.

   - **Acceso al Sistema de Archivos**:

     Node.js proporciona capacidades para interactuar con el sistema de archivos del servidor, lo que permite la lectura y escritura de archivos.

   - **Comunidad Activa**:

     Node.js tiene una comunidad activa de desarrolladores y una amplia variedad de módulos y bibliotecas disponibles a través de NPM, lo que facilita la creación de aplicaciones con funcionalidades avanzadas.

3. #### **`Núcleo de Node.js`**:

   El núcleo de Node.js incluye módulos esenciales como `fs` para la interacción con el sistema de archivos, `http` para la creación de servidores web, `events` para la manipulación de eventos, y otros que brindan funcionalidades esenciales.

4. #### **`Express.js`**:

   Express.js es un marco de aplicación web para Node.js que simplifica la creación de aplicaciones web y APIs. Proporciona un conjunto de herramientas y middleware para facilitar el enrutamiento, la gestión de sesiones, el procesamiento de peticiones y más.

5. #### **`Manejo de Asincronía en Node.js`**:

   En Node.js, el manejo de operaciones asíncronas se realiza principalmente a través de callbacks, promesas y async/await. Los callbacks son fundamentales para gestionar la asincronía y modularizar el código.

6. #### **`Event Emitters y Eventos`**:

   Node.js sigue un patrón de diseño basado en eventos. Los objetos EventEmitter permiten la emisión y escucha de eventos, lo que facilita la comunicación entre diferentes partes de una aplicación.

7. #### **`Socket.io`**:

   Socket.io es una biblioteca que facilita la creación de aplicaciones en tiempo real mediante la comunicación bidireccional entre el cliente y el servidor. Es especialmente útil para chats en tiempo real y aplicaciones de juegos.

8. #### **`Gestión de Dependencias con NPM`**:

   NPM es la herramienta estándar para la gestión de dependencias en proyectos de Node.js. Permite instalar, actualizar y gestionar bibliotecas y paquetes de código de manera eficiente.

9. #### **`Testing y Pruebas Unitarias en Node.js`**:

   Para garantizar la calidad del código, es esencial realizar pruebas unitarias. Herramientas como Mocha y Chai son populares para escribir y ejecutar pruebas en aplicaciones Node.js.

10. #### **`Consideraciones sobre Seguridad en Node.js`**:

   Al desarrollar aplicaciones en Node.js, es importante tener en cuenta las prácticas de seguridad, como la protección contra inyecciones de código, la gestión adecuada de contraseñas y la prevención de ataques de denegación de servicio.

11. #### **`Despliegue y Hosting de Aplicaciones Node.js`**:

   Para poner en producción una aplicación Node.js, hay varias opciones de hosting y plataformas de despliegue disponibles, como Heroku, AWS, DigitalOcean, entre otros.

12. #### **`Frameworks Adicionales`**:

   Además de Express.js, hay otros marcos populares en el ecosistema de Node.js, como Koa, Hapi y Nest.js, cada uno con sus propias características y enfoques.

13. #### **`Ventajas y Consideraciones`**:

   Node.js ofrece ventajas significativas en términos de rendimiento y escalabilidad, pero es importante tener en cuenta las necesidades específicas del proyecto al elegirlo como plataforma de desarrollo.

14. #### **`Conclusiones`**:

   Node.js es una plataforma poderosa y versátil que ha transformado la forma en que se desarrollan aplicaciones del lado del servidor en JavaScript. Su capacidad para manejar operaciones asíncronas y su ecosistema de módulos y bibliotecas lo convierten en una opción popular para una amplia gama de aplicaciones web y de red. Sin embargo, es importante comprender sus características y considerar las mejores prácticas al desarrollar con Node.js.

## Instalación de Node.js: Una Explicación Detallada

1. #### **`Pasos para Instalar Node.js`**:

   Aquí están los pasos detallados para instalar Node.js en tu sistema:

   - **Paso 1: Visita el Sitio Oficial de Node.js**

     Ve al sitio web oficial de Node.js en **https://nodejs.org/**.

   - **Paso 2: Descarga el Instalador**

     En la página principal, verás dos versiones para descargar: LTS (Long Term Support) y Current. La versión LTS es más estable y se recomienda para la mayoría de los usuarios, a menos que tengas una razón específica para usar la versión actual. Haz clic en la versión que prefieras y se descargará el instalador correspondiente.

   - **Paso 3: Ejecuta el Instalador**

     Una vez que se haya descargado el instalador, ábrelo y sigue los pasos del asistente de instalación. Puedes aceptar la configuración predeterminada a menos que tengas razones específicas para modificarlas.

   - **Paso 4: Verifica la Instalación**

     Una vez completada la instalación, verifica si Node.js se instaló correctamente abriendo una terminal o línea de comandos y ejecutando los siguientes comandos:

     ```bash
     node -v
     npm -v
     ```

     Estos comandos imprimirán la versión de Node.js y npm (Node Package Manager) respectivamente. Si ves las versiones, significa que la instalación fue exitosa.

2. #### **`¿Qué es NPM?`**

   `npm` es el gestor de paquetes para JavaScript. Viene incluido con la instalación de Node.js y te permite instalar y administrar bibliotecas y paquetes de código de JavaScript de manera sencilla.

3. #### **`Uso Básico de NPM`**:

   - **Instalar un Paquete**:

     Para instalar un paquete, puedes ejecutar el siguiente comando en tu terminal:

     ```bash
     npm install nombre_del_paquete
     ```

     Esto descargará e instalará el paquete en tu proyecto.

   - **Usar un Paquete en tu Código**:

     Después de instalar un paquete, puedes importarlo en tu código JavaScript usando `require()`.

     ```javascript
     const paquete = require('nombre_del_paquete');
     ```

   - **Actualizar un Paquete**:

     Para actualizar un paquete a la última versión, puedes ejecutar:

     ```bash
     npm update nombre_del_paquete
     ```

   - **Eliminar un Paquete**:

     Si ya no necesitas un paquete, puedes desinstalarlo con:

     ```bash
     npm uninstall nombre_del_paquete
     ```

   - **Verificar Versiones de Paquetes Instalados**:

     Puedes ver una lista de todos los paquetes instalados y sus versiones con:

     ```bash
     npm list
     ```

4. #### **`Creación de un Proyecto Node.js`**:

   Una vez que Node.js está instalado, puedes crear un nuevo proyecto Node.js en cualquier directorio de tu sistema utilizando el siguiente comando:

   ```bash
   npm init -y
   ```

   Esto creará un archivo `package.json` que contiene información sobre tu proyecto y las dependencias que instales.

5. #### **`Conclusión`**:

   Con estos pasos, has instalado Node.js en tu sistema y estás listo para comenzar a desarrollar aplicaciones web y servidores usando JavaScript. Recuerda que Node.js y npm son herramientas poderosas que te permiten aprovechar el ecosistema de código abierto de JavaScript para construir una amplia variedad de aplicaciones. ¡Diviértete programando!

## Node Version Manager (NVM) y Fast Node Manager (FNM) en Node.js: Una Explicación Detallada

1. ### **N`ode Version Manager (NVM)`**:

   **Introducción a NVM**:

   Node Version Manager (NVM) es una herramienta que te permite gestionar múltiples versiones de Node.js en un mismo sistema. Esto es útil cuando necesitas trabajar en proyectos que requieren versiones específicas de Node.js, ya sea porque están optimizados para una versión en particular o porque tienen dependencias que solo son compatibles con ciertas versiones.

2. ### **`Importancia de NVM`**:

   En el desarrollo de aplicaciones con Node.js, es común que diferentes proyectos requieran versiones diferentes del entorno de ejecución. NVM te proporciona la flexibilidad para cambiar de una versión de Node.js a otra sin tener que desinstalar e instalar manualmente cada versión.

3. ### **`Sintaxis y Uso de NVM`**:

   - **Instalación de NVM**:

     Para instalar NVM, puedes seguir las instrucciones específicas de tu sistema operativo. Por ejemplo, en sistemas Unix, puedes usar un comando como:

     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
     ```

     Ve al repositorio oficial en **https://github.com/nvm-sh/nvm**

   - **Instalación de Versiones de Node.js y Comandos**:

     Una vez que NVM esté instalado, puedes instalar versiones específicas de Node.js utilizando comandos como:
     
     Para ver la lista de versiones disponibles:

     ```bash
     nvm ls
     ```

     Para instalar una versión LTS (la última versión estable) y asignar su uso por defecto:
     
     ```bash
     nvm install --lts/* --default
     ```

     Para instalar versiones distintas puedes utilizar 2 opciones, el número de la version precedido de una "v" o el nombre de esa versión exactamente como se puede ver fen la lista de versiones. En este ejemplo, ambos comandos instalan la misma versión:

     ```bash
     nvm install v16.20.2
     ```

     ```bash
     nvm install lts/gallium
     ```

     Para establecer la versión de NVM que tenemos instalada como la versión por defecto:

     ```bash
     nvm alias default node
     ```

     Para establecer la versión LTS como la versión por defecto:

     ```bash
     nvm alias default lts/*
     ```

     Para utilizar distintas versiones instaladas:

     ```bash
     nvm use <nombre o número de la versión>
     ```

     Para usar la versión por defecto:

     ```bash
     nvm use default
     ```

   - **Uso Global o Local**:
     
     Puedes configurar una versión específica de Node.js como la predeterminada para tu sistema o asignar una versión específica a un proyecto en particular.

4. ### **`Fast Node Manager (FNM)`**:

   **Introducción a FNM**:

   Fast Node Manager (FNM) es otra herramienta similar a NVM que te permite gestionar múltiples versiones de Node.js de manera rápida y eficiente.

5. ### **`Importancia de FNM`**:

   Al igual que NVM, FNM es útil para cambiar entre diferentes versiones de Node.js según los requisitos de tus proyectos. La principal ventaja de FNM es su velocidad y eficiencia en la gestión de versiones.

6. ### **`Sintaxis y Uso de FNM`**:

   - **Antes de Instalar FNM Debes Instalar Rust**:

     Previo a la instalación de NFM deberemos instalar un lenguaje de programación de sistemas llamado Rust, que es el lenguaje con el que se creó NFM.

     ```bash
     curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
     ```

     Ve a la página oficial en **https://www.rust-lang.org/es/tools/install**

   - **Instalación de FNM**:

     Para instalar FNM, puedes seguir las instrucciones específicas de tu sistema operativo. Por ejemplo, en sistemas Unix, puedes usar un comando como:

     ```bash
     curl -fsSL https://fnm.vercel.app/install | bash
     ```

     Ve al repositorio oficial en **https://github.com/Schniz/fnm**

   - **Instalación de Versiones de Node.js y Comandos**:

     Una vez que FNM esté instalado, puedes instalar versiones específicas de Node.js utilizando comandos como en la explicación de NVM, pero modificando el `nvm` al inicio del comando por `fnm` simplemente:

     ```bash
     fnm ls
     ```

     ```bash
     fnm install 14.17.3
     ```

     ```bash
     fnm install --lts/* --default
     ```

     ```bash
     nvm use <nombre o número de la versión>
     ```

   - **Uso Global o Local**:

     Al igual que con NVM, puedes configurar una versión específica de Node.js como la predeterminada para tu sistema o asignar una versión específica a un proyecto en particular.

7. ### **`NVM vs FNM`**:

   - **NVM**:
     - Ampliamente utilizado y con una comunidad activa.
     - Proporciona una amplia gama de funciones y personalizaciones.
     - Puede ser un poco más lento en la gestión de versiones debido a su amplia funcionalidad.

   - **FNM**:
     - Conocido por su rapidez y eficiencia en la gestión de versiones.
     - Enfoque minimalista con un conjunto básico de características.
     - Puede ser una excelente opción si la velocidad es una prioridad para ti.

   Ambas herramientas cumplen el propósito de gestionar versiones de Node.js, y la elección entre ellas dependerá de tus preferencias y necesidades específicas.

8. ### **`Conclusión`**:

   Tanto Node Version Manager (NVM) como Fast Node Manager (fnm) son herramientas valiosas para los desarrolladores que trabajan con Node.js. Permiten una gestión eficiente de las versiones de Node.js y facilitan el cambio entre diferentes entornos de ejecución según los requisitos de tus proyectos. La elección entre NVM y fnm dependerá de tus preferencias personales y las necesidades específicas de tu flujo de trabajo.

## Visual Studio Code en Node.js: Una Explicación Detallada

1. #### **`Introducción a Visual Studio Code (VS Code)`**:

   Visual Studio Code, comúnmente abreviado como VS Code, es un editor de código fuente desarrollado por Microsoft. Es una herramienta altamente personalizable y de código abierto que es ampliamente utilizada por desarrolladores de software para escribir, editar y depurar código en diversos lenguajes de programación, incluyendo JavaScript.

2. #### **`Instalación y Configuración`**:

   Para utilizar Visual Studio Code con Node.js, primero necesitas instalar ambos en tu sistema. Puedes descargar e instalar Node.js desde su sitio web oficial. Luego, puedes descargar e instalar Visual Studio Code desde su sitio web oficial. Una vez instalados, puedes abrir VS Code y comenzar a escribir código en Node.js.

   Ve a la página oficial en **https://code.visualstudio.com/download**

3. #### **`Integración con Node.js`**:

   Visual Studio Code ofrece una integración excelente con Node.js. Detecta automáticamente la presencia de Node.js en tu sistema y te permite ejecutar scripts de Node.js directamente desde el editor. También proporciona una consola integrada donde puedes ver la salida de tus scripts de Node.js y ejecutar comandos directamente.

4. #### **`Extensiones Esenciales para Desarrollo en Node.js`**:

   VS Code tiene un rico ecosistema de extensiones que pueden mejorar tu experiencia de desarrollo en Node.js. Algunas extensiones populares para el desarrollo en Node.js incluyen "Node.js", "NPM", "Node.js Modules Intellisense", "ESLint", "Prettier" y "Debugger for Chrome", entre otras. Estas extensiones proporcionan funcionalidades adicionales y herramientas de depuración que facilitan el desarrollo en Node.js.

5. #### **`Depuración de Aplicaciones Node.js`**:

   Una de las características más poderosas de VS Code es su capacidad para depurar aplicaciones Node.js. Puedes establecer puntos de interrupción en tu código, inspeccionar variables y ejecutar tu aplicación en modo de depuración. Esto es extremadamente útil para identificar y corregir errores en tu código.

6. #### **`Gestión de Paquetes con NPM`**:

   Node Package Manager (NPM) es la herramienta estándar de gestión de paquetes para Node.js. VS Code proporciona una interfaz gráfica para interactuar con npm. Puedes instalar, desinstalar y actualizar paquetes directamente desde el editor.

7. #### **`Integración con Git y Control de Versiones`**:

   VS Code tiene una integración nativa con Git, el sistema de control de versiones ampliamente utilizado. Puedes ver y gestionar cambios, crear ramas y realizar operaciones de control de versiones directamente desde el editor.

8. #### **`Extensiones para Desarrollo Web y Frontend`**:

   Además de ser una excelente herramienta para el desarrollo en Node.js, VS Code también es popular entre los desarrolladores web y frontend. Ofrece extensiones para lenguajes como HTML, CSS, JavaScript, TypeScript y frameworks como React, Angular y Vue.js.

9. #### **`Integración con Herramientas de Construcción y Automatización`**:

   VS Code es compatible con herramientas de construcción y automatización como Webpack y Gulp. Puedes configurar y ejecutar scripts de construcción directamente desde el editor.

10. #### **`Comunidad Activa y Recursos de Aprendizaje`**:

    Visual Studio Code tiene una comunidad activa y próspera. Hay una amplia gama de recursos de aprendizaje disponibles, que incluyen documentación oficial, tutoriales en línea y extensiones de terceros. También hay una gran cantidad de temas y configuraciones personalizables que permiten adaptar el editor a tus preferencias.

11. #### **`Remote SSH en VS Code`**:
   
   - **Instalación de la Extensión de SSH**:
     
     - Abre VS Code y ve a la pestaña de extensiones (icono de cuadrado con cuatro cuadraditos).
   
     - Busca `Remote - SSH` y haz clic en `Install` en la extensión proporcionada por Microsoft.
     
   - **Conexión a un Servidor Remoto**:
      
     - Haz clic en el icono de la esquina inferior izquierda que muestra la etiqueta `><`, selecciona `Remote-SSH:` y después `Connect to Host...`.
   
     - Ingresa la dirección SSH del servidor y sigue las instrucciones para autenticarte. Si estás utilizando un servicio de hosting o un proveedor de servicios en la nube (como MongoDB Compass, Railway, AWS, Google Cloud, DigitalOcean, etc.), primero debes crear una instancia o servidor virtual. Durante este proceso, el proveedor de hosting te proporcionará una dirección IP y credenciales para acceder a la máquina. Si estás utilizando un entorno local o tienes un servidor propio, necesitarás configurar el acceso SSH en ese servidor y obtener la dirección IP y las credenciales correspondientes.

     - Una vez que hayas creado una instancia o servidor virtual, recibirás una dirección IP pública asociada a esa máquina. Esta dirección IP es lo que necesitas para conectarte a través de SSH.
   
     - También necesitarás las credenciales de acceso, que generalmente incluyen un nombre de usuario y una contraseña o una clave privada para autenticarte en el servidor.
   
     - Con la dirección IP y las credenciales de acceso, puedes usar un cliente SSH (como el proporcionado por tu sistema operativo o una herramienta como PuTTY en Windows) para conectarte al servidor.
   
     - Una vez conectado, VS Code te permitirá editar y ejecutar código directamente en el servidor remoto.
      
11. #### **`Conclusión`**:
   
   En resumen, Visual Studio Code es un editor de código fuente altamente versátil que ofrece una amplia gama de características y extensiones para el desarrollo en Node.js. Su integración con Node.js, herramientas de depuración y control de versiones hacen que sea una elección popular entre los desarrolladores. Con su comunidad activa y recursos de aprendizaje, es una herramienta valiosa para cualquier programador que trabaje en proyectos web y aplicaciones Node.js.

## Run a script with Node.js: Una Explicación Detallada

3. **`Escribir un Script en JavaScript`**:

   Abre tu editor de texto preferido y crea un nuevo archivo con extensión `.js` (Common JS) o `.mjs` (ECMAScript (ES) 6 / ES2015). Este será tu archivo de script en JavaScript. Puedes escribir cualquier código JavaScript válido en este archivo.

4. **`Ejecutar el Script con Node.js`**:

   Abre una terminal o línea de comandos y navega hasta el directorio donde se encuentra tu archivo JavaScript. Luego, ejecuta el script usando el siguiente comando:

   ```
   node nombre_del_archivo.js
   ```

   Node.js ejecutará el archivo y verás cualquier salida que genere tu script en la consola.

5. **`Uso de Argumentos de la Línea de Comandos`**:

   Puedes pasar argumentos a tu script cuando lo ejecutas. Estos argumentos estarán disponibles en tu script a través del objeto `process.argv`. Por ejemplo, si ejecutas el script así:

   ```
   node mi_script.js arg1 arg2 arg3
   ```

   En tu script, `process.argv` contendrá un array con los argumentos, donde `process.argv[0]` será la ruta al ejecutable de Node.js, `process.argv[1]` será la ruta al archivo JavaScript y los argumentos reales comenzarán a partir de `process.argv[2]`.

6. **`Módulos, require('') o Import y Export`**:

   - **CommonJS**:

     Node.js utiliza un sistema de módulos para organizar y reutilizar el código. Puedes dividir tu código en múltiples archivos y luego usar `require()` para cargar esos módulos en tu script principal. Este es el formato `Common JS` y todos los archivos deberán tener la extensión `.js`.

     Por ejemplo, si tienes un módulo con dos funciones llamadas `saludar` y `despedir`, en un archivo `modulo.js`, puedes usarlo en tu script o app de la siguiente manera:

     ```javascript
     // modulo.js
     module.exports = {
       saludar: function(nombre) {
         return `¡Hola, ${nombre}!`;
       },
       despedir: function(nombre) {
         return `¡Hasta luego, ${nombre}!`;
       }
     }
     ```

     ```javascript
     // script.js / app.js
     const funcionesSaludo = require('./modulo.js');

     console.log(funcionesSaludo.saludar('Maria'));
     console.log(funcionesSaludo.despedir('Carlos'));

     // El `./` indica que el módulo se encuentra en el mismo directorio que el script a importar. Si se encuentra en una carpeta previa, usamos `../`. Esta última forma la podemos usar tantas veces como carpetas previas haya
     ```

     Si en cambio deseas importar `módulos propios de Node.js`, lo puedes hacer así:

     ```javascript
     // modulo.js
     const os = require('node:os');

     module.exports = function obtenerInfoSistema() {
       return {
         nombre: os.platform(),
         version: os.release(),
         arquitectura: os.arch(),
         cpus: os.cpus(),
         memoriaLibre: os.freemem(),
       };
     };

     // El `node:` al inicio del nombre del módulo que se desea importar es obligatorio en los módulos nativos de Node.js.
     ```

     ```javascript
     // script.js / app.js
     const obtenerInfoSistema = require('./modulo.js');
     const infoSistema = obtenerInfoSistema();

     console.log("@@@ ------ INFORMACIÓN DEL SISTEMA ------ @@@");
     console.log("Sistema operativo:", infoSistema.nombre);
     console.log("Versión:", infoSistema.version);
     console.log("Arquitectura:", infoSistema.arquitectura);
     console.log("Memoria libre (MB):", Math.ceil(infoSistema.memoriaLibre / (1024 ** 2)));
     console.log("CPUs:", infoSistema.cpus.map((element) => element.model));
     ```

     Otro ejemplo:

     ```javascript
     // modulo.js
     class Persona {
       constructor(nombre) {
         this.nombre = nombre;
       }
     
       saludar() {
         return `¡Hola, soy ${this.nombre}!`;
       }
     }
     
     module.exports = Persona;
     ```

     ```javascript
     // script.js / app.js
     const Persona = require('./modulo.js');
     const juan = new Persona('Juan');
     console.log(juan.saludar());
     ```

   - **ES6**:

     A partir de ECMAScript (ES) 6, la forma de utilizar los módulos para organizar y reutilizar el código cambia. Ahora para dividir tu código en múltiples archivos, utilizarás las palabras reservadas `export` e `import` para exportar y cargar esos módulos en tu script principal. Este es el formato `ES6` y todos los archivos deberán tener la extensión `.mjs` para que Node.js pueda reconocerlos correctamente.
   
     Por ejemplo, si tienes un módulo con una función llamada `saludar`, en un archivo `modulo.mjs`, puedes usarlo en tu script o app de la siguiente manera:
   
     ```javascript
     // modulo.mjs
     export const saludar = (nombre) => {
       return `¡Hola, ${nombre}!`;
     };     
     ```

     ```javascript
     // script.mjs / app.mjs
     import { saludar } from './modulo.mjs';
     
     const nombre = 'Juan';
     const mensajeSaludo = saludar(nombre);
     
     console.log(mensajeSaludo);
     ```

     `Si el módulo pertenece al núcleo de Node.js`, podrías hacerlo así:

     ```javascript
     // modulo.mjs
     import os from 'node:os';

     function obtenerInfoSistema () {
       return {
         nombre: console.log('Nombre del sistema operativo', os.platform()),
         version: console.log('Versión del sistema operativo', os.release()),
         arquitectura: console.log('La arquitectura del sistema operativo es de', os.arch()),
         cpus: console.log('CPUs', os.cpus()),
         memoriaLibre: console.log('Memoria libre', os.freemem() / 1024 / 1024),
       }
     }
     
     // Esta forma de exportación es válida si se desea exportar una única función del archivo, no puede exportar más. Con la otra forma expuesta arriba si se puede
     export default obtenerInfoSistema;
     ```

     ```javascript
     // script.mjs / app.mjs
     import obtenerInfoSistema from './modulo.mjs';
     
     const infoSistema = obtenerInfoSistema();
     
     console.log('Información del sistema:');
     console.log(infoSistema.nombre);
     console.log(infoSistema.version);
     console.log(infoSistema.arquitectura);
     console.log(infoSistema.cpus);
     console.log(infoSistema.memoriaLibre);
     ```

7. **`Uso de NPM (Node Package Manager)`**:

   NPM es el gestor de paquetes de Node.js que te permite instalar y gestionar bibliotecas y herramientas de terceros. Puedes instalar paquetes usando el comando `npm install nombre_del_paquete`.

8. **`Manejo de Dependencias y package.json`**:

   Cuando instalas paquetes con NPM, se registran en un archivo llamado `package.json`. Este archivo contiene información sobre tu proyecto, incluidas las dependencias que necesita para ejecutarse. Puedes compartir este archivo con otros para que puedan instalar las mismas dependencias.

9. **`Ejecución de Scripts Personalizados`**:

   Puedes definir tus propios scripts personalizados en el archivo `package.json` bajo la propiedad `scripts`. Esto te permite definir comandos personalizados que puedes ejecutar con `npm run`.

   Por ejemplo, si agregas lo siguiente a tu `package.json`:

   ```json
   "scripts": {
     "start": "node mi_script.js"
   }
   ```

   Puedes ejecutar tu script con:

   ```
   npm run start
   ```

   Esto ejecutará el comando definido en el script `start`.
   Desglosándolo, sería la acción del comando `npm run` y el nombre del atributo en el objeto `scripts` de `package.json`. En este caso es `start`.

10. **Conclusiones**:

    Node.js es una herramienta poderosa que te permite ejecutar JavaScript en el lado del servidor y crear aplicaciones y scripts de línea de comandos. Con la instalación de Node.js y un editor de texto, puedes comenzar a escribir y ejecutar tus propios scripts en cuestión de minutos. Además, NPM proporciona acceso a una amplia variedad de paquetes y bibliotecas que puedes utilizar en tus proyectos.

    ¡Ahora estás listo para comenzar a crear tus propios scripts con Node.js! Recuerda que la práctica y la exploración de recursos adicionales te ayudarán a familiarizarte aún más con esta potente plataforma. ¡Diviértete programando con Node.js!

## Global, Window y GlobalThis: Una Explicación Detallada

1. ### `global`:

   - **En Node.js**:
   
     `global` es un objeto especial que proporciona un contexto global en el entorno de Node.js. Es similar al objeto `window` en un navegador, pero en el entorno de Node.js. Puedes usar `global` para definir variables o funciones que estarán disponibles en todos los módulos de Node.js.

   - **Ejemplo de Node.js**:

     ```javascript
     // En Node.js
     global.miVariable = 'Hola desde el contexto global en Node.js';
     
     console.log(miVariable); // Imprime: 'Hola desde el contexto global en Node.js'
     ```

   - **En un navegador**:

     `global` no está disponible directamente en el entorno de un navegador. En su lugar, el objeto global es `window`.

2. ### `window`:

   - **En un navegador**:

     `window` es el objeto global en el contexto de un navegador. Contiene todas las variables y funciones globales y representa el entorno de ejecución del navegador.

   - **Ejemplo**:

     ```javascript
     // En un navegador
     window.miVariable = 'Hola desde el objeto window';
     
     console.log(miVariable); // Imprime: 'Hola desde el objeto window'
     ```

3. ### `globalThis`:

   - **En cualquier entorno (Node.js y navegadores)**:

     `globalThis` es un estándar del lenguaje JavaScript introducido en ECMAScript 11 (ES11) que proporciona una forma de acceder al objeto global independientemente del entorno en el que se esté ejecutando el código. Esto significa que puedes usar `globalThis` tanto en Node.js como en navegadores para acceder al objeto global.

   - **Ejemplo**:

     ```javascript
     // En Node.js o en un navegador
     globalThis.miVariable = 'Hola desde el objeto globalThis';
     
     console.log(miVariable); // Imprime: 'Hola desde el objeto globalThis'
     ```
 
4. #### **`Observaciones`**:

   - `window` es específico del entorno del navegador y no está disponible en Node.js.
  
   - `global` es específico del entorno de Node.js.
  
   - `globalThis` puede acceder en ambos entornos.
  
   - En un entorno de navegador, puedes acceder a `window` directamente o simplemente usando `miVariable` (si no ha sido declarada dentro de una función).

5. #### **`Conclusión`**:

   En resumen, `global` se utiliza en Node.js para representar el contexto global, `window` se utiliza en el entorno del navegador para el mismo propósito, y `globalThis` es una adición estándar de ES11 que proporciona una forma de acceder al objeto global en cualquier entorno, ya sea Node.js o un navegador. Todos ellos aunque se puedan utilizar en un entorno u otro, `son los objetos que contienen todos los métodos y variables que vienen por defecto en el lenguaje de programación como console.log(), Math.floor(), variable.join(""), variable.map(), Array, Object, Boolean, etc...`

## Ejecutar el REPL de Node.js: Una Explicación Detallada

1. #### **`Introducción al REPL de Node.js`**:

   El REPL (Read-Eval-Print Loop) de Node.js es una interfaz de línea de comandos que permite interactuar con Node.js de forma interactiva. Permite escribir y ejecutar código JavaScript en tiempo real, lo que lo convierte en una herramienta valiosa para probar y experimentar con código.

2. #### **`Cómo Abrir el REPL`**:

   Para abrir el REPL de Node.js, simplemente abre tu terminal o línea de comandos y escribe `node` seguido de la tecla Enter. Esto iniciará el REPL y verás un prompt (`>` o `...`).

3. #### **`Usando el REPL`**:

   Una vez en el REPL, puedes escribir código JavaScript y presionar Enter para ejecutarlo. El resultado se imprimirá inmediatamente. Por ejemplo, si escribes `console.log('Hola Mundo')` y presionas Enter, verás `Hola Mundo` impreso en la pantalla.

4. #### **`Múltiples Líneas de Código`**:

   Si el código que deseas escribir es demasiado largo para una sola línea, el REPL te proporcionará un prompt continuo (`...`) para que puedas seguir escribiendo. Esto te permite escribir y ejecutar código en múltiples líneas.

   Por ejemplo, si deseas escribir una función más larga, puedes hacerlo y luego presionar Enter al final de cada línea. El REPL compilará y ejecutará el código cuando presiones Enter después de la última línea.

5. #### **`Acceso al Historial`**:

   El REPL de Node.js también mantiene un historial de los comandos que has ejecutado durante la sesión actual. Puedes navegar por este historial utilizando las teclas de flecha hacia arriba y hacia abajo en tu teclado.

   Esto te permite volver a ejecutar comandos anteriores sin tener que volver a escribirlos desde cero.

6. #### **`Comandos Especiales del REPL`**:

   El REPL de Node.js también proporciona algunos comandos especiales que pueden ser útiles:

   - `.help`: Muestra una lista de comandos especiales del REPL.

   - `.break`: Sale de una expresión de múltiples líneas.

   - `.clear`: Restablece el estado del REPL.

   - `.exit` o `.ctrl + C`: Sale del REPL.

   - `.load <nombre_archivo>`: Carga y ejecuta un archivo en REPL.

   - `.save <nombre_archivo>`: Guarda el historial de comandos en un archivo.

   - `.history`: Muestra el historial de comandos ejecutados durante la sesión actual.

7. #### **`Variables Globales`**:

   En el REPL de Node.js, puedes acceder a las mismas variables y objetos globales que tendrías en un entorno de Node.js regular. Esto incluye `console`, `process`, `module`, `require`, entre otros.

   Por ejemplo, puedes usar `console.log()` para imprimir en la consola, o `require()` para importar módulos.

8. #### **`Ejecución de Archivos Externos`**:

   Puedes ejecutar archivos JavaScript externos en el REPL utilizando el comando `.load nombre_archivo.js`. Esto ejecutará el código del archivo y te permitirá interactuar con las variables y funciones definidas en él.

9. #### **`Ventajas del REPL`**:

   - **Prueba Rápida**:

     El REPL proporciona un entorno rápido y interactivo para probar y experimentar con código JavaScript.

   - **Depuración Rápida**:

     Puedes probar pequeños fragmentos de código para verificar su comportamiento antes de integrarlos en tu aplicación.

   - **Aprendizaje y Exploración**:

     Es útil para aprender nuevas características de JavaScript o explorar APIs sin tener que crear un archivo separado.

10. #### **`Limitaciones`**:

   - **No es un Entorno de Ejecución Real**: 
    
     Aunque el REPL es útil para probar código, no es un entorno de ejecución real como un navegador web o un servidor Node.js. Algunas características del navegador o del entorno de ejecución de Node.js pueden no estar disponibles en el REPL.

   - **No es Ideal para Códigos Largos o Complejos**:
   
     Aunque puedes escribir código de varias líneas en el REPL, no es el entorno ideal para escribir código largo y complejo. Es mejor utilizar un editor de código para proyectos más grandes.

   - **No Es Persistente**:
   
     Una vez que cierras el terminal, el historial y las variables definidas en el REPL se pierden.

11. #### **`Conclusión`**:

   El REPL de Node.js es una herramienta poderosa para interactuar con JavaScript de forma interactiva. Es especialmente útil para pruebas rápidas, experimentación y aprendizaje. Sin embargo, es importante recordar que no es un entorno de ejecución real y tiene sus limitaciones. Para proyectos más grandes y complejos, es mejor utilizar un editor de código adecuado.

## Crear un Servidor HTTP: Una Explicación Detallada

1. #### **`Introducción a la Creación de Servidores HTTP`**:

   La creación de un servidor HTTP es un paso fundamental en el desarrollo web. Permite que las aplicaciones web sirvan contenido a través del protocolo HTTP, lo que significa que pueden responder a solicitudes de navegadores web y otras aplicaciones.

2. #### **`Node.js y el Módulo HTTP`**:

   Node.js es una plataforma basada en el motor V8 de Google Chrome que permite ejecutar JavaScript en el lado del servidor. Incluye un módulo llamado `http` que proporciona todas las herramientas necesarias para crear un servidor HTTP.

3. #### **`Requerir y Crear un Servidor HTTP`**:

   Para crear un servidor HTTP en Node.js, primero necesitamos requerir el módulo `http`. Esto se hace con la siguiente línea de código:

   ```javascript
   // CommonJS
   const http = require('node:http');
   ```

   ```javascript
   // ES6
   import { createServer } from 'node:http';
   ```

   Una vez que el módulo está cargado, podemos utilizarlo para crear un servidor. Esto se hace utilizando el método `createServer`, que toma como argumento una función de devolución de llamada que se ejecutará cada vez que el servidor reciba una solicitud.

   ```javascript
   // CommonJS
   const server = http.createServer((request, response) => {
     console.log('Request received');
     // Lógica de manejo de la solicitud y generación de la respuesta
   });
   ```

   ```javascript
   // ES6
   const server = createServer((request, response) => {
     console.log('Request received');
     // Lógica...
   })
   ```

4. #### **`Manejo de Solicitudes y Respuestas`**:

   La función de devolución de llamada que proporcionamos a `createServer` toma dos argumentos: `request` y `response`. 

   - `request`:
   
     Es un objeto que contiene información sobre la solicitud realizada al servidor, como la URL, los encabezados y el método HTTP utilizado (GET, POST, etc.).

   - `response`:

     Es un objeto que utilizamos para enviar una respuesta al navegador o cliente que hizo la solicitud. Esto incluye el contenido de la respuesta, los encabezados y el código de estado HTTP.

5. #### **`Configuración de Respuestas y Envío al Cliente`**:

   Una vez que tenemos acceso a los objetos de solicitud y respuesta, podemos configurar la lógica de solicitud y la respuesta que queremos enviar al cliente. Esto generalmente implica establecer el código de estado, los encabezados y el contenido de la respuesta.

   ```javascript
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('¡Hola, mundo!\n');
   ```

   En este ejemplo, estamos configurando una respuesta con un código de estado 200 (que significa "OK") y un tipo de contenido de texto plano. Luego, enviamos el mensaje "¡Hola, mundo!" al cliente.

   También lo podemos hacer así:

   ```javascript
   response.statusCode = 200;
   response.setHeader({"Content-Type": "text/html"});
   response.end("<html><body><h1>This page was served with Node.js</h1></body></html>");
   ```

6. #### **`Iniciando el Servidor y Escuchando en un Puerto`**:

   Una vez que hemos configurado nuestro servidor, necesitamos iniciarlo y hacer que escuche en un puerto específico. Esto se hace utilizando el método `listen`:

   ```javascript
   const puerto = 3000;
   server.listen(puerto, () => {
     console.log(`Server running at http://localhost:${puerto}`);
   });
   ```

   En este ejemplo, estamos haciendo que el servidor escuche en el puerto 3000. Una vez que el servidor está en funcionamiento, imprimirá un mensaje en la consola para indicar que está listo para recibir solicitudes.

7. #### **`Ejecutando el Servidor y Accediendo a la Aplicación`**:

   Para ejecutar el servidor, simplemente ejecutamos el archivo JavaScript con Node.js desde la línea de comandos. Si todo está configurado correctamente, deberías ver el mensaje de confirmación de que el servidor está en funcionamiento.

   Luego, puedes abrir un navegador web y acceder a `http://localhost:3000` para ver la respuesta del servidor.

8. ### **`Peticiones HTTP Usando Curl`**:

   Claro, puedo explicarte cómo hacer una solicitud utilizando `curl` a través de la terminal. `curl` es una herramienta de línea de comandos que te permite enviar y recibir datos utilizando varios protocolos, incluido HTTP.

   Supongamos que deseas realizar una solicitud GET a una URL específica, por ejemplo, "https://api.example.com/endpoint" o el servidor que acabamos de crear arriba "http://localhoset:3000".
   
   Abre tu terminal y sigue estos pasos:
   
   - **Abre la Terminal**:
   
     Abre la terminal en tu sistema operativo o en VS Code. Puedes buscar "Terminal" en el menú de aplicaciones o utilizar el atajo de teclado correspondiente.
   
   - **Escribe el Comando `curl`**:
   
     Escribe el comando `curl` seguido de la URL a la que deseas hacer la solicitud. En este caso, será una solicitud GET.
   
     ```bash
     curl https://api.example.com/endpoint
     ```
   
     Esto enviará una solicitud GET a la URL proporcionada.
   
   - **Recibirás la Respuesta**:
   
     `curl` imprimirá la respuesta del servidor en tu terminal. Esto incluirá tanto el encabezado de la respuesta HTTP como el cuerpo de la respuesta. Si la solicitud fue exitosa, deberías ver el contenido que el servidor respondió.
   
     Si deseas guardar la respuesta en un archivo, puedes redirigir la salida a un archivo utilizando `>`. Por ejemplo:
   
     ```bash
     curl https://api.example.com/endpoint > respuesta.txt
     ```
   
     Esto guardará la respuesta en un archivo llamado "respuesta.txt".
   
   - **Más Opciones**:
   
     `curl` tiene muchas opciones adicionales para personalizar tu solicitud. Por ejemplo:
     
     Puedes especificar el método de solicitud con `-X` y el nombre del método en mayúsculas:

     ```bash
     curl -X GET http://localhost:3000
     ```

     ```bash
     curl -X POST http://localhost:3000
     ```

     ```bash
     curl -X PUT http://localhost:3000
     ```

     ```bash
     curl -X DELETE http://localhost:3000
     ```
     
     Puedes enviar datos en el cuerpo de la solicitud con `-d` seguida de los datos que deseas enviar:

     ```bash
     curl -X POST https://api.example.com/endpoint -d 'param1=value1&param2=value2'
     ```

     Puedes agregar encabezados personalizados con `-H` y `-d` a una solicitud HTTP, por ejemplo, cambiando el formato a JSON:

     ```bash
     curl -X POST https://api.example.com/endpoint -d '{"key1": "value1", "key2": "value2"}' -H 'Content-Type: application/json'
     ```
     
     Puedes realizar autenticaciones `Basic`, `Bearer` o `OAuth`:

     ```bash
     curl -X GET https://api.example.com/endpoint -H 'Authorization: Basic <base64-encoded-credentials>'
     ```

     ```bash
     curl -X GET https://api.example.com/endpoint -H 'Authorization: Bearer <token_de_acceso>'
     ```

     ```bash
     curl -X POST "https://oauth.ejemplo.com/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=password&username=tu_usuario&password=tu_contraseña&client_id=tu_cliente_id&client_secret=tu_cliente_secret"
     ```

     Puedes consultar la documentación de `curl` para obtener más detalles sobre estas opciones en **https://curl.se/docs/httpscripting.html**

     Además, también puedes acceder a la documentación directamente desde la línea de comandos utilizando el siguiente comando:

     ```bash
     man curl
     ```

   Recuerda que este es un ejemplo básico y hay muchas más cosas que puedes hacer con `curl`. Si necesitas realizar solicitudes más complejas o realizar pruebas más detalladas, `curl` es una herramienta muy potente para eso.

8. #### **`Consideraciones Adicionales`**:

   - **Enrutamiento y Manejo de Rutas**:

     A medida que las aplicaciones web se vuelven más complejas, a menudo se requiere un enrutamiento más avanzado para manejar diferentes rutas y recursos. Esto puede hacerse utilizando bibliotecas como Express.js.

   - **Seguridad y Optimización**:

     La seguridad y la optimización son consideraciones importantes al crear servidores web. Esto puede incluir la implementación de HTTPS, la protección contra ataques de inyección de SQL, la optimización de recursos y más.

   - **Despliegue en un Entorno de Producción**:

     Para que una aplicación web sea accesible públicamente, necesitas desplegarla en un servidor en la nube o en un proveedor de alojamiento web. Hay varias opciones disponibles, como Heroku, AWS, y muchos más.

   - **Uso de Frameworks y Bibliotecas**:

     A medida que los requisitos de tu aplicación crezcan, es posible que desees considerar el uso de frameworks y bibliotecas como Express.js, Koa.js o Hapi.js, que facilitan la creación de aplicaciones web complejas.

   - **Mantenimiento y Actualizaciones**:

     Una vez que tu aplicación está en funcionamiento, es importante realizar un mantenimiento regular y aplicar actualizaciones de seguridad para asegurarse de que esté protegida contra vulnerabilidades conocidas.

   - **Monitoreo y Escalabilidad**:

     Si tu aplicación experimenta un aumento en el tráfico, es posible que necesites escalar tu servidor o implementar estrategias de equilibrio de carga para garantizar un rendimiento óptimo.

## Test the HTTP server: Una Explicación Detallada

1. #### **`Introducción a la Prueba del Servidor HTTP`**

   La prueba del servidor HTTP es un proceso crucial en el desarrollo web. Consiste en verificar si el servidor puede responder adecuadamente a las solicitudes HTTP que recibe. Esto asegura que la aplicación web funcione correctamente y brinde una experiencia fluida a los usuarios.

2. #### **`Herramientas para Probar un Servidor HTTP`**

   Hay varias herramientas disponibles para probar un servidor HTTP. Algunas de las más comunes incluyen:

   - **Postman**:
   
     Una plataforma de colaboración para el desarrollo de API que permite enviar solicitudes HTTP y analizar las respuestas.

   - **curl**:
   
     Una herramienta de línea de comandos que permite enviar solicitudes HTTP y ver las respuestas.

   - **Herramientas de Desarrollo del Navegador**:
   
     Los navegadores web modernos tienen herramientas de desarrollo integradas que permiten enviar solicitudes y ver las respuestas.

3. #### **`Métodos de Prueba de Servidor HTTP`**

   - **Solicitudes GET**:
   
     Comprueban si el servidor puede manejar solicitudes de lectura de recursos.
   
   - **Solicitudes POST**:
   
     Verifican si el servidor puede recibir y procesar datos enviados a través de un formulario.
   
   - **Solicitudes PUT y DELETE**:
   
     Se utilizan para actualizar y eliminar recursos en el servidor, respectivamente.
   
   - **Pruebas de Rendimiento**:
   
     Evalúan la capacidad del servidor para manejar un gran número de solicitudes simultáneamente.

4. #### **`Herramientas de Automatización de Pruebas`**

   Para pruebas más avanzadas y automatizadas, se pueden utilizar herramientas como:

   - **Jest**:
   
     Un marco de pruebas de JavaScript que permite escribir y ejecutar pruebas automatizadas para código JavaScript y Node.js.
   
   - **Selenium**:
   
     Una herramienta para la automatización de navegadores web que se utiliza para escribir scripts de pruebas que interactúan con una aplicación web.

5. #### **`Pasos para Probar un Servidor HTTP`**

   1. **Establecer el Ambiente de Pruebas**:
   
     Asegurarse de tener acceso al servidor y conocer la URL a la que se realizarán las solicitudes.
   
   2. **Seleccionar la Herramienta de Pruebas**:
   
     Elegir la herramienta que mejor se adapte a tus necesidades (Postman, curl, herramientas de desarrollo del navegador, etc.).
   
   3. **Configurar las Solicitudes**:
   
     Configurar las solicitudes HTTP según los métodos que deseas probar (GET, POST, PUT, DELETE, etc.).
   
   4. **Enviar las Solicitudes**:
   
     Ejecutar las solicitudes y observar las respuestas del servidor.
   
   5. **Analizar las Respuestas**:
     
     Verificar que el servidor responda correctamente y que la información proporcionada sea la esperada.
   
   6. **Realizar Pruebas Automatizadas (Opcional)**:
   
     Si es necesario, crear y ejecutar pruebas automatizadas utilizando herramientas como Jest o Selenium.

6. #### **`Consideraciones Importantes`**

   - **Manejo de Errores**:
   
     Es importante probar también escenarios de error para asegurarse de que el servidor responda adecuadamente en situaciones inesperadas.
   
   - **Seguridad**:
   
     Siempre ten en cuenta la seguridad al realizar pruebas en un servidor en producción. Evita realizar pruebas destructivas o que puedan afectar el funcionamiento normal del sistema.

   - **Documentación y Registro**:
   
     Lleva un registro de las pruebas realizadas y documenta los resultados para futuras referencias.

   - **Escenarios de Prueba Exhaustivos**:
   
     Intenta cubrir una amplia gama de escenarios de prueba para garantizar que el servidor funcione de manera confiable en diferentes situaciones.

   - **Pruebas Continuas**:
   
     Es una buena práctica incorporar pruebas automatizadas en el proceso de desarrollo para garantizar la integridad del servidor con cada actualización.

   - **Monitoreo en Producción**:
   
     Asegúrate de tener herramientas de monitoreo en producción para detectar y corregir problemas en tiempo real.

7. #### **`Resumen`**:

   La prueba del servidor HTTP es esencial para garantizar un rendimiento óptimo y una experiencia de usuario sin problemas en una aplicación web. Al utilizar las herramientas y técnicas adecuadas, puedes identificar y solucionar problemas antes de que afecten a los usuarios finales.



















## `globalThis`

- `globalThis` es un objeto global introducido en ECMAScript 2020. Proporciona una forma de acceder al contexto global en cualquier entorno (ya sea en el navegador, Node.js u otros entornos de ejecución de JavaScript).

## Ejemplo de Uso de globalThis:

```javascript
// En el navegador o en Node.js
console.log(globalThis === window); // En el navegador, esto imprimirá true

// En Node.js
globalThis.miVariable = "Hola desde el objeto global";

// En cualquier entorno
console.log(globalThis.miVariable); // Imprimirá "Hola desde el objeto global"
```

**En resumen**, Node.js es una plataforma poderosa para ejecutar código JavaScript del lado del servidor. V8 es el motor subyacente que permite la ejecución eficiente de JavaScript. OpenJS Foundation apoya proyectos de código abierto relacionados con JavaScript. NVM facilita la gestión de versiones de Node.js, mientras que NPM es el gestor de paquetes. La extensión de SSH en VS Code permite trabajar en servidores remotos

### 5. **GlobalThis**:

- `globalThis` es un objeto global introducido en ECMAScript 2020. Proporciona una forma de acceder al contexto global en cualquier entorno (ya sea en el navegador, Node.js u otros entornos de ejecución de JavaScript).

### 6. **Ejemplo de Código**:

```javascript
const greeting = "Hola desde Node.js";
console.log(greeting);
```

Este ejemplo simple imprime "Hola desde Node.js" en la consola. Demuestra cómo se puede ejecutar código JavaScript en Node.js y cómo usar `console.log` para mostrar resultados.

### En Resumen:

Node.js, junto con las herramientas y conceptos relacionados como V8, OpenJS, NVM, NFM, Remote SSH, y `globalThis`, forman un ecosistema robusto para desarrollar aplicaciones web y servidores eficientes. Comprender y utilizar estas herramientas es esencial para los desarrolladores de aplicaciones web y servidores en el entorno de JavaScript.
