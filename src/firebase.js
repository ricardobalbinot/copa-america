import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBoA9gia3S2tQ5WJdcllp7XuD5AnnK-exw",
  authDomain: "copa-america-c0d22.firebaseapp.com",
  databaseURL: "https://copa-america-c0d22.firebaseio.com",
  projectId: "copa-america-c0d22",
  storageBucket: "copa-america-c0d22.appspot.com",
  messagingSenderId: "695768801799",
  appId: "1:695768801799:web:eeecca61470201ae8340a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;