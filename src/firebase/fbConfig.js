import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAgb4i2FYYHq5q7z7vOFn4UBh9EEe4wxps",
    authDomain: "quickshare-1ea21.firebaseapp.com",
    databaseURL: "https://quickshare-1ea21.firebaseio.com",
    projectId: "quickshare-1ea21",
    storageBucket: "",
    messagingSenderId: "311715504876"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;