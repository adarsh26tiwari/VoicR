# VoicR: Embeddable AI Voice Assistant SaaS

VoicR is a comprehensive multi-tenant SaaS platform that delivers embeddable AI voice assistants. Built with the MERN stack (MongoDB, Express, React, Node.js), it empowers businesses to integrate intelligent, context-aware voice interactions directly into their websites with fully customizable branding, conversational tone, and business context.

## Key Highlights & Achievements

- **Multi-Tenant SaaS Architecture**: Built a robust platform delivering embeddable AI voice assistants with secure RESTful APIs for per-customer customization.
- **Advanced AI Integration**: Integrated the **Google Gemini API** with **BYOK (Bring Your Own Key)** support to enable highly context-aware conversational AI and natural voice interactions.
- **Voice-Driven Navigation**: Implemented innovative voice-based page navigation utilizing the **Web Speech API** for seamless, real-time speech-to-text and text-to-speech processing.
- **Self-Service Onboarding**: Developed an intuitive onboarding workflow complete with embeddable script generation, allowing customers to independently deploy the assistant across their websites with zero friction.
- **Subscription Monetization**: Designed a scalable subscription-based billing system using **Razorpay**, fully implementing order creation, secure payment verification, robust webhook handling, and automated plan expiry management.
- **Scalable Deployment**: Deployed and maintained the full-stack architecture leveraging **Vercel** (Frontend) and **Render** (Backend) to ensure highly available and scalable application delivery.

## Tech Stack

### Frontend (Client)
- **Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Icons**: React Icons
- **BaaS**: Firebase (Authentication)
- **Voice**: Web Speech API
- **Deployment**: Vercel

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Payments**: Razorpay
- **AI Engine**: Google Gemini API
- **Deployment**: Render

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or Atlas)
- Razorpay Account (for billing credentials)
- Firebase Project
- Google Gemini API Key

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adarsh26tiwari/VoicR.git
   cd VoicR
   ```

2. **Setup the Backend Server:**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory and configure the environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   GEMINI_API_KEY=your_gemini_api_key (for default/fallback operations)
   ```
   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Setup the Frontend Client:**
   Open a new terminal window/tab:
   ```bash
   cd client
   npm install
   ```
   Create a `.env` file in the `client` directory to add your Firebase configuration and backend API URL:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   # ...other firebase config
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
VoicR/
├── client/          # React frontend application
│   ├── public/      # Static assets & embeddable scripts
│   ├── src/         # React components, pages, and context
│   └── package.json # Frontend dependencies
└── server/          # Node.js/Express backend application
    ├── Configs/     # Database and other configurations
    ├── Controllers/ # Route controllers (Auth, Billing, Assistant)
    ├── Middleware/  # Custom Express middlewares (Auth, Error handling)
    ├── Models/      # Mongoose schemas
    ├── Routes/      # API routes definitions
    └── package.json # Backend dependencies
```

## License

This project is licensed under the ISC License.
