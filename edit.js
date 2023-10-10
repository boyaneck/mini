import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { query, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyDCMmkPhiF-vFVmadyBDgVoMHGL8tn-G9M",
  authDomain: "mini-intro.firebaseapp.com",
  projectId: "mini-intro",
  storageBucket: "mini-intro.appspot.com",
  messagingSenderId: "634745339046",
  appId: "1:634745339046:web:a3c1932b0c8940e0290867",
  measurementId: "G-L43KNKS7DB"
};

// DB
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// Var
const messageRef = collection(db, 'messages')
const button = document.querySelector(".delete_button");

const getById = async (id) => {
  const q = query(messageRef, where("id", "==", id))
  let docs = await getDocs(q);
  console.log(docs);
  docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);
  });
}


const removeById = (id) => {
  // Find
  const q = query(messageRef, where("id", "==", id))
  let docs = getDocs(q);
  docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);
  });
}