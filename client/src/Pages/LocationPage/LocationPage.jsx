// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const LocationPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const locationData = location.state?.location || {};

//   const [sameTypeLocations, setSameTypeLocations] = useState([]);
//   const [mapHeight, setMapHeight] = useState('450px');

//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   const handleAddToWishList = () => {
//     const locationId = locationData._id;
//     if (!locationId) {
//       alert('Location ID is missing.');
//       return;
//     }

//     let wishList = JSON.parse(localStorage.getItem('wishList')) || [];

//     if (wishList.includes(locationId)) {
//       alert('This item is already in your Wish List!');
//     } else {
//       wishList.push(locationId);
//       localStorage.setItem('wishList', JSON.stringify(wishList));
//       alert('Added to Wish List!');
//     }
//   };

//   const handleResize = () => {
//     if (window.innerWidth < 768) {
//       setMapHeight('300px');
//     } else {
//       setMapHeight('450px');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const GOOGLE_MAPS_API_KEY = "AIzaSyAH7iDFCffRLwIJ56UUnkwBOhNzmSL2uMQ";
//   console.log("Google Maps API Key:", GOOGLE_MAPS_API_KEY);

//   const getImageSrc = (image) => {
//     if (image.startsWith('http')) {
//       return image;
//     } else {
//       return `http://localhost:8080/${image}`;
//     }
//   };

//   useEffect(() => {
//     const fetchSameTypeLocations = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/addlocation');
//         const locations = response.data;

//         const filteredLocations = locations.filter(
//           (loc) => loc.locationType === locationData.locationType && loc._id !== locationData._id
//         );
//         setSameTypeLocations(filteredLocations);
//       } catch (error) {
//         console.error('Error fetching same type locations:', error);
//       }
//     };

//     if (locationData.locationType) {
//       fetchSameTypeLocations();
//     }
//   }, [locationData.locationType, locationData._id]);

//   const responsive = {
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 2 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
//   };

