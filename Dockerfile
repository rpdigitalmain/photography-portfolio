# Build stage
FROM node:24.12.0 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage — serves the static build with SPA routing support
FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html

# Vue Router history mode: rewrite unknown paths to index.html so direct
# visits to /gallery/:category load the client-side application.
RUN <<'EOF'
cat > /etc/nginx/conf.d/default.conf <<'CONF'
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:jpg|jpeg|png|gif|ico|webp|svg|woff|woff2|ttf|otf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
CONF
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]