const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");
const toggleBtn = document.querySelector(".theme-toggle");
const themeIcon = toggleBtn.querySelector("i"); // Ambil <i> di dalam tombol

// nav for mobile screen
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// add border when scroll down
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.style.borderBottom = "1px solid #686868";
  } else {
    header.style.borderBottom = "none";
  }
};

// state
const theme = localStorage.getItem("theme");

// on mount
if (theme) {
  document.body.classList.add(theme);

  // ganti ikon jika dark-mode aktif saat halaman dimuat
  if (theme === "dark-mode") {
    themeIcon.classList.remove("fa-regular", "fa-sun");
    themeIcon.classList.add("fa-solid", "fa-moon");
  }
}

// dark theme
const themeHandler = () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    themeIcon.classList.remove("fa-regular", "fa-sun");
    themeIcon.classList.add("fa-solid", "fa-moon");
  } else {
    localStorage.removeItem("theme");
    themeIcon.classList.remove("fa-solid", "fa-moon");
    themeIcon.classList.add("fa-regular", "fa-sun");
  }
};

toggleBtn.addEventListener("click", themeHandler);
