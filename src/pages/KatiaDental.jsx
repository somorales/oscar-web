import React from "react";
import { useContext, useEffect } from "react";
import desktop from "../assets/imagenes/desktop_katia2.png";
import KatiaDentalProject from "../componentes/KatiaDentalProject";
import { NavContext } from "../context/nav.context";
import oscarLogo from "../assets/imagenes/oscar-logo.png";

export default function KatiaDental() {
  const { setBackgroundColor, setTextColor, setLogo, setBorderColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#A3E6E6]");
    setTextColor("text-black");
    setLogo(oscarLogo);
    setBorderColor("border-black")
  });

  return (
    <div>
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48 bg-[#A3E6E6] md:min-h-screen grid grid-cols-5 pb-8 lg:pb-16 items-end relative">
        {/* Left side content */}
        <div className="col-span-2 pb-[11rem]">
        <h1 className="lg:text-7xl font-bold text-[#0B9B9B] pb-4">Katia Dental</h1>
          
        
          <p className="lg:text-3xl text-[#0B9B9B] max-w-md">
          Landing Page Design for a real client in Barcelona
            </p>
        </div>

        {/* Right side placeholder for phone image */}
        <div className="h-[800px] col-span-3">
          <img
            src={desktop}
            alt="phone"
            className="h-[400px]  object-cover absolute bottom-[6rem] mb-24"
          />
        </div>
      </div>

      <KatiaDentalProject />

      <div className="my-10 flex flex-col items-center justify-center gap-2">
        <a   href="https://www.behance.net/gallery/195855301/UI-Design-Portfolio-Landing-Page"  target="_blank"  className="bg-white border-2 border-black rounded-3xl hover:bg-[#52B6B9] px-3.5 py-2.5 shadow-sm w-60 font-bold text-center">
          More info
        </a>
      </div>
    </div>
  );
}
