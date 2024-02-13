import express from "express";
import { createCustomar } from "../controllers/customarController.js";
import multer from "multer";

// express init 
const router = express.Router();


// create a multer file system management
const transport = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "public")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + Math.floor(Math.random() * 1000) + "_"+ file.originalname)
    }
});

const customerFileUpload = multer({storage : transport});

// create a customer router
router.post("/customer", customerFileUpload.single('file'), createCustomar);

// default exports 
export default router;