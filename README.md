# 🏨 MERN Reservation Booking System

A full-stack reservation booking system built using the MERN stack (MongoDB, Express, React, Node.js). This system allows users to register, browse available listings, and make reservations for rooms, venues, or services. 

## 🚀 Features

### 👤 User Features
- Browse available listings
- View detailed listing pages
- Book reservations with date and time selection
- View and cancel existing reservations
  
---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- CSS

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## 📁 Project Structure

```bash
/mern-reservation-app
│
├── server
│   ├── config/          # DB connection & config
│   ├── controllers/     # Logic for routes
│   ├── middleware/      # Auth middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # Express routes
│   ├── .env             # Environment variables
│   └── server.js        # Entry point for backend
│
├── client
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Route components
│   │   ├── services/    # Axios API calls
│   │   └── App.js       # React app entry
│   └── package.json     # React dependencies
│
└── README.md
---
```
## Screenshots

![Main Page](./screenshots/main-page.png)

![About Page](./screenshots/about-page.png)

![Dish Page](./screenshots/dish-page.png)

![Reservation Page](./screenshots/reservation-page.png) 

## 🛠️ Installation Guide

Follow these steps to set up and run the MERN Reservation Booking System locally.

### 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or via Atlas)
- [Git](https://git-scm.com/)

---

### 🚀 Steps to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Aravind011464/Restaurant_MERN.git
cd Restaurant_MERN
```

### Client 
```bash
cd ../client
npm install
npm start
```

