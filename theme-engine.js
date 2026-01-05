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
  const isDark = localStorage.getItem("theme") === "dark";
  return isDark
    ? CATEGORY_COLORS_DARK[category] || "#777"
    : CATEGORY_COLORS_LIGHT[category] || "#999";
}

function applyTheme() {
  const isDark = localStorage.getItem("theme") === "dark";
  
  // 1. Switch the stylesheet
  if (darkStyles) darkStyles.disabled = !isDark;
  
  // 2. Update the button icon
  if (themeToggle) themeToggle.textContent = isDark ? "☀️" : "🌙";

  // 3. Update the page-specific UI (balances, masks, etc.)
  if (typeof updateBalanceVisibility === "function") updateBalanceVisibility();
  
  // 4. Update the Dashboard Donut if it exists
  if (window.lastCategoryData && typeof updateDonutByCategory === "function") {
    updateDonutByCategory(window.lastCategoryData);
    renderCategoryList(window.lastCategoryData);
  }
}

if (themeToggle) {
  themeToggle.onclick = () => {
    const willBeDark = localStorage.getItem("theme") !== "dark";
    localStorage.setItem("theme", willBeDark ? "dark" : "light");
    applyTheme();
  };
}

// Run once on load to sync everything
applyTheme();