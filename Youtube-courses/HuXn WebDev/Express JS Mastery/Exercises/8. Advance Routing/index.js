import express from "express";
import student from "./routes/student.js";
import teacher from "./routes/teachers.js";

const app = express();

// 1. Create routes folder and put your routes in a separate file.
// 2. Create the instance of express.Router().
// 3. Instead of app.method, change that to "router.method".
// 4. Export router.
// 5. Import that router.
// 6. Use the (app.use) built-in middleware & provide your routes.
app.use("/students", student);
app.use("/teachers", teacher);

app.listen(8000, () => console.log("Listening server on port 8000"));