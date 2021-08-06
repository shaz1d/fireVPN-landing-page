// /*========## SHOW MENU ========##*/

const menuBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

document.onclick = function (e) {
  if (
    e.target != menuBtn &&
    e.target != navMenu &&
    e.target.className !== "nav-list" &&
    e.target.className !== "nav-item" &&
    e.target.className !== "nav-sign-div"
  ) {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("show-menu");
  }
};

// Menu Toggle

menuBtn.onclick = function () {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("show-menu");
};

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 50,

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
