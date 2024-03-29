import { Request, Response } from "express";
import joi from "joi";
import { db } from "./../db.js";

type Planet = {
  id?: number;
  name: string;
};

/* type Planets = Planet[]; */

const planetScheme = joi.object({
  id: joi.number().integer(),
  name: joi.string().required(),
});

/* let planets: Planets = [
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
]; */

const getAll = async (req: Request, res: Response) => {
  const planets = await db.many(`SELECT * FROM planets;`);
  console.log(planets);
  res.status(200).json(planets);
};

const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = await db.oneOrNone(
    `SELECT * FROM planets WHERE id=$1;`,
    Number(id),
  );
  res.status(200).json(planet);
};

const create = async (req: Request, res: Response) => {
  const { /* id, */ name } = req.body;
  const newPlanet: Planet = { /* id: id, */ name: name };

  const validateNewPlanet = planetScheme.validate(newPlanet);
  if (validateNewPlanet.error) {
    return res
      .status(404)
      .json({ msg: validateNewPlanet.error.details[0].message });
  } else {
    // planets = [...planets, newPlanet];
    await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
    res.status(201).json({ msg: "The planet was created" });
  }
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  // planets = planets.map((e) =>
  //   e.id === Number(id) ? { ...e, name: name } : e,
  // );
  await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);

  res.status(200).json({ msg: "The planet was updated" });
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  // planets = planets.filter((e) => e.id !== Number(id));
  await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));

  res.status(200).json({ msg: "The planet was deleted" });
};

const createImage = async (req: Request, res: Response) => {
  console.log(req.file);
  res.status(201).json({ msg: "Planet image uploaded successfully" });
};

export { getAll, getOneById, create, updateById, deleteById, createImage };
