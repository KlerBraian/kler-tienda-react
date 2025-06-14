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
    <div className='container-follow'>
      <input className='input-status'
        placeholder='Ingrese un identificador'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='button-verify' onClick={verifyDocument}>Verifique estado de su compra</button>

      {foundDocument ? (
        <>
          <p>Su pedido {inputValue} está: <span className='status'>{foundDocument.status}</span>🐱.</p>
          {foundDocument.products.map(product => (
            <div key={product.id} className="product-cart">
              <div className='cart-left'>
                <h3 className='product-cart-name'>{product.nombre}</h3>
                <p className='product-cart-quantity'>Cantidad: {product.quantity}</p>
                <p className='product-cart-price'>Precio: ${product.precio}</p>
                <p className='product-cart-subtotal'>Subtotal: ${(product.precio * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h3 className='cart-total'>Total: ${calculateTotal()}</h3>
        </>
      )  : isChecking ? <p className='message-follow'>Identificador invalido</p> :
      <p></p>
     }
    </div>
  );
};