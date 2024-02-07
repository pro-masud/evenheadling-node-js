// create a node js server
const http = require("http");
const colors = require("colors");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 6061;
http.createServer( (req, res) => {
    if(req.url == "/" && req.method == "GET"){
        res.writeHead('200', 'text/html');
        res.write("<h1>Home</h1>")
    }else if(req.url == "/about" && req.method == "GET"){
        res.writeHead('200', 'text/html');
        res.write("<h1>About</h1>");
    }else if(req.url == "/blog" && req.method == "GET"){
        res.writeHead('200', 'text/html');
        res.write("<h1>Blog</h1>");
    }else if(req.url == "/contact" && req.method == "GET"){
        res.writeHead('200', 'text/html');
        res.write("<h1>Contact Us</h1>");
    }else{
        res.writeHead('404', 'text/html');
        res.write("<h1>404 Page</h1>");
    }
    res.end();
}).listen(PORT, () => {
    console.log(`Server Is Running Port Number ${PORT}`.bgGreen.black);
});