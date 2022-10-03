import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCg2Rl7gO_CASG-0Ml6rjsRcAWkPoII6s8",
  authDomain: "algar-1616501032135.firebaseapp.com",
  databaseURL: "https://algar-1616501032135-default-rtdb.firebaseio.com",
  projectId: "algar-1616501032135",
  storageBucket: "algar-1616501032135.appspot.com",
  messagingSenderId: "759630716122",
  appId: "1:759630716122:web:21f120906602f49890d9e3",
  measurementId: "G-3QVQV1PWGL"
});

export const db = firebaseApp.firestore();
