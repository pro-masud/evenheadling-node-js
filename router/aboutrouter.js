// init express js
import express from "express";
import { aboutController } from "../controllers/aboutControllers";

const router = express.Router();

router.get("/about", aboutController);


export default router;