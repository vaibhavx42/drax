const express = require('express')
const html = require('html')
const start = express()
const port = 4000
const fs = require('fs')
start.get('/', (req, res) => {
    res.sendFile(__dirname + '/' +'index.html');
});
start.get("/backend", (req, res) => {
    res.sendFile(__dirname + '/' +'backend.js');
});
start.get("/fetchdata", (req, res) => {
    fs.readFile(__dirname + '/' + 'apidetail.json', (err, data) => {
        res.end(data);
        console.log(data);
    });
});
start.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
