import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCMmkPhiF-vFVmadyBDgVoMHGL8tn-G9M",
  authDomain: "mini-intro.firebaseapp.com",
  projectId: "mini-intro",
  storageBucket: "mini-intro.appspot.com",
  messagingSenderId: "634745339046",
  appId: "1:634745339046:web:a3c1932b0c8940e0290867",
  measurementId: "G-L43KNKS7DB",
};

// DB
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DB Var
const CrewRef = collection(db, "crew");

async function getByUsername(username) {
  const q = query(CrewRef, where("name", "==", username));
  const docs = await getDocs(q);
  docs.forEach((item) => {
    console.log(item.data());
  });
}
getByUsername("이락균");

// Profile data init
let profile = [];

// Profile data Fetch
const data = await getDocs(CrewRef);
// map으로 순회하며 데이터를 다듬어 배열로 반환
const newData = data.docs.map((data) => ({ ...data.data() }));
profile = [...newData];

const nextBtn = document.querySelector(".button_next");
const prevBtn = document.querySelector(".button_prev");
const wrapper = document.querySelector(".wrapper");

// queryString으로 받아온 url Parameter
const urlParams = new URLSearchParams(window.location.search);
const initValue = urlParams.get("id");

let position = 0;

function drawPage() {
  // const selected = profile.filter(el => el.id === parseInt(initValue))
  // const other = profile.filter(el => el.id !== parseInt(initValue))
  // const sorted = selected.concat(other);
  const sorted = profile.slice().sort((a, b) => {
    const aId = a.id;
    const bId = b.id;
    if (aId === parseInt(initValue)) return -1;
    if (bId === parseInt(initValue)) return 1;

    return 0;
  });

  sorted.forEach((data) => {
    const { name, github, blog, MBTI, goal, hobby } = data;

    let textHTML = `<div class="profile_comp">
            <div class="profile_container">
              <div class="profile_image">
                <img
                  src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                />
              </div>
              <div class="profile_info">
                <div class="info_item">
                  <h5>FULL NAME</h5>
                  <p>${name}</p>
                </div>
                <div class="info_item">
                  <h5>GitHub</h5>
                  <a target="_blank" href=${github}
                    >${github !== "" ? github + " 👉" : `<p>커밍 쑨</p>`} </a
                  >
                </div>
                <div class="info_item">
                  <h5>BLOG</h5>
                  <a target="_blank" href=${blog}
                    >${blog !== "" ? blog + " 👉" : "<p>커밍 쑨</p>"} </a
                  >
                </div>
                <div class="info_item">
                  <h5>MBTI</h5>
                  <p>${MBTI}</p>
                </div>
              </div>
            </div>
            <h1 class="profile_description_title">계기와 목표</h1>
            <section class="profile_description">
              ${goal !== "" ? goal : "<h3>아직 없어요🥹</h3>"}
            </section>
            <section class= "profile_hobby" >
              <h1>My Hobby</h1>
              <div class="hobby_list_container">
                <ul class="hobby_list">
                ${hobby !== ""
        ? drawList(hobby)
        : "<h3>아직 취미가 없어요🥹</h3>"
      }
                </ul>
              </div>
            </section >
          </div>`;

    wrapper.insertAdjacentHTML("beforeend", textHTML);
  });
}

function drawList(data) {
  let list = data?.map((item) => {
    return `<li>
        <p>${item.icon}</p>
        <h4>${item.text}</h4>
      </li>`;
  });

  return list.join(" ");
}

function moveNext() {
  if (position > -200) {
    wrapper.style.transform = `translateX(${position - 100}vw)`;
    position -= 100;
  }
}

function movePrev() {
  if (position < 0) {
    wrapper.style.transform = `translateX(${position + 100}vw)`;
    position += 100;
  }
}

drawPage();
nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);
