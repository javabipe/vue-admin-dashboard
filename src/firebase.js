import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfuafG13aBDrbxLAOHZyIPNAESmpVB57c",
  authDomain: "vue-hq-12eb5.firebaseapp.com",
  databaseURL: "https://vue-hq-12eb5.firebaseio.com",
  projectId: "vue-hq-12eb5",
  storageBucket: "vue-hq-12eb5.appspot.com",
  messagingSenderId: "1001592697199",
  appId: "1:1001592697199:web:295db2dfa5e51505"
});

export const db = firebaseApp.firestore();
