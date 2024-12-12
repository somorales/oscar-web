import React from 'react'
import oscarcontact from  "../assets/imagenes/me_foto_contact.png"

export default function ContactPage() {
  return (
    <div>
    <div className="bg-[#392F5A] p-8 min-h-[400px] flex items-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
        <div className="flex-1 text-white">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl font-bold">Get in touch</h2>
          </div>
          
          <p className="text-2xl mb-8">
            Feel free to send a message,<br />
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
    </div>
  )
}

