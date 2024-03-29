import express from "express";
import "express-async-errors";
import morgan from "morgan";
import "dotenv/config";
import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import axios from "axios";
import {
  create,
  deleteById,
  getAll,
  getOneById,
  updateById,
  createImage,
} from "./controllers/planets.js";
import multer from "multer";
import { logIn, signUp, logOut } from "./controllers/users.js";
import authorize from "./authorize.js";
import "./passport.js";

//* VARIABLES */
// Creación del servidor con Express e inicialización del mismo
const server = express();
// Puerto de escucha
const PORT: string | number = process.env.PORT || 3000;
// Conseguimiento de la ruta completa del archivo actual, incluyendo el nombre del archivo
const __filename = fileURLToPath(import.meta.url);
// Conexión con el directorio del archivo actual utilizando la función path.dirname()
const __dirname = path.dirname(__filename);
// Creación del archivo de registro
const nombreArchivo = "access.log";
// Realización de un flujo de escritura para el archivo de registro con la configuración de los flags en modo adicción (añade siempre archivos en la última fila)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, nombreArchivo),
  {
    flags: "a",
  },
);

//* MIDDLEWARES */
server.use(morgan("dev", { stream: accessLogStream }));
server.use(express.json());

//* MULTER *//
// Crear un archivo para guardar información con Multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
// Actualizar información de Multer
const uploadMulter = multer({ storage });

//* CRUD SIMPLE CON IMPORTACIÓN DE FUNCIONES Y CONEXIÓN A BASE DE DATOS */
server.get("/api/planets", getAll);
server.get("/api/planets/:id", getOneById);
server.post("/api/planets", create);
server.put("/api/planets/:id", updateById);
server.delete("/api/planets/:id", deleteById);

//* AUTENTICACIÓN, LOGIN, SIGNUP y LOGOUT CON PASSPORT & JWT */
server.post("/api/users/login", logIn);
server.post("/api/users/signup", signUp);
server.get("/api/users/logout", authorize, logOut);

//* CRUD CON MULTER, CREACIÓN DE ARCHIVOS Y CONEXIÓN A ELLOS */
server.post(
  "/api/planets/:id/image",
  uploadMulter.single("image"), // Una vez que abierto `Postman`, introducimos la `ruta`, seleccionamos el método `Post`, vamos a `Body`, elegimos `form-data` y, debajo de la primer celda `Key` (la que nos impide escribir), en la parte derecha, elegimos `file` en vez de `text`, luego volvemos a `Key` para escribir la ID que elegimos para `uploadMulter.single()` (en este caso es `image` la `key` correspondiente). Modificamos la ruta de selección de archivos en los `Settings` de Postman, para que pueda buscar todos los archivos desde la raíz del PC (por ejemplo: `home/user`) y nos permita cargar archivos de cualquier parte. Por último agregamos el archivo y le damos al botón `Send`
  createImage,
);

//* CRUD CON MÓDULO FS */
const rutaDelArchivo =
  "/home/marcoslt93/Dev/DEVELHOPE/8_NODE.JS/2_Express/express-project/src/db.json";

server.get("/json", async (req, res) => {
  try {
    // leer el archivo, fixear el buffer y parsear la data
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivo,
      "utf-8",
    );
    const fixedBuffer = contenidoDelArchivo.toString();
    const parsedData = JSON.parse(fixedBuffer);
    // crear la información del servidor
    if (parsedData) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).json({
        request: req.url,
        message: "Read All",
        data: parsedData,
      });
    }
  } catch (err) {
    // manejo de errores
    if (err instanceof Error) {
      res.status(404).send(`404 - Not Found: ${err.message}`);
      console.error(err.name);
      throw err;
    }
  }
});

server.get("/json/:id", async (req, res) => {
  try {
    // leer archivo, fixear y parsear
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivo,
      "utf-8",
    );
    const fixedBuffer = contenidoDelArchivo.toString();
    const parsedData = JSON.parse(fixedBuffer);
    // con la data parseada podemos trabajar
    if (parsedData) {
      // recibimos info de los parámetros de la url de la página
      const { id } = req.params;
      const fixedQueryParamId = Number(id);
      // encontrar (find) lo que se encuentra en los query param (id). Find devuelve el primer elemento encontrado que corresponda con la condición.
      const singleQueryParamElement = parsedData.find(
        (element: { id: number; title: string }) =>
          element.id === fixedQueryParamId,
      );
      // crear información del servidor
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).json({
        request: req.url,
        message: "Read One",
        data: singleQueryParamElement,
      });
    }
  } catch (err) {
    // manejo de errores
    if (err instanceof Error) {
      res.status(404).send(`404 - Not Found: ${err.message}`);
      console.error(err.name);
      throw err;
    }
  }
});

