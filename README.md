# 💸 Expense Quick Add (PWA)

A mobile-first Progressive Web App (PWA) for quickly logging expenses into Google Sheets.

Built for speed, simplicity, and daily use — no clutter, no overengineering.

---

## ✨ What this is

This app is a Quick Add interface for an existing Google Sheets expense tracker.

- Mobile-friendly (installable on iPhone)
- Fast, one-screen expense logging
- Dark mode support
- Automatically updates your Google Sheets dashboard
- No accounts, no ads, no subscriptions

Think of it as:
“The fastest way to log an expense without opening a spreadsheet.”

---

## 🧠 How it works

PWA (this app)
→ Google Apps Script (Web API)
→ Google Sheets (Expenses sheet)

- The app collects expense details
- Sends them to a Google Apps Script endpoint
- Appends the data to your existing Expenses sheet
- All formulas, dashboards, and summaries update automatically

---

## 📱 Features

- Add expense with:
  - Date
  - Description (optional)
  - Category
  - Payment method
  - Amount
- Floating dark mode toggle
- Toast confirmation on save
- Prevents double submissions
- Installable to Home Screen (iOS PWA)
- Uses Google Sheets as the single source of truth

---

## 🛠 Tech Stack

Frontend:
- HTML
- CSS (mobile-first card layout)
- Vanilla JavaScript

Backend:
- Google Apps Script (Web App)

Database:
- Google Sheets

Hosting:
- GitHub Pages

---

## 🚀 Getting Started (Local Development)

1. Clone the repository
   git clone https://github.com/YOUR_USERNAME/expense-quick-add.git
   cd expense-quick-add

2. Open with Live Server (recommended)
   - Install the Live Server VS Code extension
   - Right-click index.html
   - Click “Open with Live Server”

---

## 🌐 Deployment

This app is deployed using GitHub Pages.

Once pushed to main, updates are automatically live at:

https://YOUR_USERNAME.github.io/expense-quick-add/

---

## 📲 Install on iPhone

1. Open the app URL in Safari
2. Tap Share
3. Tap “Add to Home Screen”
4. Open it like a native app

---

## 🔐 Security Notes

- The app only appends rows to Google Sheets
- No delete or overwrite permissions
- No credentials stored in the app
- Google Apps Script handles authorization

---

## 🎯 Design Philosophy

- Capture first, analyze later
- Reduce taps and thinking
- Avoid feature creep
- Keep maintenance close to zero

If it doesn’t make expense logging faster, it doesn’t belong here.

---

## 🧩 Future Ideas (Optional)

- Budget warning toast
- Today’s total display
- System dark mode detection
- Offline queue (if ever needed)

---

## 📄 License

This project is for personal use and learning.
Feel free to fork and adapt it for your own workflow.

---

## ❤️ Acknowledgements

Built with:
- Google Sheets
- GitHub Pages
- A desire to stop forgetting small expenses
