import React, { useEffect, useState } from "react";
import logoDevtalk from "../../img/logoDevtalk.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Navbar = () => {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout= () => {
    window.open("http://localhost:8080/api/auth/logout", "_self");
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/auth/login/success", {
          withCredentials: true,  // Ensure credentials are sent
        });
        setCurrentUser(response.data.user);
      } catch (error) {
        console.error("Error fetching current user:", error);
        setCurrentUser(null);
      }
    };
    
   

    // Check if the user is authenticated via token or OAuth
    if (localStorage.getItem("token")) {
      fetchCurrentUser(); 
    } else{
      fetchCurrentUser();
    }
  }, []);

  console.log("Current User:", currentUser); // Debugging log

  return (
    <div className="w-full">
      <header className="fixed inset-x-0 top-0 z-30 mx-auto bg-violet-600/80 py-4 shadow-lg backdrop-blur-lg md:top-6 md:rounded-full lg:max-w-screen-lg border border-gray-100">
        <div className="px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex shrink-0">
              <a className="flex items-center" href="/">
                <img className="h-7 w-auto" src={logoDevtalk} alt="Logo" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                to="/addyours"
              >
                Add Yours
              </Link>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/"
              >
                Pricing
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white ml-64"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* User and Action Buttons */}
            <div className="flex items-center justify-end gap-3">
              {currentUser && (
                <div className="hidden md:flex items-center space-x-2">
                  {currentUser.photos && currentUser.photos.length > 0 ? (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={currentUser.photos[0].value}
                      alt={currentUser.name}
                    />
                  ) : (
                    <div className="bg-violet-400 text-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                      {currentUser.name[0]}
                    </div>
                  )}
                  <h3 className="text-white">
                    {currentUser.name}
                  </h3>
                </div>
              )}
              {currentUser ? (
                <button
                  onClick={handleLogout}
                  className="hidden md:inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-violet-600 shadow-sm transition-all duration-150  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Logout
                </button>
              ) : (
                <a
                  href="/login"
                  className="hidden md:inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-violet-600 shadow-sm transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Login
                </a>
              )}
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`absolute top-16 right-0 w-full bg-violet-600 text-white md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          >
            <div className="flex flex-col p-4">
              <Link
                to="addyours"
                className="py-2 px-4 hover:bg-violet-500 rounded-lg"
              >
                Add Yours
              </Link>
              <a href="/" className="py-2 px-4 hover:bg-violet-500 rounded-lg">
                Pricing
              </a>
              {currentUser && (
                <>
                  <div className="flex items-center space-x-2 mt-4">
                    {currentUser.photos && currentUser.photos.length > 0 ? (
                      <img
                        className="w-10 h-10 rounded-full"
                        src={currentUser.photos[0].value}
                        alt={currentUser.name}
                      />
                    ) : (
                      <div className="bg-violet-400 text-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                        {currentUser.name[0]}
                      </div>
                    )}
                    <h3>{currentUser.name}</h3>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="mt-4 px-4 py-2 bg-white text-violet-600 rounded-lg hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              )}
              {!currentUser && (
                <a
                  href="/signup"
                  className="mt-4 px-4 py-2 bg-white text-violet-600 rounded-lg hover:bg-gray-100"
                >
                  Login
                </a>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
