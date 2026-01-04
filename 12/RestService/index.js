//import express, cors, file system(fs) to read json files
var express = require("express");
var cors = require("cors");
var fs = require("fs");

//create express app
var app = express();
app.use(cors()); // any client can call API

//create APIs
app.get("/students", function(req, res) {
    //readfile
    fs.readFile(__dirname+ "/students.json", "utf8", function(err, data) {
        if(err) throw err;
        res.end(data);
    });
});

app.get("/imarks", function(req, res) {
    fs.readFile(__dirname+ "/imarks.json", "utf8", function(err, data) {
        if(err) throw err;
        res.end(data);
    });
});

app.get("/emarks", function(req, res) {
    fs.readFile(__dirname+ "/emarks.json", "utf8", function(err, data) {
        if(err) throw err;
        res.end(data);
    });
});

//start the server 
app.listen(8080, function() {
    console.log("Server started at port: 8080");
});