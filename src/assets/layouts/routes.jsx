import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../component/web/home/Home";
import Register from "../component/web/register/register.jsx";
import Login from "../component/web/log-in/Login";
import AdminDashboard from "../component/web/admin/AdminDashboard";
import UserDashboard from "../component/web/user/UserDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
        element: <Login />,
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "user-dashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);
