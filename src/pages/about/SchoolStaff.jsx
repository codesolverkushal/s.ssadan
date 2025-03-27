// src/pages/SchoolStaff.js
import React from 'react';

function SchoolStaff() {
  return (
    <div>
            {/* Faculty Spotlight */}
            <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Faculty Spotlight
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-8"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Smt. Shammi Devi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Smt. Shammi Devi
              </h3>
              <p className="text-blue-700 font-medium mb-3">Manager</p>
              <p className="text-gray-600 mb-4">
                Donate 3 Lakh for the School in 2004
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Mr. Devendra Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mr. Devendra Singh
              </h3>
              <p className="text-blue-700 font-medium mb-3">Principal</p>
              <p className="text-gray-600 mb-4">
                M.Sc in Mathematics with specialty in preparing students for
                competitive exams. National teaching award recipient.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Mr. Munesh Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mr. Munesh Singh
              </h3>
              <p className="text-blue-700 font-medium mb-3">
                Arts & Literature
              </p>
              <p className="text-gray-600 mb-4">
                Published author with expertise in creative writing and
                classical literature. Leads the school's award-winning debate
                team.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Mr. Ramnaresh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mr. Ramnaresh
              </h3>
              <p className="text-blue-700 font-medium mb-3">
                Science Department Head
              </p>
              <p className="text-gray-600 mb-4">
                M.Sc in Mathematics with 15 years of teaching experience.
                Specializes in innovative teaching methods for complex
                scientific concepts.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Mr. Raman Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mr. Raman Kumar
              </h3>
              <p className="text-blue-700 font-medium mb-3">Senior Teacher</p>
              <p className="text-gray-600 mb-4">
                Expertise in the art subject with 8 years of experience.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Mr. Indrapal Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mr. Indrapal Singh
              </h3>
              <p className="text-blue-700 font-medium mb-3">
                Arts & Literature
              </p>
              <p className="text-gray-600 mb-4">
                Published author with expertise in creative writing and
                classical literature. Leads the school's award-winning debate
                team.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>
        
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Yogesh Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mr. Yogesh Singh
              </h3>
              <p className="text-blue-700 font-medium mb-3">Science Teacher</p>
              <p className="text-gray-600 mb-4">
                Dedicated science teacher specializing in junior level education
                with a passion for making scientific concepts engaging and
                accessible.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Dinesh Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mr. Dinesh Singh
              </h3>
              <p className="text-blue-700 font-medium mb-3">Nursery Teacher</p>
              <p className="text-gray-600 mb-4">
                Experienced in early childhood education, creating a nurturing
                and stimulating learning environment for our youngest students.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Rani Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mrs. Rani Singh
              </h3>
              <p className="text-blue-700 font-medium mb-3">
                Primary Level Teacher
              </p>
              <p className="text-gray-600 mb-4">
                Committed to providing comprehensive and engaging education for
                primary students, fostering a love for learning.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Anamika"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mrs. Anamika
              </h3>
              <p className="text-blue-700 font-medium mb-3">
                Primary Level Teacher
              </p>
              <p className="text-gray-600 mb-4">
                Passionate educator dedicated to developing foundational skills
                and creating an inspiring learning atmosphere for primary
                students.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 mb-6 overflow-hidden rounded-md bg-gray-200">
                <img
                  src="/api/placeholder/300/300"
                  alt="Roshani"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Mrs. Roshani
              </h3>
              <p className="text-blue-700 font-medium mb-3">
                Primary Level Teacher
              </p>
              <p className="text-gray-600 mb-4">
                Experienced in primary education, focusing on holistic
                development and creating a supportive learning environment.
              </p>
              <div className="flex justify-end">
                <button className="text-blue-700 hover:text-blue-900 font-medium">
                  Read Bio →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md shadow-md transition-colors">
              Meet Our Full Faculty
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SchoolStaff;
