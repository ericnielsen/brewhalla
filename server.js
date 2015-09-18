var express = require('express');
var app = express();
var path = require('path');
var searchData = require('./search.js');

app.use('/search', searchData);

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/default.css', function(req, res) {
res.sendFile(path.join(__dirname + '/default.css'));
});

app.get('/action.js', function(req, res) {
res.sendFile(path.join(__dirname + '/action.js'));
});

app.listen(1337);
console.log('The port is working');