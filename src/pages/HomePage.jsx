import React from "react";
import { useEffect, useContext } from "react";
import cat from "../assets/imagenes/cat.svg";
import iphoneHighclass from "../assets/imagenes/iphone-highclass.png";
import desktopKatia from "../assets/imagenes/desktop-katia.png";
import wireframesBarca from "../assets/imagenes/wireframes-barca.png";
import iphoneAgora from "../assets/imagenes/iphone-agora.png";
import ProjectsList from "../componentes/ProjectList";
import { Link } from "react-router";
import { NavContext } from "../context/nav.context";
import oscarLogoBlanco from "../assets/imagenes/oscar-logo-blanco.png";

export default function HomePage() {
  const { setBackgroundColor, setTextColor, setLogo, setBorderColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#392F5A]");
    setTextColor("text-white");
    setLogo(oscarLogoBlanco)
    setBorderColor("border-white")
  });

  return (
    <div>
      <div className="bg-[#392F5A]">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <div className="flex">
              <img src={cat} alt="" />
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl pl-[1.5rem]">
                Hey, Oscar here!
              </h1>
            </div>
            <h2 className="mt-8 text-pretty font-medium text-white sm:text-4xl">
              UX/UI Designer based in Barcelona
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
              Passionate about creating digital experiences with user-focused
              design principles. I also have a background in digital marketing,
              design, and photography. Thanks for visiting!
            </p>
            <div className="my-10 flex flex-col items-center justify-center gap-2">
              <button className="bg-[#392F5A] border-2 border-white rounded-3xl hover:bg-[#52B6B9] hover:border-black hover:text-black   px-3.5 py-2.5 shadow-sm w-60 font-bold text-white">
                My resume
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      ></div>

      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48 mb-12">
        <p id="work" className="mx-auto my-12 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Recent work
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
          <Link to="/high-class">
            <div className="relative lg:row-span-2 bg-[#BFDAFD] rounded-3xl h-[600px]">
              <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-8 pb-3 pt-20 sm:px-10 sm:pb-0 sm:pt-20">
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#014FB5] max-lg:text-center">
                    How to help students to improve their academic knowledge?
                  </h2>
                  <div className="flex flex-row">
                    <p className="flex-auto mt-6 max-w-lg text-lg text-[#014FB5] max-lg:text-center">
                      Master's Final Project
                    </p>
                    <img
                      className="flex-auto object-contain h-[25rem]"
                      src={iphoneHighclass}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-3xl shadow ring-1 ring-black/40"></div>
            </div>
          </Link>
          <Link to="/katia-dental">
            <div className="relative lg:row-span-2 bg-[#A3E6E6] rounded-3xl h-[600px]">
              <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-8 pb-3 pt-20 sm:px-10 sm:pb-0 sm:pt-20">
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0B9B9B] max-lg:text-center">
                    Improving web design and increasing leads for "Katia Dental"
                  </h2>
                  <div className="flex flex-col">
                    <p className="flex-auto mt-6 max-w-lg text-lg text-[#0B9B9B] max-lg:text-center">
                      Real client project
                    </p>
                    <img
                      className="flex-auto object-contain h-[25rem]"
                      src={desktopKatia}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-3xl shadow ring-1 ring-black/40"></div>
            </div>
          </Link>

          <Link to="/fc-barcelona">
            <div className="relative lg:row-span-2 bg-[#FBB5C3] rounded-3xl h-[600px]">
              <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-8 pb-3 pt-20 sm:px-10 sm:pb-0 sm:pt-20">
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#9E0925] max-lg:text-center">
                    Wireframe design for FCB Barça Academy United States
                  </h2>
                  <div className="flex flex-col">
                    <p className="flex-auto mt-6 max-w-lg text-lg text-[#9E0925] max-lg:text-center">
                      Real client project
                    </p>
                    <img
                      className="flex-auto object-contain h-[25rem] -mt-8"
                      src={wireframesBarca}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-3xl shadow ring-1 ring-black/40"></div>
            </div>
          </Link>

          <Link to="/agora">
            <div className="relative lg:row-span-2 bg-[#D7C0F4] rounded-3xl h-[600px]">
              <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-8 pb-3 pt-20 sm:px-10 sm:pb-0 sm:pt-20">
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#4C0AA0] max-lg:text-center">
                    "Agora" App design for artists community
                  </h2>
                  <div className="flex flex-col">
                    <p className="flex-auto mt-6 max-w-lg text-lg text-[#4C0AA0] max-lg:text-center">
                      Freelance project (Prototype)
                    </p>
                    <img
                      className="flex-auto object-contain h-[30rem]"
                      src={iphoneAgora}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-3xl shadow ring-1 ring-black/40"></div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48 mb-12">
        <p className="mx-auto my-12 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          More projects
        </p>

        <ProjectsList />
      </div>
    </div>
  );
}
