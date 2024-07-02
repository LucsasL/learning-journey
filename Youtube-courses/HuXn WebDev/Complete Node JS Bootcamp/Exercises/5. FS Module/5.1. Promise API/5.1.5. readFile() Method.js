// FileSystem Module
import * as fs from "fs/promises";

// fs.readFile(fileName, textFomartString) Method

// It reads the content of a file
try {
  const data = await fs.readFile("README.md", "utf-8");
  console.log(data);

} catch (error) {
  console.log(error);
}