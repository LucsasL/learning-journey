import e from "express";
const router = e.Router();

router.get("/all", (req, res) => {
  res.send("All student.");
});

router.post("/create", (req, res) => {
  res.send("Sign in new student.");
});

router.put("/update", (req, res) => {
  res.send("Update student ID.");
});

router.delete("/delete", (req, res) => {
  res.send("Remove student from the database.");
});

export default router;