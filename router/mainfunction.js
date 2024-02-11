// inti express here
import express from "express";
import { mainController } from "../controllers/mainController.js";

// create a server router here
const router = express.Router();

router.get("/", mainController)


// exports default module 
export default router;