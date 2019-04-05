import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "",
    authDomain: "react-fire-todos-d166c.firebaseapp.com",
    databaseURL: "https://react-fire-todos-d166c.firebaseio.com",
    projectId: "react-fire-todos-d166c",
    storageBucket: "react-fire-todos-d166c.appspot.com",
    messagingSenderId: ""
  };

  firebase.initializeApp(config);

export default firebase