# MediQueue – Tutor Booking System

MediQueue is a modern tutor booking platform that connects students with tutors through a simple and user-friendly interface. Students can browse available tutors, view tutor details, book sessions, and manage their bookings. Tutors can also add, update, and manage their tutoring information.

## 🌐 Live Project

**Frontend:**
https://mediqueue-dusky.vercel.app

**Backend API:**
https://medi-queue-server-taupe.vercel.app

---

## ✨ Features

- 🔐 User registration and login
- 🔑 Google Authentication
- 👨‍🏫 Browse available tutors
- 🔎 Search and explore tutors
- 📄 View detailed tutor information
- 📅 Book tutoring sessions
- 🎯 Real-time available slot management
- 👤 Manage personal tutor profiles
- ✏️ Update tutor information
- 🗑️ Delete tutor profiles
- 📚 View booked sessions
- ❌ Cancel bookings
- 🛡️ Protected routes and API authentication
- 📱 Responsive design for desktop, tablet, and mobile
- 🔔 Toast notifications for user actions
- 🌓 User-friendly modern interface

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React
- Tailwind CSS
- HeroUI
- React Icons
- React Toastify
- Better Auth

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- REST API

### Deployment

- Vercel

---

## 🔐 Authentication

MediQueue uses **Better Auth** for user authentication.

Authentication features include:

- Email and password authentication
- Google OAuth authentication
- Secure session management
- JWT-based API authentication
- Protected pages
- Protected backend API routes

---

## 👨‍🏫 Tutor Management

Tutors can create and manage their tutoring profiles.

Tutor information includes:

- Tutor Name
- Profile Photo
- Subject
- Available Days
- Available Time
- Hourly Fee
- Total Available Slots
- Session Start Date
- Institution
- Experience
- Location
- Teaching Mode
  - Online
  - Offline
  - Both

Tutors can:

- Add a tutor profile
- View their own tutors
- Update tutor information
- Delete tutor profiles

---

## 📚 Booking System

Students can book available tutoring sessions from the tutor details page.

### Booking Flow

```text
Student
   ↓
Browse Tutors
   ↓
View Tutor Details
   ↓
Choose Available Session
   ↓
Submit Booking
   ↓
Booking Confirmed
   ↓
Available Slot Decreases
```

When a booking is confirmed:

```text
totalSlot = totalSlot - 1


If there are no available slots, the booking option is disabled.

Students can also cancel their bookings.

---

## 🔌 API Endpoints

### Tutor APIs

| Method | Endpoint              | Description                 |
| ------ | --------------------- | --------------------------- |
| GET    | `/tutors`             | Get available tutors        |
| GET    | `/alltutors/:id`      | Get tutor details           |
| GET    | `/tutor-metadata/:id` | Get tutor metadata          |
| GET    | `/my-tutors`          | Get logged-in user's tutors |
| POST   | `/tutors`             | Add a tutor                 |
| PATCH  | `/update-tutors/:id`  | Update tutor                |
| DELETE | `/delete-tutors/:id`  | Delete tutor                |

### Booking APIs

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/bookings`           | Create a booking    |
| GET    | `/my-bookings`        | Get user's bookings |
| PATCH  | `/cancel-booking/:id` | Cancel a booking    |

> Protected endpoints require a valid authentication token.

---

## 📁 Frontend Project Structure

```text
MediQueue/
├── public/
├── src/
│   ├── app/
│   │   ├── add-tutor/
│   │   ├── login/
│   │   ├── register/
│   │   ├── tutors/
│   │   │   └── [id]/
│   │   ├── my-tutors/
│   │   ├── my-sessions/
│   │   └── api/
│   │       └── auth/
│   │
│   ├── components/
│   └── lib/
│       ├── auth.js
│       └── auth-client.js
│
├── package.json
└── README.md
```

---

## 📁 Backend Project Structure

```text
MediQueue-server/
├── index.js
├── package.json
├── .env
└── middleware/
```

---

## ⚙️ Installation

### 1. Clone the frontend repository

```bash
git clone https://github.com/sahadathussain12/mediqueue.git
```

### 2. Go to the project directory

```bash
cd mediqueue
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:3000
```

---

## 🖥️ Backend Setup

Clone the backend repository:

```bash
git clone YOUR_BACKEND_REPOSITORY_URL
```

Then:

```bash
cd MediQueue-server
npm install
```

Start the backend:

```bash
npm start
```

The backend runs locally on:

```text
http://localhost:5000
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the frontend project.

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_URI=http://localhost:5000
```

For production, replace the local URLs with the deployed Vercel URLs.

### ⚠️ Important

Never commit real secrets, passwords, API keys, or database credentials to GitHub.

Add environment files to `.gitignore`:

```text
.env
.env.local
.env.production
```

---

## 🔒 Protected Routes

MediQueue uses protected routes for authenticated users.

### Public Pages

- Home
- Login
- Register
- Tutors

### Protected Pages

- Add Tutor
- My Tutors
- My Sessions
- Booking functionality

Unauthenticated users are redirected to the login page when accessing protected resources.

---

## 🎨 UI & User Experience

MediQueue focuses on a clean and responsive user experience.

The interface includes:

- Responsive layouts
- Modern cards
- Responsive tables
- Modal-based booking forms
- Toast notifications
- Loading states
- Empty states
- Disabled states for unavailable slots
- Mobile-friendly navigation

---

## 📱 Responsive Design

The application is designed to work across:

- 📱 Mobile devices
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

---

## 🚀 Deployment

The project is deployed using **Vercel**.

### Frontend

```text
https://mediqueue-dusky.vercel.app
```

### Backend

```text
https://medi-queue-server-taupe.vercel.app
```

Before deploying, make sure all required environment variables are configured in the Vercel project settings.

---

## 🔄 Deployment Workflow

After making changes locally:

```bash
git add .
git commit -m "update project"
git push origin main
```

If the GitHub repository is connected to Vercel, Vercel automatically creates a new deployment after the push.

You can also deploy manually with:

```bash
vercel --prod
```

---

## 🧪 Local Development

Run the frontend:

```bash
npm run dev
```

Run the backend:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

---

## 🔮 Future Improvements

Possible future improvements include:

- 💳 Online payment integration
- ⭐ Tutor rating and review system
- 📧 Email notifications
- 🔔 Booking reminders
- 👨‍💼 Admin dashboard
- 📊 Tutor analytics
- 💬 Student-tutor messaging
- 📅 Advanced calendar scheduling
- 🔍 Advanced tutor filtering
- 📜 Booking history
- 🖼️ Better profile management

---

## 👨‍💻 Author

**Sahadat Hussain**

Computer Technology Student & Full Stack Developer

### Connect With Me

- GitHub: `sahadathussain12`
- LinkedIn: `sahadat-hussain12`

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for educational and portfolio purposes.
