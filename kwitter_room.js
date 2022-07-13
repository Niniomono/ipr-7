

var firebaseConfig = {

      apiKey: "AIzaSyDMgOoW__IaFf0AJEtw3Ju7cTgr7L1iL1Q",
    
      authDomain: "redsocial-b496a.firebaseapp.com",
    
      databaseURL: "https://redsocial-b496a-default-rtdb.firebaseio.com",
    
      projectId: "redsocial-b496a",
    
      storageBucket: "redsocial-b496a.appspot.com",
    
      messagingSenderId: "1086287688421",
    
      appId: "1:1086287688421:web:18782a6ad2f018c6839a0c"
    
    };
    
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Mucho gusto verte " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
            Room_names = childKey;
            //Inicia código
            console.log("room_name-" + room_names);
            row = "<div class = 'room_name' id = "+room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
            //Termina código
            });});}
            getData()})
            function redirectToRoomName(name) {
                  console.log(name);
                  localStorage.setItem("room_name", name);
                  window.location = "index.html";
            }})}
            function logout() {
                  localStorage.removeItem("user_name");
                  localStorage.removeItem("room_name");
                  window.location.replace("index.html");
                }
                
                
                function redirectToRoomName(name) {
                  console.log(name);
                  localStorage.setItem("room_name", name);
                  window.location = "kwitter_page.html";
                }