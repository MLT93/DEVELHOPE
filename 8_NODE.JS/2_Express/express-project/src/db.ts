import pgPromise from "pg-promise";

// Primer paréntesis es dedicado a las opciones, el segundo es el enlace a la base de datos real.
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/psql"); // Forma de escritura -> "postgres://usuario:contraseña@localhost:puerto/nombreBaseDeDatos"
console.log(db);

// Creación de una tabla
const setupDb = async () => {
  await db.none(`
  DROP TABLE IF EXISTS planets;

  CREATE TABLE planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT
  );
  
  DROP TABLE IF EXISTS users;

  CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    token TEXT
  );

  `);

  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Jupiter')`);
  await db.none(
    `INSERT INTO users (username, password) VALUES ('dummy', 'dummy')`,
  );
};

setupDb();

export { db };
