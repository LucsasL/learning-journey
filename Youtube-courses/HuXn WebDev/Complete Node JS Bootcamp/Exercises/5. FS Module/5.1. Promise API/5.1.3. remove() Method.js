// FileSystem Module
import * as fs from "fs/promises";

// fs.rmdir(pathString, flags) Method

// It removes a Folder / Directory in the specified path

// In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
try {
  await fs.rmdir("c:/nodejs/courses/redux", { recursive: true });
  console.log("Folder removed.");
} catch (error) {
  console.log(error);
}