// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArQf49AblI6Am_y-NLEXWT4Cjnx-E2OlU",
  authDomain: "besties-208f9.firebaseapp.com",
  databaseURL: "https://besties-208f9-default-rtdb.firebaseio.com",
  projectId: "besties-208f9",
  storageBucket: "besties-208f9.appspot.com",
  messagingSenderId: "524584058515",
  appId: "1:524584058515:web:c7b0e4e6634460bffd9766",
  measurementId: "G-705GWY2QXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});

// Add a second document with a generated ID.
db.collection("users").add({
  first: "Alan",
  middle: "Mathison",
  last: "Turing",
  born: 1912
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});
db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});