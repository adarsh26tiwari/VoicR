# VoicR

VoicR is a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js). It provides authentication, user management, an assistant feature, and integrated billing using Razorpay.

## Features

- **Authentication & User Management**: Secure user sign-up and login, handled via JWT and Firebase.
- **Assistant Service**: API and UI integration for intelligent assistant interactions.
- **Billing & Payments**: Integrated Razorpay for processing payments and managing billing.
- **Responsive UI**: Built with React and Tailwind CSS for a modern, responsive user experience.
- **API Security**: Configured with CORS, HTTP-only cookies, and secure token validation.

## Tech Stack

### Frontend (Client)
- **Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Icons**: React Icons
- **BaaS**: Firebase

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Payments**: Razorpay
- **Middleware**: cookie-parser, cors, dotenv

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or Atlas)
- Razorpay Account (for billing credentials)
- Firebase Project

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adarsh26tiwari/VoicR.git
   cd VoicR
   ```

2. **Setup the Server:**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory and add the necessary environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```
   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Setup the Client:**
   Open a new terminal window/tab:
   ```bash
   cd client
   npm install
   ```
   Create a `.env` file in the `client` directory if needed for Firebase configs.
   Start the frontend development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
VoicR/
├── client/          # React frontend application
│   ├── public/      # Static assets
│   ├── src/         # React components, pages, and context
│   └── package.json # Frontend dependencies
└── server/          # Node.js/Express backend application
    ├── Configs/     # Database and other configurations
    ├── Controllers/ # Route controllers
    ├── Middleware/  # Custom Express middlewares
    ├── Models/      # Mongoose schemas
    ├── Routes/      # API routes definitions
    └── package.json # Backend dependencies
```

## License

This project is licensed under the ISC License.
