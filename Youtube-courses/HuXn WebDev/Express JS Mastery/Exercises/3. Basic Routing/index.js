import express from "express";

const app = express();

// Basic Routing
app.get("/", (req, res) => {
  res.send("<h1>Welcom to HOME</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Welcom to ABOUT</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcom to CONTACT</h1>");
});

app.listen(8000, () => console.log("Listening server on port 8000"));