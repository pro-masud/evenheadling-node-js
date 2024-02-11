// create a node js server
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import mainController from "./router/mainfunction.js";
import { aboutController } from "./controllers/aboutControllers.js";

// dotenv intilation
dotenv.config();

const PORT = process.env.PORT || 6061;

// express intilation
const app = express();

// // file and folder public status
// app.use(express.static("public"));

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// all rounter mvc model here now
app.use(mainController);
app.use(aboutController);

app.listen(PORT, () => {
  console.log(`Server Is Running Port Number ${PORT}`.bgGreen.black);
});
