import Layout from "./assets/layouts/Layout.jsx";
import Home from "./assets/component/web/home/Home.jsx";
import Register from "./assets/component/web/register/register.jsx";
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
          path: "register",
          element: <Register />,
        }, //,
        //{
        //  path: 'login',
        //element: <Login SaveCurrentUser={SaveCurrentUser}/>
        //}
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
