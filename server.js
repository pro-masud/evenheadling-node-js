// create a node js server
const http = require("http");
const colors = require("colors");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 6061;
http.createServer( (req, res) => {
    res.end();
}).listen(PORT, () => {
    console.log(`Server Is Running Port Number ${PORT}`.bgGreen.black);
});