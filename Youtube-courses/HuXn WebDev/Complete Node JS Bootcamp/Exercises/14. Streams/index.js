// Streams

// Streams are a way to handle reading and writing a data, they provide a way to work with a large amount of data.

import { createReadStream } from "fs";

const stream = createReadStream("./data.txt", { encoding: "utf-8" });

stream.on("data", (data) => {
  console.log(data);
});