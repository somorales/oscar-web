import React from "react";
import screen from "../assets/imagenes/Google Chrome - Light.png";

export default function KatiaDEntalProyect() {
  return (
    <div>
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
        This was a project I worked on when I was a designer at “Cronuts Digital”
          </h2>

          <h2 className="text-lg font-semibold mb-3">
           Frist Steps:
          </h2>
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
      </div>
    </div>
  );
}
