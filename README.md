# Zero Dopamine

> A no-BS motivational SaaS app that delivers raw, discipline-first messages to help you fight dopamine addiction and **get after it**.  
Delivered via web and email. Gritty. Unfiltered. Built for serious doers.

---

## Project Overview

**Goggins Mode** is a full-stack SaaS built with the MERN stack + Stripe + Resend integration.  
It serves one mission: deliver cold, hard motivation in the voice of your inner savage — *no hype, no fluff*.

- 🕒 Daily/weekly/monthly motivational quotes
- 💬 Choose clean or explicit tone
- 📨 Delivered on-screen and via email
- 🔐 Subscription-based with $1/week tier
- 📊 Dashboard to manage settings, track delivery

---

## Tech Stack

| Layer        | Technology                             |
|-------------|-----------------------------------------|
| Frontend     | Next.js + TypeScript + TailwindCSS     |
| Backend      | Node.js + Express + Apollo Server (GraphQL) |
| Database     | MongoDB + Mongoose                     |
| Auth         | JWT + Email Magic Link (planned)       |
| Email        | Resend (for motivational emails)       |
| Payments     | Stripe (subscription & webhook logic)  |
| Infra        | Docker, Vercel (FE), Railway/Render (BE) |
| Scheduler    | Cron Jobs / Agenda (for queued sends)  |

---

## Core Features

### ✅ Done (v1.x - Frontend)
- [x] Countdown & modal with surprise quote
- [x] Explicit mode toggle
- [x] Email input + delivery
- [x] Gritty dark UI
- [x] Schema setup (User, Quote, DeliveryLog)
- [x] MongoDB + GraphQL backend
- [x] TailwindCSS custom animations

### TO BE DONE
- [ ] Auth via email magic link or OTP
- [ ] make the component exist on frontend to send the quote to the user
- [ ] the component should be able to be used on the browser of the user (either an extension of even an executable app)
- [ ] Logged-in dashboard with quote history
- [ ] Stripe customer portal
- [ ] Delivery scheduler engine
- [ ] Goggins Tracker: add weekly goals
- [ ] AI Coach Mode
- [ ] Stats and accountability loop

---

## Local Development

### 1. Clone + Setup
```bash
git clone https://github.com/yourusername/goggins-mode.git
cd goggins-mode
```

### 2. Install Dependencies
```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Environment Variables

#### `.env` for Backend:
```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/goggins
JWT_SECRET=super-secret-key
RESEND_API_KEY=your-api-key
STRIPE_SECRET_KEY=your-secret-key
```

#### `.env.local` for Frontend:
```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

### 4. Run Dev Servers

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

---

## Project Structure

```
/frontend
  ├── components/
  ├── app/
  └── tailwind.config.ts

/backend
  ├── models/
  ├── resolvers/
  ├── schemas/
  ├── services/
  └── index.ts
```

---

## Inspiration

This app is inspired by the no-excuses attitude of **David Goggins**.  
It’s designed to cut through the noise, hold users accountable, and help them take action every damn day.

---

## Quote of the Day 🧨

> *"You don’t know me, son!"*  
— Your inner savage.

---

## Contributing

Open to collaborations, quote contributions, and feedback.  
PRs welcome — just bring that *get after it* energy 💪