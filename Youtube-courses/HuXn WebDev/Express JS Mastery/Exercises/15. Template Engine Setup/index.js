// Module Imports
import express from "express";
import route from "./routes/route.js";

const app = express();

// Template Engine Setup
app.set("view engine", "ejs");

// using the router
app.use("/", route);

// Listening server on localhost at port 8000
app.listen(8000, () => console.log("Listening server at port 8000"));