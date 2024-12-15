import React from "react";
import phone from "../assets/imagenes/Iphone_highclass.png";
import HighClassProject from "../componentes/HighClassProject";

export default function HighClass() {
  return (
    <div>
      <div className="min-h-screen bg-blue-400 flex items-center p-8 lg:p-16">
        {/* Left side content */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-900">
            HighClass
          </h1>
          <p className="text-xl lg:text-2xl text-blue-800 max-w-md">
            Helping students to improve their academic knowledge
          </p>
        </div>

        {/* Right side placeholder for phone image */}
        <div className="flex flex-1 justify-end">
          <img src={phone} alt="phone" className="h-[600px] w-64 lg:w-72 object-cover" />
        </div>
      </div>
      <HighClassProject />
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          More info
        </a>
      </div>
    </div>
  );
}
