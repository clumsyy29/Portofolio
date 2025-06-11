const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.style.borderBottom = "1px solid #686868";
  } else {
    header.style.borderBottom = "none";
  }
};

const darkModeToggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("theme") === "dark-mode") {
  document.body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  if (isDark) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
});
