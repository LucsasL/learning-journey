// FileSystem Module
import * as fs from "fs/promises";

// fs.appendFile(fileName, addedContent) Method

// It adds content to the specified file
try {
  await fs.appendFile("README.md", "Just learned how to add more content with Node JS.\n");
  console.log("Content added!");
} catch (error) {
  console.log(error);
}
