# 💄 Jerins Parlour

**Jerins Parlour** is a modern, full-stack web application designed to manage and showcase parlour services with a clean, user-friendly interface. The project features secure authentication, role-based access control, and a powerful admin dashboard, built using industry-standard technologies.

---

## 🌐 Live Website

🚀 **Live Demo:** *(Deployed via Vercel)*  
> _Add your live site link here if available_

---

## 📂 Project Repositories

- **Frontend Repository:**  
  https://github.com/WalidBinKamal/jerins-parlour.git

- **Backend Repository:**  
  https://github.com/WalidBinKamal/jerins-parlour-server.git

---

## ✨ Key Features

- ✅ Fully Responsive Design (Mobile & Desktop Friendly)
- ✅ Clean & User-Friendly UI
- ✅ Functional Navbar with Smooth Routing
- ✅ Services Displayed as Cards
- ✅ Review Section (Fetched from Database via API)
- ✅ User Authentication (Login & Registration)
- ✅ JWT-Based Authentication & Session Management
- ✅ Admin Dashboard for Full Control
- ✅ Role-Based Access Control (Admin & User)
- ✅ Secure API with Strict Data Protection
- ✅ All Data Fetched via API Calls
- ✅ Clean, Maintainable & Readable Codebase

---

## 🛠️ Tech Stack

### 🎨 Frontend
- React.js
- JavaScript (ES6+)
- TanStack Query
- Axios
- Tailwind CSS
- DaisyUI
- Auth Provider
- React Helmet Provider

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB
- CORS
- JWT (JSON Web Token)

### 🚀 Deployment
- Vercel (Frontend & Backend)

---

## 🔐 Authentication & Security

- Secure login and registration using JWT
- Token-based session management
- Role-based protected routes
- Strictly controlled data access to prevent data leakage

---

## 🖥️ Local Setup Instructions

### ⚡ Prerequisites

Ensure you have the following installed:

- Node.js & npm
- MongoDB (Local or MongoDB Atlas)
- Git

---

### 📦 Setup the Backend (Server)

1. **Clone the server repository:**

   ```bash
   git clone https://github.com/WalidBinKamal/jerins-parlour-server.git
   cd jerins-parlour-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the `jerins-parlour-server` directory with the following (replace values accordingly):

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the server:**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000`.

---

### 🎨 Setup the Frontend (Client)

1. **Clone the client repository:**

   ```bash
   git clone https://github.com/WalidBinKamal/jerins-parlour.git
   cd jerins-parlour
   npm install
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the client:**

   ```bash
   npm start
   ```

   The client will be available at `http://localhost:5173`.

---

## ⚙️ Additional Notes

-All application data is fetched dynamically via secured API calls

-Admin dashboard allows managing services, reviews, and users

-Designed with scalability, security, and maintainability in mind

-Suitable for real-world service-based business applications

---

## 👨‍💻 Author

**Walid Bin Kamal**  
GitHub: https://github.com/WalidBinKamal
---
