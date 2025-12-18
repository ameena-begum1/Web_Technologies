var express = require('express');
var cors = require('cors');
var fs = require("fs");

var app = express();
app.use(cors());

app.get('/students', function(req, res) {
  fs.readFile(__dirname + "/students.json", 'utf8', function(err, data) {
    res.end(data);
  });
});

app.get('/imarks', function(req, res) {
  fs.readFile(__dirname + "/imarks.json", 'utf8', function(err, data) {
    res.end(data);
  });
});

app.get('/emarks', function(req, res) {
  fs.readFile(__dirname + "/emarks.json", 'utf8', function(err, data) {
    res.end(data);
  });
});

app.listen(5000, () => {
  console.log("REST Service running on port 8080");
});
