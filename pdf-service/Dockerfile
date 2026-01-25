FROM node:20-slim

WORKDIR /app

# ---- Install system deps needed by Chromium ----
RUN apt-get update && apt-get install -y \
  ca-certificates \
  fonts-liberation \
  libasound2 \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libcups2 \
  libdrm2 \
  libgbm1 \
  libgtk-3-0 \
  libnss3 \
  libx11-xcb1 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  xdg-utils \
  wget \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# ---- Install Node deps first (better cache) ----
COPY package*.json ./
RUN npm install --omit=dev

# ---- Install Playwright Chromium ----
RUN npx playwright install chromium --with-deps

# ---- Copy app source ----
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
