import React from "react";
import logo from "../assets/images/images/Logo.png";
// Icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-cyan-950 p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        <div className=" md:w-1/6 text-center">
          <img src={logo} alt="Logo" className="w-30 h-20 relative p-1 ml-5" />
        </div>
        <nav className="flex items-center gap-4">
          <a href="/" className="block text-white p-4 bg-cyan-700 rounded-full">
            <RiInstagramLine />
          </a>
          <a href="/" className="block text-white p-4 bg-cyan-700 rounded-full">
            <RiFacebookLine />
          </a>
          <a href="/" className="block text-white p-4 bg-cyan-700 rounded-full">
            <RiTwitterLine />
          </a>
          <a href="/" className="block text-white p-4 bg-cyan-700 rounded-full">
            <RiGithubLine />
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Company
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#Hero"
            className="text-gray-300 mt-4 hover:text-white transition-colors bg-transparent"
          >
            Inicio
          </a>
          <a
            href="#Piscinas"
            className="text-gray-300 mt-4 hover:text-white transition-colors bg-transparent"
          >
            Piscinas
          </a>
          <a
            href="#Services"
            className="text-gray-300 mt-4 hover:text-white transition-colors bg-transparent"
          >
            Servicios
          </a>
          <a
            href="#Testimonials"
            className="text-gray-300 mt-4 hover:text-white transition-colors bg-transparent"
          >
            Testimonios
          </a>
          <a
            href="#terms"
            className="text-gray-300 mt-4 hover:text-white transition-colors bg-transparent"
          >
            Términos de uso
          </a>
          <a
            href="#privacy"
            className="text-gray-300 mt-4 hover:text-white transition-colors bg-transparent"
          >
            Políticas de privacidad
          </a>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © Kevyn Prada 2024 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
