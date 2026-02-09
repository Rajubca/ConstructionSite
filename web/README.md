# Anand Construction Website

A modern, responsive construction company website built with Next.js, Prisma, and Tailwind CSS. This project is designed to showcase construction services (Demolition, Plaster, Plumbing, etc.) and a rich portfolio of past projects.

## Features

-   **Public Pages**:
    -   **Home**: Hero section, featured services, and call-to-action.
    -   **Services**: detailed list of modular construction services.
    -   **Portfolio**: Gallery of project images and embedded videos (YouTube).
    -   **Contact**: Contact form and company details.
-   **Admin Dashboard**:
    -   Secure login authentication.
    -   Manage Services: Add, edit, delete services.
    -   Manage Portfolio: Upload project images and videos.
-   **Tech Stack**:
    -   **Frontend**: Next.js 14 (App Router), React, Tailwind CSS.
    -   **Backend**: Next.js API Routes / Server Actions.
    -   **Database**: SQLite (via Prisma ORM).
    -   **Authentication**: NextAuth.js.

## Getting Started

### Prerequisites

-   Node.js 18+ installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/construction-website.git
    cd construction-website
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up the environment variables:
    Create a `.env` file in the root directory:
    ```bash
    DATABASE_URL="file:./dev.db"
    AUTH_SECRET="your-generated-secret-key" # Generate using openssl rand -base64 32
    ```

4.  Initialize the database:
    ```bash
    npx prisma migrate dev --name init
    ```

5.  Seed the database (Optional):
    ```bash
    npx tsx prisma/seed.ts
    ```
    *This creates a default admin user:*
    -   **Email**: admin@example.com
    -   **Password**: admin123

6.  Run the development server:
    ```bash
    npm run dev &
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Access

Navigate to `/login` to access the admin dashboard. Use the credentials created in the seeding step.

## Deployment

This project can be easily deployed to Vercel or any Node.js hosting provider. Ensure you set the environment variables in your deployment settings. Note that SQLite is a file-based database; for production scaling, consider switching the Prisma provider to PostgreSQL (e.g., Neon, Supabase).

## License

MIT
