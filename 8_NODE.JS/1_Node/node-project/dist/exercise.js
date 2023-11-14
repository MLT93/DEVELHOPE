"use strict";
/* Exercise 6 - Send JSON from Mars

Change the location in the response to "Mars".
Run the server and make a request to it with curl using the --verbose flag.
What is the value of the Content-Length response header? */
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const server = (0, node_http_1.createServer)((request, response) => {
    console.log("request received");
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    const jsonResponseBody = JSON.stringify({ location: "Mars" });
    response.end(jsonResponseBody);
});
server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});
