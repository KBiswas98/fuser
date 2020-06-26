import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAAyQFdMb9SkErO5kzIhTOk52CGWX84URI",
    authDomain: "fuser-6b082.firebaseapp.com",
    databaseURL: "https://fuser-6b082.firebaseio.com",
    projectId: "fuser-6b082",
    storageBucket: "fuser-6b082.appspot.com",
    messagingSenderId: "673518422156",
    appId: "1:673518422156:web:52f5978c9e5e0ae2d613a9",
    measurementId: "G-G8N6N5LKY3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database = firebase.database();

  export { database, firebase}