import React from "react";
import oscarLogo from "../assets/imagenes/oscar-logo.png";
import linkedinIcon from "../assets/imagenes/ln-icon.png";
import beIcon from "../assets/imagenes/be-icon.png";
import emailIcon from "../assets/imagenes/correo-icon.png";
import igIcon from "../assets/imagenes/ig-icon.png";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/oscaralan/",
      alt: "LinkedIn Profile",
      icon: linkedinIcon,
    },
    { name: "Behance", href: "https://www.behance.net/OscarAlan", alt: "Behance Portfolio", icon: beIcon },
    { name: "Email", href: "mailto:oscaralan.rg@gmail.com", alt: "Email Contact", icon: emailIcon },
    { name: "Instagram", href: "https://www.instagram.com/oskshootin/?igsh=ZXQxM2F4M25rMnlh#", alt: "Instagram Profile", icon: igIcon },
  ];

  return (
    <footer className="bg-[#FFF8F0] w-full py-32 px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-start">
        {/* Logo Section - Left */}
        <div className="flex-shrink-0">
          <img src={oscarLogo} alt="Oscar Logo" className="h-20" />
        </div>

        {/* Content Section - Right */}
        <div className="flex flex-col items-end text-right">
          <h2 className="text-4xl font-bold mb-2">Let's chat!</h2>
          <p className="text-lg mb-4">
            Have a question, a project idea, or just want to say hi?
            <br />
            I'd love to hear from you! Send me a message
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 items-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                className="block"
                aria-label={link.name}
              >
                <img
                  src={link.icon}
                  alt={link.alt}
                  className="w-auto h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
