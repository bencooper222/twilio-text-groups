const config = require('./config');
const twilio = require('twilio');


function sendText(to,body, mediaURL = "") {
    let client = new twilio(config.twilio.uid, config.twilio.auth);


    let twilioParams = {
        body: body,
        to: to, // Text this number,
        mediaUrl: mediaURL,
        from: config.twilio.phone // From a valid Twilio number
    };

    if(mediaURL===""){
        delete twilioParams['mediaUrl'];
    }
    client.messages.create(twilioParams).then((message) => console.log(message.sid));
}



function sendToGroup(json, key="", body, mediaUrl = ""){
    let receipients = [];
    if(key===""){
        receipients = json;
    }
    else{
        try{
            recipients = json[key];
        }
        catch(e){
            console.log("Invalid key");
            return;
        }
    }

    for(let i=0; i< recipients.length; i++){
        sendText(receipients[i],body, mediaUrl)
    }
}

sendText('2246594934',"Heyyy");
