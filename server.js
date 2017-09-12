var express = require('express');
var app = express();
var path = require('path');

var PORT = 8080

app.get('/chart', function (req, res) {
    return res.sendFile(path.join(__dirname + '/chart.html'))
})
app.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname + '/hello.html'))
})

app.listen(PORT)
console.log('Listening on ' + PORT)