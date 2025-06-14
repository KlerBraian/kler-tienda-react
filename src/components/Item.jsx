import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ( {product} ) => {

  const {addToCart, addToWishlist} = useContext(CartContext);

  return (
    <div className="producto">
      <div className='img-container'>
      <img className='producto-img' src={product.imagen} />
      </div>
    
      <h2 className='producto-titulo'>{product.nombre}</h2>
      <p className='producto-precio'>${product.precio}</p>
      <p className='producto-descripcion'>{product.descripcion}</p>
      <Link to={`/item/${product.id}`} className='producto-info'>Ver más detalles</Link>
      <button onClick={() => addToCart(product)} className='boton-agregar'>Agregar al carrito</button>
      <button onClick={() => addToWishlist(product)} className='boton-agregar wish'>Agregar a Deseos</button>
    </div>
  )
}