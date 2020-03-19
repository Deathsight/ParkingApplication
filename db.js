import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCqwIocgbVSZ1tE6Ben8qddgsYIiENUZRQ",
    authDomain: "parkingcp3445.firebaseapp.com",
    databaseURL: "https://parkingcp3445.firebaseio.com",
    projectId: "parkingcp3445",
    storageBucket: "parkingcp3445.appspot.com",
    messagingSenderId: "920170377415",
    appId: "1:920170377415:web:f5b909642f17b3fa0acee2"
});
//firebase.functions()
export default firebase.firestore()
