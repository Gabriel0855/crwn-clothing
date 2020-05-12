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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  else {
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if (!snapShot.exists) {
          const { displayName, email} = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (err) {
              console.log('error creating user', err.message)
          }
      }
        return userRef;
    }
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => {
      auth.signInWithPopup(provider);
  }

  export default firebase;