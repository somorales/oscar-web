import React from "react";
import { useEffect, useContext } from "react";
import oscarAbout from "../assets/imagenes/me_foto_aboutme.png";
import ExperienceSection from "../componentes/ExperienceSection";
import { NavContext } from "../context/nav.context";
import oscarLogoBlanco from "../assets/imagenes/oscar-logo-blanco.png";

export default function AboutPage() {
  const cards = [
    {
      title: "I AM",
      items: [
        "A Cat and Dog lover",
        "A Gym rat",
        "A Virgo",
        "A Spicy food taster",
      ],
    },
    {
      title: "MY EXPERTISE",
      items: [
        "UX/UI Design",
        "Community Management",
        "Content and Visual Design",
        "Photography",
      ],
    },
    {
      title: "MY VALUES",
      items: ["Curiosity", "Sharp eye to detail", "Respectful", "Open minded"],
    },
  ];
  const { setBackgroundColor, setTextColor, setLogo, setBorderColor } = useContext(NavContext);

  useEffect(() => {
    setBackgroundColor("bg-[#392F5A]");
    setTextColor("text-white");
    setLogo(oscarLogoBlanco);
    setBorderColor("border-white")
  });

  return (
    <div>
      <div className="bg-[#392F5A]">
        <div className="mx-auto min-h-screen text-white py-16 max-w-container px-6 sm:px-8 lg:px-48">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            <div className="lg:w-2/3 space-y-6">
              <p className="text-2xl">Hello there! I'm Oscar</p>
              <h1 className="text-5xl font-bold mb-8">UX/UI Designer</h1>

              <p className="text-md mb-6">
                Graduated in Animation and Digital Arts from Tecnológico de
                Monterrey, México, and a Master's in User Experience Design
                (UX/UI) from ESPi, Barcelona.
              </p>

              <p className="text-md mb-6">
                Diving into UX/UI Design has opened up a whole new world of
                professional opportunities and challenges for me. It has also
                shown me just how crucial user experiences are in the tech
                industry for driving business success.
              </p>

              <p className="text-md mb-6">
                I also have a solid background in Content and Community
                Management, Digital Marketing, Design, Communications. Besides,
                I've been a photographer for over 15 years. These experiences
                have shaped me into a well-rounded professional, helping me
                develop essential skills like adaptability, teamwork, and
                applying my diverse knowledge to UX/UI Design.
              </p>

              <p className="text-md">
                Looking ahead, I'm eager to specialize in the design and
                maintenance of Design Systems. I believe it is the key to
                ensuring consistency in design and making life easier for
                designers.
              </p>
            </div>

            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <div className="rounded-3xl overflow-hidden w-full max-w-md">
                <img src={oscarAbout} alt="Profile" className="aspect-square" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white text-black p-8 rounded-3xl"
              >
                <h2 className="text-xl font-bold mb-4">{card.title}</h2>
                <ul className="">
                  {card.items.map((item) => (
                    <li key={item} className="text-md">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-2">
          <a href="mailto:oscaralan.rg@gmail.com" target="_blank" className="bg-[#392F5A] border-2 border-white rounded-3xl hover:bg-[#52B6B9]  hover:border-black hover:text-black  px-3.5 py-2.5 shadow-sm w-60 font-bold text-center">
            Let's connect
          </a>
        </div>
        </div>
      </div>

      <ExperienceSection />
    </div>
  );
}
