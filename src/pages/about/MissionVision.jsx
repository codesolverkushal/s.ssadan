import React from 'react';
import { Link } from 'react-router-dom';

function MissionVision() {
  return (
    <div className="bg-white">
     

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Mission & Vision</h1>
          <p className="text-xl mb-4">Guiding Principles of Our Educational Journey</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To provide a comprehensive and nurturing educational environment that empowers students to discover their potential, develop critical thinking skills, and emerge as confident, responsible global citizens.
            </p>
            <p className="text-gray-700">
              We are committed to:
              <ul className="list-disc pl-5 mt-2">
                <li>Fostering intellectual curiosity</li>
                <li>Promoting holistic development</li>
                <li>Encouraging innovation and creativity</li>
                <li>Building strong moral and ethical foundations</li>
              </ul>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              To be a leading educational institution that sets new standards in academic excellence, personal growth, and social responsibility.
            </p>
            <p className="text-gray-700">
              We aspire to:
              <ul className="list-disc pl-5 mt-2">
                <li>Prepare students for future challenges</li>
                <li>Create a dynamic and inclusive learning environment</li>
                <li>Develop transformative leaders</li>
                <li>Contribute positively to society</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
