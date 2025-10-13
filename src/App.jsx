import Layout from "./assets/layouts/Layout.jsx";
import Home from "./assets/component/web/home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';


function App() {

    let [user, setUser] = useState(null)

    const SaveCurrentUser = ()=>{
        const token = localStorage.getItem("userToken");
        const decode = jwtDecode(token)
        setUser(decode)
    }

useEffect(()=>{
    if(localStorage.getItem("userToken")){
        SaveCurrentUser();
    }
},[])

    const router = createBrowserRouter([
            {
                path: "/",
                element: <Layout user={user} setUser={setUser}/>,
                children :[
                    {
                        path: '/',
                        element: <Home/>
                    },
                ]
            }
            ]);
    return (
        <RouterProvider router={router} />
    )
}

export default App





