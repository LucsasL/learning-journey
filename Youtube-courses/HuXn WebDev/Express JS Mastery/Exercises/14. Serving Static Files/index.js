import express from "express";
import path from "path";

const app = express();

// Serving Static Files
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send(path.join(process.cwd(), "./public/index.html"));
})

app.listen(8000, () => console.log("Listening server at port 8000"));