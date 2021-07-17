const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./dist/lin-family-daily'));

app.get('/', function(req, res) {
    res.sendFile('index.html',{root:__dirname});
});

app.listen(PORT, err => {
    if(err) throw err;
    console.log("Server is listening on port "+PORT);
});