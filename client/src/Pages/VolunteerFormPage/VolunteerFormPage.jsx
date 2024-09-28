import React, { useState } from 'react';
import { User, Mail, Home, Phone, BookOpen, FileText, Image, Award } from 'lucide-react';

const VolunteerFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    education: '',
    description: '',
    certiName: '',
    certiDes: '',
  });

  const [profile, setProfile] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, setFunction) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setFunction(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      profile,
      image: certificate,
      createdAt: new Date().toISOString(),
    };
    setSubmittedData(submissionData);
  };

  const InputField = ({ icon: Icon, name, type = 'text', placeholder, value }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type={type}
          name={name}
          id={name}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-sans py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-800">
          SevaSetu Volunteer Registration
        </h1>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12 animate-fade-in-up">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Volunteer Information</h2>
              <form onSubmit={handleSubmit}>
                <InputField icon={User} name="name" placeholder="Enter your full name" value={formData.name} />
                <InputField icon={Mail} name="email" type="email" placeholder="Enter your email" value={formData.email} />
                <InputField icon={Home} name="address" placeholder="Enter your address" value={formData.address} />
                <InputField icon={Phone} name="phone" placeholder="Enter your phone number" value={formData.phone} />
                <InputField icon={BookOpen} name="education" placeholder="Enter your education" value={formData.education} />
                
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>  
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <textarea
                      name="description"
                      id="description"
                      rows="3"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Tell us about yourself"
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                <InputField icon={Award} name="certiName" placeholder="Enter certificate name" value={formData.certiName} />
                <InputField icon={FileText} name="certiDes" placeholder="Enter certificate description" value={formData.certiDes} />

                <div className="mb-4">
                  <label htmlFor="profile" className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    onChange={(e) => handleFileChange(e, setProfile)}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="certificate" className="block text-sm font-medium text-gray-700 mb-1">
                    Certificate Image
                  </label>
                  <input
                    type="file"
                    name="certificate"
                    id="certificate"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    onChange={(e) => handleFileChange(e, setCertificate)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out flex items-center justify-center"
                >
                  <User className="mr-2" size={20} />
                  Register as Volunteer
                </button>
              </form>
            </div>

            <div className="md:w-1/2 bg-indigo-600 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Preview</h2>
              {submittedData ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    {submittedData.profile && (
                      <img src={submittedData.profile} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold">{submittedData.name}</h3>
                      <p className="text-indigo-200">{submittedData.email}</p>
                    </div>
                  </div>
                  <p><strong>Address:</strong> {submittedData.address}</p>
                  <p><strong>Phone:</strong> {submittedData.phone}</p>
                  <p><strong>Education:</strong> {submittedData.education}</p>
                  <p><strong>Description:</strong> {submittedData.description}</p>
                  <p><strong>Certificate:</strong> {submittedData.certiName}</p>
                  <p><strong>Certificate Description:</strong> {submittedData.certiDes}</p>
                  {submittedData.image && (
                    <div>
                      <p className="font-semibold mb-2">Certificate Image:</p>
                      <img src={submittedData.image} alt="Certificate" className="max-w-full h-auto rounded-md" />
                    </div>
                  )}
                  <p className="text-sm text-indigo-200">Submitted on: {new Date(submittedData.createdAt).toLocaleString()}</p>
                </div>
              ) : (
                <p className="text-indigo-200">Fill out the form to see a preview of your submission here.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerFormPage;