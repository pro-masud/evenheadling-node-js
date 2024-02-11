// create a node js server
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import { mainControls } from "./controllers/main.js";
import { aboutControllers } from "./controllers/about.js";

// dotenv intilation
dotenv.config();

const PORT = process.env.PORT || 6061;

// express intilation
const app = express();

// file and folder public status
app.use(express.static("public"));

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", mainControls);
app.get("/about", aboutControllers)

app.listen(PORT, () => {
  console.log(`Server Is Running Port Number ${PORT}`.bgGreen.black);
});
