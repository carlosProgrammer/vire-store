import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBvnTtEsJb-yJTA-eI0KjaGMFlQ54v6tqg",
    authDomain: "vire-store.firebaseapp.com",
    databaseURL: "https://vire-store.firebaseio.com",
    projectId: "vire-store",
    storageBucket: "vire-store.appspot.com",
    messagingSenderId: "1068220094539",
    appId: "1:1068220094539:web:30e3a943591b79a7"
  };

  // Initialize Firebase
  export const fbase = firebase.initializeApp(firebaseConfig);