server.post("/json", async (req, res) => {
  try {
    // leer archivo, fix buffer y parsear data
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivo,
      "utf-8",
    );
    const fixedBuffer = contenidoDelArchivo.toString();
    const parsedData = JSON.parse(fixedBuffer);
    // con la data parseada podemos trabajar
    if (parsedData) {
      // recibimos info del contenido del body de la página
      const { id, title } = req.body;
      // crear copia de lo que se recibe del body. El spread operator realiza una copia total de arrays u objetos.
      const updateData = [...parsedData, { id: id, title: title }];

      // escribir en el archivo el nuevo objeto
      const stringifyUpdateArchivo = JSON.stringify(updateData, null, 2);
      await fs.promises.writeFile(
        rutaDelArchivo,
        stringifyUpdateArchivo,
        "utf-8",
      );
      // mandamos la nueva info al servidor
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(201).json({
        request: req.url,
        message: "Create",
        data: updateData,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).send(`404 - Not Found: ${err.message}`);
      console.error(err.name);
      throw err;
    }
  }
});

server.put("/json/:id", async (req, res) => {
  try {
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivo,
      "utf-8",
    );
    const fixedBuffer = contenidoDelArchivo.toString();
    const parsedData = JSON.parse(fixedBuffer);

    if (parsedData) {
      const { id } = req.params;
      const fixedQueryParamId = Number(id);
      const { title } = req.body;
      // Mapea (map) a través del query param (id) y modifica el contenido. Primero copia el elemento encontrado, y después modifica sus propiedades. Map devuelve un nuevo array con uno o varios elementos modificados.
      const newArrayWithUpdatedElement = parsedData.map(
        (element: { id: number; title: string }) =>
          element.id === fixedQueryParamId
            ? { ...element, title: title }
            : element,
      );
      // escribimos en el archivo
      const stringifyUpdateArchivo = JSON.stringify(
        newArrayWithUpdatedElement,
        null,
        2,
      );
      await fs.promises.writeFile(
        rutaDelArchivo,
        stringifyUpdateArchivo,
        "utf-8",
      );
      // escribimos la nueva respuesta del servidor
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(201).json({
        request: req.url,
        message: "Update",
        data: newArrayWithUpdatedElement,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).send(`404 - Not Found: ${err.message}`);
      console.error(err.name);
      throw err;
    }
  }
});

server.delete("/json/:id", async (req, res) => {
  try {
    // leer el archivo, fix buffer y parsear el toString
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivo,
      "utf-8",
    );
    const fixedBuffer = contenidoDelArchivo.toString();
    const parsedData = JSON.parse(fixedBuffer);
    // si tenemos data parseada podemos trabajar
    if (parsedData) {
      // requerimos el id de los params de la url
      const { id } = req.params;
      const fixedQueryParamId = Number(id);
      // filtramos (filter) el array para que nos devuelva todos los elementos que sean distintos al encontrado encontrado en el array. Filter devuelve un nuevo array con todos los elementos que cumplan una condición. Si es true, se incluye. Si es false, no se incluye en el nuevo array.
      const newArrayWithDeletedElement = parsedData.filter(
        (element: { id: number; title: string }) =>
          element.id !== fixedQueryParamId,
      );
      // escribimos los nuevos datos en el archivo
      const stringifyDeleteIntoArchivo = JSON.stringify(
        newArrayWithDeletedElement,
        null,
        2,
      );
      await fs.promises.writeFile(
        rutaDelArchivo,
        stringifyDeleteIntoArchivo,
        "utf-8",
      );
      // actualizamos la respuesta del servidor
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).json({
        request: req.url,
        message: "Delete",
        data: newArrayWithDeletedElement,
      });
    }
    // manejamos los errores
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).send(`404 - Not Found: ${err.message}`);
      console.error(err.name);
      throw err;
    }
  }
});

//* CRUD CON LLAMADA A UNA API Y ESCRITURA DE DATOS EN UN ARCHIVO CON FS */
const url = "https://my-json-server.typicode.com/typicode/demo/posts";
const rutaDelArchivoAPI =
  "/home/marcoslt93/Dev/DEVELHOPE/8_NODE.JS/2_Express/express-project/src/db-API.json";

