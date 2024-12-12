import React from 'react'
import oscarAbout from  "../assets/imagenes/me_foto_aboutme.png"
import ExperienceSection from '../componentes/ExperienceSection';


export default function AboutPage() {


  const cards = [
    {
      title: "I AM",
      items: [
        "A Cat and Dog lover",
        "A Gym rat",
        "A Virgo",
        "A Spicy food taster"
      ]
    },
    {
      title: "MY EXPERTISE",
      items: [
        "UX/UI Design",
        "Community Management",
        "Content and Visual Design",
        "Photography"
      ]
    },
    {
      title: "MY VALUES",
      items: [
        "Curiosity",
        "Sharp eye to detail",
        "Respectful",
        "Open minded"
      ]
    }
  ];

  return (
    <div>

         <div className="bg-[#392F5A]">

      <div className="max-w-7xl mx-auto min-h-screen text-white py-16 px-8">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          
          <div className="lg:w-1/2 space-y-6">
            <p className="text-2xl">Hello there! I'm Oscar</p>
            <h1 className="text-5xl font-bold mb-8">UX/UI Designer</h1>
            
            <p className="text-lg mb-6">
              Graduated in Animation and Digital Arts from Tecnológico de Monterrey, México, and a
              Master's in User Experience Design (UX/UI) from ESPi, Barcelona.
            </p>
            
            <p className="text-lg mb-6">
              Diving into UX/UI Design has opened up a whole new world of professional opportunities and
              challenges for me. It has also shown me just how crucial user experiences are in the tech
              industry for driving business success.
            </p>
            
            <p className="text-lg mb-6">
              I also have a solid background in Content and Community Management, Digital Marketing,
              Design, Communications. Besides, I've been a photographer for over 15 years. These
              experiences have shaped me into a well-rounded professional, helping me develop essential
              skills like adaptability, teamwork, and applying my diverse knowledge to UX/UI Design.
            </p>
            
            <p className="text-lg">
              Looking ahead, I'm eager to specialize in the design and maintenance of Design Systems.
              I believe it is the key to ensuring consistency in design and making life easier for designers.
            </p>
          </div>

         
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden w-full max-w-md">
              <img
                src= {oscarAbout}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

       
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-white text-black p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6">{card.title}</h2>
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="text-lg">{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let´s connect
              </a>
            </div>
        </div>
      </div>
       </div>
      <div>
      <ExperienceSection />
      </div>
     
      </div>
    
  );
};


 

