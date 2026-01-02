# Personal Expense Tracker (PWA + Google Sheets)

A lightweight, mobile-first personal finance tracker built using a Progressive Web App (PWA) frontend and Google Sheets as the backend database.

Designed for **fast daily logging**, minimal friction, and full control over data.

---

## ✨ Features

### Core
- 📱 **PWA (Add to Home Screen)** — works like a native app
- ➕ **Quick Add Expense**
- 💰 **Add Inflows**
- 🔁 **Transfer Between Accounts**
- 📊 **Dedicated Balances Page**
- 🌙 **Light / Dark Mode (persistent)**
- 🔔 **Toast feedback + haptic vibration**

### Accounting Logic
- Real-time balance updates
- Supports multiple accounts (Cash, GCash, Maya, MariBank)
- Transfers debit one account and credit another
- Single source of truth: Google Sheets

### UX
- Bottom navigation (app-style)
- Clean, distraction-free input flow
- Color-coded balances
- Loading states for async data
- Mobile-first spacing and layout

---

## 🧱 Architecture

### Frontend
- HTML + CSS + Vanilla JavaScript
- Progressive Web App (PWA)
- Hosted via GitHub Pages
- Optimized for mobile use

### Backend
- Google Apps Script (Web App)
- Single API endpoint:
  - `POST` → add expense / inflow / transfer
  - `GET` → fetch balances
- Google Sheets as database

---

## 📂 Pages

- `index.html` — Add Expense
- `inflow.html` — Add Inflow
- `transfer.html` — Transfer Funds
- `balances.html` — View Account Balances

Each page is focused on **one task only**.

---

## 📊 Data Model (Sheets)

- **Expenses sheet** — all expense entries
- **Inflows sheet** — incoming funds
- **Transfers sheet** — internal transfers
- **Balances sheet** — current account balances (authoritative)

All validations are enforced server-side.

---

## 🔐 Design Principles

- Backend is the source of truth
- Frontend never assumes balances
- No auto-corrections or silent overrides
- Errors are explicit and user-friendly
- UI favors clarity over density

---

## 🧠 Why This Exists

This tracker was built for:
- Personal daily use
- Full ownership of data
- No subscriptions
- No ads
- No third-party finance APIs

Simple, fast, and intentional.

---

## 🚧 Future Ideas (Optional)

- Total balance summary
- Low-balance warnings
- Undo last transaction
- Read-only monthly summaries
- Widgets / shortcuts

---

## 📄 License

Personal use only.

