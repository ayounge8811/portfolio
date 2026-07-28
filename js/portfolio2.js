document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".tab-menu .tab");
  const contents = document.querySelectorAll(".tabinner");

  tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

      // 초기화
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // 탭 활성화
      tab.classList.add("active");

      // 핵심: index로 연결
      contents[index].classList.add("active");

    });

  });

});
// =============================================================


document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".po_tab_menu .pot");
  const contents = document.querySelectorAll(".po_content");

  tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

      // 초기화
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // 탭 활성화
      tab.classList.add("active");

      // 핵심: index로 연결
      contents[index].classList.add("active");

    });

  });

});

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

