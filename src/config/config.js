import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_h-tHXYJsCR0-a-C_8MKw1Lx272bLb10",
    authDomain: "tinder-clone-b12c1.firebaseapp.com",
    databaseURL: "https://tinder-clone-b12c1.firebaseio.com",
    projectId: "tinder-clone-b12c1",
    storageBucket: "tinder-clone-b12c1.appspot.com",
    messagingSenderId: "795858191697",
    appId: "1:795858191697:web:73cfd5299653581b467f70",
    measurementId: "G-08T8KR4QRW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;