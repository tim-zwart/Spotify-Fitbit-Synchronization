//Import messaging module
import * as messaging from "messaging"
//Import the heart rate module
import {HeartRateSensor} from "heart-rate";
//Make the document a thing
let document = require("document");

//Get the UI elements we will change and display
let hrLabel = document.getElementById("hrm");
//Initialize the UI with values
hrLabel.text - "...";

//Create a new instance of the heart rate sensor
let hrm = new HeartRateSensor();

//Listens for onerror event
  //onerror is emitted when the connection is lost, usually meaning one or more messages have been lost
messaging.peerSocket.onerror = function(err) {
  //Handles errors
  console.log("Connection error: " + err.code + " - " + err.message);
}

//Defines the method to send the message
function sendMessage() {
  //Here is the data
  var data = hrm.heartRate;
  //hrm.stop();
  
  if (messaging.peerSocket.readyState == messaging.peerSocket.OPEN) {
    //Send the data to a peer
    messaging.peerSocket.send(data);
  }
}

hrm.start();

//Listen for the onopen event
  //onopen event is the event which is emitted upon connection
messaging.peerSocket.onopen = function() {
  //This can send or recieve messages now

  //Sends message
  sendMessage();

}

//An event handler that will be called when a new HR value is recieved
hrm.onreading = function() {
  sendMessage();
  hrLabel.text = hrm.heartRate;
}