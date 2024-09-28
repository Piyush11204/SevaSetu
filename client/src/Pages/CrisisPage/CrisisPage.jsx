// CrisisPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, AlertTriangle, Users, Package, Heart, Clock, Camera, Phone, 
  Twitter, Facebook, Instagram, ChevronDown, ChevronUp
} from 'lucide-react';

const CrisisPage = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
          Kerala Flood Relief Operations
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Crisis Overview */}
            <section className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-indigo-700">Crisis Overview</h2>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Immediate Assistance Needed
                </span>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">Kerala, India</span>
              </div>
              <p className="text-gray-600 mb-4">
                Devastating floods have affected thousands of families in Kerala, displacing residents and damaging critical infrastructure. Immediate assistance is required to provide shelter, medical aid, and food supplies to the affected population.
              </p>
              <div className="bg-indigo-100 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-700 mb-2">Impact Overview:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>People Affected: 20,000+</li>
                  <li>Homes Destroyed: 5,000</li>
                  <li>Relief Camps Set Up: 25</li>
                </ul>
              </div>
            </section>

            {/* Timeline */}
            <section className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Timeline</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-300"></div>
                {[
                  { date: "August 24th", event: "Heavy rains cause widespread flooding." },
                  { date: "August 26th", event: "Initial relief efforts started by local NGOs." },
                  { date: "August 28th", event: "Over 100 volunteers deployed; 200 more needed." },
                  { date: "September 2nd", event: "10,000 meals distributed in Kochi." },
                  { date: "September 3rd", event: "Medical teams deployed to flood-affected regions." }
                ].map((item, index) => (
                  <div key={index} className="ml-8 mb-4 relative">
                    <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-indigo-500"></div>
                    <p className="font-semibold text-indigo-600">{item.date}</p>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Help */}
            <section className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">How You Can Help</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-100 rounded-lg p-4 text-center">
                  <Users className="mx-auto text-indigo-600 mb-2" size={24} />
                  <h3 className="font-semibold text-indigo-700 mb-2">Volunteers Needed</h3>
                  <p className="text-gray-700 mb-4">100 more volunteers for on-site coordination and relief efforts.</p>
                  <Link to={"/volunteerform"} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors w-full">
                    Sign up as a Volunteer
                  </Link>
                </div>
                <div className="bg-indigo-100 rounded-lg p-4 text-center">
                  <Package className="mx-auto text-indigo-600 mb-2" size={24} />
                  <h3 className="font-semibold text-indigo-700 mb-2">Resources Needed</h3>
                  <p className="text-gray-700 mb-4">Tents, blankets, medical kits, clean drinking water.</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors w-full">
                    Donate Resources
                  </button>
                </div>
                <div className="bg-indigo-100 rounded-lg p-4 text-center">
                  <Heart className="mx-auto text-indigo-600 mb-2" size={24} />
                  <h3 className="font-semibold text-indigo-700 mb-2">Donate</h3>
                  <p className="text-gray-700 mb-4">Every contribution counts towards immediate relief.</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors w-full">
                    Donate Now
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Updates */}
            <section className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Recent Updates</h2>
              <div className="space-y-4">
                {[
                  { date: "September 3rd", update: "Medical teams deployed to flood-affected regions." },
                  { date: "September 2nd", update: "10,000 meals distributed in Kochi." },
                  { date: "September 1st", update: "Relief supplies sent to affected areas." },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-indigo-500 pl-4">
                    <p className="font-semibold text-indigo-600">{item.date}</p>
                    <p className="text-gray-700">{item.update}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Media Gallery */}
            <section className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Media Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
                  <Camera className="text-indigo-600" size={24} />
                  <span className="ml-2 text-indigo-700">Photo Slideshow</span>
                </div>
                <div className="bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
                  <Camera className="text-indigo-600" size={24} />
                  <span className="ml-2 text-indigo-700">Relief Efforts Video</span>
                </div>
              </div>
            </section>

            {/* Crisis Team Contacts */}
            <section className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Crisis Team Contacts</h2>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="text-indigo-600 mr-2" size={20} />
                  <span className="text-gray-700">Emergency Hotline: +91 1234567890</span>
                </p>
                <p className="flex items-center">
                  <MapPin className="text-indigo-600 mr-2" size={20} />
                  <span className="text-gray-700">Relief Coordinator Office: 123 Main St, Kochi</span>
                </p>
              </div>
            </section>

            {/* Social Media Integration */}
            <section className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Spread the Word</h2>
              <div className="flex justify-around">
                <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <Twitter size={24} />
                </button>
                <button className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
                  <Facebook size={24} />
                </button>
                <button className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                  <Instagram size={24} />
                </button>
              </div>
              <p className="text-center mt-4 text-gray-700">Use #HelpKeralaFloods to spread awareness</p>
            </section>
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="mt-8 space-y-4">
          {[  
            { title: "Detailed Crisis Information", content: "The floods in Kerala have led to the destruction of homes and loss of livelihoods. Many families are displaced and in need of immediate shelter and aid. Local authorities are working round the clock to provide necessary assistance." },
            { title: "Success Stories", content: "Thanks to the efforts of volunteers and NGOs, several families have been successfully relocated to safe zones. Food and medical supplies are being distributed effectively to those in need." },
            { title: "Maps and Logistics", content: "A comprehensive map of the affected areas is available at our relief coordination center. It outlines safe routes for transporting supplies and identifying shelter locations." },
            { title: "Legal and Compliance Information", content: "All relief efforts are conducted in compliance with local laws and regulations. Transparency and accountability are our top priorities." }
          ].map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up">
              <button 
                className="w-full px-6 py-4 text-left font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors flex justify-between items-center"
                onClick={() => toggleExpand(section.title)}
              >
                {section.title}
                {expanded[section.title] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expanded[section.title] && (
                <div className="px-6 py-4">
                  <p className="text-gray-700">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrisisPage;
