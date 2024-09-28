import React, { useState } from 'react';
import { ArrowRight, Mail, Users, Heart, Shield, Zap } from 'lucide-react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('who');

  const tabs = [
    { id: 'who', label: 'Who We Are', icon: Users },
    { id: 'mission', label: 'Our Mission', icon: Heart },
    { id: 'values', label: 'Our Values', icon: Shield },
    { id: 'impact', label: 'Our Impact', icon: Zap },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-indigo-800 animate-fade-in-down">
          About SevaSetu
        </h1>
        
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12 animate-fade-in-up">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4 text-indigo-700">Welcome to SevaSetu</h2>
              <p className="text-gray-700 leading-relaxed">
                We are a committed group of volunteers, disaster relief professionals, and humanitarian advocates working together to provide immediate and meaningful assistance to communities affected by crises. This platform connects organizations to the volunteers. At SevaSetu, we believe in creating a bridge— a <em>setu</em>— between those in need and those willing to help.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-indigo-600 p-8 text-white flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Our Core Purpose</h3>
                <p className="text-xl italic">"Bridging Compassion with Action"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12 animate-fade-in-up">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors duration-300 ${
                  activeTab === tab.id ? 'bg-indigo-600 text-white' : 'text-indigo-600 hover:bg-indigo-100'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="inline-block mr-2" size={20} />
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-8">
            {activeTab === 'who' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-indigo-700">Who We Are</h3>
                <p className="text-gray-700 leading-relaxed">
                  SevaSetu is a platform built on the foundation of compassion, collaboration, and service. We connect skilled volunteers to areas and communities in crisis, providing essential resources like food, shelter, medical aid, and support.
                </p>
              </div>
            )}
            {activeTab === 'mission' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-indigo-700">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our mission at SevaSetu is to empower communities through swift, coordinated, and compassionate responses during times of crisis. We work tirelessly to bring relief and hope where it's needed most.
                </p>
              </div>
            )}
            {activeTab === 'values' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-indigo-700">Our Values</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Seva (Service):</strong> Selfless service is at the core of everything we do.</li>
                  <li><strong>Community:</strong> We believe in the power of collaboration.</li>
                  <li><strong>Transparency:</strong> We operate with integrity and openness.</li>
                  <li><strong>Resilience:</strong> We aim to strengthen communities for the future.</li>
                </ul>
              </div>
            )}
            {activeTab === 'impact' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-indigo-700">Our Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Since its inception, SevaSetu has provided relief to countless communities in need. From coordinating evacuation efforts to distributing emergency supplies and rebuilding infrastructure, our work has touched lives and brought hope to those who need it most.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">What We Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4">
                  <Zap className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Disaster Relief</h4>
                  <p className="text-gray-600">Swift response to natural disasters, delivering supplies and organizing shelters.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4">
                  <Users className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Volunteer Coordination</h4>
                  <p className="text-gray-600">Connecting skilled volunteers to areas and communities in crisis.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4">
                  <Shield className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Community Preparedness</h4>
                  <p className="text-gray-600">Educating and empowering communities to prepare for future challenges.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">Join Us</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe that every individual has the power to make a difference. Whether you bring expertise in a particular field or simply the desire to lend a helping hand, SevaSetu welcomes you to join our community of volunteers.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center w-full md:w-auto">
              Become a Volunteer
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4 text-indigo-700">Contact Us</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Have questions or want to know more about our work? Reach out to us and follow us on our social media platforms for updates.
          </p>
          <a href="mailto:support@sevasetu.org" className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
            <Mail className="mr-2" size={20} />
            support@sevasetu.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;