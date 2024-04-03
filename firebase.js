// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXJhVGsPlALyyV02b50dUc9RDZ06lFQ9k",
  authDomain: "timequest-73b3a.firebaseapp.com",
  projectId: "timequest-73b3a",
  storageBucket: "timequest-73b3a.appspot.com",
  messagingSenderId: "398289181418",
  appId: "1:398289181418:web:7eebc9b06cc1c2ce305593",
  measurementId: "G-C8MQYNZFXH"
};

// Initialize Firebase
let app;
if(firebase.lenth === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}


const auth = firebase.auth()

export {auth};