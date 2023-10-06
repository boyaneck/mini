const nextBtn = document.querySelector('.button_next');
const prevBtn = document.querySelector('.button_prev');
const wrapper = document.querySelector('.wrapper');
const hobbySection = document.querySelector('.hobby_list');
// queryString으로 받아온 url Parameter
const urlParams = new URLSearchParams(window.location.search);
const initValue = urlParams.get('id');

let position = 0;

const profile = [
  {
    id: 0,
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
    id: 1,
    name: '김은비',
    github: 'https://github.com/paaaran',
    blog: 'https://velog.io/@eunbi',
    MBTI: 'ISTP',
    img: '',
    goal: `진로를 고민했을 때 어렸을 때부터 흥미를 느꼈던 개발자가 되는 것에 대해 생각해보게 되었고 하나씩 알아가면서 저의 적성에 맞는 것 같아 개발자가 되어야겠다고 다짐했습니다.
현재의 목표는 부트캠프 커리큘럼을 열심히 따라가며 개발 능력을 향상시켜서 팀 또는 개인으로 멋진 프로젝트를 완성시키는 것이고, 후에 부트캠프를 마치고 신입 프론트엔드 개발자로 취업하는 것입니다.`,
    hobby: [{
      icon: '&#127911;',
      text: '음악감상',
    }, {
      icon: '&#127968;',
      text: '인테리어',
    },
    {
      icon: '&#127807;',
      text: '명상',
    }],
  },
  {
    id: 2,
    name: '이락균',
    github: 'https://github.com/Newbie-Alert',
    blog: 'https://velog.io/@waffle_bear',
    MBTI: 'INTP',
    img: '',
    goal: `8년동안 해왔던 영상 제작을 내려놓고,
    코드로 모든 것을 만들어내는 개발에 매력을 느껴 개발자로 전직을 하게 됐습니다.많은 문제를 직면하고 해결하며 능동적으로 성장하는 개발자가 되고 싶습니다.`,
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

  sorted.forEach(data => {
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
            <h1 class="profile_description_title">계기와 목표</h1>
            <section class="profile_description">
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