import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LocationCards = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/addlocation');
        const locationsData = response.data;

        // Set locations directly from the response
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="p-5 grid grid-cols-4 justify-center">
      {locations.map((location, index) => (
        <div key={index} className="mb-10">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 m-2 shadow-md w-80">
            <h2 className="text-2xl text-center font-semibold text-gray-800 truncate mb-2">{location.name}</h2>

            {/* Conditional image source handling */}
            {location.image.startsWith('http') ? (
              <img src={location.image} alt={location.name} className="w-full h-64 rounded-lg object-cover" />
            ) : (
              <img src={`http://localhost:8080/${location.image || location.image.url}`} alt={location.name} className="w-full h-64 rounded-lg object-cover" />
            )}

            <p className="mt-2"><strong>Nearby Station:</strong> {location.station}</p>
            <p>
              <strong>Rating:</strong>
              {' '.repeat(location.rating).split('').map((_, idx) => (
                <span key={idx}>⭐</span>
              ))}
            </p>
            {location.additionalDetails && (
              <p className='whitespace-nowrap overflow-hidden text-ellipsis'>
                <strong>Review:</strong> {location.additionalDetails}
              </p>
            )}
            <Link to={`/location/${location._id}`} state={{ location }} className='w-full'>
              <button className='bg-gray-800 border-2 border-gray-900 rounded-lg text-white py-4 mt-4 w-full hover:shadow-lg transition-transform duration-300'>
                View more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationCards;
