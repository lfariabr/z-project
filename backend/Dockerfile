# ---- Base deps ----
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci --only=production && npm cache clean --force

# ---- Builder (dev deps needed to compile TS) ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci && npm cache clean --force

# Copy sources and tsconfig
COPY tsconfig.json ./
COPY src ./src

# Build
RUN npm run build

# ---- Runner ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only runtime files
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 4000
CMD ["node", "dist/index.js"]
