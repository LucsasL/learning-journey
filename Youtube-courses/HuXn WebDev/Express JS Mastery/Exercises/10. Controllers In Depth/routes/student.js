import express from "express";
import Controllers from "../controllers/student.js";

const router = express.Router();
const controllers = new Controllers();

router.get("/all", controllers.allStudents);
router.post("/create", controllers.newStudent);
router.put("/update", controllers.updateStudents);
router.delete("/delete", controllers.deleteStudents);

export default router;
