// Here I write the code of the exercises to practice during my studies

// FileSystem Module
import * as fs from "fs/promises";

// fs.readdir(pathString) Method

// read the content of the folder
try {
  const files = await fs.readdir("c:/nodejs");
  for (const file of files) {
    console.log(file);
  }

} catch (error) {
  console.log(error);
}

// It's the code of the last exercise I did in the course