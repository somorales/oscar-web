import React from "react";
import teamwork from "../assets/imagenes/team_highclass.png";
import work from "../assets/imagenes/work_highlass.png";
import screens from "../assets/imagenes/screens_highclass.png";

export default function HighClassProyect() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            <div className="aspect-square p-4">
              <img
                src={work}
                alt="work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square p-4">
              <img
                src={teamwork}
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4">
                Highclass is an app that connects students with other students
                to share knowledge, how do we helped them?
              </h1>

              {/* Goals Section */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Goals:</h2>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-black font-bold">•</span>
                    <span>
                      Facilitate the exchange of knowledge between students
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-black font-bold">•</span>
                    <span>Resolve quite specific doubts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-black font-bold">•</span>
                    <span>
                      Strengthen the knowledge of the students themselves
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-black font-bold">•</span>
                    <span>Create a community of university students</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-lg font-mediun mb-3">
                Our{" "}
                <b>first step was to create a homogeneous sample of students</b>{" "}
                to select carefully and accurately the users we wanted to
                interview.
              </h2>

              <h2 className="text-lg font-mediun mb-3">
                <b>Issues:</b> At the beginning was a bit hard to target the
                pain points, therefore, difficult to define insights,
                information provided from the students was somewhat shallow
                identifying that we couldn't go any further, at the end, we did
                four interview rounds at this initial research process in order
                to start with other phases.
              </h2>

              <h2 className="text-lg font-mediun mb-3">
                We finally <b>declared the insights</b> and found out that we
                had two user personas:
              </h2>
              <div className="mb-6">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-black font-bold">•</span>
                    <span>
                      The students who wanted to browse and consume specific
                      information
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-black font-bold">•</span>
                    <span>
                      The students who wanted to create content and teach other
                      students
                    </span>
                  </li>
                </ul>
              </div>
              <h2 className="text-lg font-mediun mb-3">
                After identify our target audience,{" "}
                <b>we came up with the ideation phase</b>, to stimulate the
                generation of creative and diverse ideas through team sessions
                and benchmarking. At this point,{" "}
                <b>
                  we did a quick research plan again, ir order to validate our
                  idea
                </b>{" "}
                by interviewing some users, we wanted to make sure ourselves
                that our idea was reachable!
              </h2>

              <h2 className="text-lg font-mediun mb-3">
                Then, we started to design the experience with information
                architecture, first steps from visual and <b>propose the UI.</b>
              </h2>

              <h2 className="text-lg font-mediun mb-3">
                At the end we reached the <b>user testing phase</b>, where we
                carried out three iterations, in which twelve users from
                different academic branches participated. This helped us{" "}
                <b>
                  enhance our design in favor of the user and in order to reach
                  our final prototype.
                </b>{" "}
                The tests were carried out in person on a computer.
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Results</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-black font-bold">•</span>
                      <span>Users found a community of students to join</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-black font-bold">•</span>
                      <span>
                        Users can create questions on a specific topic
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-black font-bold">•</span>
                      <span>
                        Users can answer questions from other students, thus
                        resolving doubts
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-black font-bold">•</span>
                      <span>
                        Users are willing to give private lessons and charge for
                        it
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aspect-auto mt-8 p-4">
          <img
            src={screens}
            alt="screens"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
