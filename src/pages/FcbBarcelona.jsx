import React, { useEffect } from "react";
import { useContext } from "react";
import phone from "../assets/imagenes/screens_barca.png";
import FcbProject from '../componentes/FcbProject'
import { NavContext } from "../context/nav.context";
import oscarLogo from "../assets/imagenes/oscar-logo.png";

export default function FcbBarcelona() {
  const { setBackgroundColor, setTextColor, setLogo, setBorderColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#FBB5C3]");
    setTextColor("text-black")
    setLogo(oscarLogo)
    setBorderColor("border-black")
  });
  return (
    <div>
       <div className="bg-[#FBB5C3]">

       
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48 md:min-h-screen grid grid-cols-2 items-end">
        {/* Left side content */}
        <div className="pb-[11rem]">
          <h1 className="lg:text-7xl font-bold text-[#9E0925] pb-4">FCB Barça Academy</h1>
          <p className="lg:text-3xl text-[#9E0925] max-w-md">
          Wireframe design project for a real client based in th US
          </p>
        </div>

        {/* Right side placeholder for phone image */}
        <div className="hidden md:flex justify-center pb-32 h-[800px]">
          <img
            src={phone}
            alt="phone"
            className="h-[600px] object-cover"
          />
        </div>
        </div>
      </div>
      <FcbProject />
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        {/* <p className="text-red-500 text-sm">Link a behance</p> */}
        <a href="https://fcbarcelona.us/" target="_blank" className="bg-white border-2 border-black rounded-3xl hover:bg-[#52B6B9] px-3.5 py-2.5 shadow-sm w-60 font-bold text-center">
          Web
        </a>
      </div>
    </div>
  )
}
