const fs = require('fs');
const express = require("express");
//const db = require('./c4g.js');
const messenger = require('./Messaging.js');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname));

const data = {
	'families': {
		"Crosby": {
			"phone": "+13477612839",
			"representative": "David Crosby",
			"family-size": 4,
			"family-members":["David Crosby", "Mary Crosby", "Maddie Crosby", "Loomis Crosby"],
			"housing-status": "homeless",
			"employment-status": "unemployed",
			"average-response-time": "3 weeks",
			"message-history": [
								["hey David! how is the job search going?", "outgoing", "8/1/17"],
								["It's going OK. Still haven't found anything that will help to afford a lease.", "incoming", "8/22/17"],
								["Don't you worry, I'm here to help. Check out this jop opening at jobs.com", "outgoing", "8/23/17"]
								]
		},
		"Miller": {
			"phone": "+13477612839",
			"representative": "Percy Miller",
			"family-size": 3,
			"family-members":["Percy Miller", "Jack Miller", "Ellie Miller"],
			"housing-status": "housed",
			"employment-status": "unemployed",
			"average-response-time": "1 week",
			"message-history": [
								["hey Percy! how is the job search going? Let's do our best to make sure you do not get evicted", "outgoing", "10/5/17"],
								["Thanks for reaching out. I actually haven't been looking for a job. The laws protect us for a short while.", "incoming", "10/12/17"],
								["Sounds like you need to change your attitude! Think about your family's future! Find that job soon.", "outgoing", "10/13/17"],
								["After reconsidering a few things, I decided to go to a few job fairs this week. Will let you know how it goes.", "incoming", "10/20/17"],
								["That's what I like to hear. Text me as soon as you have more information.", "outgoing", "10/13/17"],
								]
		},
		"Brown": {
			"phone": "+13477612839",
			"representative": "Jackie Brown",
			"family-size": 1,
			"family-members":["Jackie Brown"],
			"housing-status": "housed",
			"employment-status": "employed",
			"average-response-time": "1 week",
			"message-history": [
								["Hey Jackie! Just heard you got a job and a house. Looks like you've done my work for me", "outgoing", "10/5/17"],
								["Thanks. I will be sure to let you know if my situation changes.", "incoming", "10/12/17"],
								]
		},
		"Chase": {
			"phone": "+13477612839",
			"representative": "Morgana Night",
			"family-size": 2,
			"family-members":["Morgana Night", "P.J. Smith"],
			"housing-status": "housed",
			"employment-status": "employed",
			"average-response-time": "1 day",
			"message-history": [
								["Hey Morgan, not sure why you are on here. Obviously you are in good standing.", "outgoing", "10/24/17"],
								["Yeah I know.", "incoming", "10/25/17"],
								]
		},
		"Mark": {
			"phone": "+13477612839",
			"representative": "Leslie Mark",
			"family-size": 2,
			"family-members":["Leslie Mark", "Tim Mark"],
			"housing-status": "homeless",
			"employment-status": "unemployed",
			"average-response-time": "1 week",
			"message-history": [
								["Hey", "outgoing", "9/4/17"],
								["Hey", "incoming", "9/11/17"],
								["Hey", "outgoing", "9/18/17"],
								["Hey", "incoming", "9/25/17"],
								["Hey", "outgoing", "10/2/17"],
								["Hey", "incoming", "10/9/17"],
								]
		},
		"Gordon": {
			"phone": "+13477612839",
			"representative": "Jeff Gordon",
			"family-size": 1,
			"family-members":["Jeff Gordon"],
			"housing-status": "homeless",
			"employment-status": "unemployed",
			"average-response-time": "1 week",
			"message-history": [
								["Hey", "outgoing", "9/4/17"],
								["Hey", "incoming", "9/11/17"],
								["Hey", "outgoing", "9/18/17"],
								["Hey", "incoming", "9/25/17"],
								["Hey", "outgoing", "10/2/17"],
								["Hey", "incoming", "10/9/17"],
								]
		},
		"Rose": {
			"phone": "+13477612839",
			"representative": "Derrick Rose",
			"family-size": 1,
			"family-members":["Derrick Rose"],
			"housing-status": "homeless",
			"employment-status": "unemployed",
			"average-response-time": "1 week",
			"message-history": [
								["Hey", "outgoing", "9/4/17"],
								["Hey", "incoming", "9/11/17"],
								["Hey", "outgoing", "9/18/17"],
								["Hey", "incoming", "9/25/17"],
								["Hey", "outgoing", "10/2/17"],
								["Hey", "incoming", "10/9/17"],
								]
		},
	},
	'alerts': [
				['Crosby family has not responded in a long time', 'Crosby'],
				['Winter is coming! The Crosby family is going to need to find lodgings soon.', 'Crosby'],
				['The Millers have not followed up on how they plan to finance their lease. Keep them on track!', 'Miller'],
				['Jackie Brown has successfully purchased a home!', 'Brown']
				]
}

app.get('/signin', function(req, res){
	res.render("signin");
});

app.get('/', function(req, res){
	res.render("home");
});

app.get('/alerts', function(req, res){
	res.render("alerts");
});

app.get('/setReminder', function(req, res){
	res.render("setReminder");
});

app.get('/families', function(req, res){
	res.render("families", {body:data['families']});
});

app.get('/familyProfile', function(req, res){
	const fam = req.query.family;
	console.log(fam);
	console.log(data["families"][fam]);
	res.render("familyProfile", {body:data["families"][fam], name:fam});
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


//messenger.sendMessage("+13477612839", "+12015590989", "from app.js");

app.listen(3000);
console.log("Started server on port 3000");