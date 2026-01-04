var mongoClient = require("mongodb").MongoClient;
var url ="mongodb://localhost:27017/";

//connect mongoDB
mongoClient.connect(url, function(err, client) {
    if(err) throw err;
    console.log("MongoDB connected");

    //select DB
    var myDB = client.db("StudentDB");

    //create DB(if not exists) + Collection
    myDB.createCollection("Student1", function(err, res) {
        if(err) throw err;
        console.log("DataBase Created");
        console.log("Collcetion Created");
        client.close();
    });
});