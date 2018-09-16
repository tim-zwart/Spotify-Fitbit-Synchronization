//Import the messsaging module
import * as messaging from "messaging";

var API_KEY = "key";
var ENDPOINT = "theapidestinationplace";

//Listens for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  //Output the message to console
  console.log(JSON.stringify(evt.data));
}

//Listens for the error event
messaging.peerSocket.onerror = function(err) {
  //Handles the errors
  console.log("Connection error: " + err.code + " - " + err.message);
}