import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCc1fnT6W9yzB_46zPchND2hjzxsS4I3Ok",
  authDomain: "hack-9739d.firebaseapp.com",
  databaseURL: "https://hack-9739d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hack-9739d",
  storageBucket: "hack-9739d.appspot.com",
  messagingSenderId: "681835295055",
  appId: "1:681835295055:web:7425506c0be323a7cf553a"
};
firebase.initializeApp(firebaseConfig);

export default firebase;