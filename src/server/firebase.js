import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyBM2Su8VNAEuIalED-t1HCV0BQOYJWWRAY", // Add API Key 
  authDomain: "meet-clone-7d791.firebaseapp.com",  
  databaseURL:"https://meet-clone-7d791-default-rtdb.asia-southeast1.firebasedatabase.app", // Add databaseURL
  projectId: "meet-clone-7d791",
  storageBucket: "meet-clone-7d791.appspot.com",
  messagingSenderId: "50813356334",
  appId: "1:50813356334:web:2812be6cbc54fb2fa212bf"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

// Get user name 

export const userName = prompt("What's your name?");

// Create room id

const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
