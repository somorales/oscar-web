import React from "react";
import oscarLogo from "../assets/imagenes/oscar-logo.png";
import oscarLogoBlanco from  "../assets/imagenes/oscar-logo-blanco.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 bg-[#392F5A]">
      <nav
        aria-label="Global"
        className="mx-auto max-w-container px-4 sm:px-6 lg:px-36"
      >
        <div className="hidden lg:flex relative flex items-center py-[2.125rem]">
          <div className="flex-none text-slate-900">
            <div className="h-6 w-auto">
              <Link to="/">
                <span className="sr-only">Oscar</span>
                <img alt="" src={oscarLogoBlanco} className="h-8 w-auto" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end lg:w-full">
            <>
              <Link to="/about" className="ml-8 text-white hover:text-lg ">
                About me
              </Link>
              <Link className="ml-8 text-white hover:text-lg pl-[1.5rem]" to="/work">
                Work
              </Link>

              <Link className="ml-8 text-white hover:text-lg pl-[1.5rem]" to="/contact">
                Contact
              </Link>
            </>
          </div>
        </div>
      </nav>
    </header>
  );
}
