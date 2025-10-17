import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../component/web/home/Home";
import HomeDashboard from "../component/dashboard/home/Home";
import DashboardLayout from "./DashboardLayout";
import Register from "../component/web/register/Register";
import Login from "../component/web/log-in/Login";

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
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomeDashboard />,
      },
    ],
  },
]);
