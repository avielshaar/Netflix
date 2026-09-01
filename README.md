# Netflix Clone 🎬

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_App-E50914?style=for-the-badge&logo=netflix&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/avielshaar/Netflix)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-informational?style=for-the-badge&logo=react)](https://react.dev/)

> A responsive media streaming web application built on the MERN stack and Vite, integrating the TMDB REST API for dynamic catalog browsing and React-YouTube for in-app trailer playback.

---

## 🔗 Project Links
* **Live Demo:** [View Live Application](#) *(Add your deployment URL here)*
* **GitHub Repository:** [github.com/avielshaar/Netflix](https://github.com/avielshaar/Netflix)

---

## ✨ Features

- **Dynamic Media Catalog**: Real-time integration with TMDB REST API fetching trending titles, top-rated movies, and category-filtered rows.
- **Embedded Trailer Playback**: Interactive movie trailer playback modal powered by `react-youtube`.
- **User Authentication**: Secure JWT-based authentication and session management with password hashing via `bcryptjs`.
- **User Watchlist**: Persistent watchlist storage in MongoDB allowing authenticated users to bookmark and manage favorite titles.
- **Serverless Ready**: Configured for streamlined cloud deployment using `vercel.json`.

---

## 🛠️ Tech Stack

### Frontend
- **Framework & Tooling**: React 18, Vite
- **Media & APIs**: TMDB REST API, `react-youtube`
- **Routing & State**: `react-router-dom`, React Context / Hooks

### Backend
- **Server**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Security & Auth**: `jsonwebtoken` (JWT), `bcryptjs`, `cors`
- **Deployment Configuration**: `vercel.json`

---

## 📂 Project Structure

```
Netflix/
├── backend/
│   ├── controllers/       # Route controllers
│   ├── models/            # Mongoose schemas (User, Watchlist)
│   ├── routes/            # REST API endpoints
│   ├── data.js            # Initial media data
│   ├── utils.js           # JWT & auth helpers
│   ├── vercel.json        # Serverless deployment configuration
│   ├── index.js           # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/    # Navbar, Banner, Row, Trailer Modal
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `backend/.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 🚀 Getting Started

### 1. Setup Backend
```bash
cd backend
npm install
npm run dev
```

### 2. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

---

## 👥 Contributors
- **Bar Musler** ([@Muslerr](https://github.com/Muslerr))
- **Aviel Shaar** ([@avielshaar](https://github.com/avielshaar))
- **Ori Bennett** ([@OriBennett](https://github.com/OriBennett))
