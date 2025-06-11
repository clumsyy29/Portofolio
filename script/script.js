const toggleBtn = document.querySelector(".theme-toggle");
const themeIcon = toggleBtn.querySelector("i"); // Ambil <i> di dalam tombol

// state
const theme = localStorage.getItem("theme");

// on mount
if (theme) {
  document.body.classList.add(theme);
  if (theme === "dark-mode") {
    themeIcon.classList.remove("fa-regular", "fa-sun");
    themeIcon.classList.add("fa-solid", "fa-moon");
  }
}

// dark theme toggle
const themeHandler = () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
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
