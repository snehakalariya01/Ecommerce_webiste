# E-Commerce Website

This repository contains a full-stack E-Commerce website with separate `backend` and `frontend` folders.

Repository structure:

- backend/ — Node.js API
- frontend/ — Vite + React frontend

Quick start (local):

1. Install dependencies:

```
cd backend
npm install

cd ../frontend
npm install
```

2. Run locally:

```
# backend
cd backend
npm run dev # or npm start

# frontend
cd frontend
npm run dev
```

Git & GitHub setup (run these commands in your terminal):

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <YOUR_REMOTE_URL>
git push -u origin main
```

Notes:
- Choose a license in `LICENSE` or replace it with your preferred license.
- CI is configured via `.github/workflows/ci.yml` to run installs/builds for `backend` and `frontend`.
