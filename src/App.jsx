import Layout from "./assets/layouts/Layout.jsx";
import Home from "./assets/component/web/home/Home.jsx";
import Register from "./assets/component/web/register/register.jsx";
import Login from "./assets/component/web/log-in/Login";
import UserDashboard from "./assets/component/web/user/UserDashboard.jsx";
import AdminDashboard from "./assets/component/web/admin/AdminDashboard.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  let [user, setUser] = useState(null);

  const SaveCurrentUser = () => {
    const token = localStorage.getItem("userToken");
    if (!token) return;
    try {
      const decode = jwtDecode(token);
      setUser(decode);
    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("userToken");
      setUser(null);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      SaveCurrentUser();
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login SaveCurrentUser={SaveCurrentUser} />,
        },
        {
          path: "user",
          element: <UserDashboard />,
        },
        {
          path: "admin",
          element: <AdminDashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
