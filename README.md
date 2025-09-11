# Zero Dopamine

> A no-BS motivational app that delivers raw, discipline-first content to help you fight dopamine addiction and **get after it**.  
Delivered via web and email. Gritty. Unfiltered. Built for serious doers.

**🚀 LIVE:** [zerodopamine.com](https://zerodopamine.com)

---

## Project Overview

**Zero Dopamine** is a full-stack motivational platform built with modern web technologies.  
It serves one mission: deliver cold, hard motivation in the voice of your inner savage — *no hype, no fluff*.

### Current Features
- 🎯 **Subscription System** - Users can register with email and explicit mode preference
- 📧 **Welcome Email Automation** - Instant gritty welcome emails via Resend integration
- ⏰ **Countdown Timer** - Visual countdown with motivational messaging
- 🔥 **Explicit Mode Toggle** - Choose clean or unfiltered content
- 📝 **Blog Platform** - MDX-powered blog with motivational content
- 🌐 **Production Ready** - Deployed on AWS EC2 with SSL and Docker

---

## Tech Stack

| Layer        | Technology                             |
|-------------|-----------------------------------------|
| Frontend     | Next.js 14 + TypeScript + TailwindCSS  |
| Backend      | Node.js + Apollo Server (GraphQL)      |
| Database     | MongoDB Atlas + Mongoose               |
| Email        | Resend (automated welcome emails)      |
| Content      | MDX (for blog posts)                   |
| Deployment   | Docker + AWS EC2 + Nginx + SSL         |
| Domain       | zerodopamine.com                       |

---

## Architecture

### Frontend (`/frontend`)
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** with custom animations
- **GraphQL Client** for backend communication
- **MDX** for blog content rendering

### Backend (`/backend`)
- **Apollo Server** GraphQL API
- **MongoDB** with Mongoose ODM
- **Resend Integration** for email automation
- **JWT Authentication** (planned)
- **Docker** containerization

### Infrastructure
- **AWS EC2** hosting
- **Nginx** reverse proxy
- **Let's Encrypt SSL** certificates
- **Docker Compose** orchestration
- **MongoDB Atlas** cloud database

---

## Core Features Status

### ✅ Completed (v0.13.0)
- [x] **Full-Stack Setup** - Next.js frontend + GraphQL backend
- [x] **Database Integration** - MongoDB with user models and queries
- [x] **User Registration** - Email subscription with explicit mode toggle
- [x] **Email Automation** - Welcome emails via Resend integration
- [x] **Blog Platform** - MDX-powered blog with custom styling
- [x] **Production Deployment** - Live on zerodopamine.com with SSL
- [x] **Docker Containerization** - Full stack containerized
- [x] **Responsive UI** - Mobile-first design with dark theme
- [x] **Countdown Component** - Interactive timer with animations

### 🚧 In Progress
- [ ] **Email Deduplication** - Check if user already subscribed before sending welcome email
- [ ] **User Authentication** - JWT + email magic link system
- [ ] **User Dashboard** - Profile management and email preferences

### 📋 Planned Features
- [ ] **Scheduled Email Campaigns** - Weekly motivational content delivery
- [ ] **Quote Management System** - Admin interface for content management
- [ ] **Analytics Dashboard** - User engagement and email metrics
- [ ] **Redis Caching** - Performance optimization and rate limiting
- [ ] **WebSocket Integration** - Real-time notifications

---

## Local Development

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- MongoDB (local or Atlas)

### 1. Clone & Setup
```bash
git clone https://github.com/lfariabr/z-project.git
cd z-project
```

### 2. Environment Configuration

#### Backend `.env`:
```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/zproject
JWT_SECRET=your-jwt-secret
RESEND_API_KEY=your-resend-api-key
```

#### Frontend `.env.local`:
```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

### 3. Development with Docker
```bash
# Start all services
docker-compose -f docker-composeDev.yml up

# Frontend: http://localhost:3000
# Backend GraphQL: http://localhost:4000/graphql
# MongoDB: localhost:27017
```

### 4. Manual Development
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

---

## Deployment

The app is deployed on AWS EC2 with the following setup:
- **Domain**: zerodopamine.com (with SSL via Let's Encrypt)
- **Reverse Proxy**: Nginx
- **Containers**: Docker Compose production setup
- **Database**: MongoDB Atlas
- **Email**: Resend with verified domain

---

## Project Structure

```
z-project/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App router pages
│   │   ├── components/      # Reusable components
│   │   └── lib/             # Utilities and hooks
│   ├── content/             # MDX blog posts
│   └── public/              # Static assets
├── backend/                 # GraphQL API server
│   ├── src/
│   │   ├── models/          # MongoDB schemas
│   │   ├── resolvers/       # GraphQL resolvers
│   │   ├── schemas/         # GraphQL type definitions
│   │   └── services/        # External service integrations
│   └── Dockerfile
├── etc/nginx/               # Nginx configuration
├── docker-compose.yml       # Production setup
├── docker-composeDev.yml    # Development setup
└── _docs/                   # Project documentation
```

---

## Content Strategy

The platform delivers motivational content inspired by **David Goggins'** no-excuses philosophy:
- **Welcome Emails**: Immediate reality check for new subscribers
- **Blog Posts**: Long-form motivational content and personal stories
- **Future**: Weekly email campaigns with actionable challenges

---

## Contributing

Open to collaborations and feedback. When contributing:
- Follow the existing code style and patterns
- Test your changes locally with Docker
- Bring that *get after it* energy 💪

---

## License

MIT License - Build something that matters.