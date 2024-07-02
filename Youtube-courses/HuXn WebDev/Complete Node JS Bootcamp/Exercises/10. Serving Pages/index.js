// 
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "Good", { "Content-type": "text/html" });
    fs.readFile("./public/home.html", (error, data) => {
      if (error) throw new Error(() => console.log(error));
      
      res.end(data);
    });
    
  } else if (req.url === "/about") {
    res.writeHead(200, "Good", { "Content-type": "text/html" });
    fs.readFile("./public/about.html", (error, data) => {
      if (error) throw new Error(() => console.log(error));

      res.end(data);
    });
    
  } else {
    res.writeHead(404, "Not Found", { "Content-type": "text/html" });
    res.end("<h1>404 Content Not Found :(</h1>")
  }

});

server.listen(8000, () => console.log("Server Up!"));