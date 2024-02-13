import express from "express";
import { userControllers } from "../controllers/userControllers.js";
import { userMiddleware } from "../middleware/userMiddleware.js";

// init express routers
const router = express.Router();

router.get("/user", userMiddleware, userControllers);


// default exports router
export default router;