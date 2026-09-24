# Portfolio site

## Dev servers (start both at the beginning of every session and give Joe the URLs)

- Frontend (Vite + React): `npm run dev` from the repo root → http://localhost:5173
- Backend (Express): `cd backend && npm run dev` → http://localhost:5001 (reads `backend/.env`; only the Contact form uses it)

Pages to check: `/`, `/about`, `/projects`, `/projects/digital-business-card`, `/contact`

## Layout

All pages render inside `<main>` (`src/RootLayout.jsx`), which is capped at `--page-max-width` in `src/index.css`. Change page width there, not per page.
