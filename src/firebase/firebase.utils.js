import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyBKXb2s0k-lUbcBBvW5xjvU2GCRkHBDNx4",
  authDomain: "crwn-db-727fa.firebaseapp.com",
  projectId: "crwn-db-727fa",
  storageBucket: "crwn-db-727fa.appspot.com",
  messagingSenderId: "854986331929",
  appId: "1:854986331929:web:4f097ee3e41b47bdeb1788",
  measurementId: "G-6YZE5CWHBD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
