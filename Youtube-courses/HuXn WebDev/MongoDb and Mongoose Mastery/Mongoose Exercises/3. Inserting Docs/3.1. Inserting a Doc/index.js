import express from "express";

// Import function to connect Database
import connectDB from "./db/connectDB.js";
import { createDoc } from "./models/movies.js";

// Instances
const app = express();
const port = process.env.port || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1/movies";

connectDB(DATABASE_URL);

createDoc();

app.listen(port, () => console.log(`Listening server at port ${port}`))