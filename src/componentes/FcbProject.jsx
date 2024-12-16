import React from "react";
import screens from "../assets/imagenes/screns_barca.png";

export default function FcbProject() {
  return (
    <div>
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48">
        <div className="pt-20">
          <h2 className="text-2xl font-bold mb-4">
            This was a project I worked on when I was a designer at “Cronuts
            Digital”
          </h2>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">
              {" "}
              Meeting the client needs:
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-black font-bold">•</span>
                <span>
                  The client wanted to develop the mobile version of their
                  existing website. They asked us to develop the low-fidelity
                  wireframes based on the website they had.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-black font-bold">•</span>
                <span>
                  Although wireframes are a very basic form of design, they also
                  wanted to keep the UX Writing used in the web for they to
                  evaluate if it needed to be changed.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-black font-bold">•</span>
                <span>At the end, they also asked for high-fi wireframes.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3"> Process: </h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span>Analyzed the existing web version.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span>Simplified sections and build basic forms.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span>Created components.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span> Client feedback and iterate.</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3"> Learnings: </h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span>
                Realize how essential it is to keep things simple and flexible.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span>
                Managing visual consistency, because we have to do it with an
                existing material.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span>
                When we reached the high-fi wireframe design, I needed to work
                directly with a Design System handed-off by the client, and that
                was great.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span>
                {" "}
                Loved the experience to working with a international team.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3"> Results: </h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span>
                They managed to match their website with the mobile version and
                now is available.
              </span>
            </li>
          </ul>
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
