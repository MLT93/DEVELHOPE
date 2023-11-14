import { EventEmitter } from "node:events";
import { createReadStream } from "node:fs";

/* Exercise 11 - Listen to the news */

const emitter = new EventEmitter();

emitter.on("data", (event) => {
  console.log(event);
});

const intervalId = setInterval(() => {
  emitter.emit("data", "This is some data of event (data)");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("The interval has finished");
}, 2500);

const file = createReadStream("./file.txt", "utf-8");

file.on("data", (chunk) => console.log("Chunk of file:", chunk.toString("utf8")));

file.on("end", () => console.log("End of file read stream."));

file.on("error", (err) => console.error("Error reading file:", err));
