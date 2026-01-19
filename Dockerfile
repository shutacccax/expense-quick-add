FROM nginx:alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Custom nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy EVERYTHING from repo root
COPY . /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
