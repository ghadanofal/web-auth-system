import React from "react";
import Navbar from "../component/web/navbar/Navbar.jsx";
//import Footer from '../component/web/footer/Footer.jsx'
import { Outlet } from "react-router-dom";

export default function Layout(props) {
  const { user, setUser } = props;
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Outlet />
    </>
  );
}
