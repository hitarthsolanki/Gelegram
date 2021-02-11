function adduser() {
    var username= document.getElementById("user_name").value;
    localStorage.setItem("user_name" , username);
    window.location = "class93hw2.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyAobrSSqGOwxQt2O_GzgUd4e-1tFl4dTdQ",
    authDomain: "lets-chat-a9ea7.firebaseapp.com",
    databaseURL: "https://lets-chat-a9ea7-default-rtdb.firebaseio.com",
    projectId: "lets-chat-a9ea7",
    storageBucket: "lets-chat-a9ea7.appspot.com",
    messagingSenderId: "910096020028",
    appId: "1:910096020028:web:cc233413c7f9387c1ec939",
    measurementId: "G-B03BY23J7J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "class93hw2.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "class93hw.html";
}