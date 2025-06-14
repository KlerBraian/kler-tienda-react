import React, { useState } from 'react';


//Este componente crea y renderiza el formulario de contacto. Por el momento no se conecta con la base de datos para crear la consulta del formulario.
//Falta agregar funcionalidad de envio de formulario.

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
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
    console.log('Form data submitted:', formData);
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
    <h2 className='contact-tittle'>Contacto</h2>
      <div className='space-div'>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          nombre="nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='space-div'>
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
      <div className='space-div'>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          nombre="mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