//   return (
//     <div className="flex justify-center items-center p-3 lg:p-6 bg-[#fff1e6] min-h-screen">
//       <div className="bg-white w-full lg:max-w-8xl lg:w-[90%] rounded-2xl shadow-lg p-3 lg:p-8 flex flex-col gap-8 mt-10 lg:mt-24">
//         <header className="border-b-2 border-gray-300 pb-4 mb-8">
//           <h1 className="text-2xl font-[ethnocentric] md:text-5xl font-bold text-center text-gray-800">{locationData.name}</h1>
//         </header>
//         <div className="flex flex-wrap gap-10">
//           <figure className="flex-1 w-full sm:w-1/2">
//             <img
//               src={getImageSrc(locationData.image)}
//               alt={locationData.name}
//               className="w-full h-64 sm:h-96 object-cover rounded-xl shadow-md"
//             />
//             <p className="mt-4 text-lg text-gray-700"><strong>Description:</strong> {locationData.description || 'No description available.'}</p>
//           </figure>
//           <section className="flex-1 w-full sm:w-1/2">
//             <p className="text-lg"><strong>Type:</strong> {locationData.locationType || 'Not available'}</p>
//             <p className="text-lg"><strong>Nearby Station:</strong> {locationData.station || 'Not available'}</p>
//             <p className="text-lg">
//               <strong>Rating:</strong>
//               {' '.repeat(locationData.rating).split('').map((_, index) => (
//                 <span key={index}>⭐</span>
//               ))}
//             </p>
//             {locationData.additionalDetails && (
//               <p className="text-lg"><strong>Review:</strong> {locationData.additionalDetails}</p>
//             )}
//             <div className="mt-8 bg-gray-200 p-4 rounded-xl shadow-md">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Find Us Here:</h2>
//               <iframe
//                 src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(locationData.name)}&key=${GOOGLE_MAPS_API_KEY}`}
//                 width="100%"
//                 height={mapHeight}
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Location Map"
//                 className="rounded-md"
//               ></iframe>
//             </div>
//           </section>
//         </div>
//         <div className="flex justify-center gap-4 mt-8">
//           <button className="bg-gray-800 text-white rounded-md px-6 py-2 hover:bg-gray-700" onClick={handleBackClick}>
//             Back
//           </button>
//           <button className="bg-orange-500 text-white rounded-md px-6 py-2 hover:bg-orange-400" onClick={handleAddToWishList}>
//             Add to Wish List
//           </button>
//         </div>
//         <hr className='border-2 ' />
//         {/* Recommendations Carousel */}
//         {sameTypeLocations.length > 0 && (
//           <div className="mt-10">
//             <h2 className="text-3xl ml-11 font-bold mb-6 text-gray-800">Recommended {locationData.locationType}'s</h2>
//             <Carousel
//               responsive={responsive}
//               swipeable={true}
//               draggable={true}
//               showDots={false}
//               infinite={true}
//               autoPlay={false}
//             >
//               {sameTypeLocations.map((location) => (
//                 <div key={location._id} className="p-4 mb-5 border-2 bg-gray-200 rounded-xl drop-shadow-2xl shadow-md max-w-xs mx-auto">
//                   <h2 className="text-lg font-bold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">{location.name}</h2>
//                   <img
//                     src={getImageSrc(location.image)}
//                     alt={location.name}
//                     className="w-full h-40 object-cover rounded-md mb-4"
//                   />
//                   <p className="text-sm mb-2"><strong>Nearby Station:</strong> {location.station}</p>
//                   <p className="text-sm">
//                     <strong>Rating:</strong>
//                     {' '.repeat(location.rating).split('').map((_, index) => (
//                       <span key={index}>⭐</span>
//                     ))}
//                   </p>
//                   <Link to={`/location/${location._id}`} state={{ location }} className="mt-4 block text-center">
//                     <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-400">
//                       View more
//                     </button>
//                   </Link>
//                 </div>
//               ))}
//             </Carousel>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LocationPage;


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaMapMarkerAlt,FaCalendarAlt,FaPhone, FaStar, FaUserFriends, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LocationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationData = location.state?.location || {};

  const [sameTypeLocations, setSameTypeLocations] = useState([]);
  const [mapHeight, setMapHeight] = useState('400px');

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleVolunteer = () => {
    alert('Thank you for volunteering! We will contact you soon with more details.');
  };

  const handleResize = () => {
    setMapHeight(window.innerWidth < 768 ? '300px' : '400px');
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const GOOGLE_MAPS_API_KEY = "AIzaSyAH7iDFCffRLwIJ56UUnkwBOhNzmSL2uMQ";

  const getImageSrc = (image) => {
    return image.startsWith('http') ? image : `http://localhost:8080/${image}`;
  };

  useEffect(() => {
    const fetchSameTypeLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/addlocation');
        const locations = response.data;
        const filteredLocations = locations.filter(
          (loc) => loc.locationType === locationData.locationType && loc._id !== locationData._id
        );
        setSameTypeLocations(filteredLocations);
      } catch (error) {
        console.error('Error fetching same type locations:', error);
      }
    };

    if (locationData.locationType) {
      fetchSameTypeLocations();
    }
  }, [locationData.locationType, locationData._id]);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
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

      <main className="container mx-auto py-8 px-4 md:px-8">
        <div className="mx-4 md:mx-[10%] mb-8">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
              <img
                src={getImageSrc(locationData.image)}
                alt={locationData.name}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{locationData.name}</h2>
              <div className="flex flex-wrap items-center mb-4">
                <div className="flex items-center mr-6 mb-2">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span className="text-gray-700">{locationData.station || 'Location not available'}</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <FaUserFriends className="text-blue-500 mr-2" />
                  <span className="text-gray-700">{locationData.locationType || 'Type not available'}</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <FaPhone className="text-green-500 mr-2"/>
                  <span className="text-gray-700">{locationData.phone || 'Phone not available'}</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400 mr-2" />
                  <span className="text-gray-700">
                    {locationData.rating ? `${locationData.rating} out of 5` : 'Not rated'}
                  </span>
                </div>
                <div className="flex items-center ml-3  mb-2">
                  <FaCalendarAlt className="text-orange-500 mr-2" />
                  <span className="text-gray-700">
                    {locationData.openingTime || ' not available'}
                  </span>
                </div>
              </div>
              <label className="font-bold">Description</label>
              <p className="text-gray-600 mb-6">{locationData.description || 'No description available.'}</p>
              <label className="font-bold">Director :</label>
              <p className="text-gray-600 mb-6">{locationData.DrName || 'Not available.'}</p>
              <label className="font-bold">Chief Operating Officer:</label>
              <p className="text-gray-600 mb-6">{locationData.SrName || 'Not available.'}</p>
              <label className="font-bold">Chief Financial Officer :</label>
              <p className="text-gray-600 mb-6">{locationData.JrName || 'Not available.'}</p>
              <button
                onClick={handleVolunteer}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <FaHandsHelping className="inline-block mr-2" />
                Volunteer Now
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Location</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(locationData.name)}&key=${GOOGLE_MAPS_API_KEY}`}
                  width="100%"
                  height={mapHeight}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="transition-all duration-300 hover:opacity-90"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>

        {sameTypeLocations.length > 0 && (
          <motion.div 
            className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg shadow-lg overflow-hidden mb-8 mx-4 md:mx-[5%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Similar Opportunities</h3>
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {sameTypeLocations.map((location) => (
                  <motion.div 
                    key={location._id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden m-2 transition-all duration-300 hover:shadow-xl hover:bg-indigo-50"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={getImageSrc(location.image)}
                      alt={location.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="p-4">
                      <h4 className="text-xl font-bold text-indigo-800 mb-2">{location.name}</h4>
                      <p className="text-gray-600 mb-2">{location.station}</p>
                      <div className="flex items-center mb-4">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-gray-700">{location.rating}</span>
                      </div>
                      <Link
                        to={`/location/${location._id}`}
                        state={{ location }}
                        className="block text-center bg-indigo-500 text-white px-4 py-2 rounded-full font-bold hover:bg-indigo-600 transition duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </Carousel>
            </div>
          </motion.div>
        )}

        <div className="text-center">
          <motion.button
            onClick={handleBackClick}
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-400 transition duration-300 transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Search
          </motion.button>
        </div>
      </main>

      
    </div>
  );
};

export default LocationPage;