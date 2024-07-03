// Events
import EventEmitter from "events";

// Creating an Instance
const customEmitter = new EventEmitter();

// 1. on: listen/register for an event.

// 2. once: listen/register for an event once.
// customEmitter.once();

// 3. emit: emit/call an event.
// customEmitter.emit();
customEmitter.on("response", (name, id) => {
  console.log(`User: ${name}; ID: ${id}.`);
});

// Emitters
customEmitter.emit("response", "john", 1234);
customEmitter.emit("response", "alex", 4321);
