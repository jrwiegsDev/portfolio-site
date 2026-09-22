# Portfolio Website

Source code for my personal portfolio at [jrwportfolio.com](https://jrwportfolio.com): a React single-page app with a small Node.js/Express API behind its contact form.

## Architecture

```
Browser ──► React SPA (Vite, Render static site) ──► POST /api/contact ──► Express API (Render web service) ──► Gmail (Nodemailer)
```

- **Frontend (`/`)**: React 19, React Router, Vite. Hosted as a Render static site.
- **Backend (`/backend`)**: Node.js 20+ and Express 5. It serves one public endpoint, which validates a contact form submission and emails it to me. Hosted as a Render web service.

## Backend

The contact API is public, so most of the backend is about handling untrusted input safely:

- **Validation:** fields must be non-empty strings within length limits (name 100, email 254, message 5,000 characters). JSON bodies are capped at 10 KB.
- **Output encoding:** user input is HTML-escaped where the notification email is built, and a plain-text version is sent alongside. The stored text is never rewritten.
- **Spam protection:** a hidden honeypot field, a minimum time-to-submit check, and per-IP rate limiting (5 per hour). `trust proxy` is set so rate limits key on the visitor's IP behind Render's proxy.
- **Hardening:** security headers via `helmet`, CORS restricted to the site's origin, and JSON 404/error responses that don't leak stack traces.
- **Operations:** `GET /health` for Render's health check, and graceful shutdown on `SIGTERM` so in-flight requests finish during deploys.

## Testing and CI

- **Jest + Supertest** cover validation, escaping, spam protection, rate limiting behind a proxy, and error handling (`cd backend && npm test`).
- **GitHub Actions** runs the tests on Node 22 and 24 for every push and pull request. A second job fails the build if any image in `public/` contains GPS or camera metadata (`scripts/check-image-metadata.sh`).

## Running locally

```bash
# Frontend (http://localhost:5173)
npm install
npm run dev

# Backend (http://localhost:5001)
cd backend
cp .env.example .env   # then fill in the values
npm install
npm run dev
```

The backend needs a Gmail [app password](https://myaccount.google.com/apppasswords) in `EMAIL_PASS`. See `backend/.env.example` for all variables.
