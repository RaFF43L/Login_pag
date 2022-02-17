import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAAl0Ss73jlz_pM0i7-MVeQ0t8zIkOE1A",
    authDomain: "curso-f1695.firebaseapp.com",
    projectId: "curso-f1695",
    storageBucket: "curso-f1695.appspot.com",
    messagingSenderId: "322623731901",
    appId: "1:322623731901:web:a46ba7360830aa93645fd4",
    measurementId: "G-B7DDWH60RK"
  };
  
  
  if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;