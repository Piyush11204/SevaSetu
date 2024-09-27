import React, { useEffect, useState } from "react";
import axios from "axios";
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
      <div className="flex flex-wrap gap-5 mt-28 justify-center">
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
      </div>
    </div>
  );
};

export default Home;
