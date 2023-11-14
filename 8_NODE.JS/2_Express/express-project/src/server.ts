import express from "express";

const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
