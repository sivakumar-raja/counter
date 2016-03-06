var path = require('path');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/static/bundle.js', function (req, res) {
  console.log(__dirname + '/dist/bundle.js')
  res.sendFile(__dirname + '/dist/bundle.js');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
