import express from "express";
import router from "./routes/student.js";

const app = express();

// Controllers
app.use("/students", router);

app.listen(8000, () => console.log("Listening server on port 8000"));
