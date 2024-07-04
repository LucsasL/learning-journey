import express from "express";

const app = express();

// HTTP Methods

// GET -> Retrieve Data
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// POST -> Create/Insert Data
app.post();

// PUT -> Completely update data
app.put();

// PATCH -> Partially update our data
app.patch();

// DELETE -> Delete our data
app.delete();

// ALL -> Any HTTP Request Method
app.all();

app.listen(8000, () => console.log("Listening server on port 8000"));