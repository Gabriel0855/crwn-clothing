import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyB4UAL_Q2_563S95HVGfWCeKU6hqStd8kY",
    authDomain: "crwn-clothing-889b8.firebaseapp.com",
    databaseURL: "https://crwn-clothing-889b8.firebaseio.com",
    projectId: "crwn-clothing-889b8",
    storageBucket: "crwn-clothing-889b8.appspot.com",
    messagingSenderId: "254972551778",
    appId: "1:254972551778:web:e3908055729d9de957a73b"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => {
      auth.signInWithPopup(provider);
  }

  export default firebase;