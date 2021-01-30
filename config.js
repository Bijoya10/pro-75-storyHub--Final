import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCN75lVC3-QoW4Ogg-rMHUF1cYOR1ZqTdo",
  authDomain: "storyhub-2212f.firebaseapp.com",
  projectId: "storyhub-2212f",
  storageBucket: "storyhub-2212f.appspot.com",
  messagingSenderId: "425030955601",
  appId: "1:425030955601:web:1d6fd346d6cfc747affe70"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();