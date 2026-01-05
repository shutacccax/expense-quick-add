/* theme-engine.js */

const themeToggle = document.getElementById("themeToggle");
const darkStyles = document.getElementById("darkStyles");

// Shared Colors for Donut & Lists
const CATEGORY_COLORS_LIGHT = {
  Transpo: "#00ACC1", Food: "#3F6FFF", Entertainment: "#7E57C2",
  Others: "#9E9E9E", Shopping: "#FF7043", Bills: "#FBC02D", Personal: "#AB47BC"
};

const CATEGORY_COLORS_DARK = {
  Transpo: "#3A7F87", Food: "#4B5F9E", Entertainment: "#6A5A8C",
  Others: "#6B6F74", Shopping: "#8A5A45", Bills: "#8A7A3A", Personal: "#7A567F"
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
