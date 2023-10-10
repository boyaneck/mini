// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyDCMmkPhiF-vFVmadyBDgVoMHGL8tn-G9M",
  authDomain: "mini-intro.firebaseapp.com",
  projectId: "mini-intro",
  storageBucket: "mini-intro.appspot.com",
  messagingSenderId: "634745339046",
  appId: "1:634745339046:web:a3c1932b0c8940e0290867",
  measurementId: "G-L43KNKS7DB",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#postingbtn").click(async function () {
  let name = $("#name").val();
  let command = $("#command").val();
  let id = Math.random();

  console.log(name, command, id);

  let doc = {
    id: id,
    name: name,
    command: command,
  };

  await addDoc(collection(db, "messages"), doc);

  location.href = "mainpage.html";

  alert("응원 완료!");
});
