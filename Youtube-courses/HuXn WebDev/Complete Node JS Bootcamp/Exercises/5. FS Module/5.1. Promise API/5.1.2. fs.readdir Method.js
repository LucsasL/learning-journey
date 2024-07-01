// FileSystem Module
import * as fs from "fs/promises";

// fs.readdir() Method

// It reads the content of a folder and returns an array
try {
  const files = await fs.readdir("c:/nodejs");
  for (const file of files) {
    console.log(file);
  }

} catch (error) {
  console.log(error);
}