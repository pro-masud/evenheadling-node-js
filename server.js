// create a node js server
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 6061;

// express intilation
const app = express();

// file and folder public status 
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server Is Running Port Number ${PORT}`.bgGreen.black);
});
