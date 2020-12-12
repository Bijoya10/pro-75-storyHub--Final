import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyC_MQ-grRJ1VYm-atMJ2zMmsyMGbkvuin8",
    authDomain: "storyhub-eb9f4.firebaseapp.com",
    projectId: "storyhub-eb9f4",
    storageBucket: "storyhub-eb9f4.appspot.com",
    messagingSenderId: "844406387649",
    appId: "1:844406387649:web:340041247a729bc329f540"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();