/* theme-engine.js */

const themeToggle = document.getElementById("themeToggle");
const darkStyles = document.getElementById("darkStyles");

// Shared Colors for Donut & Lists
const CATEGORY_COLORS_LIGHT = {
  Transpo: "#8E99A4",        // cool gray
  Food: "#7F8C8D",           // balanced gray
  Entertainment: "#9B8F97",  // warm gray
  Shopping: "#9A8C84",       // brown-gray
  Others: "#8F8F8F",          // true neutral
  Bills: "#8A8F7A",           // olive-gray
  Personal: "#928A9E"         // violet-gray
};

const CATEGORY_COLORS_DARK = {
  Transpo: "#8E99A4",        // cool gray
  Food: "#7F8C8D",           // balanced gray
  Entertainment: "#9B8F97",  // warm gray
  Shopping: "#9A8C84",       // brown-gray
  Others: "#8F8F8F",          // true neutral
  Bills: "#8A8F7A",           // olive-gray
  Personal: "#928A9E"         // violet-gray
};



function applyTheme(isDark) {
  const html = document.documentElement;

  // 🔒 freeze scroll position
  const scrollY = window.scrollY;
  html.style.position = "fixed";
  html.style.top = `-${scrollY}px`;
  html.style.width = "100%";

  html.classList.add("theme-switching");

  requestAnimationFrame(() => {
    html.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (themeToggle) {
      themeToggle.textContent = isDark ? "☀️" : "🌙";
    }
  });

  setTimeout(() => {
    html.classList.remove("theme-switching");

    // 🔓 restore scroll
    html.style.position = "";
    html.style.top = "";
    html.style.width = "";
    window.scrollTo(0, scrollY);
  }, 400);
}


if (themeToggle) {
  themeToggle.onclick = () => {
    const isDark = document.documentElement.getAttribute("data-theme") !== "dark";
    applyTheme(isDark);
  };
}

// sync on load
applyTheme(localStorage.getItem("theme") === "dark");
