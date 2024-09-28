import React,{useState,useEffect} from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { UserContextProvider } from "../context/userContext";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { UserContext, UserContextProvider } from "./context/userContext.jsx";
import { useContext } from "react";

function Layout() {
  // const { currentUser } = useContext(UserContext);

  // console.log("Current User:", currentUser);
  return (
    <>
    <UserContextProvider>
      <Navbar/>
      <Outlet/>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} /> 
      <Footer />
    </UserContextProvider>
    </>
  );
}

export default Layout;
