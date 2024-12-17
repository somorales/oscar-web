import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavContext } from "../context/nav.context";

export default function NavBar() {
  const { backgroundColor, textColor, logo, borderColor } = useContext(NavContext);

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

          <div className="hidden md:flex lg:justify-end lg:w-full text-lg font-normal items-center text-center">
            <>
              <Link to="/about" className={`w-28 px-2 py-1 ml-8 ${textColor} hover:rounded-3xl hover:border hover:${borderColor} hover:font-semibold hover:shadow-sm`}>
                About me
              </Link>
              <HashLink
                smooth
                className={`w-28 px-2 py-1 ml-8 ${textColor} hover:text-lg hover:rounded-3xl hover:border hover:${borderColor} hover:font-semibold hover:shadow-sm`}
                to="/#work"
              >
                Work
              </HashLink>

              <Link
                className={`w-28 px-2 py-1 ml-8 ${textColor} hover:text-lg hover:rounded-3xl hover:border hover:${borderColor} hover:font-semibold hover:shadow-sm`}
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
