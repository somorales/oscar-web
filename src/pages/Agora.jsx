import React from "react";
import phone from "../assets/imagenes/screen_agora.png";
import AgoraProject from "../componentes/AgoraProject";

export default function Agora() {
  return (
    <div>
      <div className="bg-[#D7C0F4]">
        <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48 min-h-screen grid grid-cols-2 items-end">
          <div className="pb-[8rem]">
            <h1 className="lg:text-7xl font-bold text-[#5600C2] pb-4">Agora</h1>
            <p className="lg:text-3xl text-[#5600C2] max-w-md">
              Freelance project for an Artist in Barcelona
            </p>
          </div>

          {/* Right side placeholder for phone image */}
          <div className="flex justify-center pb-32">
            <img
              src={phone}
              alt="phone"
              className="h-[650px] object-cover"
            />
          </div>
        </div>
      </div>
      <AgoraProject />
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        {/* <p className="text-red-500 text-sm">Link a behance</p> */}
        <button className="bg-white border-2 border-black rounded-3xl hover:bg-[#52B6B9] px-3.5 py-2.5 shadow-sm w-60 font-bold">
          Prototype
        </button>
      </div>
    </div>
  );
}
