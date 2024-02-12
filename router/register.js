import express from "express";
import { userRegister } from "../controllers/userRegisterControllers.js";

// init express routers
const router = express.Router();

router.post("/register", userRegister);

// default exports router
export default router;