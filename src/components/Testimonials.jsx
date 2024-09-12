import React, { useState } from "react";
import profile1 from "../assets/images/Images_profile/profile_1.jpg";
import profile2 from "../assets/images/Images_profile/profile_2.jpg";
import profile3 from "../assets/images/Images_profile/profile_3.jpg";
import profile4 from "../assets/images/Images_profile/profile_4.jpg";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const reviews = [
  {
    name: "Kevyn Prada",
    position: "Client",
    comment:
      "La experiencia con esta empresa ha sido increíble. Desde el primer contacto, me impresionaron con su profesionalismo y atención al detalle. Los accesorios que ofrecen para la piscina son de la más alta calidad y han transformado por completo la forma en que disfruto mi piscina. El mantenimiento regular es impecable, y cada vez que tengo una pregunta o necesito asistencia, el equipo está siempre dispuesto a ayudar. Recomiendo encarecidamente sus servicios a cualquiera que busque no solo productos de calidad sino también un excelente servicio al cliente.",
    image: profile1,
    rating: 5,
  },
  {
    name: "Laura Méndez",
    position: "Client",
    comment:
      "No puedo estar más satisfecha con el servicio que he recibido. El mantenimiento regular que ofrecen ha mantenido mi piscina en un estado perfecto durante todo el año. Los técnicos son muy profesionales y siempre llegan a tiempo. Además, los productos que utilizan son de primera calidad. La comunicación con el equipo ha sido excelente, y me han mantenido informada en cada paso del proceso. Sin duda, recomendaría esta empresa a cualquiera que necesite servicios de mantenimiento para su piscina.",
    image: profile2,
    rating: 4,
  },
  {
    name: "Carlos López",
    position: "Client",
    comment:
      "Desde que comencé a utilizar los accesorios de esta empresa, la calidad y el disfrute de mi piscina han mejorado notablemente. La variedad de productos disponibles es impresionante y cada uno ha sido seleccionado con gran cuidado. La atención al cliente es de primera, y siempre me han ofrecido soluciones rápidas y efectivas para cualquier problema que haya surgido. La instalación fue sencilla y el mantenimiento se realiza de manera oportuna. Estoy muy contento con los resultados y recomiendo sus servicios a todos.",
    image: profile3,
    rating: 4,
  },
  {
    name: "Sofía Martínez",
    position: "Client",
    comment:
      "He estado utilizando los servicios de esta empresa durante varios años y siempre he quedado impresionada con su compromiso con la calidad. El servicio de mantenimiento es excelente, y siempre se aseguran de que todo esté en perfecto estado. Los accesorios que venden son de alta gama y realmente marcan la diferencia en la funcionalidad y el aspecto de mi piscina. El equipo es muy amable y profesional, y siempre están dispuestos a ayudar. Si buscas un servicio confiable y productos de calidad para tu piscina, esta es la empresa adecuada.",
    image: profile4,
    rating: 5,
  },
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(reviews[0]);

  const handleClick = (review) => {
    setCurrentReview(review);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center justify-center mt-2">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-xl">
            {index < rating ? (
              <AiFillStar className="text-yellow-500" />
            ) : (
              <AiOutlineStar className="text-gray-800" />
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div id="Testimonials"   className="p-8 flex flex-col gap-8 bg-blue-100 rounded-xl">
      <h1 className="text-[40px] text-center font-black">
        Reseñas De Algunos De Nuestros Clientes
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-black">
          {currentReview.comment}
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="text-center">
        {renderStars(currentReview.rating)}
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {reviews.map((review) => (
            <img
              key={review.image}
              src={review.image}
              alt={review.name}
              className={`w-10 h-10 md:w-16 md:h-16 object-cover rounded-full cursor-pointer ${
                review.image === currentReview.image ? 'ring-4 ring-primary p-1 bg-white' : ''
              }`}
              onClick={() => handleClick(review)}
            />
          ))}
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">{currentReview.name}</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            {currentReview.position}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
