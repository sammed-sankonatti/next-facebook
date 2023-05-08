import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-lthEmTxlHBPB1tlxIlUXkzBu-gp_P7U",
  authDomain: "facebook-app-18c9e.firebaseapp.com",
  projectId: "facebook-app-18c9e",
  storageBucket: "facebook-app-18c9e.appspot.com",
  messagingSenderId: "329103504584",
  appId: "1:329103504584:web:ff8c23a3cd016cc0d3a1fd"
};

const app =  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
export {db , storage };