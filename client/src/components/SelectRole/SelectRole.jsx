import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { UserCircle, Users, Building2 } from 'lucide-react';

const RoleOption = ({ icon: Icon, title, description, onClick, isSelected }) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
      isSelected ? 'border-2 border-blue-600' : ''
    }`}
  >
    <Icon className="w-16 h-16 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const SelectRole = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = () => {
    // Input validations
    if (!selectedRole) {
      setErrorMessage('Please select a role.');
      return;
    }
    if (!termsAccepted) {
      setErrorMessage('You must accept the terms and conditions.');
      return;
    }

    // Redirection based on selected role
    if (selectedRole === 'organization') {
      navigate('/addyours');  // Replace with actual organization route
    } else if (selectedRole === 'adminAuth') {
      navigate('/adminAuth');  // Admin route
    } else if (selectedRole === 'volunteer') {
      navigate('/volunteer');  // Replace with actual volunteer route
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Select Your Role</h1>
          <p className="text-xl text-gray-600">Choose the role that best describes you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RoleOption
            icon={UserCircle}
            title="Admin"
            description="Manage users, oversee operations, and maintain the system"
            onClick={() => handleRoleSelection('adminAuth')}
            isSelected={selectedRole === 'adminAuth'}
          />
          <RoleOption
            icon={Users}
            title="Volunteer"
            description="Contribute your time and skills to various projects and initiatives"
            onClick={() => handleRoleSelection('volunteer')}
            isSelected={selectedRole === 'volunteer'}
          />
          <RoleOption
            icon={Building2}
            title="Organization"
            description="Represent your organization and coordinate with other entities"
            onClick={() => handleRoleSelection('organization')}
            isSelected={selectedRole === 'organization'}
          />
        </div>
      </div>

      <div className="w-full mt-5 flex justify-center">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={handleTermsChange}
        />
        <h1 className="ml-2">Select the role and accept the terms and conditions applied.</h1>
        <a href="" className="mx-1 text-blue-500">Terms and Conditions</a>
      </div>

      {errorMessage && (
        <div className="text-red-500 mt-2 text-center">{errorMessage}</div>
      )}

      <div className="w-full mt-6 flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SelectRole;
