import React from "react";
import phone from "../assets/imagenes/screen_agora.png";
import AgoraProject from "../componentes/AgoraProject";

export default function Agora() {
  return (
    <div>
      <div className="min-h-screen bg-[#D7C0F4] flex items-center p-8 lg:p-16">
        {/* Left side content */}
        <div>
          <h1 className="lg:text-7xl font-bold text-[#5600C2] pb-4">Agora</h1>
          <p className="lg:text-3xl text-[#5600C2] max-w-md">
            Freelance project for an Artist in Barcelona
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
      <AgoraProject />
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        {/* <p className="text-red-500 text-sm">Link a behance</p> */}
        <button className="bg-white border-2 border-black rounded-3xl hover:bg-gray-200 px-3.5 py-2.5 shadow-sm w-60 font-bold">
          Prototype
        </button>
      </div>
    </div>
  );
}
