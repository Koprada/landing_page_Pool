import React, { useState } from "react";
import logo from "../assets/images/images/Logo.png";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full p-4 h-[15vh] z-50">
      <div className="w-1/6 text-center">
        <img src={logo} alt="Logo" className="w-30 h-20 relative p-1 ml-5" />
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 lg:static flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 transition-all duration-500`}
      >
        <a
          href="/"
          className="px-2 py-4 rounded no-underline hover:bg-indigo-200 transition-colors duration-300 text-xl"
        >
          Inicio
        </a>
        <a
          href="#piscinas"
          className="px-2 py-4 rounded no-underline hover:bg-indigo-200 transition-colors duration-300 text-xl"
        >
          Piscinas
        </a>
        <a
          href="/"
          className="px-2 py-4 rounded no-underline hover:bg-indigo-200 transition-colors duration-300 text-xl"
        >
          Servicios
        </a>
        <a
          href="/"
          className="px-2 py-4 rounded no-underline hover:bg-indigo-200 transition-colors duration-300 text-xl"
        >
          Testimonios
        </a>
        <a
          href="/"
          className="px-2 py-4 rounded no-underline hover:bg-indigo-200 transition-colors duration-300 text-xl"
        >
          Contacto
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden text-2xl p-2"
      >
        {showMenu ? <IoClose /> : <IoMenuSharp />}
      </button>
    </header>
  );
};

export default Header;
