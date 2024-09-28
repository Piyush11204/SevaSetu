import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCards from '../../components/LocationCards/LocationCards';
import { motion } from 'framer-motion';
import Faqs from "../Faqs/Faqs";
import AboutUs from "../AboutUs/AboutUs";

// Ensure this import is correct

const Home = () => {
  const [locations, setLocations] = useState([]);

  const fetchLocations = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/addlocation");
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="bg-slate-200 p-5 min-h-screen">
      <motion.header 
        className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-white py-12 mx-4 relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            Sevasetu
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Connecting volunteers to organizations during crises
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('path/to/texture.png')] opacity-10"></div>
      </motion.header>
      <LocationCards />
      <AboutUs />
      <Faqs />
      {/* <div className="flex flex-wrap gap-5 mt-28 justify-center">
        {locations.map((location) => (
          <div
            key={location._id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg p-5 w-80"
          >
            <h2 className="text-2xl font-bold mb-3">{location.name}</h2>
            <img
              src={`http://localhost:8080/${location.image}`}
              alt={location.name}
              className="w-full h-auto rounded-lg mb-3"
            />
            <p>
              <strong>Type:</strong> {location.locationType}
            </p>
            <p>
              <strong>Near by Station:</strong> {location.station}
            </p>
            <p>
              <strong>Rating:</strong> {location.rating} ⭐
            </p>
            <button className="mt-3 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition">
              View More
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
