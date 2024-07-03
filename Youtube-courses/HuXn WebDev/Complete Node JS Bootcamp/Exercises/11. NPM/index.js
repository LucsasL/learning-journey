// HTTP Module Import
import http from "http";

console.log("Amogus");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "Good", { "Content-type": "text/html" });
    res.write("<h1>Hello from Node JS Server :)</h1>");
    
  } else {
    res.writeHead(404, "Not Found", { "Content-type": "text/html" });
    res.end("<h1>404 Page Not Found :(</h1>");
  }
});

server.listen(8000, () => console.log("Server Up!"));