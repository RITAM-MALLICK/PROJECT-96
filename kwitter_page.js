const firebaseConfig = {
    apiKey: "AIzaSyDqQLk7byAFSUGIhbtYp4DczoNUy_OuXUM",
    authDomain: "kwitter-3d130.firebaseapp.com",
    databaseURL: "https://kwitter-3d130-default-rtdb.firebaseio.com",
    projectId: "kwitter-3d130",
    storageBucket: "kwitter-3d130.appspot.com",
    messagingSenderId: "641037748203",
    appId: "1:641037748203:web:20132eba7a9b5ade57bbae"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name ,
          message : msg , 
          like : 0
    });
    document.getElementById("msg").value = "";
}