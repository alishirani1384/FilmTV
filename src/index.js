import "./style.scss";

const navBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const mobileLinks = document.querySelectorAll(".mobile-link div");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.parentElement.classList.toggle("menu-toggle");
  });
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("toggle");
  overlay.classList.remove("active");
});
navBtn.addEventListener("click", () => {
  mobileMenu.classList.add("toggle");
  overlay.classList.add("active");
});

feather.replace();
