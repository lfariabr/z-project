# ---- Deps ----
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci && npm cache clean --force

# ---- Build ----
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# Build-time config for client-side env
ARG NEXT_PUBLIC_GRAPHQL_ENDPOINT
ENV NEXT_PUBLIC_GRAPHQL_ENDPOINT=$NEXT_PUBLIC_GRAPHQL_ENDPOINT
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Run ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Non-standalone: keep node_modules and .next
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY --from=builder /app/.next ./.next
COPY public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
