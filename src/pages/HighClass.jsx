import React from "react";
import phone from "../assets/imagenes/Iphone_highclass.png";
import HighClassProject from "../componentes/HighClassProject";

export default function HighClass() {
  return (
    <div>
      <div className="min-h-screen flex bg-blue-400 mx-auto">
        {/* Left side content */}
        <div>
          <h1 className="lg:text-7xl font-bold text-blue-900 pb-4">
            HighClass
          </h1>
          <p className="lg:text-3xl text-blue-800 max-w-md">
            Helping students to improve their academic knowledge
          </p>
        </div>

        {/* Right side placeholder for phone image */}
        <div className="">
          <img
            src={phone}
            alt="phone"
            className="h-[600px] w-64 lg:w-72 object-cover"
          />
        </div>
      </div>

      <HighClassProject />
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        {/* <p className="text-red-500 text-sm">Link a behance</p> */}
        <button className="bg-white border-2 border-black rounded-3xl hover:bg-gray-200 px-3.5 py-2.5 shadow-sm w-60 font-bold">
          More info
        </button>
      </div>
    </div>
  );
}
