// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
import 'firebase/firestore'

// fix ^^^^^......
// import firebase from 'firebase/app';
// import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBBDkdrELL0VRfOIipC864gF4LEYMeKycA",
    authDomain: "twitter-clone-8fba9.firebaseapp.com",
    projectId: "twitter-clone-8fba9",
    storageBucket: "twitter-clone-8fba9.appspot.com",
    messagingSenderId: "109220199174",
    appId: "1:109220199174:web:2d590b3d9653e4d763bc87",
    measurementId: "G-J8EKRBYBY4"
  };

  const fireebaseApp = firebase.initializeApp(firebaseConfig);

  const db = fireebaseApp.firestore();

  export default db;