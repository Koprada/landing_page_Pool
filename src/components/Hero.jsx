import React from "react";
import videoHero from "../assets/images/images/HeroVideo1.mp4";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen w-full grid grid-cols-1 md:grid-cols-8 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-[-1]">
        <video
          src={videoHero}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:col-span-10 flex items-center justify-center p-10 relative ">
        <div>
          <h1 className="text-4xl md:text-8xl font-bold text-center text-indigo-50">
            El Arte De Crear{" "}
            <span className="text-indigo-200"> Espacios Acuáticos </span> Únicos
          </h1>
          <p className="text-center text-gray-100 mt-6 md:mt-10">
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
            <a
              href="/#Contact"
              className="bg-indigo-950 no-underline text-indigo-100 px-8 py-3 rounded-xl hover:bg-indigo-200 hover:text-indigo-950 transition-colors duration-300"
            >
              Contáctenos
            </a>

            <a
              href="#Pools"
              className="ml-4 no-underline text-indigo-100 px-8 py-3 rounded-xl border border-indigo-950 hover:bg-indigo-950 hover:text-indigo-100 transition-colors duration-300"
            >
              Nuestras Piscinas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
