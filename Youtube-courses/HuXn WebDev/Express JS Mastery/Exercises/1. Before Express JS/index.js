// HTTP Module
import http from "http";

const server = http.createServer((req, res) => {
  let page = req.url;

  if (page === "/") {
    res.writeHead(201, "Good", { "Content-type": "text/html" });
    res.write("<h1>Home</h1>");
    
  } else if (page === "/about") {
    res.writeHead(201, "Good", { "Content-type": "text/html" });
    res.write("<h1>About</h1>");
    
  } else if (page === "/contact") {
    res.writeHead(201, "Good", { "Content-type": "text/html" });
    res.write("<h1>Contact</h1>");
    
  } else {
    res.writeHead(404, "Not Found", { "Content-type": "text/html" });
    res.write("<h1>404 Page Not Found :(</h1>");
  }
});

server.listen(8000, () => console.log("Listening on port 8000"));