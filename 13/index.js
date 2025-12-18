var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  var dbo = client.db("mymongodb");
  console.log("Database created");

  dbo.createCollection("students1", function(err, res) {
    if (err) throw err;
    console.log("Collection created");
    client.close();
  });
});
