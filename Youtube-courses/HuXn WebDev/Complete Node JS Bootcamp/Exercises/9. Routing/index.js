//
import http from "http";

const server = http.createServer((req, res) => {
  const urlLocation = req.url;

  
  if (urlLocation === "/") {
    res.writeHead(200, "Good", { "Content-type": "text/html" });
    
    res.write("<h1>Home</h1>");
    res.write("<a href='/about'>About Page</a>\n");
    res.end("<a href='/contact'>Contact Page</a>");
    
  } else if (urlLocation === "/about") {
    res.writeHead(200, "Good", { "Content-type": "text/html" });
    
    res.end("<h1>About Page</h1>");
    
  } else if (urlLocation === "/contact") {
    res.writeHead(200, "Good", { "Content-type": "text/html" });
    
    res.end("<h1>Contact Page</h1>");
    
  } else {
    res.writeHead(404, "Not Found", { "Content-type": "text/html" });
    res.end("<h1>404 Page Not Found :(</h1>");
  }
});

// / -> Home
// /about -> about
// /contact  -> Contact

server.listen(8000, () => console.log("Server Up!"));
