
function openModal4() {
    document.getElementById("modal4").classList.add("active");
}

function closeModal4(event) {
    if (event.target.id === "modal4") {
        document.getElementById("modal4").classList.remove("active");
    }
}


function openVideoModal() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");

    modal.classList.add("active");
    video.play();
}

function closeVideoModal(event) {
    if (event.target === event.currentTarget) {
        const modal = document.getElementById("videoModal");
        const video = document.getElementById("modalVideo");

        video.pause();
        video.currentTime = 0;
        modal.classList.remove("active");
    }
}
const modalOpen3 = document.querySelector(".modal-open3");
const modal3 = document.querySelector("#modal3");

modalOpen3.addEventListener("click", function () {
    modal3.classList.add("active");
});

modal3.addEventListener("click", function (e) {
    if (e.target === modal3) {
        modal3.classList.remove("active");
    }
});

const modalOpen2 = document.querySelector(".modal-open2");
const modal2 = document.querySelector("#modal2");

modalOpen2.addEventListener("click", function () {
    modal2.classList.add("active");
});

modal2.addEventListener("click", function (e) {
    if (e.target === modal2) {
        modal2.classList.remove("active");
    }
});

const modalOpen1 = document.querySelector(".modal-open1");
const modal1 = document.querySelector("#modal1");

modalOpen1.addEventListener("click", function () {
    modal1.classList.add("active");
});

modal1.addEventListener("click", function (e) {
    if (e.target === modal1) {
        modal1.classList.remove("active");
    }
});


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
