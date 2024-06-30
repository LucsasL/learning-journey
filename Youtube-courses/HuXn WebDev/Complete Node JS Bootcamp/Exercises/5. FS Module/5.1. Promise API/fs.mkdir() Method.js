// FileSystem Module
import * as fs from "fs/promises";

try {
  // fs.mkdir(pathString, flags)

  // It creates a directory/folder in the path you determined, also inclues flags to set if you want to create a full path for the directory
  await fs.mkdir("c:/nodejs/courses/redux/toolkit", { recursive: true });
  console.log("Folder created.");
} catch (error) {
  console.log(error);
}
