import React from "react";
import screen from "../assets/imagenes/Google Chrome - Light.png";

export default function KatiaDEntalProyect() {
  return (
    <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48 pt-24">
      <div className="aspect-auto">
        <img
          src={screen}
          alt="screens"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-l font-mediun mb-3">
            This was a project I worked on when I was a designer at "Cronuts
            Digital"
          </h2>

          <h2 className="text-lg font-semibold mb-3">Frist Steps:</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                Meeting with the client in order to gather information and needs
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                Browse the current design and look for pain points and identify
                the content to keep
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                Analyze competitor landing pages to identify what works well and
                what doesn't
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Design:</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                Create a basic layout to outline the structure, including where
                images, text, and CTAs will be placed.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                Ensure the headline is compelling and communicates the value
                proposition immediately.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                Design minimalistic visuals that leads the user’s eye toward the
                goal.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                Use the color palette provided by the clients existing branding.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Design the site in Wordpress and Elementor.</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Learnings:</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span>
                The first lesson I learned was the importance of fully
                understanding the client’s business objectives and target
                audience. It was definitely a highly rewarding and insightful
                experience. The project allowed me to sharpen both my design and
                communication skills, leading to a successful outcome that met
                the client’s expectations.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3"> Results:</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Increased “leads” for Katia Dental</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Update to a modern and user centered design web page</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
