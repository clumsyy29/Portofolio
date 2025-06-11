// ======== HAMBURGER MENU (MOBILE) ========
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// ======== ADD BORDER ON SCROLL ========
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.style.borderBottom = "1px solid #686868";
  } else {
    header.style.borderBottom = "none";
  }
};

// ======== DARK MODE TOGGLE ========
const darkModeToggle = document.getElementById("darkModeToggle");

// Saat halaman dimuat, cek localStorage
if (localStorage.getItem("theme") === "dark-mode") {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode saat tombol diklik
darkModeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  if (isDark) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
});
