import express from "express";

const app = express();

// Ugly Code
// app.get("/student", (req, res) => {
//   console.log("Get method used.");
//   res.send("All Students");
// });

// app.post("/student", (req, res) => {
//   console.log("Post method used.");
//   res.send("Add New Student");
// });

// app.put("/student", (req, res) => {
//   console.log("Put method used.");
//   res.send("Update Students");
// });

// app.delete("/student", (req, res) => {
//   console.log("Delete method used.");
//   res.send("Update Students");
// });

// Refactoring code
app
  .route("/student")
  .get((req, res) => {
    res.send("All students.");
  })
  .post((req, res) => {
    res.send("Add New Student");
  })
  .put((req, res) => {
    res.send("Update Student");
  })
  .delete((req, res) => {
    res.send("Delete Student");
  });

app.listen(8000, () => console.log("Listening server on port 8000"));