interface Obj {
  id: number;
  title: string;
}

type ArrObj = Obj[];

((url) => {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      const data: ArrObj = response.data;
      const stringifyData = JSON.stringify(data);
      fs.promises.writeFile(rutaDelArchivoAPI, stringifyData, "utf-8");
    })
    .catch((err) => {
      console.error(err.message);
    })
    .finally(() => console.log("proceso finalizado"));
})(url);

server.post("/api", async (req, res) => {
  try {
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivoAPI,
      "utf-8",
    );
    const fixedBufferArchivo = contenidoDelArchivo.toString();
    const parsedArchivo = JSON.parse(fixedBufferArchivo);

    if (parsedArchivo) {
      const { id, title } = req.body;
      const newArrPosted = [...parsedArchivo, { id: id, title: title }];
      const stringifyNewArrPosted = JSON.stringify(newArrPosted, null, 2);
      await fs.promises.writeFile(
        rutaDelArchivoAPI,
        stringifyNewArrPosted,
        "utf-8",
      );
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(201).json({
        request: req.url,
        msg: "Create",
        response: newArrPosted,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(404).send(`404 - Not Found ${err.message}`);
      throw err;
    }
  }
});

server.get("/api", async (req, res) => {
  try {
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivoAPI,
      "utf-8",
    );
    const fixedBufferArchivo = contenidoDelArchivo.toString();
    const parsedArchivo = JSON.parse(fixedBufferArchivo);
    if (parsedArchivo) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).json({
        request: req.url,
        msg: "Read All",
        response: parsedArchivo,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).send(`404 - Not Found: ${err.message}`);
      console.error(err.message);
      throw err;
    }
  } finally {
    console.log(`Proceso de lectura y conexión al servidor realizados.`);
  }
});

server.get("/api/:id", async (req, res) => {
  try {
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivoAPI,
      "utf-8",
    );
    const fixedBufferArchivo = contenidoDelArchivo.toString();
    const parsedArchivo = JSON.parse(fixedBufferArchivo);
    if (parsedArchivo) {
      const { id } = req.params;
      const fixedId = Number(id);
      const findID = parsedArchivo.find((element: { id: number }) =>
        element.id === fixedId ? element : undefined,
      );
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).json({
        request: req.url,
        msg: "Read One",
        response: findID,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(404).send(`404 - Not Found: ${err.message}`);
      throw err;
    }
  }
});

server.put("/api/:id", async (req, res) => {
  try {
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivoAPI,
      "utf-8",
    );
    const fixedBufferArchivo = contenidoDelArchivo.toString();
    const parsedArchivo = JSON.parse(fixedBufferArchivo);

    if (parsedArchivo) {
      const { id } = req.params;
      const fixedId = Number(id);
      const { title } = req.body;
      const newArrUpdated = parsedArchivo.map(
        (element: { id: number; title: string }) =>
          element.id === fixedId ? { ...element, title: title } : element,
      );
      const stringifyNewArrUpdated = JSON.stringify(newArrUpdated);
      await fs.promises.writeFile(
        rutaDelArchivoAPI,
        stringifyNewArrUpdated,
        "utf-8",
      );
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(201).json({
        request: req.url,
        msg: "Update",
        response: newArrUpdated,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(404).send(`404 - Not Found: ${err.message}`);
      throw err;
    }
  }
});

server.delete("/api/:id", async (req, res) => {
  try {
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivoAPI,
      "utf-8",
    );
    const fixedBufferArchivo = contenidoDelArchivo.toString();
    const parsedArchivo = JSON.parse(fixedBufferArchivo);

    if (parsedArchivo) {
      const { id } = req.params;
      const fixedId = Number(id);
      const newArrDeleted = parsedArchivo.filter(
        (element: { id: number; title: string }) => element.id !== fixedId,
      );
      const stringifyNewArrDeleted = JSON.stringify(newArrDeleted, null, 2);
      await fs.promises.writeFile(
        rutaDelArchivoAPI,
        stringifyNewArrDeleted,
        "utf-8",
      );
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).json({
        request: req.url,
        msg: "Delete",
        response: newArrDeleted,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(404).send(`404 - Not Found ${err.message}`);
      throw err;
    }
  }
});

//* ESCUCHA DEL PUERTO */
server.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
