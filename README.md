# Auth Web System

> A modern authentication web application with role-based dashboards, built using React and Vite.

---

## 🚀 Overview

Auth Web System is a robust front-end authentication platform that allows users to register, log in, and be redirected to dashboards based on their role (Admin or User). JWT tokens are securely stored in localStorage, and the UI is clean, responsive, and easy to customize.

---

## ✨ Features

- **User Registration:** Sign up with username, email, and password
- **User Login:** Secure login with JWT authentication
- **Role-Based Redirection:** Instantly redirects users to their dashboard based on their role
	- Admin → `/admin-dashboard`
	- User → `/user-dashboard`
- **JWT Storage:** Tokens are stored in localStorage for session persistence
- **Email Verification Prompt:** Users are prompted to verify their email after registration
- **Responsive UI:** Simple, clean, and responsive design

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup) for forms and validation
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📦 Installation & Usage

### Prerequisites

- Node.js v16+ (recommended)
- npm or yarn

### Install

```powershell
git clone https://github.com/ghadanofal/web-auth-system.git
cd web-auth-system
npm install
# or
yarn install
```

### Environment Variables

Create a `.env` file at the project root to override the API base URL if needed:

```
VITE_API_BASE_URL=https://ecommerce-node4.vercel.app
```

By default, the code uses `https://ecommerce-node4.vercel.app` for authentication endpoints.

### Run (development)

```powershell
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
	App.jsx                      # App root & router provider
	assets/
		component/
			web/
				admin/AdminDashboard.jsx
				user/UserDashboard.jsx
				log-in/Login.jsx
				register/register.jsx
				home/Home.jsx
		layouts/
			routes.jsx
			Layout.jsx
```

---

## 🔄 Authentication & Redirection Flow

1. User submits credentials to the backend (`/auth/signin`).
2. On success, the backend returns a JWT token and user data including `role`.
3. The client stores the token in `localStorage` (`userToken`) and calls `SaveCurrentUser()` (defined in `App.jsx`) to decode and persist user info in app state.
4. The app redirects the user based on `role`:
	 - `admin` → `/admin-dashboard`
	 - `user` → `/user-dashboard`
5. After successful registration (`/auth/signup`), the client redirects immediately to `/login`.

---

## 🗂️ Key Routes

- `/register` - Registration page
- `/login` - Login page
- `/admin-dashboard` - Admin dashboard
- `/user-dashboard` - User dashboard

---

## 📝 Contribution

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♀️ Author

- [ghadanofal](https://github.com/ghadanofal)

---

If you need badges, screenshots, or more advanced documentation (API, backend integration, etc.), let me know!
