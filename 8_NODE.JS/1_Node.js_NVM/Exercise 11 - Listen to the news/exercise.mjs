import { EventEmitter } from "node:events";

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
