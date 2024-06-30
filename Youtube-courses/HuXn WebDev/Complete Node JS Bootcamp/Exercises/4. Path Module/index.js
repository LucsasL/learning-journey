// Path Module
import path from "path";

// path.basename(pathString) method

// It takes the name of the file from the path and then returns it
console.log(path.basename("c:/nodejs/index.js"));
console.log(path.basename("c:/nodejs/index.js", ".js"));

// path.dirname(pathString) method

// It takes the name of the directories and then returns it
console.log(path.dirname("c:/nodejs/index.js"));

// path.extname(pathString) method

// It takes the extension name of a file and then returns it
console.log(path.extname("c:/nodejs/index.js"));

// path.join(string1, string2, string3) method

// It takes two strings and join them in one, returning a path
console.log(path.join("c:", "irineu-nusabi", "HTML&CSS"));

// You can up a level in the path, ignoring the last directory you specified
console.log(path.join("c:", "irineu-nusabi", "HTML&CSS", ".."));
console.log(path.join("c:", "irineu-nusabi", "HTML&CSS", "..", ".."));

// path.normalize(pathString) method

// It takes a path and returns the path formatted in the right way
console.log(path.normalize("c:///courses///redux///store//features//"));

// path.parse() method

// It returns an object whose properties represent significant elements of the path. (root, dir, base, ext, name)
console.log(path.parse("c:/nodejs/courses/app.js"));
console.log(path.parse("c:/nodejs/courses/app.js").dir);
console.log(path.parse("c:/nodejs/courses/app.js").base);
console.log(path.parse("c:/nodejs/courses/app.js").ext);