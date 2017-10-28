// JavaScript File
var MongoClient = require('mongodb').MongoClient;
//Create a database named "c4g":
var url = "mongodb://localhost:27017/c4g";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
    db.dropDatabase();
    if (err) throw err;
    console.log("Database deleted");
    db.close();
});
