import React from 'react';

function PrincipalsMessage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6">
          <h1 className="text-4xl font-extrabold text-center tracking-tight">
            Principal's Message
          </h1>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 p-8">
          {/* Principal's Image */}
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
              <img 
                src="/public/profileImg/img1.jpg" 
                alt="Principal" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Message Content */}
          <div className="md:col-span-2 space-y-6">
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-xl text-gray-700 py-4">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </blockquote>
            
            <div className="space-y-4 text-gray-800">
              <p>
                Dear Students, Parents, and Valued Community Members,
              </p>
              
              <p>
                At S.S. Sadan, we are dedicated to more than just academic excellence. Our mission is to nurture young minds, inspire creativity, and build character that extends far beyond the classroom walls.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Our Core Principles
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Holistic Personal Development</li>
                  <li>Innovative and Engaging Learning Approaches</li>
                  <li>Individual Mentorship and Support</li>
                  <li>Fostering Critical Thinking and Leadership</li>
                </ul>
              </div>
              
              <p>
                We believe that every student has unique potential waiting to be discovered and nurtured. Our committed faculty works tirelessly to create an environment that encourages exploration, learning, and personal growth.
              </p>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold">
                  Warmest Regards,
                </p>
                <p className="text-lg font-bold text-blue-700">
                  Principal, S.S. Sadan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalsMessage