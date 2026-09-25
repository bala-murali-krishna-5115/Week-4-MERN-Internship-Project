# Week-4-MERN-Internship-Project

This project is a MERN app with:
- Frontend: `client/`
- Backend: `server/`

## Vercel deployment fix

Vercel cannot deploy this app as a single project from the repo root because the frontend and backend are in separate folders.

### Frontend
1. In Vercel, import the GitHub repo.
2. Set the root directory to `client`.
3. Use the framework preset: `Create React App`.
4. Add environment variable:
   - `REACT_APP_API_URL = https://your-backend-domain.com`

### Backend
The Express API in `server/` must be deployed as a separate service on Render, Railway, or another Node host.

Example environment variable for the backend:
- `MONGO_URI = mongodb+srv://...`

### Local development
- Frontend: `cd client && npm install && npm start`
- Backend: `cd server && npm install && npm run dev`

The client reads `REACT_APP_API_URL` and falls back to `http://localhost:5000` when the variable is not set.
