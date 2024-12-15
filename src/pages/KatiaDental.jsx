import React from 'react'
import desktop from "../assets/imagenes/desktop_Katia2.png";
import KatiaDentalProject from '../componentes/KatiaDentalProject';

export default function KatiaDental() {
  return (
    <div>
      <div className="min-h-screen bg-[#A3E6E6] flex items-center justify-between p-8 lg:p-16">
        {/* Left side content */}
        <div className="space-y-4 flex-1">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#0B9B9B]">
            Katia Dental
          </h1>
          <p className="text-xl lg:text-2xl text-[#0B9B9B] max-w-md">
          Landing Page Design for a real client in Barcelona
          </p>
        </div>

        {/* Right side placeholder for phone image */}
        <div className="w-64 lg:w-72">
          <img src={desktop} alt="phone" className="w-full h-full object-cover" />
        </div>
      </div>

      < KatiaDentalProject />
      
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        {/* <p className="text-red-500 text-sm">Link a behance</p> */}
        <button className="bg-white border-2 border-black rounded-3xl hover:bg-gray-200 px-3.5 py-2.5 shadow-sm w-60 font-bold">
          More info
        </button>
      </div>

    </div>
  )
}
