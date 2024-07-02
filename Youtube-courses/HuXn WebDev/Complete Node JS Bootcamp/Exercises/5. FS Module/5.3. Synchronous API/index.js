// FileSystem Module
import * as fs from "fs";

// use the synchronous version of the methods adding "Sync" at the end of the method name

// Create a directory
fs.mkdirSync("c:/nodejs/test/demo", { recursive: true });

// Remove Directory
fs.rmSync("c:/nodejs", { recursive: true });
console.log("Done.");