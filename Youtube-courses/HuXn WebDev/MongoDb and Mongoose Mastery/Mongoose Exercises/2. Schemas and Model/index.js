import express from "express";
import { insertManyDocs } from "./models/Movies.js";

// Importing external functions
import connectDB from "./db/connectDB.js";

// Instances
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);

insertManyDocs();

app.listen(port, () => console.log(`Server running at port ${port}`));
