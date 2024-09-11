import React from "react";
import diseño from "../assets/images/Images_services/diseño_piscina.png";
import construccion from "../assets/images/Images_services/construccion.jpg";
import mantenimiento from "../assets/images/Images_services/mantenimiento.jpg";
import remodelaciones from "../assets/images/Images_services/remodelacion.jpg";
import accesorios from "../assets/images/Images_services/accesorios.jpg";
import tratamiento from "../assets/images/Images_services/tratamiento.jpg";

const services = [
  {
    title: "Diseño Personalizado",
    description:
      "Creamos diseños personalizados que se adaptan a tus necesidades y gustos, brindando la mejor experiencia visual y funcional.",
    image: diseño, 
  },
  {
    title: "Construcción de Piscinas",
    description:
      "Construimos piscinas de alta calidad utilizando los mejores materiales y tecnología de vanguardia.",
    image: construccion,
  },
  {
    title: "Mantenimiento de Piscinas",
    description:
      "Ofrecemos servicios de mantenimiento para que tu piscina siempre luzca impecable y en perfecto estado.",
    image: mantenimiento,
  },
  {
    title: "Remodelaciones",
    description:
      "Transformamos tu piscina existente con renovaciones modernas, mejorando tanto su funcionalidad como su estética.",
    image: remodelaciones,
  },
  {
    title: "Accesorios para Piscinas",
    description:
      "Suministramos y montamos una amplia gama de accesorios como cubiertas, luces, y sistemas de filtrado para mejorar tu piscina.",
    image: accesorios,
  },
  {
    title: "Tratamiento de Agua",
    description:
      "Aplicamos los tratamientos químicos necesarios para mantener el agua de tu piscina limpia y cristalina.",
    image: tratamiento,
  },
];

const Services = () => {
  return (
    <div id="Services" className="bg-blue-50 py-12 px-4">
      <h2 className="text-4xl md:text-7xl font-bold text-center text-indigo-950 leading-normal mb-10">
        Te Presentamos Algunos De Nuestros <span className="text-indigo-400"> Servicios </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-10 mr-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2 text-indigo-950">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
