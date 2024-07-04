// create a folder
// npm init -y
// npm i express
// Create an Instance of Express.js
// Provided a port (:8000) for the server
// Basic Route

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
})

app.listen(8000, () => console.log("Listening server on port 8000"));