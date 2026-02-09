# Construction Website

## Tech Stack
- Next.js (App Router)
- Prisma (SQLite)
- NextAuth.js
- Tailwind CSS

## Getting Started
1. Install dependencies: `npm install`
2. Initialize DB: `npx prisma migrate dev`
3. Seed DB: `npx tsx prisma/seed.ts`
4. Run dev server: `npm run dev`

## Admin Access
- Login at `/login`
- Email: `admin@example.com`
- Password: `admin123`

## Features
- Public pages: Home, Services, Portfolio, Contact.
- Admin pages: Manage Services, Manage Portfolio.
- Image Uploads: Stored in `public/uploads`.
