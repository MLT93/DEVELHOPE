import * as fs from "node:fs";
import express from "express";
import morgan from "morgan";
/* import joi from "joi"; */
import "dotenv/config";
import "express-async-errors";

/* Variables */
const server = express();
const PORT: string | number = process.env.PORT || 3000;
const rutaDelArchivo =
  "/home/marko/Development/DEVELHOPE/8_NODE.JS/2_Express/express-project/src/db.json";

/* Tipos e Interfaces */
interface Planet {
  id: number;
  name: string;
}

type Planets = Planet[];

/* Data */
const planets: Planets = [
  {
    id: 1,
    name: "Sun",
  },
  {
    id: 2,
    name: "Moon",
  },
  {
    id: 3,
    name: "Mercury",
  },
  {
    id: 4,
    name: "Venus",
  },
  {
    id: 5,
    name: "Earth",
  },
  {
    id: 6,
    name: "Mars",
  },
  {
    id: 7,
    name: "Jupiter",
  },
  {
    id: 8,
    name: "Saturn",
  },
  {
    id: 9,
    name: "Urano",
  },
  {
    id: 10,
    name: "Neptune",
  },
  {
    id: 11,
    name: "Pluton",
  },
];

/* Lógica */
server.use(morgan("dev"));
server.use(express.json());

server.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json({
    message: "Hello World!",
    request: req.url,
  });
});

/* CRUD SIMPLE */
server.get("/planets/", (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json({
    allPlanets: planets,
    request: req.url,
  });
});

server.get("/planets/:id", (req, res) => {
  const { id } = req.params;
  const fixedPlanetId = Number(id);
  const queryParamPlanet = planets.find(
    (element) => element.id === fixedPlanetId,
  );
  if (queryParamPlanet) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).json({
      message: "Read planet",
      get: queryParamPlanet,
      remaining: planets,
    });
  } else {
    const error = new Error("404 - Not Found");
    res.status(404).send(error.message);
  }
});

server.post("/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet: Planet = { id: id, name: name };
  const newArrOfPlanets: Planets = [...planets, newPlanet];

  if (newPlanet.id && newPlanet.name) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(201).json({
      message: "Create new planet",
      create: newPlanet,
      remaining: newArrOfPlanets,
    });
  } else {
    const error = new Error("501 - Server Error");
    res.status(501).send(error.message);
  }
});

server.put("/planets/:id", (req, res) => {
  const { id } = req.params;
  const fixedPlanetId = Number(id);
  const { name } = req.body;
  const newUpdatedPlanets = planets.map((element) =>
    element.id === fixedPlanetId ? { ...element, name } : element,
  );

  if (newUpdatedPlanets) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(201).json({
      message: "Update new planet",
      update: { id, name },
      remaining: newUpdatedPlanets,
    });
  } else {
    const error = new Error("501 - Server Error");
    res.status(501).send(error.message);
  }
});

server.delete("/planets/:id", (req, res) => {
  const { id } = req.params;
  const fixedPlanetId = Number(id);

  const indexToDelete = planets.findIndex(
    (element) => element.id === fixedPlanetId,
  );

  if (indexToDelete !== -1) {
    const deletedPlanet = planets.splice(indexToDelete, 1);
    const remainingPlanets = planets;

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).json({
      message: "Delete planet",
      delete: deletedPlanet,
      remaining: remainingPlanets,
    });
  } else {
    const error = new Error("404 - Not Found");
    res.status(404).send(error.message);
  }
});

/* CRUD CON BADE DE DATOS LOCAL */
server.get("/json", async (req, res) => {
  try {
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivo,
      "utf-8",
    );
    const fixedBuffer = contenidoDelArchivo.toString();
    const parsedData = JSON.parse(fixedBuffer);
    if (parsedData) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).json({
        request: req.url,
        message: "Get All",
        data: parsedData,
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

server.get("/json/:id", async (req, res) => {
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
      const singleQueryParamElement = parsedData.find(
        (element: { id: number; title: string }) => element.id === fixedQueryParamId,
      );
      if (singleQueryParamElement) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.status(200).json({
          request: req.url,
          message: "Read",
          data: parsedData,
        });
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).send(`404 - Not Found: ${err.message}`);
      console.error(err.name);
      throw err;
    }
  }
});

server.post("/json", async (req, res) => {
  try {
    const contenidoDelArchivo = await fs.promises.readFile(
      rutaDelArchivo,
      "utf-8",
    );
    const fixedBuffer = contenidoDelArchivo.toString();
    const parsedData = JSON.parse(fixedBuffer);

    if (parsedData) {
      const { id, title } = req.body;
      const updateArchivo = [...parsedData, { id: id, title: title }];

      if (updateArchivo) {
        const stringifyUpdateArchivo = JSON.stringify(updateArchivo, null, 2);
        await fs.promises.writeFile(
          rutaDelArchivo,
          stringifyUpdateArchivo,
          "utf-8",
        );

        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.status(201).json({
          request: req.url,
          message: "Create",
          data: updateArchivo,
        });
      }
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
      const newArrayWithUpdatedElement = parsedData.map(
        (element: { id: number; title: string }) =>
          element.id === fixedQueryParamId ? { id: id, title: title } : element,
      );

      if (newArrayWithUpdatedElement) {
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

        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.status(201).json({
          request: req.url,
          message: "Update",
          update: { id, title },
          data: newArrayWithUpdatedElement,
        });
      }
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

      const newArrayWithDeletedElement = parsedData.map(
        (element: { id: number; title: string }) =>
          element.id === fixedQueryParamId
            ? parsedData.splice(element.id, 1)
            : element,
      );

      if (newArrayWithDeletedElement) {
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

        res.status(200).json({
          request: req.url,
          message: "Delete",
          delete: { id, title },
          data: newArrayWithDeletedElement,
        });
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).send(`404 - Not Found: ${err.message}`);
      console.error(err.name);
      throw err;
    }
  }
});

server.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
