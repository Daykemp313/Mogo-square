# MoGo Square MVP

Initial monorepo scaffold for **MoGo Square**, a district-based social commerce and professional networking platform.

## Project structure

- `frontend/` — Next.js app router interface (district map, creator profiles, deal feed, marketplace, wallet and leaderboard views).
- `backend/` — Node.js + Express API with auth and core platform endpoints.
- `database/` — PostgreSQL schema and seed scripts.

## Core MVP features included

1. User authentication endpoints (`/api/auth/signup`, `/api/auth/login`).
2. Homepage with district map concept and modern dashboard layout.
3. Creator profile section with levels and wallet balances.
4. Deal feed for economic activity.
5. Marketplace listing section.
6. Wallet balance surfaced in profile cards.
7. Leaderboard table by district performance.

## Quick start

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Database

```bash
psql "$DATABASE_URL" -f database/schema.sql
psql "$DATABASE_URL" -f database/seed.sql
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend default: `http://localhost:3000`

Backend default: `http://localhost:4000`
