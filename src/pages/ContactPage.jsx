import React from "react";
import { useEffect, useContext } from "react";
import oscarcontact from "../assets/imagenes/me_foto_contact.png";
import messageIcon from "../assets/imagenes/mensaje.png";
import oscarLogoBlanco from "../assets/imagenes/oscar-logo-blanco.png";
import { NavContext } from "../context/nav.context";

export default function ContactPage() {
  const { setBackgroundColor, setTextColor, setLogo } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#392F5A]");
    setTextColor("text-white");
    setLogo(oscarLogoBlanco)
  });
  return (
    <div className="bg-[#392F5A] min-h-screen flex items-center content-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="flex-1 text-white">
          <div className="flex items-center gap-4 mb-4">
            <img src={messageIcon} className="w-10 h-10" />
            <h2 className="text-4xl font-bold">Get in touch</h2>
          </div>

          <p className="text-2xl mb-8">
            Feel free to send a message,
            <br />
            let's have a talk!
          </p>

          <div className="flex flex-col gap-4 w-full max-w-md">
            <a
              href="#"
              className="w-full px-6 py-3 rounded-full border-2 border-white text-white text-center font-medium hover:bg-white hover:text-indigo-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="w-full px-6 py-3 rounded-full border-2 border-white text-white text-center font-medium hover:bg-white hover:text-indigo-900 transition-colors"
            >
              Send me a message
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className=" overflow-hidden w-full max-w-md ">
            <img
              src={oscarcontact}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
