// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello world");
// })

// app.listen(8000, () => {
//     console.log('Example app listening on port 8000!')
// });

const http = require("http");
const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, "Everything is OK!");
    res.end("Hi");
})

server.listen(port, host, () => {
    console.log("listening on port: " + port);
})