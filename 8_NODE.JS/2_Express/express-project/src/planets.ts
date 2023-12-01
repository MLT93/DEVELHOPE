import { Request, Response } from "express";
import joi from "joi";

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

const planetScheme = joi.object({
  id: joi.number().integer().required(),
  name: joi.string().required(),
});

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

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((e) => e.id === Number(id));
  res.status(200).json(planet);
};
const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet: Planet = { id: id, name: name };
  const validateNewPlanet = planetScheme.validate(newPlanet);

  if (validateNewPlanet.error) {
    return res
      .status(404)
      .json({ msg: validateNewPlanet.error.details[0].message });
  } else {
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: "The planet was created" });
  }
};

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((e) =>
    e.id === Number(id) ? { ...e, name: name } : e,
  );

  console.log(planets);

  res.status(200).json({ msg: "The planet was updated" });
};

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((e) => e.id !== Number(id));

  res.status(200).json({ msg: "The planet was deleted" });
};

export { getAll, getOneById, create, updateById, deleteById };
