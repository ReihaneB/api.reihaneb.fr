# ================================
# Dockerfile optimisé pour Strapi (Production)
# ================================

FROM node:20-alpine AS build

# Dépendances système pour Sharp et autres modules natifs
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    vips-dev \
    python3 \
    && rm -rf /var/cache/apk/*

WORKDIR /opt/app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances (avec cache optimisé)
RUN npm ci --only=production

# Copie du code source
COPY . .

# Variables d'environnement pour le build
ENV NODE_ENV=production

# Build Strapi
RUN npm run build

# ================================
# Image de production (plus légère)
# ================================

FROM node:20-alpine AS production

# Dépendances runtime pour Sharp/vips
RUN apk add --no-cache vips-dev && rm -rf /var/cache/apk/*

WORKDIR /opt/app

# Copie depuis le stage de build
COPY --from=build /opt/app/node_modules ./node_modules
COPY --from=build /opt/app/dist ./dist
COPY --from=build /opt/app/public ./public
COPY --from=build /opt/app/config ./config
COPY --from=build /opt/app/src ./src
COPY --from=build /opt/app/package.json ./
COPY --from=build /opt/app/favicon.png ./

# Variables d'environnement
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

# Expose le port interne Strapi
EXPOSE 1337

# Démarrage de Strapi
CMD ["npm", "run", "start"]
