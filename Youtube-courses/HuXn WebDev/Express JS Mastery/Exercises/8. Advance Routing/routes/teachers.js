import e from "express";
const router = e.Router();

router.get("/all", (req, res) => {
  res.send("All teachers.");
});

router.post("/create", (req, res) => {
  res.send("Sign in new teacher.");
});

router.put("/update", (req, res) => {
  res.send("Update teacher ID.");
});

router.delete("/delete", (req, res) => {
  res.send("Remove teacher from the database.");
});

export default router;
