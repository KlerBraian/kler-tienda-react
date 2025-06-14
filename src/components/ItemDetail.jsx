import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { FaCat } from "react-icons/fa";


//Este componente muestra un renderizado individual de cada producto con sus detalles y opciones de agregar al carrito/wishlist.

export const ItemDetail = ( { product } ) => {

    const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <div className='container-individual'>
    <div className="product-detail-individual">
        <h1 className='product-tittle-individual'>{product.nombre}</h1>
        <img className='product-img-individual' src={product.imagen} />
        <p className='product-description-individual'>{product.descripcion}</p>
        <p className='product-price-individual'>${product.precio}</p>
        <button onClick={() => addToCart(product)} className='button-add-individual'>Agregar al carrito</button>
        <button onClick={() => addToWishlist(product)} className='button-add-wish'>Agregar a Deseos</button>
    </div>
</div>
  )
}