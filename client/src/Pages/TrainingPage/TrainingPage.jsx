import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Calendar, Award, BookOpen, Video, Users, FileText } from 'lucide-react';

const TrainingPage = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    { title: "Crisis Management Basics", icon: Users, progress: 75 },
    { title: "Effective Communication Skills", icon: BookOpen, progress: 50 },
    { title: "First Aid and Emergency Response", icon: CheckCircle, progress: 30 },
    { title: "Cultural Sensitivity Training", icon: Users, progress: 90 },
  ];

  const resources = [
    { title: "Video Tutorials", icon: Video },
    { title: "Webinars and Workshops", icon: Users },
    { title: "Reading Materials", icon: FileText },
  ];

  const events = [
    { title: "Crisis Management Workshop", date: "June 15, 2024" },
    { title: "First Aid Certification Course", date: "July 2, 2024" },
    { title: "Cultural Sensitivity Webinar", date: "July 20, 2024" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      modules.forEach((module, index) => {
        if (module.progress < 100) {
          modules[index].progress = Math.min(module.progress + 1, 100);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-indigo-800 animate-fade-in-down">
          SevaSetu Volunteer Training
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2 bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="bg-indigo-600 p-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Training Modules</h2>
              <p className="text-indigo-200">Master essential skills for effective crisis response</p>
            </div>
            <div className="p-6 space-y-6">
              {modules.map((module, index) => (
                <div key={index} className="relative">
                  <div 
                    className={`p-4 rounded-lg transition-all duration-300 ${
                      activeModule === index ? 'bg-indigo-100' : 'hover:bg-indigo-50'
                    }`}
                    onClick={() => setActiveModule(activeModule === index ? null : index)}
                  >
                    <div className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <module.icon className="text-indigo-600" size={24} />
                        <h3 className="text-xl font-semibold text-indigo-800">{module.title}</h3>
                      </div>
                      <div className="w-24 h-2 bg-indigo-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    {activeModule === index && (
                      <div className="mt-4 pl-12 animate-fade-in">
                        <p className="text-gray-600 mb-4">Master the fundamentals of {module.title.toLowerCase()} through interactive lessons and real-world scenarios.</p>
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center">
                          Continue Learning
                          <ArrowRight className="ml-2" size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in-up">
              <div className="bg-indigo-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Training Resources</h2>
                <p className="text-indigo-200">Enhance your learning experience</p>
              </div>
              <div className="p-6 space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-center space-x-4 p-2 hover:bg-indigo-50 rounded-lg transition-colors">
                    <resource.icon className="text-indigo-600" size={24} />
                    <span className="text-gray-700 font-medium">{resource.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in-up">
              <div className="bg-indigo-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Upcoming Events</h2>
                <p className="text-indigo-200">Join our live training sessions</p>
              </div>
              <div className="p-6 space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-center space-x-4 p-2 hover:bg-indigo-50 rounded-lg transition-colors">
                    <Calendar className="text-indigo-600" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12 animate-fade-in-up">
          <div className="bg-indigo-600 p-6 text-white">
            <h2 className="text-3xl font-bold mb-2">SevaSetu Volunteer Certification</h2>
            <p className="text-indigo-200">Validate your skills and commitment</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-700 leading-relaxed max-w-2xl">
                Complete all required modules to earn your SevaSetu Volunteer Certification. This certification validates your readiness to assist in crisis situations and showcases your dedication to humanitarian service.
              </p>
              <button 
                className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center"
                onClick={() => setShowCertificate(!showCertificate)}
              >
                <Award className="mr-2" size={20} />
                {showCertificate ? "Hide Details" : "View Certification Details"}
              </button>
            </div>
            {showCertificate && (
              <div className="mt-6 p-6 bg-indigo-50 rounded-xl animate-fade-in">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">Certification Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                    Complete all core training modules
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                    Pass the final assessment with a score of 80% or higher
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                    Participate in at least one live training session or workshop
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="bg-indigo-600 p-6 text-white">
            <h2 className="text-3xl font-bold mb-2">Need Assistance?</h2>
            <p className="text-indigo-200">We're here to support your learning journey</p>
          </div>
          <div className="p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-700 mb-2">For any questions or support, please contact our training coordinator:</p>
              <p className="font-semibold text-indigo-800">Email: training@sevasetu.org</p>
              <p className="font-semibold text-indigo-800">Phone: +1 (555) 123-4567</p>
            </div>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center text-lg font-semibold">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;