// JavaScript File
var MongoClient = require('mongodb').MongoClient;
//Create a database named "c4g":
//var uri = "mongodb://localhost:27017/c4g";
var url = "mongodb://localhost:27017/c4g";

/*
MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    console.log("Connected!!!");
    db.close();
});
*/
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection('CM').insertMany([
        {
            id: 1,
            username: "Steve",
            email: "steve@family.com",
            pw: "Evangelista",
            region: "Newark",
            families: [1, 2],
        }
    ])
    db.collection('Family').insertMany([
        {
            id: 1,
            hhname: "Nixon",
            hhsize: 6,
            graduate: false,
            phone: "+13459287771",
            email: "nixon566@yahoo.com",
            address: "123 Sesame St., Newark, NJ 12345",
            employed: true,
            housed: true,
            alerts: [1, 3, 5],
        },
        {
            id: 2,
            hhname:"Piper",
            hhsize: 2,
            graduate: false,
            phone: "+13452991234",
            email: "anna_pi008@gmail.com",
            address: "", 
            employed: false,
            housed: false,
            alerts: [2, 4],
        }
    ])
    db.collection('Alerts').insertMany([
        {
            id: 1,
            type: "Employment",
            date_received: new Date('Aug 26, 2017'),
            family: "Nixon",
            message: "Just got fired.",
        },
        {
            id: 2,
            type: "Housing",
            date_received: new Date('Oct 27, 2017'),
            family: "Piper",
            message: "I got convicted from my house this week.",
        },
        {
            id: 3,
            type: "Maintenance",
            date_received: new Date('Oct 28, 2017'),
            family: "Nixon",
            message: "My kitchen stove broke last night and I'm not sure if I can afford to have it replaced.",
        },
        {
            id: 4,
            type: "Health",
            date_received: new Date('Oct 29, 2017'),
            family: "Piper",
            message: "I recieved bronchitis.",
        },
        {
            id: 5,
            type: "Resources",
            date_received: new Date('Oct 31, 2017'),
            family: "Nixon",
            message: "I would like to learn how to budget my money.",
        }
    ])
    db.collection('Reminders').insertMany([
        {
            id: 1,
            created_date: new Date('Dec 1, 2017'),
            family: "Nixon",
            message: "Remember to call the Nixon household. No contact in over 1 month."
        }
    ])
    
    db.system.js.parseAlert([
        
    ])
    
    db.system.js.average([
        {
         _id: "averageResponse",
         value: function() {
             return ;
         }
        }
    ])
    
    if (err) throw err;
    console.log("Database entries created");
    db.close();
});
