const fs = require('fs');
const express = require("express");
//const db = require('./c4g.js');
const messenger = require('./Messaging.js');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));

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
								["hey David! how is the job search going?", true, "8/1/17"],
								["It's going OK. Still haven't found anything that will help to afford a lease.", false, "8/22/17"],
								["Don't you worry, I'm here to help. Check out this jop opening at jobs.com", true, "8/23/17"]
								],
			"message-history-reverse":[
								["Don't you worry, I'm here to help. Check out this jop opening at jobs.com", true, "8/23/17"],
								["It's going OK. Still haven't found anything that will help to afford a lease.", false, "8/22/17"],
								["hey David! how is the job search going?", true, "8/1/17"]
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
								["hey Percy! how is the job search going? Let's do our best to make sure you do not get evicted", true, "10/5/17"],
								["Thanks for reaching out. I actually haven't been looking for a job. The laws protect us for a short while.", false, "10/12/17"],
								["Sounds like you need to change your attitude! Think about your family's future! Find that job soon.", true, "10/13/17"],
								["After reconsidering a few things, I decided to go to a few job fairs this week. Will let you know how it goes.", false, "10/20/17"],
								["That's what I like to hear. Text me as soon as you have more information.", true, "10/13/17"]
								],
			"message-history-reverse":[
								["That's what I like to hear. Text me as soon as you have more information.", true, "10/13/17"],
								["After reconsidering a few things, I decided to go to a few job fairs this week. Will let you know how it goes.", false, "10/20/17"],
								["Sounds like you need to change your attitude! Think about your family's future! Find that job soon.", true, "10/13/17"],
								["Thanks for reaching out. I actually haven't been looking for a job. The laws protect us for a short while.", false, "10/12/17"],
								["hey Percy! how is the job search going? Let's do our best to make sure you do not get evicted", true, "10/5/17"]
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
								["Hey Jackie! Just heard you got a job and a house. Looks like you've done my work for me", true, "10/5/17"],
								["Thanks. I will be sure to let you know if my situation changes.", false, "10/12/17"]
								],
			"message-history-reverse":[
								["Thanks. I will be sure to let you know if my situation changes.", false, "10/12/17"],
								["Hey Jackie! Just heard you got a job and a house. Looks like you've done my work for me", true, "10/5/17"]
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
								["Hey Morgan, not sure why you are on here. Obviously you are in good standing.", true, "10/24/17"],
								["Yeah I know.", false, "10/25/17"]
								],
			"message-history-reverse": [
								["Yeah I know.", false, "10/25/17"],
								["Hey Morgan, not sure why you are on here. Obviously you are in good standing.", true, "10/24/17"]
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
								["Hey", true, "9/4/17"],
								["Hey", false, "9/11/17"],
								["Hey", false, "9/18/17"],
								["Hey", true, "9/25/17"],
								["Hey", false, "10/2/17"],
								["Hey", true, "10/9/17"]
								],
			"message-history-reverse": [
								["Hey", true, "10/9/17"],
								["Hey", false, "10/2/17"],
								["Hey", true, "9/25/17"],
								["Hey", false, "9/18/17"],
								["Hey", true, "9/11/17"],
								["Hey", false, "9/4/17"]
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
								["Hey", false, "9/4/17"],
								["Hey", true, "9/11/17"],
								["Hey", false, "9/18/17"],
								["Hey", true, "9/25/17"],
								["Hey", false, "10/2/17"],
								["Hey", true, "10/9/17"]
								],
			"message-history-reverse": [
								["Hey", true, "10/9/17"],
								["Hey", false, "10/2/17"],
								["Hey", true, "9/25/17"],
								["Hey", false, "9/18/17"],
								["Hey", true, "9/11/17"],
								["Hey", false, "9/4/17"]
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
								["Hey", false, "9/4/17"],
								["Hey", true, "9/11/17"],
								["Hey", false, "9/18/17"],
								["Hey", true, "9/25/17"],
								["Hey", false, "10/2/17"],
								["Hey", true, "10/9/17"]
								],
			"message-history-reverse": [
								["Hey", true, "10/9/17"],
								["Hey", false, "10/2/17"],
								["Hey", true, "9/25/17"],
								["Hey", false, "9/18/17"],
								["Hey", true, "9/11/17"],
								["Hey", false, "9/4/17"]
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
	res.render("alerts", {body:data['alerts']});
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
	const fam = req.query.family;
	console.log(fam);
	console.log(data["families"][fam]);
	res.render("editinfo", {body:data["families"][fam], name:fam});
});

app.post("/editinfo", function(req, res){
	const fam = req.query.family;
	const body = req.body;
	if(data['families'][fam]['family-members'].includes(body.representative)){
		console.log("inside");
		data['families'][fam]['representative'] = body.representative;
	}
	if(body['housing-status'] === "housed" || body['housing-status'] === "homeless"){
		console.log("inside");
		data['families'][fam]['housing-status'] = body['housing-status'];
	}
	if(body['employment-status'] === "employed" || body['employment-status'] === "unemployed"){
		console.log("inside");
		data['families'][fam]['employment-status'] = body['employment-status'];
	}
	console.log(req.body);
	res.render("home");
});

app.get('/messaging', function(req, res){
	res.render("messaging", {body:data['families']});
});

app.get('/messageThread', function(req, res){
	const fam = req.query.family;
	console.log(fam);
	console.log(data["families"][fam]);
	res.render("chatBox", {body:data["families"][fam], name:fam, messages:data["families"][fam]["message-history"]});
});

app.post('/messageThread', function(req, res){
	const fam = req.query.family;
	console.log(fam);
	console.log(data["families"][fam]);
	const message = req.body.messageText;
	messenger.sendMessage("+13477612839", "+12015590989", message);
	data["families"][fam]["message-history"].push([""+message, true, "10/28/17"]);
	data["families"][fam]["message-history-reverse"].unshift([""+message, true, "10/28/17"]);
	res.render("chatBox", {body:data["families"][fam], name:fam, messages:data["families"][fam]["message-history"]});
});

app.listen(3000);
console.log("Started server on port 3000");