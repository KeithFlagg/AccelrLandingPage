"use client";

import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  let links = [
    { name: "How it Works", link: "/" },
    { name: "Benefits", link: "/" },
    { name: "Previous Works", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "FAQ", link: "/" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="navbar shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Logo Here */}
        <div>
          <img className="h-8" src="accelrLogo.png" />
        </div>

        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static navbar md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {links.map((link, index) => (
            <li className="hvr-grow font-regular my-7 md:my-0 md:ml-8" key={index}>
              <a key={index} href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
          <button className="navbar-btn text-white py-1 px-3 md:ml-8 md:static">
            Book a Call
          </button>
        </ul>
      </div>
    </div>
  );
};
