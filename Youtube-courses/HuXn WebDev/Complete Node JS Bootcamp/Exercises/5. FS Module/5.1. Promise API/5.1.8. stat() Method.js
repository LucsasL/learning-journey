// FileSystem Module
import * as fs from "fs/promises";

// fs.stat(fileName) Method

// Get the metadata of a file
try {
  const info = await fs.stat("info.txt");
  // console.log(info);
  console.log(info.isDirectory());
  console.log(info.isFile());

} catch (error) {
  console.log(error);
}
