// FileSystem Module
import * as fs from "fs/promises";

// fs.(pathString?, fileName, fileContent) Method

// Create and Write Files
try {
  await fs.writeFile("README.md", "Hello Irineu Nusabi");
  console.log("File created successfully!");
  
} catch (error) {
  console.log(error);
}