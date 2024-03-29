/* Exercise 6 - Send JSON from Mars

Change the location in the response to "Mars".
Run the server and make a request to it with curl using the --verbose flag.
What is the value of the Content-Length response header? */

import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
