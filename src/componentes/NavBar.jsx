import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavContext } from "../context/nav.context";

export default function NavBar() {
  const { backgroundColor, textColor, logo } = useContext(NavContext);

  return (
    <header
      className={`relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 ${backgroundColor}`}
    >
      <nav
        aria-label="Global"
        className="mx-auto max-w-container px-6 sm:px-8 lg:px-48"
      >
        <div className="lg:flex relative flex items-center py-[2.125rem]">
          <div className="flex-none text-slate-900">
            <div className="w-auto">
              <Link to="/">
                <span className="sr-only">Oscar</span>
                <img alt="" src={logo} className="h-10 w-auto" />
              </Link>
            </div>
          </div>

          <div className="flex lg:justify-end lg:w-full text-lg font-normal">
            <>
              <Link to="/about" className={`ml-8 ${textColor} hover:text-lg`}>
                About me
              </Link>
              <HashLink
                smooth
                className={`ml-8 ${textColor} hover:text-lg pl-[1.5rem]`}
                to="/#work"
              >
                Work
              </HashLink>

              <Link
                className={`ml-8 ${textColor} hover:text-lg pl-[1.5rem]`}
                to="/contact"
              >
                Contact
              </Link>
            </>
          </div>
        </div>
      </nav>
    </header>
  );
}
