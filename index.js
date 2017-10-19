const config = require('./config');
const twilio = require('twilio');

// require your json files here to make life easier

const users = require('./vh.json');
//const shittyCompanies = require('./sample_send.json); // Comcast and AT&T numbers


function sendText(to, body, mediaURL = "") {
    let client = new twilio(config.twilio.uid, config.twilio.auth);


    let twilioParams = {
        body: body,
        to: to, // Text this number,
        mediaUrl: mediaURL,
        from: config.twilio.phone // From a valid Twilio number
    };

    if (mediaURL === "") {
        delete twilioParams['mediaUrl']; // if there's no URL (pls don't pass invalid URLs) #resilientcode
    }
    client.messages.create(twilioParams).then((message) => console.log(message.sid));
}



function sendToGroup(json, body, key = "", mediaUrl = "") {
    let recipients = [];
    if (key === "") {
        recipients = json; // if it's just a js array
    } else {
        try {
            recipients = json[key]; // find the proper key
        } catch (e) {
            console.log("Invalid key");
            return;
        }
    }

    for (let i = 0; i < recipients.length; i++) {
        sendText(recipients[i], body, mediaUrl)
    }
}

//sendText('2246594934',"Heyyy");

sendToGroup(users, "yo", "nerds");