const track = document.querySelector(".track");
const nextBtn = document.querySelector(".nextbtn");
const prevBtn = document.querySelector(".prev");

const frames = document.querySelectorAll(".track .slide");

let current = 0;
let move = 0;
let max = 0;

// 슬라이더 설정
function updateSlider() {

  // 이동 거리 계산
  move = frames[0].offsetWidth +
    parseInt(getComputedStyle(track).gap);

  // 750px 이하 : 2개, 그 외 : 3개
  const showCount = window.innerWidth <= 750 ? 2 : 3;

  // 최대 이동 횟수
  max = frames.length - showCount;

  // 현재 위치 보정
  if (current > max) {
    current = max;
  }

  // 위치 적용
  track.style.transform = `translateX(-${current * move}px)`;

  updateButtons();
}

// 버튼 상태
function updateButtons() {
  prevBtn.style.opacity = current === 0 ? "0.3" : "1";
  nextBtn.style.opacity = current === max ? "0.3" : "1";
}

// 처음 실행
updateSlider();

// 화면 크기 변경
window.addEventListener("resize", updateSlider);

// 다음 버튼
nextBtn.addEventListener("click", () => {
  if (current < max) {
    current++;
    track.style.transform = `translateX(-${current * move}px)`;
    updateButtons();
  }
});

// 이전 버튼
prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    track.style.transform = `translateX(-${current * move}px)`;
    updateButtons();
  }
});
// 화면 크기에 따라 보여줄 개수
let showCount = 3;

if (window.innerWidth <= 500) {
  showCount = 1;
} else if (window.innerWidth <= 750) {
  showCount = 2;
} else {
  showCount = 3;
}

max = frames.length - showCount;

// ============================================== 
// 햄버거

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll(".fade").forEach(item => {
  observer.observe(item);
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu1");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

