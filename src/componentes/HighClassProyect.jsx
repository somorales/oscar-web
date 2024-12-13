import React from 'react'
import teamwork from "../assets/imagenes/team_highclass.png";
import work from "../assets/imagenes/work_highlass.png";
import screens from "../assets/imagenes/screens_highclass.png";


export default function HighClassProyect() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="w-full">
            <div className="aspect-square bg-gray-100 rounded-lg">
            <img
                src= {work}
                alt="work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg">
            <img
                src= {teamwork}
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-4">
                Highclass is an app that connects students with other students to share knowledge
              </h1>
              
              {/* Goals Section */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Goals:</h2>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Facilitate the exchange of knowledge between students</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Resolve quite specific doubts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Strengthen the knowledge of the students themselves</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Create a community of university students</span>
                  </li>
                </ul>
              </div>

              {/* Process Steps */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">First Step: Research</h3>
                  <p className="text-gray-700">
                    Created a homogeneous sample of students to select carefully and accurately 
                    the users we wanted to interview.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Insights</h3>
                  <p className="text-gray-700 mb-2">Identified two user personas:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Students who wanted to browse and consume specific information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Students who wanted to create content and teach other students</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Results</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Users found a community of students to join</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Users can create questions on a specific topic</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Users can answer questions from other students, thus resolving doubts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Users are willing to give private lessons and charge for it</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-auto">
            <img
                src= {screens}
                alt="screens"
                className="w-full h-full object-cover"
              />
            </div>
            
    </div>
  );
};
