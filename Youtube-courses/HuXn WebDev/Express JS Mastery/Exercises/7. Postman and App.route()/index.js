import express from "express";

const app = express();

// Ugly Code
app.get("/student", (req, res) => {
  res.send("All Students");
});

app.post("/student", (req, res) => {
  console.log("Post method");
  res.send("Add New Student");
});

app.put("/student", (req, res) => {
  res.send("Update Students");
});

app.delete("/student", (req, res) => {
  res.send("Update Students");
});

app.listen(8000, () => console.log("Listening server on port 8000"));