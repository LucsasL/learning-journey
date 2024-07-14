import express from "express";
import homeController from "../controllers/homeControllers.js";
import aboutController from "../controllers/aboutControllers.js";

// Making instances of the useful Constructors
const router = express.Router();

// Setting the respective routes with different controllers, making different actions depending on the place the user visits
router.get("/", homeController);
router.get("/about", aboutController);

export default router;