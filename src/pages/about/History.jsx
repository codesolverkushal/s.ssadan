import React from 'react';

function History() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">
            The Legacy of S.S. Sadan
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            A Journey of Educational Excellence Since 2002
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid md:grid-cols-2 gap-12 p-12 bg-gray-100">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-800 border-b-4 border-blue-500 pb-3">
              Our Founders
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-blue-500 mb-4">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="Devendra Singh" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Devendra Singh
                </h3>
                <p className="text-gray-600">Principal</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-blue-500 mb-4">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="Ramnaresh Singh" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Ramnaresh Singh
                </h3>
                <p className="text-gray-600">Managing Director</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-xl text-gray-700 py-4">
              "Our vision was to create an institution that nurtures not just academic excellence, but holistic human development."
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              In 2002, Devendra Singh and Ramnaresh Singh embarked on a transformative mission to establish an educational institution that would go beyond traditional learning. With a shared passion for education and a commitment to nurturing young minds, they founded S.S. Sadan.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="p-12 bg-white">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12 border-b-4 border-blue-500 pb-3">
            Our Journey
          </h2>
          <div className="relative border-l-4 border-blue-500 ml-6">
            {[
              { year: 2002, event: "School Established with 50 Students" },
              { year: 2008, event: "First Expansion - New Academic Block" },
              { year: 2012, event: "Introduction of Advanced Computer Lab" },
              { year: 2016, event: "Recognition for Academic Excellence" },
              { year: 2020, event: "Digital Learning Infrastructure Upgrade" },
              { year: 2024, event: "Modern Science and Technology Wing Inaugurated" }
            ].map((milestone, index) => (
              <div key={index} className="mb-8 ml-6 pl-6 border-l-4 border-transparent hover:border-blue-600 transition-all duration-300 group">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -ml-[2.3rem] mt-2 group-hover:bg-blue-700 transition-colors"></div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">
                    {milestone.year}
                  </h3>
                  <p className="text-gray-700">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-600 text-white py-16 px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Enduring Mission
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-blue-100 leading-relaxed">
            To provide a transformative educational experience that empowers students to become lifelong learners, critical thinkers, and compassionate global citizens.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;