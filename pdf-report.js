// pdf-report.js
// Handles ONLY monthly PDF generation + preview

const PDF_DATA_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbx0j7hBNOI9P_zceaZeLrkypGOXP5s7Emk0GqOfUiNns1K6kEq0Xy2DJR00BVuEejw/exec";

const IS_LOCAL =
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1";

const PDF_SERVICE_ENDPOINT = IS_LOCAL
  ? "http://localhost:8080/generate-pdf"
  : `${location.origin}/generate-pdf`;

const PDF_PREVIEW_ENDPOINT = IS_LOCAL
  ? "http://localhost:8080/preview-report"
  : `${location.origin}/preview-report`;

async function generateMonthlyPDF(year, month) {
  const btn = document.getElementById("generateReportBtn");
  const text = btn?.querySelector(".btn-text");
  const spinner = btn?.querySelector(".btn-spinner");

  // 🔄 start loader
  btn?.classList.add("loading");
  spinner?.classList.remove("hidden");
  if (text) text.textContent = "Generating…";

  try {
    const dataRes = await fetch(
      `${PDF_DATA_ENDPOINT}?action=pdfMonthlyReport&year=${year}&month=${month}`
    );
    const json = await dataRes.json();

    if (json.status !== "success") {
      throw new Error(json.message || "Failed to prepare report");
    }

    // optional: update text when PDF is being built
    if (text) text.textContent = "Downloading…";

    const pdfRes = await fetch(PDF_SERVICE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json.data)
    });

    const blob = await pdfRes.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    const label = json.data?.monthLabel || "Monthly_Report";
    a.download = `Spendr_${label}.pdf`;
    a.click();
    URL.revokeObjectURL(url);

  } catch (err) {
    console.error("PDF ERROR:", err);
    alert("Failed to generate report");
  } finally {
    // ✅ stop loader (always)
    btn?.classList.remove("loading");
    spinner?.classList.add("hidden");
    if (text) text.textContent = "Generate Report";
  }
}


/* ✅ ADD THIS BELOW */
async function previewMonthlyReport(year, month) {
  try {
    // 1️⃣ Fetch prepared data from Apps Script
    const dataRes = await fetch(
      `${PDF_DATA_ENDPOINT}?action=pdfMonthlyReport&year=${year}&month=${month}`
    );
    const json = await dataRes.json();

    // 2️⃣ Ask PDF service for HTML preview
    const res = await fetch(PDF_PREVIEW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json.data)
    });

    const html = await res.text();

    // 3️⃣ Open preview in new tab
    const win = window.open();
    win.document.open();
    win.document.write(html);
    win.document.close();

  } catch (err) {
    console.error("PREVIEW ERROR:", err);
    alert("Failed to preview report");
  }
}
