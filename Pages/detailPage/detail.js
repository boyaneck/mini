const nextBtn = document.querySelector('.button_next');
const prevBtn = document.querySelector('.button_prev');
const wrapper = document.querySelector('.wrapper');
const hobbySection = document.querySelector('.hobby_list');

let position = 0;

const profile = [
  {
    name: '진민용',
    github: 'https://github.com/boyaneck',
    blog: 'https://velog.io/@boyaneck',
    MBTI: 'ENFP',
    img: '',
    goal: '미술과 디자인 그리고 IT 분야에 관심이 있었는데, 코드를 통해 감각적인 이미지를 구현할 수 있다는 것에 관심을 가지게 되었습니다. 사람들의 추상적이 였던 생각을 분명하게 제시하고 구현하여 사람들을 만족할 수 있게 하는, "분별력" 있는 개발자가 되고 싶습니다.',
    hobby: [{
      icon: '&#127795;',
      text: '산책하기',
    }, {
      icon: '&#128566;',
      text: '멍 때리기',
    },
    {
      icon: '&#128747;',
      text: '여행 vlog 보기',
    }],
  },
  {
    name: '김은비',
    github: '',
    blog: 'https://squall-8.tistory.com/',
    MBTI: 'ISTP',
    img: '',
    goal: '',
    hobby: '',
  },
  {
    name: '이락균',
    github: 'https://github.com/Newbie-Alert',
    blog: 'https://velog.io/@waffle_bear',
    MBTI: 'INTP',
    img: '',
    goal: "8년동안 해왔던 영상 제작을 내려놓고 코드 하나로 모든 것을 만들어내는 것에 매력을 느껴 개발자로 전직을 하게 됐습니다.많은 문제를 직면하고 해결하며 능동적으로 성장하는 개발자가 되고 싶습니다.",
    // hobbyIcon: ['&#128170;', '&#128021;', '&#128218;'],
    hobby: [{
      icon: '&#128170;',
      text: '생존형 운동',
    }, {
      icon: '&#128021;',
      text: '쪼꼬미 산책',
    },
    {
      icon: '&#128218;',
      text: '잔지식 줍줍',
    }],
  },
]



function drawPage() {
  profile.forEach(data => {
    const { name, github, blog, MBTI, goal, hobby } = data
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
                    >${github !== '' ? github + ' 👉' : `<p>커밍 쑨</p>`} </a
                  >
                </div>
                <div class="info_item">
                  <h5>BLOG</h5>
                  <a target="_blank" href=${blog}
                    >${blog !== '' ? blog + ' 👉' : '<p>커밍 쑨</p>'} </a
                  >
                </div>
                <div class="info_item">
                  <h5>MBTI</h5>
                  <p>${MBTI}</p>
                </div>
              </div>
            </div>
            <section class="profile_description">
              <h1>계기와 목표</h1>
              ${goal !== '' ? goal : '<h3>아직 없어요🥹</h3>'}
            </section>
            <section class= "profile_hobby" >
              <h1>My Hobby</h1>
              <div class="hobby_list_container">
                <ul class="hobby_list">
                ${hobby !== '' ? drawList(hobby) : '<h3>아직 취미가 없어요🥹</h3>'}
                </ul>
              </div>
            </section >
          </div>`
    wrapper.insertAdjacentHTML("beforeend", textHTML)
  })
}

function drawList(data) {
  let list = data?.map(item => {
    return (
      `<li>
        <p>${item.icon}</p>
        <h4>${item.text}</h4>
      </li>`
    )
  })
  console.log(list);
  return list.join(' ')
}


function moveNext() {
  if (position > -200) {
    wrapper.style.transform = `translateX(${position - 100}vw)`
    position -= 100
  }
}

function movePrev() {
  if (position < 0) {
    wrapper.style.transform = `translateX(${position + 100}vw)`
    position += 100
  }
}

drawPage();
nextBtn.addEventListener('click', moveNext)
prevBtn.addEventListener('click', movePrev)