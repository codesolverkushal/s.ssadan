import React from "react";
import { GraduationCap, Award, Calendar, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const SchoolAdditionalInfo = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Academic Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Academic Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-8"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Primary School (Grades 1-5)
              </h3>
              <p className="text-gray-700 mb-4">
                Our primary program focuses on building strong foundations in
                language, mathematics, sciences and creative arts through
                activity-based learning.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Phonics-based literacy development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Hands-on mathematics exploration
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Weekly science experiments
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Middle School (Grades 6-8)
              </h3>
              <p className="text-gray-700 mb-4">
                Our middle school curriculum deepens subject knowledge while
                developing critical thinking and collaborative skills.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Advanced mathematics and sciences
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Technical literacy and coding basics
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Social studies with global perspectives
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                High School (Grades 9-10)
              </h3>
              <p className="text-gray-700 mb-4">
                Our high school program prepares students for university through
                rigorous academics and specialized tracks.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Science, Math and HomeScience(for Girls)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  College counseling and career guidance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Advanced placement options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">School Calendar</h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4 py-1">
                  <p className="font-bold text-blue-800">April 5, 2025</p>
                  <p className="text-gray-700">Annual Science Fair</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 py-1">
                  <p className="font-bold text-blue-800">April 12, 2025</p>
                  <p className="text-gray-700">Parent-Teacher Conference</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 py-1">
                  <p className="font-bold text-blue-800">April 20, 2025</p>
                  <p className="text-gray-700">
                    Inter-School Sports Competition
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 py-1">
                  <p className="font-bold text-blue-800">May 2, 2025</p>
                  <p className="text-gray-700">
                    Cultural Fest "Expressions 2025"
                  </p>
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-100 text-blue-800 hover:bg-blue-200 font-medium py-2 px-4 rounded-md transition-colors text-center">
                View Full Calendar
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Latest Achievements</h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <p className="font-bold text-gray-800">
                    National Mathematics Olympiad
                  </p>
                  <p className="text-gray-700">
                    Our students secured three gold medals and five silver
                    medals
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <p className="font-bold text-gray-800">
                    State Cricket Championship
                  </p>
                  <p className="text-gray-700">
                    School team won the state championship for the second
                    consecutive year
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <p className="font-bold text-gray-800">
                    National Science Congress
                  </p>
                  <p className="text-gray-700">
                    Student research project on sustainable agriculture received
                    recognition
                  </p>
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-100 text-blue-800 hover:bg-blue-200 font-medium py-2 px-4 rounded-md transition-colors text-center">
                View All Achievements
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Admission Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our admission process is designed to find students who will thrive
              in our academic environment and contribute to our school
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 mt-2">
                Application Submission
              </h3>
              <p className="text-gray-600">
                Complete the online application form and submit all required
                documents including previous academic records.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 mt-2">
                Entrance Assessment
              </h3>
              <p className="text-gray-600">
                Students take an assessment appropriate for their grade level to
                evaluate academic readiness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 mt-2">
                Interview
              </h3>
              <p className="text-gray-600">
                Parents and students meet with school administrators to discuss
                goals and expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 mt-2">
                Admission Decision
              </h3>
              <p className="text-gray-600">
                Families are notified of admission decisions within two weeks of
                completing all steps.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Important Dates for 2025-26 Admissions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-blue-800">Application Deadline</p>
                <p className="text-gray-700 mb-2">May 30, 2025</p>

                <p className="font-bold text-blue-800">Entrance Assessments</p>
                <p className="text-gray-700 mb-2">June 5-15, 2025</p>
              </div>
              <div>
                <p className="font-bold text-blue-800">Parent Interviews</p>
                <p className="text-gray-700 mb-2">June 20-30, 2025</p>

                <p className="font-bold text-blue-800">Admission Results</p>
                <p className="text-gray-700">July 15, 2025</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md shadow-md transition-colors">
                Start Application Process
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolAdditionalInfo;
