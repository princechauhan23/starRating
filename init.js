import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore,collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { signInAnonymously,signOut,getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const firebaseConfig = {
        apiKey: "AIzaSyDGgDaT5o7vlYuT_DPRp8cwTTDFp9qViYw",
        authDomain: "productrating-e88e3.firebaseapp.com",
        projectId: "productrating-e88e3",
        storageBucket: "productrating-e88e3.appspot.com",
        messagingSenderId: "555354440326",
        appId: "1:555354440326:web:147bd6524cb01b47b3c707"
};
let app = initializeApp(firebaseConfig);
let fireStore = getFirestore(app);
app = getAuth(app);
export {app,signInAnonymously,signOut, fireStore,collection, addDoc,getDocs};