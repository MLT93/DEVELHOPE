import express from "express";
import morgan from "morgan";
import "dotenv/config";
import "express-async-errors";

/* Variables */
const server = express();
const PORT: string | number = process.env.PORT || 3000;

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
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    message: "Hello World!",
  });
});

server.get("/planets/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ allPlanets: planets });
});

server.post("/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet: Planet = { id: id, name: name };
  const newArrOfPlanets: Planets = [...planets, newPlanet];

  if (newPlanet.id && newPlanet.name) {
    res.setHeader("Content-Type", "application/json");
    res.status(201).json({
      message: "Create new planet",
      create: newPlanet,
      newPlanets: newArrOfPlanets,
    });
  } else {
    const error = new Error("501 - Server Error");
    res.status(501).send(error.message);
  }
});

server.get("/planets/:id", (req, res) => {
  const { id } = req.params;
  const fixedPlanetId = Number(id);
  const queryParamPlanet = planets.find(
    (element) => element.id === fixedPlanetId,
  );
  if (queryParamPlanet) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      message: "Read planet",
      read: queryParamPlanet,
    });
  } else {
    const error = new Error("404 - Not Found");
    res.status(404).send(error.message);
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
    res.setHeader("Content-Type", "application/json");
    res.status(201).json({
      message: "Update new planet",
      update: newUpdatedPlanets,
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
    (planet) => planet.id === fixedPlanetId,
  );

  if (indexToDelete !== -1) {
    const deletedPlanet = planets.splice(indexToDelete, 1);
    const remainingPlanets = planets;

    res.setHeader("Content-Type", "application/json");
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

server.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
