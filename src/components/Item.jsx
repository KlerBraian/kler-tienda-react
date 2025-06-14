import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ( {product} ) => {

  const {addToCart, addToWishlist} = useContext(CartContext);

  return (
    <div className="product">
      <div className='img-container'>
      <img className='product-img' src={product.imagen} />
      </div>
    
      <h2 className='product-tittle'>{product.nombre}</h2>
      <p className='product-price'>${product.precio}</p>
      <p className='product-description'>{product.descripcion}</p>
      <Link to={`/item/${product.id}`} className='product-info'>Ver más detalles</Link>
      <button onClick={() => addToCart(product)} className='button-add'>Agregar al carrito</button>
      <button onClick={() => addToWishlist(product)} className='button-add wish'>Agregar a Deseos</button>
    </div>
  )
}