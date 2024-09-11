import React, { useState } from "react";
import logo from "../assets/images/images/Logo.png";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClose = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');

    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setTimeout(() => {
      setShowMenu(false);
    }, 500);
  };

  return (
    <header className="relative w-full h-[15vh] z-50 bg-white bg-white">
      <div className="absolute inset-0 bg-white" />
      <div className="flex items-center justify-between xl:justify-start w-full p-4 h-full relative">
        <div className="w-1/6 text-center">
          <img src={logo} alt="Logo" className="w-30 h-20 relative p-1 ml-5" />
        </div>
        <nav
          className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
            showMenu ? "left-0" : "-left-full"
          } top-0 lg:static flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 transition-all duration-500`}
        >
          <a
            href="#Pools"
            className="text-sky-950 px-2 py-4 rounded no-underline hover:bg-sky-900 transition-colors duration-300 text-xl"
            onClick={handleMenuClose}
          >
            Piscinas
          </a>
          <a
            href="#Services"
            className="text-sky-950 px-2 py-4 rounded no-underline hover:bg-sky-900 transition-colors duration-300 text-xl"
            onClick={handleMenuClose}
          >
            Servicios
          </a>
          <a
            href="#Testimonials"
            className="text-sky-950 px-2 py-4 rounded no-underline hover:bg-sky-900 transition-colors duration-300 text-xl"
            onClick={handleMenuClose}
          >
            Testimonios
          </a>
          <a
            href="#Contact"
            className="text-sky-950 px-2 py-4 rounded no-underline hover:bg-sky-900 transition-colors duration-300 text-xl"
            onClick={handleMenuClose}
          >
            Contacto
          </a>
        </nav>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className=" text-white lg:hidden text-2xl p-2"
        >
          {showMenu ? <IoClose /> : <IoMenuSharp />}
        </button>
      </div>
    </header>
  );
};

export default Header;
