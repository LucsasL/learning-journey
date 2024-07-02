// FileSystem Module
import * as fs from "fs/promises";

// fs.copyFile(copiedFile, copy) Method

// It copy content of a file and put it into other file
try {
  await fs.copyFile("README.md", "info.txt");
  console.log("Content Copied Successfully.");
} catch (error) {
  console.log(error);
}
