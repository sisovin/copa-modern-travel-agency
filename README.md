# COPA Modern Travel Agency Website

A monorepo project combining [Next.js 15 (App Router)](https://nextjs.org/), [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Django](https://www.djangoproject.com/), [PostgreSQL](https://www.postgresql.org/), and [Prisma ORM](https://www.prisma.io/) for a modern, scalable travel agency platform.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Next.js Frontend Setup](#nextjs-frontend-setup)
3. [Django Backend Setup](#django-backend-setup)
4. [Database Setup (PostgreSQL + Prisma ORM)](#database-setup-postgresql--prisma-orm)
5. [Authentication & Security](#authentication--security)
6. [Component Breakdown (UI/UX)](#component-breakdown-uiux)
7. [SEO Optimization](#seo-optimization)
8. [Development & Contribution](#development--contribution)

---

## Project Structure

The monorepo is organized for clear separation of frontend and backend:

```
copa-modern-travel-agency/
│
├── apps/
│   ├── frontend/       # Next.js 15 (App Router) app
│   └── backend/        # Django project
│
├── packages/
│   ├── ui/             # Reusable UI components (w/ Tailwind CSS, shadcn/ui)
│   └── prisma/         # Prisma ORM schemas and migration files
│
├── .env                # Environment variables (see samples for setup)
├── docker-compose.yml  # For local dev with Docker (optional)
└── README.md
```

---

## Next.js Frontend Setup

### 1. Setup

```bash
cd apps/frontend
pnpm install   # or npm install / yarn install
```

### 2. Enable App Router

- Use `/app` directory for routing as per Next.js 15.
- Place pages, layouts, and templates inside `apps/frontend/app`.

### 3. Tailwind CSS v4

- Installed via `pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
- Init config:

  ```bash
  npx tailwindcss init -p
  ```

- Add the following to your `tailwind.config.js`:

    ```js
    module.exports = {
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

### 4. shadcn/ui

- Install:  
  ```bash
  npx shadcn-ui@latest init
  ```
- Generate components:  
  ```bash
  npx shadcn-ui@latest add button input card
  ```

- [shadcn/ui documentation](https://ui.shadcn.com/docs/installation) for more details.

---

## Django Backend Setup

### 1. Setup Python Virtual Environment

```bash
cd apps/backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Django Configuration

- Update `settings.py`:
  - Set `ALLOWED_HOSTS`, `CORS_ORIGIN_WHITELIST` for your frontend.
  - Configure database to use PostgreSQL (see database setup).

### 3. Environment Variables

- Copy `.env.example` to `.env` and fill in secrets (Django secret key, DB credentials).

### 4. Running Server

```bash
python manage.py migrate
python manage.py runserver
```

- API is available at `http://localhost:8000/api/`.

---

## Database Setup (PostgreSQL + Prisma ORM)

### 1. Install PostgreSQL

- [Download PostgreSQL](https://www.postgresql.org/download/)
- Create a database and user:

```sql
CREATE DATABASE copa_travel_agency;
CREATE USER copa_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE copa_travel_agency TO copa_user;
```

### 2. Prisma ORM Setup

- Go to `packages/prisma/`:

```bash
cd packages/prisma
pnpm install
```

- Configure your `DATABASE_URL` in `.env`:

  ```
  DATABASE_URL="postgresql://copa_user:your_password@localhost:5432/copa_travel_agency"
  ```

- Define your schema in `schema.prisma`.

- Run migrations:

  ```bash
  npx prisma migrate dev --name init
  ```

- Generate Prisma Client:

  ```bash
  npx prisma generate
  ```

---

## Authentication & Security

### 1. Password Hashing

- Use [argon2](https://argon2password.readthedocs.io/en/latest/) for secure password storage.
- Install in Django:

  ```bash
  pip install argon2-cffi
  ```

- Set as default password hasher in `settings.py`:

  ```python
  PASSWORD_HASHERS = [
      'django.contrib.auth.hashers.Argon2PasswordHasher',
      # ...other hashers
  ]
  ```

### 2. JWT Authentication

- Use [djangorestframework-simplejwt](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/) or [PyJWT](https://pyjwt.readthedocs.io/en/stable/).
- Install:

  ```bash
  pip install djangorestframework-simplejwt
  ```

- Add to Django `REST_FRAMEWORK` settings and setup endpoints for login/refresh.

### 3. CORS & CSRF

- Configure `CORS` headers so Next.js frontend can access API.
- Use HTTPS in production. Store secrets in `.env`.

---

## Component Breakdown (UI/UX)

- All UI components are built with [Tailwind CSS v4] and [shadcn/ui], located in `/packages/ui`.
- **Key Components**:
  - Buttons, Cards, Forms, Navigation bars, Modals, etc.
- Components are designed for maximum reusability and customization. Example:

  ```tsx
  // packages/ui/components/Button.tsx
  import { Button as ShadButton } from "shadcn-ui";
  export default function Button(props) {
    return <ShadButton {...props} className="rounded-lg px-4 py-2" />;
  }
  ```

- Use utility classes for rapid styling and responsive design.

---

## SEO Optimization

### 1. Next.js Meta Tags

- Use the built-in `metadata` export or `next/head` for each page:

  ```tsx
  export const metadata = {
    title: "COPA Modern Travel Agency",
    description: "Book your next adventure with COPA – flights, hotels, and more.",
    openGraph: {
      title: "COPA Travel",
      description: "Modern travel booking experience.",
      url: "https://copa-travel.com",
      images: ["/og-image.png"],
    },
  };
  ```

- For advanced SEO, add [sitemap.xml](https://nextjs.org/docs/app/building-your-application/optimizing/seo#sitemaps) and [robots.txt](https://nextjs.org/docs/app/building-your-application/optimizing/seo#robots).

### 2. Content Best Practices

- Use semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.).
- Ensure all images use `alt` attributes.
- Write clear page titles and descriptions.
- Use structured data (JSON-LD) for rich search results.

---

## Development & Contribution

1. Clone the repo:

    ```bash
    git clone https://github.com/sisovin/copa-modern-travel-agency.git
    cd copa-modern-travel-agency
    ```

2. Set up environment variables and follow the above setup instructions for frontend, backend, and database.

3. PRs and issues welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md) (to be added).

---

## License

[MIT](LICENSE)
