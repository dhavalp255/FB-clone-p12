import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhiRZonvzJY1HPjMLsuDJ-UF8vtbRVA98",
    authDomain: "fb-clone-p12.firebaseapp.com",
    databaseURL: "https://fb-clone-p12.firebaseio.com",
    projectId: "fb-clone-p12",
    storageBucket: "fb-clone-p12.appspot.com",
    messagingSenderId: "944739383686",
    appId: "1:944739383686:web:375ee6f5173f2e4d2a1407",
    measurementId: "G-3JMCPEH31H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
