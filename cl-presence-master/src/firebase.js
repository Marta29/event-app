import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyDK7McdmLHoMis-ciUSXRhMtGY4sJ6EMWY",
  authDomain: "cl-presence.firebaseapp.com",
  databaseURL: "https://cl-presence.firebaseio.com",
  projectId: "cl-presence",
  storageBucket: "cl-presence.appspot.com",
  messagingSenderId: "335228756725",
  appId: "1:335228756725:web:9980de51cb084bc2e51bbc"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
