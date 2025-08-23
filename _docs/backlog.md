# Findings

- __Frontend (`frontend/`)__:
  - [src/app/page.tsx](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/frontend/src/app/page.tsx:0:0-0:0) implements the landing UI (email input, explicit toggle, countdown) but only logs on submit. No GraphQL client or API integration yet.
  - [next.config.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/frontend/next.config.ts:0:0-0:0) is default. No env usage or runtime config.
  - Dependencies include Next 15, Tailwind 4, `next-auth` (unused).

- __Backend (`backend/`)__:
  - [src/index.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/index.ts:0:0-0:0) boots Apollo Server with `typeDefs` and resolvers, connects to MongoDB. Basic [Query.health](cci:1://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/resolvers/index.ts:4:2-4:20) and `questions` exposed.
  - [src/schemas/typeDefs.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/schemas/typeDefs.ts:0:0-0:0) includes `question`, `user`, `quote` types, but `Mutation` is commented out.
  - [src/resolvers/index.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/resolvers/index.ts:0:0-0:0) only wires `Query` with [health](cci:1://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/resolvers/index.ts:4:2-4:20) and `questionQueries`. No mutations or other resources.
  - Models exist: `User`, `Quote`, `DeliveryLog`, `Subscription`, `ScheduledTask`, `Question` — good foundation.
  - Services placeholders: [openAi.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/services/openAi.ts:0:0-0:0), [rateLimiter.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/services/rateLimiter.ts:0:0-0:0), [redis.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/services/redis.ts:0:0-0:0) are empty.
  - [.env](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/.env:0:0-0:0) includes Mongo, Redis, JWT, OpenAI; no Stripe/Resend currently wired into code.
  - [package.json](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/package.json:0:0-0:0) has dev/build scripts; no production start script. Not containerized.

- __README.md__ claims MERN + Stripe + Resend, scheduler, auth via magic link/OTP, but these aren’t implemented yet.

# Deployment Backlog (Phased)

## Phase 0 — Infra decisions and scaffolding

- __[infra-001] Decide hosting targets and environments__
  - FE: Vercel (prod + preview).
  - BE: Render or Railway (Node runtime), single region for MVP.
  - DB: MongoDB Atlas (free/shared for dev; M10+ prod).
  - Email: Resend.
  - Payments: Stripe.
  - Environments: dev, preview, prod. Separate env vars per environment.

- __[infra-002] Define env var schema & samples__
  - Backend [.env](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/.env:0:0-0:0) (dev) and template:
    - PORT
    - MONGO_URI
    - JWT_SECRET
    - RESEND_API_KEY
    - STRIPE_SECRET_KEY
    - STRIPE_WEBHOOK_SECRET
    - REDIS_URL (if using rate limiting/sessions)
    - NODE_ENV
    - ALLOWED_ORIGINS (comma-separated)
  - Frontend `.env.local`:
    - NEXT_PUBLIC_GRAPHQL_ENDPOINT
    - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    - NEXTAUTH_URL (if using NextAuth)
    - NEXTAUTH_SECRET (if using NextAuth)
  - Document in [README.md](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/README.md:0:0-0:0) tables.

- __[ci-004] CI/CD__
  - GitHub Actions:
    - FE: lint + build on PR; deploy to Vercel via GitHub integration.
    - BE: build + test; optional Docker build/push (GHCR); deploy to Render/Railway via their GitHub deploys.
  - Add status badges.

## Phase 1 — Get a minimal product online (no payments yet)

- __[be-005] Harden GraphQL server ([backend/src/index.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/index.ts:0:0-0:0))__
  - Add CORS with `ALLOWED_ORIGINS`.
  - Add Helmet; minimal CSP suitable for GraphQL.
  - Add Pino logger with pretty in dev.
  - Wire Redis-based simple rate limiter (per IP) for queries/mutations.

- __[be-006] Complete GraphQL schema__
  - Add `Mutation` types:
    - `requestMagicLink(email: String!): Boolean!` (if NextAuth not used)
    - `signInOtp(email: String!, code: String!): AuthPayload!` or `loginWithMagicLink(token: String!): AuthPayload!`
    - `upsertUserSettings(explicit: Boolean!): User!`
    - `sendQuote(email: String!, explicit: Boolean!): Boolean!` (for MVP “send now”)
  - Ensure `User`, `Quote`, `DeliveryLog` types include fields needed for FE (id, email, explicit, text, createdAt).

- __[be-007] Implement resolvers with validation__
  - New resolvers directories: `users`, `quotes`, `delivery`.
  - Use `zod` to validate inputs.
  - Add auth context (parse `Authorization: Bearer <JWT>`).
  - Implement `sendQuote` to:
    - pick a quote (random by explicit flag) from `Quote` or generate via [openAi.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/services/openAi.ts:0:0-0:0) (optional),
    - send via Resend (see [svc-008]),
    - log `DeliveryLog`.

- __[svc-008] Email service (Resend)__
  - Implement `backend/src/services/email.ts`:
    - `sendMotivationEmail({ to, quoteText, explicit })`.
  - Create two simple templates (clean/explicit).
  - Store errors; return boolean.

- __[fe-012] Frontend GraphQL integration__
  - Add a lightweight GraphQL client (e.g., `graphql-request`) or Apollo Client.
  - Create mutation: `sendQuote(email, explicit)`.
  - Replace console.log in [src/app/page.tsx](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/frontend/src/app/page.tsx:0:0-0:0) with mutation call, loading state, success/error toasts.
  - Create `.env.local` for endpoint.

- __[ops-017] Production configs__
  - Next.js [next.config.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/frontend/next.config.ts:0:0-0:0): set `reactStrictMode`, headers (security headers), optionally cache headers for static assets.
  - Backend: add `/healthz` express route or GraphQL [health](cci:1://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/resolvers/index.ts:4:2-4:20) suffices; ensure `PORT` binding.

- __[rel-018] Deploy Backend__
  - Create Render/Railway service from GitHub.
  - Set env vars.
  - Allow public internet access; restrict CORS to Vercel domain(s).
  - Test `/graphql` and [health](cci:1://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/resolvers/index.ts:4:2-4:20).

- __[rel-019] Deploy Frontend__
  - Vercel project linked to repo.
  - Set `NEXT_PUBLIC_GRAPHQL_ENDPOINT` to BE URL.
  - Verify build and live interaction.

- __[docs-022] Documentation__
  - Update [README.md](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/README.md:0:0-0:0) with one-click deploy steps, env tables, and runbooks.

Result: Visitors can enter email + toggle, trigger an email, see success. No auth/payments yet.

## Phase 2 — Authentication and basic account

Choose one:

- __Option A: NextAuth magic link (email provider)__ (recommended for FE-first)
  - FE-only auth; provide `session` on FE; BE accepts JWT from NextAuth callback via `Authorization`.
  - Requires email provider for magic links (Resend supports).
  - Tasks:
    - Configure NextAuth in `frontend/src/app/api/auth/[...nextauth]/route.ts`.
    - Add protected dashboard route.
    - Update BE to validate NextAuth JWT or issue its own JWT on first request.

- __Option B: BE-issued OTP/magic link__
  - Implement `requestMagicLink`, email token via Resend; verify with `loginWithMagicLink`.
  - FE stores JWT in HTTP-only cookie; GraphQL uses cookie or header.

Pick one and implement:

- __[auth-011] Auth implementation__
  - User creation on first login; set `explicit` default.
  - Middleware on BE to attach `user` to context.
  - FE: login button, show user email and logout.
  - FE: gate “dashboard” page.

- __[fe-013] Dashboard MVP__
  - View last N deliveries from `DeliveryLog`.
  - Toggle explicit setting; persists via `upsertUserSettings`.
  - “Send me one now” button (reuse `sendQuote`).
  - Empty state UX.

## Phase 3 — Payments (Stripe) and subscription guard

- __[pay-009] Stripe integration__
  - Create product + recurring price ($1/week).
  - BE endpoints:
    - `POST /stripe/create-checkout-session` returns URL with success/cancel.
    - `POST /stripe/webhooks` handle `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`.
  - Update `Subscription` model with Stripe IDs and status.
  - FE:
    - “Subscribe” CTA on landing/dashboard; hit checkout endpoint.
    - Show subscription status; “Manage billing” via customer portal.

- __[fe-014] Customer portal__
  - BE endpoint to create portal session.
  - FE button to open portal.

- __[sec-016] Security__
  - Verify Stripe webhook signature with `STRIPE_WEBHOOK_SECRET`.
  - Guard scheduled/delivery features behind active subscription.

## Phase 4 — Scheduler and recurring delivery

- __[sched-010] Scheduler__
  - Choose Agenda.js (Mongo-backed) or node-cron.
  - Model `ScheduledTask` to store user schedule (daily/weekly/monthly).
  - Job: resolve user settings + pick quote + send + log.
  - Ensure idempotency and basic retry.

- __Observability & Ops__
  - __[ops-015]__ Add request IDs, structured logs, error boundaries, minimal metrics (e.g., log counts), uptime monitoring (UptimeRobot/BetterUptime) on FE and BE.
  - Database indexes on `DeliveryLog.userId`, `Quote.explicit`, `Subscription.customerId`.
  - Backups (Mongo Atlas automated), retention policy.

## Nice-to-haves / Later

- AI Coach Mode using [openAi.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/services/openAi.ts:0:0-0:0) service.
- Browser extension or small Tauri/electron executable for desktop pings.
- Stats and accountability loop, weekly goals (“Goggins Tracker”).
- Stripe coupons, referral tracking.

# Concrete Changes Mapped to Files

- Backend
  - [backend/src/index.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/index.ts:0:0-0:0): add CORS, Helmet, logger, rate limiter; consider `/healthz`.
  - [backend/src/schemas/typeDefs.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/schemas/typeDefs.ts:0:0-0:0): add `Mutation` block.
  - `backend/src/schemas/types/*`: ensure fields align with models.
  - `backend/src/resolvers/*`: implement users, quotes, delivery, auth.
  - `backend/src/services/email.ts`: new; integrate Resend.
  - [backend/src/services/rateLimiter.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/services/rateLimiter.ts:0:0-0:0), [redis.ts](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/services/redis.ts:0:0-0:0): implement.
  - [backend/package.json](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/package.json:0:0-0:0): add [start](cci:1://file:///Users/luisfaria/Desktop/sEngineer/zproject/backend/src/index.ts:11:0-28:51) script; optionally `Dockerfile`, `.dockerignore`.

- Frontend
  - `frontend/src/lib/graphql.ts`: client setup.
  - [frontend/src/app/page.tsx](cci:7://file:///Users/luisfaria/Desktop/sEngineer/zproject/frontend/src/app/page.tsx:0:0-0:0): call `sendQuote` mutation.
  - `frontend/src/app/(dashboard)/*`: dashboard pages.
  - If NextAuth: `frontend/src/app/api/auth/[...nextauth]/route.ts` and provider config.

# Environment Variables (final checklist)

- Backend:
  - PORT
  - NODE_ENV
  - MONGO_URI
  - JWT_SECRET
  - RESEND_API_KEY
  - STRIPE_SECRET_KEY
  - STRIPE_WEBHOOK_SECRET
  - REDIS_URL
  - ALLOWED_ORIGINS

- Frontend:
  - NEXT_PUBLIC_GRAPHQL_ENDPOINT
  - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  - NEXTAUTH_URL, NEXTAUTH_SECRET (if using NextAuth)

# Suggested Sequence (2–3 day MVP)

1) Phase 0 setup (envs, CI, CORS/Helmet/logging) — 0.5 day  
2) Phase 1 minimal “send one” flow live (BE mutation + Resend; FE integration) and deploy — 0.5–1 day  
3) Phase 2 auth + dashboard MVP — 0.5–1 day  
4) Phase 3 Stripe checkout + webhooks + portal — 0.5–1 day  
5) Phase 4 scheduler — 0.5–1 day

# Open Decisions

- Auth path: NextAuth magic link (FE-first) vs BE-issued magic link?  
- Hosting choice for BE: Render vs Railway?  
- Scheduler engine: Agenda (Mongo-backed) vs node-cron?

# Status

- Backlog created and prioritized.  
- Next actionable step: confirm auth and hosting choices; then work on the exact edits to add `sendQuote` mutation and FE integration to get a live MVP.