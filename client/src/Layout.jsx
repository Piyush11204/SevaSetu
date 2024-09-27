import React,{useState,useEffect} from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { UserContextProvider } from "../context/userContext";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/auth/login/success",
          {
            withCredentials: true, // Ensure credentials are sent
          }
        );
        setCurrentUser(response.data.user);
      } catch (error) {
        console.error("Error fetching current user:", error);
        setCurrentUser(null);
      }
    };

    // Check if the user is authenticated via token or OAuth
    if (localStorage.getItem("token")) {
      fetchCurrentUser();
    } else {
      fetchCurrentUser();
    }
  }, []);

  // console.log("Current User:", currentUser);
  return (
    <>
      <Navbar currentUser={currentUser}/>
      <Outlet context={ currentUser }/>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} /> 
      <Footer />
    </>
  );
}

export default Layout;
