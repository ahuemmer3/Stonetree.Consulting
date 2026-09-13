# 1. Seite bauen
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2. Fertige Dateien mit Caddy ausliefern (HTTPS automatisch).
#    Die Konfiguration kommt aus deploy/Caddyfile (siehe docker-compose.yml).
FROM caddy:2-alpine
COPY --from=build /app/dist /srv
