import React from "react";
import cat from "../assets/imagenes/cat.svg";

export default function HomePage() {
  return (
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
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Download my CV
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      ></div>
    </div>
  );
}
