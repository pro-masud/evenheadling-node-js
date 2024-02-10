// create a node js server
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 6061;

// express intilation
const app = express();

// file and folder public status
app.use(express.static("public"));

// express middleware
 app.use(express.json());
 app.use(express.urlencoded({ extended: false}));


// create express js file path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});

app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "public/shop.html"));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/team-1.html'));
});

app.get('/form', (req, res) => {
   res.sendFile(path.join(__dirname, 'public/form.html'));
});

app.post('/form', (req, res) => {
    console.log(req.body);
});
app.listen(PORT, () => {
  console.log(`Server Is Running Port Number ${PORT}`.bgGreen.black);
});
