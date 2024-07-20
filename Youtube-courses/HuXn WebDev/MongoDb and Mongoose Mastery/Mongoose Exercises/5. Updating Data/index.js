// Importing Express
import express from "express";

// Importing Functions
import connectDB from "./db/connectDB.js";
import { allDocs, singleDoc } from "./models/movies.js";

// Making Instances
const app = express();
const port = process.env.port || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1/movies";

connectDB(DATABASE_URL);
allDocs();
singleDoc();

// Listening on specified port
app.listen(port, () => console.log(`Listening server at port ${port}`))