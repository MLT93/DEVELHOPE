import * as fs from "node:fs";
import express from "express";
import morgan from "morgan";
import "dotenv/config";
import "express-async-errors";
import axios from "axios";
import { create, deleteById, getAll, getOneById, updateById } from "./controllers/planets";

/* Variables */
const server = express();
const PORT: string | number = process.env.PORT || 3000;

/* Middlewares */
server.use(morgan("dev"));
server.use(express.json());

/* CRUD SIMPLE CON IMPORTACIÓN DE FUNCIONES */
server.get("/api/plantes", getAll);
server.get("/api/plantes/:id", getOneById);
server.post("/api/planets", create);

server.put("api/planets/:id", updateById);

server.delete("/api/planets/:id", deleteById);

/* CRUD CON BADE DE DATOS LOCAL */
const rutaDelArchivo =
  "/home/marko/Development/DEVELHOPE/8_NODE.JS/2_Express/express-project/src/db.json";

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

/* CRUD CON LLAMADA A UNA API Y ESCRITURA DE DATOS EN UN ARCHIVO */
const url = "https://my-json-server.typicode.com/typicode/demo/posts";
const rutaDelArchivoAPI =
  "/home/marko/Development/DEVELHOPE/8_NODE.JS/2_Express/express-project/src/db-API.json";

interface Obj {
  id: number;
  title: string;
}

type ArrObj = Obj[]

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
      console.error(err.cause);
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
      console.error(err.cause);
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
      console.error(err.cause);
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
      console.error(err.cause);
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
      console.error(err.cause);
      res.status(404).send(`404 - Not Found ${err.message}`);
      throw err;
    }
  }
});

server.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});