//import  exprees, mongodb, cors
var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

//create express App
var app = express();
app.use(cors()); //any client can sue this API 

//define connection stuff
var port = 8080;
var url = "mongodb://localhost:27017/";

//connect mongodb
MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    console.log("MongoDB Connected");

    //select database
    var mydb = client.db("MyDataBase");

    //Craete RestAPI
    app.get("/retrieve", function(err, res) {
        mydb.collection('Student1').find({}).toArray(function(err, result) {
            if(err) throw err;
            console.log(result);
            res.send(result);
        });
    });

    //start server
    app.listen(port, function() {
        console.log("Server Started at: " +port);
    });
});


//to run 
//on terminal: node index.js
//make sure you insert something in your mongodb database 
//open on browser http://localhost:8080/retrieve

