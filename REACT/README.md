## **HOW TO START REACT PROJECT**

Antes de nada verifica que tienes instalado `node.js` para poder ejecutar la aplicación con los comandos `npm`(node package manager).

### **`npx create-react-app` or `npm init react-app`**

1. - Este comando es útil para crear tu proyecto de React.
Puedes elegir el nombre de la carpeta que almacenará dicho proyecto, usando el comando `npx create-react-app <nombre-de-la-carpeta>`-
Si deseas crear el proyecto en la misma carpeta donde estás parado, usa el comando `npx create-react-app .`

2. - Recuerda que el nombre de la carpeta siempre debe de estar en letras minúsculas, si no, React no lo acepta.

3. - Nos posicionamos al interno de la carpeta del proyecto con `cd nombre-del-proyecto`.

4. - Después hay que ejecutar el comando `npm install` para agregar todas las dependencias necesarias automáticamente.
Estas dependencias se guardarán en una carpeta que se llama `node_modules` y es temporanea, por lo que se puede borrar tranquilamente porque ejecutando otro `npm install` se vuelve a crear, lo que puede llegar a ser necesario si tenemos algún error de compilación, por ejemplo.

5. - Por último ejecutamos la aplicación con `npm start`

### **`npm create vite@latest`**

1. - Este comando crea un proyecto utilizando Vite.
Vite es una herramienta de construcción de aplicaciones web para JavaScript y TypeScript. Está especialmente diseñada para proyectos de React, Vue y Svelte. Vite se caracteriza por su rapidez en el proceso de desarrollo, ya que utiliza un sistema de construcción basado en ESmodules (ESM) que permite una carga instantánea de módulos durante el desarrollo.
En el contexto de React, Vite proporciona un entorno de desarrollo eficiente y optimizado para crear aplicaciones web modernas con esta biblioteca. Al utilizar Vite con React, puedes experimentar una mejora significativa en los tiempos de compilación y carga, lo que facilita el proceso de desarrollo y prueba de tus aplicaciones.

2. - A la hora de ejecutar el comando, Vite te permite elegir el nombre de la carpeta y los compiladores que vas a utilizar, como Vanilla, React, Preact y algunos más. También te permite elegir el lenguaje, como TypeScript o JavaScript.

3. - Luego nos posicionamos al interno de la carpeta del proyecto con `cd nombre-del-proyecto`.

4. - Ejecutamos el comando para crear las dependencias necesarias con `npm install`, de la misma forma que se explica arriba.

5. - Por último, para ejecutar la aplicación se utiliza el comando `npm run dev`.

### **`npx create-next-app@latest`**

1. - Este comando crea un proyecto utilizando Next.js.
Next.js es un marco de desarrollo de aplicaciones web de código abierto que se basa en React, una popular biblioteca de JavaScript para construir interfaces de usuario interactivas. A diferencia de React, que es principalmente una biblioteca de vista, Next.js es un marco completo que incluye características adicionales y herramientas para facilitar la creación de aplicaciones web complejas.
Es una excelente elección para aplicaciones web más complejas que requieren pre-renderización, enrutamiento avanzado y manejo de datos asincrónicos. Si tu aplicación necesita una buena optimización para motores de búsqueda, Next.js es una excelente opción debido a su capacidad de pre-renderización y carga de código optimizada.

2. - A la hora de ejecutar el comando, Next.js te permite elegir el nombre de la carpeta y el lenguaje, como TypeScript (normalmente tiende a preferir este) o JavaScript. También te pregunta si deseas instalar librerías como ESLint, Tailwind CSS, AppRouter y si deseas crear un alias para hacer los imports o nombrar el directorio source como src.

3. - Luego nos posicionamos al interno de la carpeta del proyecto con `cd nombre-del-proyecto`.

4. - Ahora ejecutamos el comando para crear las dependencias necesarias con `npm install`, de la misma forma que se explica arriba.

5. - Por último, para ejecutar la aplicación se utiliza el comando `npm run dev`.

