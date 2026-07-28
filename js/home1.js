const titles = document.querySelectorAll(".accordion-title");
const contents = document.querySelectorAll(".content2");
const closeBtns = document.querySelectorAll(".close_icon");


const plusIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
`;
const minusIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B99FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-minus-icon lucide-circle-minus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
`;


function closeAll() {
  titles.forEach(title => {
    title.classList.remove("active");

    // 아이콘을 +로 되돌리기
    title.querySelector(".icon").innerHTML = plusIcon;
  });

  contents.forEach(content => {
    content.classList.remove("active");
  });
}
titles.forEach((title, index) => {

  title.addEventListener("click", () => {

    const icon = title.querySelector(".icon");

    // 이미 열려있으면
    if (title.classList.contains("active")) {
      closeAll();
      icon.innerHTML = plusIcon;
      return;
    }

    closeAll();

    // 모든 아이콘을 +로 변경
    titles.forEach(item => {
      item.querySelector(".icon").innerHTML = plusIcon;
    });

    // 현재 아이콘만 -로 변경
    icon.innerHTML = minusIcon;

    title.classList.add("active");
    contents[index].classList.add("active");

  });


});
closeBtns.forEach((btn, index) => {

  btn.addEventListener("click", (e) => {

    e.stopPropagation(); // 버튼 클릭이 부모로 전달되지 않게

    titles[index].classList.remove("active");
    contents[index].classList.remove("active");

    // 아이콘을 +로 변경
    titles[index].querySelector(".icon").innerHTML = plusIcon;

  });

});

// =================================================

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


// =============
// 한글 타이핑 라이브러리
    TypeHangul.type('#target');

    