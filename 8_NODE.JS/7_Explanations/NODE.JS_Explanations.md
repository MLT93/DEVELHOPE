# **NODE.JS**

## Introducción a Node.js y Herramientas Relacionadas

1. #### **`Node.js: Instalación y Conceptos Fundamentales`**:

   **Node.js** es un entorno de ejecución de JavaScript del lado del servidor, basado en el motor V8 de Google Chrome. Permite ejecutar código JavaScript fuera del navegador, lo que lo convierte en una poderosa herramienta para construir aplicaciones escalables y de alto rendimiento.
   
   Para instalar Node.js, sigue estos pasos:
   
   - Sitio web oficial:
   
     - **https://nodejs.org/**
   
   2. **Instalador**:
   
      Ejecuta el instalador y sigue las instrucciones. Node.js incluirá automáticamente npm (Node Package Manager), que es el gestor de paquetes de Node.js.
   
   3. **Verificación de la Instalación**:
   
      Abre la terminal o el símbolo del sistema y ejecuta los siguientes comandos para verificar la instalación:
   
      - `node -v`: Muestra la versión de Node.js instalada.
      - `npm -v`: Muestra la versión de npm instalada.
   
## V8: El Motor de JavaScript

**V8** es el motor de ejecución de JavaScript desarrollado por Google. Es el motor subyacente tanto en el navegador Google Chrome como en Node.js. Es conocido por su alto rendimiento y eficiencia en la ejecución de código JavaScript.

## OpenJS Foundation

La **OpenJS Foundation** es una organización que apoya y promueve proyectos de código abierto relacionados con JavaScript y Node.js. Algunos de los proyectos incluidos son Node.js, Express, jQuery, y muchos otros. Proporciona recursos y apoyo a la comunidad de desarrollo de JavaScript.

## NVM: Node Version Manager

**NVM** es una herramienta que facilita la gestión de múltiples versiones de Node.js en un mismo sistema. Permite cambiar entre versiones de Node.js de manera sencilla y controlada. Esto es útil cuando trabajas en proyectos que requieren versiones específicas de Node.js.

### Instalación de NVM:

1. **Linux y macOS**:

   Abre la terminal y ejecuta el siguiente comando para instalar NVM:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
   ```

   Después de la instalación, cierra y vuelve a abrir la terminal.

2. **Windows**:

   Puedes instalar NVM a través de [nvm-windows](https://github.com/coreybutler/nvm-windows). Sigue las instrucciones proporcionadas en el repositorio.

### Uso de NVM:

- `nvm install <version>`: Instala una versión específica de Node.js.
- `nvm use <version>`: Cambia a una versión específica de Node.js.
- `nvm list`: Lista las versiones de Node.js instaladas.
- `nvm alias default <version>`: Establece una versión predeterminada de Node.js.

## NPM: Node Package Manager

**NPM** es el gestor de paquetes de Node.js. Permite instalar y administrar dependencias de proyectos de Node.js de manera sencilla.

## Remote SSH en VS Code

**Visual Studio Code (VS Code)** es un editor de código fuente gratuito y muy popular. Permite la integración de extensiones para una variedad de propósitos, incluyendo la conexión remota a servidores a través de SSH.

### Instalación de la Extensión de SSH:

1. Abre VS Code y ve a la pestaña de extensiones (icono de cuadrado con cuatro cuadraditos).
2. Busca "Remote - SSH" y haz clic en "Instalar" en la extensión proporcionada por Microsoft.

### Conexión a un Servidor Remoto:

1. Haz clic en el icono de la esquina inferior izquierda que muestra la etiqueta "><" y selecciona "Remote-SSH: Connect to Host...".
2. Ingresa la dirección SSH del servidor y sigue las instrucciones para autenticarte.
3. Una vez conectado, VS Code te permitirá editar y ejecutar código directamente en el servidor remoto.

## globalThis en JavaScript

`globalThis` es una propiedad global introducida en ECMAScript 2020. Proporciona una forma estandarizada de acceder al objeto global en cualquier entorno (ya sea un navegador o Node.js).

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
