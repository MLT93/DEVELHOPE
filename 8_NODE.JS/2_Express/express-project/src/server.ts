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
// eslint-disable-next-line prefer-const
let planets: Planets = [
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

server.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.status(200).json({
    message: "Hello World!",
  });
});

server.get("/planets/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.status(200).json({ location: planets });
});

server.get("/planets/:id", (req, res) => {
  const { id } = req.params;
  const fixedPlanetId = Number(id);
  const queryParamPlanet = planets.find(
    (element) => element.id === fixedPlanetId,
  );
  if (queryParamPlanet) {
    res.status(200).json(queryParamPlanet);
  } else {
    const error = new Error("404 - Not Found");
    res.status(404).send(error.message);
  }
});

server.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
