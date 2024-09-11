import React from "react";
import imageHero from "../assets/images/images/poolTechnik.jpg";
import backgroundImage from "../assets/images/images/ocean-1845110.jpg";

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full grid grid-cols-1 md:grid-cols-8  backdrop-blur-md"
    >
      
      <div className="md:col-span-5 flex items-center justify-center p-10">
        <div>
          <h1 className="text-4xl md:text-8xl font-bold text-center text-indigo-950">
            El Arte De Crear{" "}
            <span className="text-indigo-400"> Espacios Acuáticos </span> Únicos
          </h1>
          <p className="text-center text-gray-500 mt-6 md:mt-10">
            "Descubre la fusión perfecta entre arte y funcionalidad con nuestro
            enfoque innovador en el diseño de piscinas. En Tree-a, transformamos
            tu visión en una obra maestra acuática, combinando creatividad y
            técnica para crear espacios únicos que reflejan tu estilo personal.
            Desde elegantes formas hasta detalles impresionantes, cada proyecto
            es una manifestación de nuestra pasión por el diseño y nuestro
            compromiso con la excelencia. Vive la experiencia de tener una
            piscina que no solo embellece tu entorno, sino que también ofrece
            una experiencia inigualable."
          </p>
          <div className="text-center mt-6 md:mt-10 flex justify-center">
            <button className="bg-indigo-950 text-indigo-100 px-8 py-3 rounded-xl hover:bg-indigo-200 hover:text-indigo-950 transition-colors duration-300">
              Contáctenos
            </button>
            <a
              href="/#servicios"
              className="ml-4 no-underline text-indigo-950 px-8 py-3 rounded-xl border border-indigo-950 hover:bg-indigo-950 hover:text-indigo-100 transition-colors duration-300"
            >
              Nuestras Piscinas
            </a>
          </div>
        </div>
      </div>

      <div className="md:col-span-3 ml-6 mr-6 mt-4 mb-4">
        <img src={imageHero} alt="Hero" className="w-full rounded-xl" />
      </div>
    </section>
  );
};

export default Hero;
