import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {
  signInAnonymously,
  signOut,
  getAuth,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import Env from "./env.js";

console.log(Env);

const firebaseConfig = {
  apiKey: Env.APIKEY,
  authDomain: Env.AUTHDOMAIN,
  projectId: Env.PROJECTID,
  storageBucket: Env.STORAGEBUCKET,
  messagingSenderId: Env.MESSAGINGSENDERID,
  appId: Env.APPID,
};
let app = initializeApp(firebaseConfig);
let fireStore = getFirestore(app);
app = getAuth(app);
export {
  app,
  signInAnonymously,
  signOut,
  fireStore,
  collection,
  addDoc,
  getDocs,
};
