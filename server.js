const express = require('express');
const path = require('path')
const port = 80;
const app = express();

app.use(express.static('./dist/lin-family-daily'));

app.get('/', function(req, res) {
    res.sendFile('index.html',{root:__dirname});
});

app.listen(port, () => {
    console.log("Server is listening on port "+port);
});