// // Twilio Credentials
// var accountSid = 'ACc9350595679d4f12c3f12cdb04cd9a69';
// var authToken = '993524b332f86b5b76b6af0e7b2c9d66';
//
// //require the Twilio module and create a REST client
// var client = require('twilio')(accountSid, authToken);
//
// function sendMessage(to, from, body){
//     client.messages.create({
//         to: to,
//         from: from,
//         body: body,
//     }, function(err, message) {
//         console.log(message.sid);
//     });
// }
//
// sendMessage("+13477612839", "+16467913643", "mongo");
//
// module.exports = {
//     sendMessage:sendMessage
// };



var http = require('http'),
    express = require('express'),
    twilio = require('twilio');

var app = express();

app.post('/sms', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.twiml.MessagingResponse();

    twiml.message('What up Steven');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, function () {
    console.log("Express server listening on port 1337");
});

