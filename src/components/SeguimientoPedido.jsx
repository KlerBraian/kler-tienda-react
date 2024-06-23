import React, { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from '../context/CartContext';

export const SeguimientoPedido = () => {

  const { carrito, calcularTotal} = useContext(CartContext);

  const [inputValue, setInputValue] = useState('');
  const [documentoEncontrado, setDocumentoEncontrado] = useState();


  const handleInputChange = (event) => {
    setInputValue(event.target.value);  
  };

  const verificarDocumento = async () => {
    try {
      const docRef = doc(db, "pedidos", inputValue); 
      const docSnap = await getDoc(docRef); 
      if (docSnap.exists()) {
        setDocumentoEncontrado(docSnap.data());
      } 
    } catch (error) {
      setDocumentoEncontrado(null)
    }
  };

  return (
    <div className='container-seguimiento'>
      <input className='input-estado'
        placeholder='Ingrese un identificador'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='boton-verificar' onClick={verificarDocumento}>Verifique estado de su compra</button>

      {documentoEncontrado ? (
        <>
          <p>Su pedido {inputValue} está: <span className='estado'>{documentoEncontrado.estado}</span>🐱.</p>
          {documentoEncontrado.productos.map(producto => (
            <div key={producto.id} className="producto-carrito">
              <div className='carrito-izquierda'>
                <h3 className='producto-carrito-nombre'>{producto.nombre}</h3>
                <p className='producto-carrito-cantidad'>Cantidad: {producto.cantidad}</p>
                <p className='producto-carrito-precio'>Precio: ${producto.precio}</p>
                <p className='producto-carrito-subtotal'>Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h3 className='carrito-total'>Total: ${calcularTotal()}</h3>
        </>
      )  : <p>Identificador invalido</p>
     }
    </div>
  );
};