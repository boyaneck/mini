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
const modal = document.querySelector('.modal_bg');
const submitBtn = document.getElementById('submit_form');
const getBtn = document.querySelector('.getData');
const messageRef = collection(db, 'message')




const getByName = async (name) => {
  const q = query(messageRef, where("username", "==", name))
  let docs = await getDocs(q);
  docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);
  });
}




// RegisterPage - Save Data
submitBtn.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    let username = e.target.username.value;
    let text = e.target.text.value;
    let doc = { username, text };
    await addDoc(messageRef, doc);
  }
  catch (err) {
    console.log(err);
  }

  showModal();
  setTimeout(toMain, 2000);
})


// Function
function showModal() {
  modal.classList.add('show');
}

function toMain() {
  window.location.replace('/mainpage.html')
}


const getData = async () => {
  let docs = await getDocs(messageRef);
  docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);
  });
}

getBtn.addEventListener('click', getData);

