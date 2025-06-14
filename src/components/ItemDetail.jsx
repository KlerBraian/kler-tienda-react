import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { FaCat } from "react-icons/fa";

export const ItemDetail = ( { product } ) => {

    const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <div className='contenedor-individual'>
    <div className="producto-detalle-individual">
        <h1 className='producto-titulo-individual'>{product.nombre}</h1>
        <img className='producto-img-individual' src={product.imagen} />
        <p className='producto-descripcion-individual'>{product.descripcion}</p>
        <p className='producto-precio-individual'>${product.precio}</p>
        <button onClick={() => addToCart(product)} className='boton-agregar-individual'>Agregar al carrito</button>
        <button onClick={() => addToWishlist(product)} className='boton-agregar-wish'>Agregar a Deseos</button>
    </div>
</div>
  )
}