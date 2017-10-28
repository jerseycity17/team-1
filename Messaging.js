// Twilio Credentials
var accountSid = 'ACc0d1c024b8d9262dc412778fdd8262e0';
var authToken = 'de7b006fe0167961830695218fe4ff0d';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);
/*
client.messages.create({
    to: "+13477612839",
    from: "+12015590989",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
}, function(err, message) {
    console.log(message.sid);
});
*/
function sendMessage(to, from, body){
    client.messages.create({
        to: to,
        from: from,
        body: body,
    }, function(err, message) {
        console.log(message.sid);
    });
}

sendMessage("+13477612839", "+12015590989", "hello!");

module.exports = {
    sendMessage:sendMessage
};