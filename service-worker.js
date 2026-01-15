const CACHE_NAME = "expense-pwa-v1";

const APP_SHELL = [
  "/",
  "/balances.html",
  "/index.html",
  "/inflow.html",
  "/transfer.html",

  "/styles-light.css",
  "/styles-dark.css",
  "/theme-engine.js",
  "/icon-180.png",

  // SVG icons
  "/svgs/add-square-svgrepo-com-filled.svg",
  "/svgs/add-square-svgrepo-com.svg",
  "/svgs/calendar-minimalistic-svgrepo-com.svg",
  "/svgs/empty-state.svg",
  "/svgs/eye-closed-svgrepo-com.svg",
  "/svgs/eye-svgrepo-com.svg",
  "/svgs/google-sheets.svg",
  "/svgs/home-1-svgrepo-com.svg",
  "/svgs/home-svgrepo-com-filled.svg",
  "/svgs/minus-square-svgrepo-com-filled.svg",
  "/svgs/minus-square-svgrepo-com.svg",
  "/svgs/refresh-square-svgrepo-com-filled.svg",
  "/svgs/refresh-square-svgrepo-com.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("fetch", event => {
  // Offline-safe navigation
  if (event.request.mode === "navigate") {
    event.respondWith(
      caches.match(event.request).then(
        res => res || caches.match("/balances.html")
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(
      cached => cached || fetch(event.request)
    )
  );
});
