import React, { useState } from 'react';
import { Book, Video, FileText, Download, ExternalLink, Search, Filter } from 'lucide-react';

const TrainingResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const resources = [
    { 
      type: 'video',
      title: 'Introduction to Crisis Management',
      description: 'Learn the basics of handling various crisis situations.',
      duration: '45 minutes',
      instructor: 'Dr. Sarah Johnson',
      link: '#'
    },
    { 
      type: 'document',
      title: 'Effective Communication in Emergencies',
      description: 'A comprehensive guide on clear and efficient communication during crises.',
      pages: 35,
      author: 'Prof. Michael Chen',
      downloadLink: '#'
    },
    { 
      type: 'webinar',
      title: 'Cultural Sensitivity in Humanitarian Aid',
      description: 'Understanding and respecting cultural differences in crisis scenarios.',
      date: 'June 15, 2024',
      speaker: 'Aisha Patel, PhD',
      registrationLink: '#'
    },
    { 
      type: 'video',
      title: 'First Aid Techniques for Volunteers',
      description: 'Essential first aid skills for emergency responders.',
      duration: '60 minutes',
      instructor: 'Dr. Robert Lee',
      link: '#'
    },
    { 
      type: 'document',
      title: 'Psychological First Aid Handbook',
      description: 'Guidelines for providing mental health support in crisis situations.',
      pages: 50,
      author: 'Dr. Emily Rodriguez',
      downloadLink: '#'
    },
    { 
      type: 'webinar',
      title: 'Disaster Preparedness Strategies',
      description: 'Learn how to prepare communities for potential disasters.',
      date: 'July 10, 2024',
      speaker: 'James Thompson, Emergency Management Expert',
      registrationLink: '#'
    }
  ];

  const filteredResources = resources.filter(resource => 
    (activeFilter === 'all' || resource.type === activeFilter) &&
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const ResourceCard = ({ resource }) => {
    const iconProps = { className: "text-indigo-600 mb-2", size: 24 };
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            {resource.type === 'video' && <Video {...iconProps} />}
            {resource.type === 'document' && <FileText {...iconProps} />}
            {resource.type === 'webinar' && <Video {...iconProps} />}
            <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
          <p className="text-gray-600 mb-4">{resource.description}</p>
          <div className="text-sm text-gray-500 mb-4">
            {resource.type === 'video' && <p>Duration: {resource.duration}</p>}
            {resource.type === 'document' && <p>Pages: {resource.pages}</p>}
            {resource.type === 'webinar' && <p>Date: {resource.date}</p>}
            <p>{resource.instructor || resource.author || resource.speaker}</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center w-full">
            {resource.type === 'video' && <>Watch Video <ExternalLink className="ml-2" size={16} /></>}
            {resource.type === 'document' && <>Download PDF <Download className="ml-2" size={16} /></>}
            {resource.type === 'webinar' && <>Register Now <ExternalLink className="ml-2" size={16} /></>}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-indigo-800 animate-fade-in-down">
          Training Resources
        </h1>

        <div className="mb-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl shadow-md p-4">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <div className="flex space-x-2">
              <Filter className="text-indigo-600 mr-2" size={20} />
              {['all', 'video', 'document', 'webinar'].map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === filter
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                  } transition-colors`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {filteredResources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No resources found matching your search criteria.
          </div>
        )}

        <div className="mt-12 bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="bg-indigo-600 p-6 text-white">
            <h2 className="text-3xl font-bold mb-2">Need More Resources?</h2>
            <p className="text-indigo-200">We're constantly updating our training materials</p>
          </div>
          <div className="p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-700 mb-2">Can't find what you're looking for? Contact our resource team:</p>
              <p className="font-semibold text-indigo-800">Email: resources@sevasetu.org</p>
              <p className="font-semibold text-indigo-800">Phone: +1 (555) 987-6543</p>
            </div>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center text-lg font-semibold">
              Request Resources
              <ExternalLink className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingResourcesPage;