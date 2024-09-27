import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const LocationCards = () => {
  const [groupedLocations, setGroupedLocations] = useState({});

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/addlocation');
        const locations = response.data;

        // Group locations by type
        const grouped = locations.reduce((acc, location) => {
          const { locationType } = location;
          if (!acc[locationType]) {
            acc[locationType] = [];
          }
          acc[locationType].push(location);
          return acc;
        }, {});

        setGroupedLocations(grouped);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="p-5">
      {Object.keys(groupedLocations).map((type) => (
        <div key={type} className="mb-10">
          <h2 className="text-2xl font-bold text-center bg-yellow-200 py-2 rounded-lg">{type}'s</h2>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlay={false}
          >
            {groupedLocations[type].map((location) => (
              <div key={location._id} className="bg-gray-100 border border-gray-300 rounded-lg p-4 m-2 shadow-md w-80">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{location.name}</h2>

                {/* Conditional image source handling */}
                {location.image.startsWith('http') ? (
                  <img src={location.image} alt={location.name} className="w-full h-64 rounded-lg object-cover" />
                ) : (
                  <img src={`http://localhost:8080/${location.image || location.image.url}`} alt={location.name} className="w-full h-64 rounded-lg object-cover" />
                )}

                <p className="mt-2"><strong>Nearby Station:</strong> {location.station}</p>
                <p>
                  <strong>Rating:</strong>
                  {' '.repeat(location.rating).split('').map((_, index) => (
                    <span key={index}>⭐</span>
                  ))}
                </p>
                {location.additionalDetails && <p className='whitespace-nowrap overflow-hidden text-ellipsis'><strong>Review:</strong> {location.additionalDetails}</p>}
                <Link to={`/location/${location._id}`} state={{ location }} className='w-full'>
                  <button className='bg-gray-800 border-2 border-gray-900 rounded-lg text-white py-4 mt-4 w-full hover:shadow-lg transition-transform duration-300'>
                    View more
                  </button>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default LocationCards;
