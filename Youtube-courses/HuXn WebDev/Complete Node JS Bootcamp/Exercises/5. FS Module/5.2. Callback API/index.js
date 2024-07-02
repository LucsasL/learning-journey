// FileSystem Module
import * as fs from "fs";

fs.mkdir("c:/nodejs", (error) => {
  if (error) throw new Error();
  console.log("Directory Created...");
});
