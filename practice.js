var firebaseConfig = { apiKey: "AIzaSyA_4vYzUA5GShkrY2zvPSNlgbBUG5tH0AI", authDomain: "rehtghyjukl.firebaseapp.com", databaseURL: "https://rehtghyjukl-default-rtdb.firebaseio.com", projectId: "rehtghyjukl", storageBucket: "rehtghyjukl.appspot.com", messagingSenderId: "668704611610", appId: "1:668704611610:web:52663b1073f21d0549e0a3", measurementId: "G-1BJFHHWH6J" };
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function user(){
    user_name=document.getElementById("User").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}