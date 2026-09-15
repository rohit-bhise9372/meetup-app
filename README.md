# 🎉 Meetup App

A full-stack **Meetup Events Application** built using React.js, Node.js, Express.js, and MongoDB.

The application allows users to browse meetup events, search for events, filter events by type, and view detailed information about each event.

---

## 🌐 Live Demo

### Frontend

https://meetup-app-frontend-theta.vercel.app/

### Backend API

https://meetup-app-backend-theta.vercel.app/events

---

## 🚀 Features

* 📋 Display all meetup events
* 🔍 Search events by title
* 🎯 Filter events by:

  * Online
  * Offline
  * Both
* 🖼️ Event thumbnail display
* 📅 Event date and location
* 🏷️ Event type and tags
* 📖 View detailed information about an event
* 🔗 React Router navigation
* 📱 Responsive UI using Bootstrap
* 🌐 REST API integration
* ☁️ Backend deployed on Vercel

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Bootstrap
* JavaScript
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv

### Deployment

* Frontend: Vercel
* Backend: Vercel
* Database: MongoDB Atlas

---

## 📁 Project Structure

```text
MeetUp App Assignment/
│
├── Backend/
│   ├── api/
│   │   └── index.js
│   │
│   ├── db/
│   │   └── db.connect.js
│   │
│   ├── models/
│   │   └── event.model.js
│   │
│   ├── package.json
│   └── vercel.json
│
├── Frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── FilterDropdown.jsx
│   │   │   └── EventCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── EventDetails.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🔗 Backend API

The backend API is deployed on Vercel.

### Base URL

https://meetup-app-backend-theta.vercel.app

### Get All Events

```http
GET /events
```

Live endpoint:

https://meetup-app-backend-theta.vercel.app/events

### Get Event by ID

```http
GET /events/:eventId
```

Example:

```text
https://meetup-app-backend-theta.vercel.app/events/EVENT_ID
```

---

## 💻 Run Frontend Locally

### 1. Clone the repository

```bash
git clone https://github.com/rohit-bhise9372/meetup-app.git
```

### 2. Move into the Frontend folder

```bash
cd meetup-app/Frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The frontend will run on the local Vite development server.

---

## ⚙️ Run Backend Locally

### 1. Move into the Backend folder

```bash
cd meetup-app/Backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4. Start the backend

```bash
npm run dev
```

---

## 🌐 Deployment

### Frontend

The frontend is deployed on Vercel.

**Live URL:**

https://meetup-app-frontend-theta.vercel.app/

For Vercel deployment, set:

```text
Root Directory: Frontend
```

### Backend

The backend is deployed on Vercel.

**Live API:**

https://meetup-app-backend-theta.vercel.app/events

For Vercel deployment, set:

```text
Root Directory: Backend
```

### Database

MongoDB Atlas is used as the database for storing meetup event data.

---

## 📌 Learning Outcomes

While building this project, I learned and practiced:

* React component structure
* React Router
* Dynamic routes using `useParams`
* `useState`
* API fetching
* Custom `useFetch` hook
* Search functionality
* Filtering data
* Passing props between components
* REST API integration
* Express.js
* MongoDB and Mongoose
* CORS
* Vercel deployment
* Connecting frontend with a deployed backend

---

## 👨‍💻 Author

### Rohit Bhise

GitHub:

https://github.com/rohit-bhise9372

---

