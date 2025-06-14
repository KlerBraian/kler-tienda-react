import React, { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from '../context/CartContext';

export const SeguimientoPedido = () => {

  const {calculateTotal} = useContext(CartContext);

  const [inputValue, setInputValue] = useState('');
  const [foundDocument, setFoundDocument] = useState();
  const [isChecking, setIsChecking] = useState(false)


  const handleInputChange = (event) => {
    setInputValue(event.target.value);  
  };

  const verifyDocument = async () => {
    try {
      setIsChecking(true)
      const docRef = doc(db, "pedidos", inputValue); 
      const docSnap = await getDoc(docRef); 
      if (docSnap.exists()) {
        setFoundDocument(docSnap.data());
      } 
    } catch (error) {
      setFoundDocument(null)
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
      <button className='boton-verificar' onClick={verifyDocument}>Verifique estado de su compra</button>

      {foundDocument ? (
        <>
          <p>Su pedido {inputValue} está: <span className='estado'>{foundDocument.status}</span>🐱.</p>
          {foundDocument.products.map(product => (
            <div key={product.id} className="producto-carrito">
              <div className='carrito-izquierda'>
                <h3 className='producto-carrito-nombre'>{product.nombre}</h3>
                <p className='producto-carrito-cantidad'>Cantidad: {product.quantity}</p>
                <p className='producto-carrito-precio'>Precio: ${product.precio}</p>
                <p className='producto-carrito-subtotal'>Subtotal: ${(product.precio * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h3 className='carrito-total'>Total: ${calculateTotal()}</h3>
        </>
      )  : isChecking ? <p className='message-seguimiento'>Identificador invalido</p> :
      <p></p>
     }
    </div>
  );
};