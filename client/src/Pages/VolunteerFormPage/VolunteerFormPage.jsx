//VOLUNTEER FORM PAGE
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    education: '',
    profileImage: null, // To store the uploaded image file
    description: '',
    certiName: '',
    certiDes: '',
    certiImage: null, // To store the uploaded certificate image file
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // Handle file uploads
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.education.trim()) newErrors.education = 'Education is required';
    if (!formData.profileImage) newErrors.profileImage = 'Profile image is required';
    if (!formData.certiName.trim()) newErrors.certiName = 'Certificate name is required';
    if (!formData.certiDes.trim()) newErrors.certiDes = 'Certificate description is required';
    if (!formData.certiImage) newErrors.certiImage = 'Certificate image is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        address: '',
        phone: '',
        education: '',
        profileImage: null,
        description: '',
        certiName: '',
        certiDes: '',
        certiImage: null,
      });
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-sans py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-2xl mx-auto animate-fade-in-up">
          <div className="bg-indigo-600 p-6 text-white">
            <h2 className="text-3xl font-bold text-center">Volunteer Registration Form</h2>
            
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-indigo-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-indigo-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="address" className="block mb-1 font-medium text-indigo-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium text-indigo-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="education" className="block mb-1 font-medium text-indigo-700">Education</label>
              <input
                type="text"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
            </div>
            <div>
              <label htmlFor="profileImage" className="block mb-1 font-medium text-indigo-700">Profile Image</label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.profileImage && <p className="text-red-500 text-sm mt-1">{errors.profileImage}</p>}
            </div>
            <div>
              <label htmlFor="description" className="block mb-1 font-medium text-indigo-700">Volunteer Bio</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label htmlFor="certiName" className="block mb-1 font-medium text-indigo-700">Certificate Name</label>
              <input
                type="text"
                id="certiName"
                name="certiName"
                value={formData.certiName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.certiName && <p className="text-red-500 text-sm mt-1">{errors.certiName}</p>}
            </div>
            <div>
              <label htmlFor="certiDes" className="block mb-1 font-medium text-indigo-700">Certificate Description</label>
              <textarea
                id="certiDes"
                name="certiDes"
                value={formData.certiDes}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
              ></textarea>
              {errors.certiDes && <p className="text-red-500 text-sm mt-1">{errors.certiDes}</p>}
            </div>
            <div>
              <label htmlFor="certiImage" className="block mb-1 font-medium text-indigo-700">Certificate Image</label>
              <input
                type="file"
                id="certiImage"
                name="certiImage"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.certiImage && <p className="text-red-500 text-sm mt-1">{errors.certiImage}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-full flex items-center justify-center hover:bg-indigo-700 transition duration-200"
            >
              Submit <ArrowRight className="ml-2" />
            </button>
            {submitStatus === 'success' && <p className="text-green-500 text-center">Form submitted successfully!</p>}
            {submitStatus === 'error' && <p className="text-red-500 text-center">Please fix the errors above.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;