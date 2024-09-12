import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .send(
        'service_z1r12do', // ID del servicio
        'template_pjthcz5', // ID de la plantilla
        formData,           // Datos del formulario
        'cXZ8_vlsvyH4TCZdK'      //  User ID de EmailJS
      )
      .then(
        (response) => {
          alert('Mensaje enviado con éxito');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Hubo un error al enviar el mensaje');
        }
      );
  };

  return (
    <section id="Contact" className=" p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-950">No Dudes En Contactarnos</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-950 text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
