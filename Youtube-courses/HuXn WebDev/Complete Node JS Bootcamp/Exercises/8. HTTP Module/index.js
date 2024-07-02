// HTTP Module
import http from "http";

// Create a server
const server = http.createServer((req, res) => {
  // console.log(req);
  // res.setHeader("Content-type", "text/html");
  // res.statusCode = 404;
  // res.statusMessage = "BAD!";

  // Shorthand for status (code, message, & header)
  res.writeHead(202, "Good", { "Content-type": "text/html" });

  res.write("<h1>Welcome to my server! My first server with Node JS</h1>");
});

// Listening one port 8000
server.listen(8000, () => console.log("Server Up!"));
