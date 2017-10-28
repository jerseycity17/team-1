const fs = require('fs');
const express = require("express");
const db = require('./c4g.js');
const messager = require('./Messaging.js');



const app = express();
app.set('view engine', 'hbs');


app.get('/signin', function(req, res){
	res.render("signin");
});

app.get('/', function(req, res){
	res.render("home");
});

app.get('/alerts', function(req, res){
	res.render("alerts");
});

app.get('/setAlerts', function(req, res){
	res.render("setAlerts");
});

app.get('/families', function(req, res){
	res.render("families");
});

app.get('/familyProfile', function(req, res){
	res.render("familyProfile");
});

app.get("/editinfo", function(req, res){
	res.render("editinfo");
});

app.get('/messaging', function(req, res){
	res.render("messaging");
});

app.get('/messageThread', function(req, res){
	res.render("messageThread");
});

app.listen(3000);
console.log("Started server on port 3000");