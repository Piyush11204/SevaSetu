import { Briefcase, Mail, MapPin, Phone, Upload, Edit3, Save, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

const VolunteerDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Piyush Yadav',
    phone: '7558565929',
    email: 'Piyush11204@gmail.com',
    location: 'Boisar, Maharashtra',
    profession: 'Studying BE at VCET',
    volunteeringMotivation: "I'm passionate about giving back to my community and making a positive impact.",
    profilePhoto: 'https://lh3.googleusercontent.com/a/ACg8ocJnV5nWcCcO2qRGNgFZd9Q8FWTGkqV-6R4Z032u8NYg0n_2C1Dk=s96-c', // Default profile photo
  });

  const [certificates, setCertificates] = useState([]);

  const addCertificate = (event) => {
    event.preventDefault();
    const file = event.target.file.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newCertificate = {
          title: event.target.title.value,
          description: event.target.description.value,
          fileUrl: reader.result, // Store the file data as a base64 encoded URL
          fileName: file.name, // Store the file name
        };
        setCertificates([...certificates, newCertificate]);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
    
    event.target.reset();
  };

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, profilePhoto: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const editCertificate = (index, updatedCert) => {
    const updatedCertificates = certificates.map((cert, i) =>
      i === index ? updatedCert : cert
    );
    setCertificates(updatedCertificates);
  };

  const deleteCertificate = (index) => {
    const updatedCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(updatedCertificates);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header with profile photo and name */}
        <div className="bg-blue-600 text-white p-6 flex items-center">
          {isEditing ? (
            <div className="flex items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
                className="hidden"
                id="profile-photo"
              />
              <label htmlFor="profile-photo">
                <img
                  src={profile.profilePhoto}
                  alt="Volunteer"
                  className="w-24 h-24 rounded-full border-4 border-white mr-6 cursor-pointer"
                />
              </label>
            </div>
          ) : (
            <img
              src={profile.profilePhoto}
              alt="Volunteer"
              className="w-24 h-24 rounded-full border-4 border-white mr-6"
            />
          )}

          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="text-3xl font-bold text-black p-2 rounded"
            />
          ) : (
            <h1 className="text-3xl font-bold">{profile.name}</h1>
          )}

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 ml-auto flex items-center"
          >
            {isEditing ? <Save className="mr-2" /> : <Edit3 className="mr-2" />}
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </button>
        </div>

        {/* Personal Information */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-2">
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="flex items-center">
                <Phone className="mr-2" /> {profile.phone}
              </p>
            )}

            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="flex items-center">
                <Mail className="mr-2" /> {profile.email}
              </p>
            )}

            {isEditing ? (
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleProfileChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="flex items-center">
                <MapPin className="mr-2" /> {profile.location}
              </p>
            )}
          </div>
        </div>

        {/* Professional Background */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
          {isEditing ? (
            <input
              type="text"
              name="profession"
              value={profile.profession}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p className="flex items-center">
              <Briefcase className="mr-2" /> {profile.profession}
            </p>
          )}
        </div>

        {/* Volunteering Motivation */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">Why I Volunteer</h2>
          {isEditing ? (
            <textarea
              name="volunteeringMotivation"
              value={profile.volunteeringMotivation}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p className="text-gray-700">{profile.volunteeringMotivation}</p>
          )}
        </div>

        {/* Certificates */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="title"
                      defaultValue={cert.title}
                      onChange={(e) =>
                        editCertificate(index, { ...cert, title: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                    />
                    <textarea
                      name="description"
                      defaultValue={cert.description}
                      onChange={(e) =>
                        editCertificate(index, { ...cert, description: e.target.value })
                      }
                      className="w-full p-2 border rounded mt-2"
                    />
                    <a
                      href={cert.fileUrl}
                      download={cert.fileName}
                      className="text-blue-600 underline block mt-2"
                    >
                      Download {cert.fileName}
                    </a>
                    <button
                      onClick={() => deleteCertificate(index)}
                      className="bg-red-600 text-white px-4 py-2 rounded mt-2 hover:bg-red-700 flex items-center"
                    >
                      <Trash2 className="mr-2" /> Delete Certificate
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold">{cert.title}</h3>
                    <p className="text-gray-600">{cert.description}</p>
                    <a
                      href={cert.fileUrl}
                      download={cert.fileName}
                      className="text-blue-600 underline"
                    >
                      Download {cert.fileName}
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Add Certificate Form (visible in both edit and view modes) */}
          <form onSubmit={addCertificate} className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Add New Certificate</h3>
            <div className="space-y-2">
              <input
                type="text"
                name="title"
                placeholder="Certificate Title"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Certificate Description"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="file"
                name="file"
                accept="application/pdf,image/*"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 flex items-center"
            >
              <Upload className="mr-2" /> Upload Certificate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;