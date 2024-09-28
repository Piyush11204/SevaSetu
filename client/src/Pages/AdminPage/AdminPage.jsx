//admin page
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { 
  Users, AlertTriangle, DollarSign, FileText, BarChart2, Bell, 
  Package, MessageSquare, Shield, BookOpen, Settings
} from 'lucide-react';
import Certification from '../Certification/Certification';
import LocationCards from '../../components/LocationCards/LocationCards';
import CrisisPage from '../CrisisPage/CrisisPage';
import TrainingPage from '../TrainingPage/TrainingPage';
import TrainingResourcesPage from '../TrainingResourcesPage/TrainingResourcesPage';

const AdminPage = () => {
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
  const [activeTab, setActiveTab] = useState('user');

  const tabs = [
    { id: 'user', label: 'User Management', icon: Users },
    { id: 'relief', label: 'Disaster Relief', icon: AlertTriangle },
    // { id: 'donations', label: 'Donations', icon: DollarSign },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'resources', label: 'Resources', icon: Package },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
    { id: 'tresource', label: 'Training Resource', icon: Shield },
    { id: 'training', label: 'Training', icon: BookOpen },
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'user':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">User Management</h3>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Approve Volunteer Registrations
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors ml-4">
              Manage Users
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors ml-4">
              Assign Roles
            </button>
          </div>
        );
      case 'relief':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Disaster Relief Operations</h3>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Create Relief Campaign
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors ml-4">
              Track Operations
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors ml-4">
              Assign Volunteers
            </button>
          </div>
        );
        case 'resources':
          return(
            <>
              <Certification />
              
            </>
          );
        case 'training':
          return(
            <>
            
            <TrainingPage />
            </>
          )
        case 'alerts':
          return(
            <>
            <CrisisPage />
            </>
          )
        case 'tresource':
          return(
          <>
          <TrainingResourcesPage />
          </>)
        case 'content':
          return(
            <>
            
              {/* <LocationCards /> */}
              

    <>
    <div className='mt-10 text-center'>
      <h1 className=' text-3xl font-bold'>Registered Organizations</h1>
      <p className='mt-2 text-gray-800'>Here are some oraganizations who have registered on our website</p>
    </div>
    <div className="p-5 grid grid-cols-3 justify-center">
      {locations.map((location, index) => (
        <div key={index} className="mb-10 hover:scale-110 transition-transform duration-300">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 m-2 shadow-md w-80">
            <h2 className="text-2xl text-center font-semibold text-gray-800 truncate mb-2">{location.name}</h2>

            {/* Conditional image source handling */}
            {/* {location.image.startsWith('http') ? (
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
            )} */}
            <Link to={`/location/${location._id}`} state={{ location }} className='w-full'>
              <button className='bg-blue-600 border-2 border-blue-800 rounded-lg text-white py-4 mt-4 w-full hover:shadow-lg transition-transform duration-300'>
                View more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
            </>
          )

      // Add cases for other tabs here
      default:
        return <p>Select a tab to view options</p>;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
          SevaSetu Admin Dashboard
        </h1>
        
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 bg-indigo-700 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 flex items-center ${
                      activeTab === tab.id ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon className="mr-3" size={20} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="w-full md:w-3/4 p-6">
              <div className="bg-indigo-100 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-indigo-800">Welcome, Admin</h2>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center">
                    <Settings className="mr-2" size={20} />
                    Settings
                  </button>
                </div>
              </div>
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;