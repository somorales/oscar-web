import React, { useEffect } from "react";
import { useContext } from "react";
import phone from "../assets/imagenes/Iphone_highclass.png";
import HighClassProject from "../componentes/HighClassProject";
import { NavContext } from "../context/nav.context";
import oscarLogo from "../assets/imagenes/oscar-logo.png";

export default function HighClass() {
  const { setBackgroundColor, setTextColor, setLogo } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-blue-400");
    setTextColor("text-black")
    setLogo(oscarLogo)
  });

  return (
    <div>
      <div className="bg-blue-400">
        <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48 min-h-screen grid grid-cols-2 items-end">
          {/* Left side content */}
          <div className="pb-[17rem]">
            <div className="">
              <h1 className="lg:text-7xl font-bold text-[#014FB5] pb-4">
                HighClass
              </h1>
              <p className="lg:text-3xl text-[#014FB5] max-w-md">
                Helping students to improve their academic knowledge
              </p>
            </div>
          </div>

          {/* Right side placeholder for phone image */}
          <div className="flex justify-center pb-32">
            <img
              src={phone}
              alt="phone"
              className="h-[800px] lg:h-[850px] object-cover"
            />
          </div>
        </div>
      </div>

      <HighClassProject />
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        <button className="bg-white border-2 border-black rounded-3xl hover:bg-gray-200 px-3.5 py-2.5 shadow-sm w-60 font-bold">
          More info
        </button>
      </div>
    </div>
  );
}
