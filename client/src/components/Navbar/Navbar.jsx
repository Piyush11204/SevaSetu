import React, { useContext, useEffect, useState } from "react";
import sevasetu from "../../img/sevasetu.png";
import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { MapPin, Bell, BookOpen, Users, Calendar, Menu } from "lucide-react";


const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleLogout = () => {
    window.open("http://localhost:8080/api/auth/logout", "_self");
  };
  console.log(currentUser)
  return (
    <div className="w-full mb-24">
      <header className="fixed inset-x-0 top-0 z-30 mx-auto bg-blue-500 py-4 shadow-lg backdrop-blur-lg rounded-b-xl lg:max-w-screen shadow-xl">
        <div className="px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex shrink-0">
              <Link className="flex items-center bg-white rounded-full" to="/">
                <img className=" h-12 w-12" src={sevasetu} alt="Logo" />
              </Link>
            </div>

            {/* <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                to="/addyours"
              >
                Add Yours
              </Link>
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                to="/"
              >
                Pricing
              </Link>
            </div> */}
            <nav className="hidden md:flex md:w-4/5  md:justify-center space-x-4">
              <Link
                to="/"
                className="text-white hover:text-blue-200 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-white hover:text-blue-200 transition-colors duration-300"
              >
                Map
              </Link>
              <Link
                to="/addyours"
                className="text-white hover:text-blue-200 transition-colors duration-300"
              >
                Training
              </Link>
              <Link
                to="/addyours"
                className="text-white hover:text-blue-200 transition-colors duration-300"
              >
                Community
              </Link>
              <Link
                to="/"
                className="text-white hover:text-blue-200 transition-colors duration-300"
              >
                Profile
              </Link>
            </nav>
            <div className=" flex justify-center items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden focus:outline-none"
              >
                <Menu color="white" />
              </button>
            </div>

            {/* User and Action Buttons */}
            <div className="items-center justify-end gap-3 hidden md:flex">
              {currentUser && (
                <div className="hidden md:flex items-center space-x-2">
                  {currentUser.photos && currentUser.photos.length > 0 ? (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={currentUser.photos[0].value}
                      alt={currentUser.name}
                    />
                  ) : (
                    <div className="text-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                      {currentUser.name[0]}
                    </div>
                  )}
                  <h3 className="text-white">{currentUser.name}</h3>
                </div>
              )}
              {currentUser ? (
                <button
                  onClick={handleLogout}
                  className="hidden md:inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-red-500 shadow-sm transition-all duration-150  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="hidden md:inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-blue-800 shadow-sm transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`absolute top-16 right-0 w-full bg-blue-500 text-white md:hidden  ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col p-4">
              {/* <Link
                to="addyours"
                className="py-2 px-4 hover:bg-violet-500 rounded-lg"
              >
                Add Yours
              </Link>
              <Link to="/" className="py-2 px-4 hover:bg-violet-500 rounded-lg">
                Pricing
              </Link> */}
              <a
                to="#"
                className="block text-white hover:bg-blue-500 px-2 py-1 rounded"
              >
                Home
              </a>
              <a
                to="#"
                className="block text-white hover:bg-blue-500 px-2 py-1 rounded"
              >
                Map
              </a>
              <a
                to="#"
                className="block text-white hover:bg-blue-500 px-2 py-1 rounded"
              >
                Training
              </a>
              <a
                to="#"
                className="block text-white hover:bg-blue-500 px-2 py-1 rounded"
              >
                Community
              </a>
              <a
                to="#"
                className="block text-white hover:bg-blue-500 px-2 py-1 rounded"
              >
                Profile
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
                    className="mt-4 px-4 py-2 bg-white text-red-500 rounded-lg hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              )}
              {!currentUser && (
                <Link
                  to="/signup"
                  className="mt-4 px-4 py-2 bg-white text-blue-800 rounded-lg hover:bg-gray-100"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
