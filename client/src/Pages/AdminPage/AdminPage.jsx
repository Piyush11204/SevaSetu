//admin page
import React, { useState } from 'react';
import { 
  Users, AlertTriangle, DollarSign, FileText, BarChart2, Bell, 
  Package, MessageSquare, Shield, BookOpen, Settings
} from 'lucide-react';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('user');

  const tabs = [
    { id: 'user', label: 'User Management', icon: Users },
    { id: 'relief', label: 'Disaster Relief', icon: AlertTriangle },
    { id: 'donations', label: 'Donations', icon: DollarSign },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'resources', label: 'Resources', icon: Package },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
    { id: 'security', label: 'Security', icon: Shield },
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