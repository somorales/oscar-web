import React from "react";
import phone from "../assets/imagenes/Iphone_highclass.png";
import HighClassProyect from "../componentes/HighClassProyect";

export default function HighClass() {
  return (
    <div>
      <div className="min-h-screen bg-blue-400 flex items-center justify-between p-8 lg:p-16">
        {/* Left side content */}
        <div className="space-y-4 flex-1">
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-900">
            HighClass
          </h1>
          <p className="text-xl lg:text-2xl text-blue-800 max-w-md">
            Helping students to improve their academic knowledge
          </p>
        </div>

        {/* Right side placeholder for phone image */}
        <div className="w-64 lg:w-72">
          <img src={phone} alt="phone" className="w-full h-full object-cover" />
        </div>
      </div>
      <HighClassProyect />
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
