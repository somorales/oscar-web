import React from "react";
import { useContext, useEffect } from "react";
import desktop from "../assets/imagenes/desktop_Katia2.png";
import KatiaDentalProject from "../componentes/KatiaDentalProject";
import { NavContext } from "../context/nav.context";
import oscarLogo from "../assets/imagenes/oscar-logo.png";

export default function KatiaDental() {
  const { setBackgroundColor, setTextColor, setLogo } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#A3E6E6]");
    setTextColor("text-black");
    setLogo(oscarLogo);
  });

  return (
    <div>
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48 bg-[#A3E6E6] grid grid-cols-5 pb-8 lg:pb-16 items-end relative">
        {/* Left side content */}
        <div className="col-span-2">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#0B9B9B]">
            Katia Dental
          </h1>
          <p className="text-xl lg:text-2xl text-[#0B9B9B] max-w-md">
            Landing Page Design for a real client in Barcelona
          </p>
        </div>

        {/* Right side placeholder for phone image */}
        <div className="min-h-[500px] col-span-3">
          <img
            src={desktop}
            alt="phone"
            className="h-[450px] object-cover absolute bottom-1 mb-10"
          />
        </div>
      </div>

      <KatiaDentalProject />

      <div className="my-10 flex flex-col items-center justify-center gap-2">
        <button className="bg-white border-2 border-black rounded-3xl hover:bg-gray-200 px-3.5 py-2.5 shadow-sm w-60 font-bold">
          More info
        </button>
      </div>
    </div>
  );
}
