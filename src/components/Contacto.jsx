import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { nombre, value } = e.target;
    setFormData({
      ...formData,
      [nombre]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Aquí puedes añadir la lógica para enviar los datos a tu servidor
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2 className='contacto-titulo'>Contacto</h2>
      <div className='espacios-div'>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          nombre="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className='espacios-div'>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          nombre="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='espacios-div'>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          nombre="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
