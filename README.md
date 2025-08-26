# Zero Dopamine

> A no-BS motivational app that delivers raw, discipline-first content to help you fight dopamine addiction and **get after it**.  
Delivered via web and email. Gritty. Unfiltered. Built for serious doers.

---

## Project Overview

**Goggins Mode** is a full-stack app built with the MERN stack + Resend integration.  
It serves one mission: deliver cold, hard motivation in the voice of your inner savage — *no hype, no fluff*.

- 🕒 Daily/weekly/monthly motivational quotes
- 💬 Choose clean or explicit tone
- 📨 Delivered on-screen and via email
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
| Infra        | Docker |
| Scheduler    | Cron Jobs / Agenda (for queued sends)  |

---

## Core Features

### ✅ Done (v1.x - Frontend)
- [x] Countdown & modal with surprise quote
- [x] Explicit mode toggle
- [x] Gritty dark UI
- [x] Schema setup (User, Quote, DeliveryLog)
- [x] MongoDB + GraphQL backend
- [x] TailwindCSS custom animations

### TO BE DONE
- [ ] Add websocket for subscription events
- [ ] Auth via email magic link or OTP
- [ ] Logged-in dashboard with quote history
- [ ] Delivery scheduler engine

---

## Local Development

### 1. Clone + Setup
```bash
git clone https://github.com/lfariabr/z-project.git
cd z-project
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
MONGO_URI=mongodb://localhost:27017/zproject
JWT_SECRET=super-secret-key
RESEND_API_KEY=your-api-key
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

## Contributing

Open to collaborations, quote contributions, and feedback.  
PRs welcome — just bring that *get after it* energy 💪