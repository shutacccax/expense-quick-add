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

function getCategoryColor(category) {
  return `var(--cat-${category.toLowerCase()})`;
}

function applyTheme(isDark) {
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }
}

if (themeToggle) {
  themeToggle.onclick = () => {
    const isDark = document.documentElement.getAttribute("data-theme") !== "dark";
    applyTheme(isDark);
  };
}

// sync on load
applyTheme(localStorage.getItem("theme") === "dark");
