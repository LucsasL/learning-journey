// Import Libraries
import express from "express";

// Importing functions
import connectDB from "./db/connectDB.js";
import { insertManyDocs } from "./models/movies.js"

// Instances
const app = express();
const port = process.env.port || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1/movies";

// Connecting the database
connectDB(DATABASE_URL);

// Inserting Many Documents
insertManyDocs();

app.listen(port, () => console.log(`Listening server at port ${port}`));