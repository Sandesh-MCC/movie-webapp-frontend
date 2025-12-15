 Movie Web App – Frontend

The frontend of the **Movie Web Application**, built using **React** and **Vite**, which interacts with a secure backend API to provide authentication and movie management features.

---

 Features

- User authentication (Login)
- JWT-based authorization
- Axios instance with interceptors
- Protected API calls
- Environment-based API configuration
- Deployed on **Vercel**

- Admin login crential
- Admin login Id-sandesh@gmail.com
- Admin password-12345678

---

 Tech Stack

| Category | Technology |
|--------|------------|
| Framework | React |
| Build Tool | Vite |
| HTTP Client | Axios |
| Styling | CSS |
| Auth | JWT |
| Deployment | Vercel |

---

 📁 Project Structure

movie-webapp-frontend/
├─ src/
│ ├─ api/
│ │ ├─ axiosInstance.js
│ │ └─ authApi.js
│ ├─ components/
│ ├─ pages/
│ ├─ App.jsx
│ └─ main.jsx
├─ public/
├─ index.html
├─ vite.config.js
└─ package.json


---

 Setup & Installation


https://github.com/Sandesh-MCC/movie-webapp-frontend.git

 Install dependencies

npm install

Environment Variables
Create a .env file in the root directory:


VITE_API_BASE_URL=https://movie-webapp-production.up.railway.app
For local backend:


VITE_API_BASE_URL=http://localhost:5000
 Run the application

npm run dev

http://localhost:5173

 Authentication Flow


Backend returns a JWT

Token is stored in localStorage

Axios interceptor attaches token:

Authorization: Bearer <token>
