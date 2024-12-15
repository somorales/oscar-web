import React from 'react'
import phone from "../assets/imagenes/screens_barca.png";
import FcbProject from '../componentes/FcbProject'

export default function FcbBarcelona() {
  return (
    <div>
      <div className="min-h-screen bg-[#FBB5C3] flex items-center p-8 lg:p-16">
        {/* Left side content */}
        <div>
          <h1 className="lg:text-7xl font-bold text-[#9E0925] pb-4">FCB Barça Academy</h1>
          <p className="lg:text-3xl text-[#9E0925] max-w-md">
          Wireframe design project for a real client based in th US
          </p>
        </div>

        {/* Right side placeholder for phone image */}
        <div className="flex flex-1 justify-end">
          <img
            src={phone}
            alt="phone"
            className="h-[600px] w-64 lg:w-72 object-cover"
          />
        </div>
      </div>
      <FcbProject />
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        {/* <p className="text-red-500 text-sm">Link a behance</p> */}
        <button className="bg-white border-2 border-black rounded-3xl hover:bg-gray-200 px-3.5 py-2.5 shadow-sm w-60 font-bold">
          Web
        </button>
      </div>
    </div>
  )
}
