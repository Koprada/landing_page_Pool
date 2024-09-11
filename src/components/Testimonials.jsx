import React from 'react';
import { FaStar } from 'react-icons/fa';
import profile1 from '../assets/images/Images_profile/profile_1.jpg';
import profile2 from '../assets/images/Images_profile/profile_2.jpg';
import profile3 from '../assets/images/Images_profile/profile_3.jpg';
import profile4 from '../assets/images/Images_profile/profile_4.jpg';

const testimonials = [
  {
    name: "Ana López",
    image: profile2,
    comment: "¡Una experiencia increíble! La renovación de mi piscina superó todas mis expectativas. El equipo fue profesional y atento a cada detalle.",
    rating: 5,
  },
  {
    name: "Carlos Martínez",
    image: profile1,
    comment: "El diseño de mi nueva piscina es espectacular. La atención y el servicio fueron excepcionales desde el primer contacto hasta la entrega final.",
    rating: 4,
  },
  {
    name: "María González",
    image: profile3,
    comment: "Muy contenta con el mantenimiento regular que ofrecen. Mi piscina siempre está en perfectas condiciones gracias a su excelente trabajo.",
    rating: 4,
  },
  {
    name: "Kevyn Prada",
    image: profile4,
    comment: "Estoy impresionado con la variedad y calidad de los accesorios para piscinas que ofrecen. Los equipos que instalé han transformado mi piscina.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-950 mb-8">Lo Que Dicen Nuestros Clientes</h2>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full xl:w-1/4 md:w-1/2 px-4 mb-8 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mr-4 object-cover" />
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-950">{testimonial.name}</h3>
                    <div className="flex text-yellow-500 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-center">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
