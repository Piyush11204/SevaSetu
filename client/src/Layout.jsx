import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { UserContextProvider } from "../context/userContext";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  const user = localStorage.getItem("token");
  console.log(user);
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} /> 
      <Footer />
    </>
  );
}

export default Layout;
